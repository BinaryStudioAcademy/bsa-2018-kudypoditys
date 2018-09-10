import React, { Fragment } from "react";
import { connect } from "react-redux";

import history from 'client/history';
import { mapStateToProps, mapDispatchToProps } from "./container";
import LoginForm from "./loginForm";
import { Message, Grid, Container, Header } from "semantic-ui-react";

export class LoginComponent extends React.Component {
    handleForgotClicked = () => {
        history.push('/forgotpassword');
    };

    handleRegisterClicked = () => {
        history.push('/signup');
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
                <LoginForm
                    onSubmit={this.props.handleLoginSubmit}
                    handleForgotClicked={this.handleForgotClicked}
                    handleRegisterClicked={this.handleRegisterClicked}
                />

                {this.props.error ? (
                    <Grid centered columns={5} style={{ marginTop: '10px' }}>
                        <Message floating negative>
                            <Message.Header>Error</Message.Header>
                            <div style={{ margin: "10px" }}>
                                {this.props.error}
                            </div>
                        </Message>
                    </Grid>
                ) : null}
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);
