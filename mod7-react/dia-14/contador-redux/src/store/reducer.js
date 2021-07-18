import { INCREMENT_ACTION, SET_COUNTER, DECREMENT_ACTION } from './actions';

const initialState = {
    counter: 0,
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_ACTION:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREMENT_ACTION:
            return {
                ...state,
                counter: state.counter - 1,
            };

        case SET_COUNTER:
            return {
                ...state,
                counter: action.payload,
            };

        default:
            return state;
    }
}

export default counterReducer;
