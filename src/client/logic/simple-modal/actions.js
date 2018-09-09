import { SHOW_MODAL, CLOSE_MODAL } from './actionTypes';

export const modalShow = (payload) => ({
  type: SHOW_MODAL,
  payload
});

export const modalClose = () => {
  console.log('modal close!!!')

  return {
    type: CLOSE_MODAL
  };

}

