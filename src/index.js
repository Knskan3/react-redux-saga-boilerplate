import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store/configureStore';
import App from './containers/';

const renderApp = (Component) => (
  render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('boilerplate-root'),
  )
);

renderApp(App);

if (module.hot) {
  module.hot.accept('./components/exampleComponent/', () => {
    const NewApp = require('./components/exampleComponent/').default; //eslint-disable-line
    renderApp(NewApp);
  });
}
