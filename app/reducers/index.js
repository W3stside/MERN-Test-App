import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

/** EXAMPLE REDUCER:
const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};
*/


const rootReducer = combineReducers({
    routing
});

export default rootReducer;
