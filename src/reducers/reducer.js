import { fromJS } from 'immutable';
import { ACTION_EXAMPLE_PUT } from '../constants';

/**
 * Default App state, used at start
 * @type {Object}
 */
const defaultState = fromJS({
    title: 'Waaaait...',
    show: false
});

/**
 * Root reducer, processes all the actions focusing on those available in its aciton handlers stack.
 *
 * @param {Object} state Current app state
 * @param {Object} action Action trigger aiming to change the state.
 *
 * @returns {Object} New App state
 */
export default function(state = defaultState, action) {
    const actions = {
        [ACTION_EXAMPLE_PUT]: () => state.set('show', action.show)
        // Add more action handlers here
    };

    return actions[action.type] ? actions[action.type]() : state;
}
