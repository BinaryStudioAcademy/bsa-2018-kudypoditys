import defaultState from 'client/logic/defaultState';
import {
  SHOW_MODAL,
  CLOSE_MODAL
} from './actionTypes';

function simpleModalReducer(state = defaultState.simpleModal, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...action.payload,
        open: true
      };

    case CLOSE_MODAL:
      // console.log('modal close!!! reducer')
      return {
        open: false
      };


    default:
      return state;
  }
}

export default simpleModalReducer;