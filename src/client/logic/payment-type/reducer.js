import defaultState from 'client/logic/defaultState';
import {
  GET_PAYMENT_TYPES,
  GET_PAYMENT_TYPES_FAILED,
  GET_PAYMENT_TYPES_SUCCESS
} from './actionTypes';

function paymentTypesReducer(state = defaultState.paymentTypes, action) {
  switch (action.type) {
    case GET_PAYMENT_TYPES:
      return {
        ...state,
        isLoading: true
      };
    case GET_PAYMENT_TYPES_SUCCESS:
      return {
        paymentTypes: action.payload,
        isLoading: false
      };
    case GET_PAYMENT_TYPES_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        paymentTypes: []
      };
    default:
      return state;
  }
}

export default paymentTypesReducer;