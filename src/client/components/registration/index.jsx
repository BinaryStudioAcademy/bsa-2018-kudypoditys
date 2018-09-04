import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Container, Header, Divider } from "semantic-ui-react";
import "client/components/registration/index.scss";

import Registrationform from "./form";
import history from "client/history";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

export class Registration extends Component {
    handleLoginClicked = () => {
        history.push("/login");
    };

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
                    handleLoginClicked={this.handleLoginClicked}
                />

                <Divider hidden />
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);
