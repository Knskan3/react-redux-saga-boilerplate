import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Title } from './styles';

/**
 * Describes the exampleComponent React component
 */
class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.props.actionExampleRequest();
  }

  render() {
    return (<Wrapper>
      <Title className="title">{this.props.title}</Title>
      {
        this.props.show &&
        <p>You can see me now!</p>
      }
    </Wrapper>);
  }
}

/**
 * Props type validation for this component.
 *
 * @type {{jackpotValue: string}}
 */
ExampleComponent.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
  actionExampleRequest: PropTypes.func,
};

export default ExampleComponent;
