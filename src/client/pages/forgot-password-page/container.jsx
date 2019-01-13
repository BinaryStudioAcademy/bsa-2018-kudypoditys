import { emailResetPasswordSend } from '../../logic/forgot-password/actions';

export function mapStateToProps(state, ownProps) {
  return {
    ...state.forgotPassword
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    sendResetPasswordEmail(email) {
      dispatch(emailResetPasswordSend({ email }));
    }
  };
}
