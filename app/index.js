import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './configureStore';
import { ExampleComponent } from '../src/';

const renderApp = Component =>
    render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('boilerplate-root')
    );

renderApp(ExampleComponent);

