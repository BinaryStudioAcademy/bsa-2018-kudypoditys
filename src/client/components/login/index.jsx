import React, { Fragment } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import LoginForm from "./loginForm";
import { Message, Grid } from "semantic-ui-react";

export class LoginComponent extends React.Component {
    handleForgotClicked = () => {
        console.log("Forgot clicked");
    };

    handleRegisterClicked = () => {
        console.log("Register clicked");
    };

    render() {
        return (
            <Fragment>
                <LoginForm
                    onSubmit={this.props.handleLoginSubmit}
                    handleForgotClicked={this.handleForgotClicked}
                    handleRegisterClicked={this.handleRegisterClicked}
                />

                {this.props.error ? (
                    <Grid centered columns={5}>
                        <Message floating negative>
                            <Message.Header>Error</Message.Header>
                            <div style={{ margin: "10px" }}>
                                {this.props.error}
                            </div>
                        </Message>
                    </Grid>
                ) : null}
            </Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);
