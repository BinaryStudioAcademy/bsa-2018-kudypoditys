import {registerSubmit} from 'client/logic/registration/actions';

export function mapStateToProps({form}) {
    const {registration} = form;
    return {
        ...registration
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        handleRegistrationSubmit(userData) {
            dispatch(registerSubmit(userData));
        }
    };
}