import { loginSubmit } from 'client/logic/login-component/actions';

export function mapStateToProps(state, ownProps) {
    const { login } = state;
    console.log(login);
    console.log('////////////////////////');
    return {
        ...login
    }
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        loginClicked(userData) {
            dispatch(loginSubmit(userData));
        }
    };
}