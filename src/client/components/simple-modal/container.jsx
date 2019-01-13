import { modalClose } from "../../logic/simple-modal/actions";

export function mapStateToProps(state) {
  const { simpleModal } = state;
  return { ...simpleModal };
}

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    closeModal() {
      dispatch(modalClose())
    }
  };
}
