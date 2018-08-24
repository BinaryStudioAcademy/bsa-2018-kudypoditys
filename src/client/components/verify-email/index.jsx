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

    componentDidUpdate(){
        if(this.props.verified) {
            setTimeout(() => {
                console.log("redirecting");
                history.push("/?verified");
            }, 8000);
        } else {
            console.log("not redirecting");
        }
    }

    render() {
        console.log("PROPS:", this.props.verified);
        return (
            <div>
                {
                    this.props.verified ? (
                        <p>Email verified! Redirecting ...</p>
                    )
                        :
                        (
                            <p>Verificating email...</p>
                        )
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);