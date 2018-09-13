import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import history from "client/history";

export class VerifyEmail extends Component {
    handleVerifySend = () => {
        this.props.sendVerificationData();
    };

    componentDidMount() {
        this.handleVerifySend();
    }

    componentDidUpdate() {
        if (this.props.verified) {
            setTimeout(() => {
                history.push("/?verified");
            }, 1000);
        } else {
            console.log("not redirecting");
        }
    }

    render() {
        return (
            <div>
                {this.props.verified ? (
                    <p>Email verified! Redirecting ...</p>
                ) : (
                    <p>Verificating email...</p>
                )}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VerifyEmail);
