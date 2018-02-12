import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExampleComponent from '../components/exampleComponent/';
import { selector } from '../selectors';
import { actionExampleRequest } from '../actions';

/**
 * Injects the needed state values into the component as props.
 * We are using selectors from reselect to memoize and improve performance
 * This will also allow us to access state easily form sagas.
 *
 * @param {Object} state Cureent app state
 */
const mapStateToProps = state => {
    const selectedState = selector(state);

    return {
        title: selectedState.title,
        show: selectedState.show
    };
};

/**
 * Injects actions into the component class props
 *
 * @param {Function} dispatch Action dispatcher
 * @returns {Function} dispatchProps
 */
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            actionExampleRequest
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
