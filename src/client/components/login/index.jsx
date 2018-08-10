import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from "./container";
import LoginForm from './loginForm';

export class LoginComponent extends React.Component {

    handleForgotClicked = () => {
        console.log('Forgot clicked');
    }

    handleRegisterClicked = () => {
        console.log('Register clicked');
    }

    render() {
        return (
            <LoginForm
                onSubmit={this.props.handleLoginSubmit}
                handleForgotClicked={this.handleForgotClicked}
                handleRegisterClicked={this.handleRegisterClicked}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);