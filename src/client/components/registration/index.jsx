import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import "../registration/index.scss";

import Registrationform from "./form";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

export class Registration extends Component {
    render() {
        return (
            <Container text className="registration-c-wrapper">
                <Header
                    textAlign="center"
                    style={{
                        cursor: "default",
                        color: "white",
                        fontSize: "26px"
                    }}
                >
                    Sign up
                </Header>
                <Registrationform
                    registerFeedback={this.props.registerFeedback}
                    onSubmit={this.props.handleRegistrationSubmit}
                />
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);
