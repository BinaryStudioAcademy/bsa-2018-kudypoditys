import { passwordReset, urlQuerySave } from "../../logic/reset-password/actions";

export function mapStateToProps(state, ownProps) {
  return {
    ...state.resetPassword
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    resetPassword(email, token, newPassword) {
      dispatch(passwordReset({
        email, token, newPassword
      }));
    },
    saveUrlQuery(email, token) {
      dispatch(urlQuerySave({
        email, token
      }));
    }
  };
}
