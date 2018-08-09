import { registerUpdate, registerSubmit } from 'client/logic/registration/actions';

export function mapStateToProps(state, ownProps) {
    const { registration } = state;
    return {
        ...registration
    }
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleUpdate(data) {
            dispatch(registerUpdate(data));
        },
        handleSubmit(userData) {
            dispatch(registerSubmit(userData));
        }
    };
}