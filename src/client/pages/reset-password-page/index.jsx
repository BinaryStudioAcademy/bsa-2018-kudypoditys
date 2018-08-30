import React from "react";
import ResetPassword from 'client/components/reset-password';

export default class ResetPasswordPage extends React.Component {
    render() {
        return <ResetPassword token={this.props.match.params.token} />;
    }
}


