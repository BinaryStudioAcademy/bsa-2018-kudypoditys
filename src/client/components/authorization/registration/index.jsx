import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import RegistrationForm from "./form";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

import "./index.scss";

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
                <RegistrationForm
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
