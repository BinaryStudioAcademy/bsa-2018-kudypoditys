import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import qs from "query-string";
import history from "../../history";
import MessageBox from "../../components/message-box";
import ResetPasswordForm from "../../components/reset-password-form";
import Header from "../../components/header";
import { mapStateToProps, mapDispatchToProps } from "./container";

export class ResetPasswordPage extends Component {

    componentDidMount() {
        const { email, token } = qs.parse(history.location.search);
        if (!email || !token) {
            return history.goBack();
        }
        this.props.saveUrlQuery(email, token);
    }

    onFormSubmit = (data) => {
        const { email, token } = this.props;
        const { password: newPassword } = data;

        this.props.resetPassword(email, token, newPassword);
    }

    componentDidUpdate() {
        const { passwordReseted } = this.props;

        if (passwordReseted) {
            history.push('/');
        }
    }

    render() {
        const { error, isLoading } = this.props;

        return (
            <Fragment>
                <div
                    style={{
                        height: "100vh",
                        backgroundSize: "cover",
                        backgroundImage:
                            'url("https://s3.eu-central-1.amazonaws.com/kudypoditys/img/application/background.jpg")'
                    }}
                >
                    <Header hideSignUpIn noBackground />
                    <ResetPasswordForm loading={isLoading} onSubmit={this.onFormSubmit} />
                    {!error ||
                        <Grid centered columns={3} style={{ marginTop: '10px' }}>
                            <Grid.Column textAlign="center">
                                <MessageBox error={true} headerText={'Ooops'} bodyText={error} />
                            </Grid.Column>
                        </Grid>
                    }
                </div>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage);
