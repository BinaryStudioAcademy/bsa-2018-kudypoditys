import {
    REGISTER_SUCCESS
} from './actionTypes';

export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS: {
            return {
                ...state,
                registerSuccessMessage: 'Registration success!'
            }
        }
        default: {
            return state;
        }
    }
}