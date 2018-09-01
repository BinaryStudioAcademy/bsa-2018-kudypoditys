import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import qs from 'query-string';

import history from 'client/history';
import MessageBox from 'client/components/message-box';
import ResetPasswordForm from 'client/components/reset-password-form';
import { mapStateToProps, mapDispatchToProps } from 'client/pages/reset-password-page/container';

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
                <ResetPasswordForm loading={isLoading} onSubmit={this.onFormSubmit} />
                {!error ||
                    <Grid centered columns={3}>
                        <Grid.Column textAlign="center">
                            <MessageBox error={true} headerText={'Ooops'} bodyText={error} />
                        </Grid.Column>
                    </Grid>
                }

            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage);
