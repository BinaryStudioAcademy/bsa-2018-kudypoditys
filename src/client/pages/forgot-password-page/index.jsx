import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import history from 'client/history';
import MessageBox from 'client/components/message-box';
import Header from 'client/components/header';
import ForgotPasswordForm from 'client/components/forgot-password-form';
import { mapStateToProps, mapDispatchToProps } from 'client/pages/forgot-password-page/container';

export class ForgotPasswordPage extends Component {
  onFormSubmit = (data) => {
    const { email } = data;
    this.props.sendResetPasswordEmail(email);
  }

  componentDidUpdate() {
    const { emailSendSuccess } = this.props;

    if (emailSendSuccess) {
      history.push('/');
    }
  }

  render() {
    const { error, isLoading } = this.props;

    return (

      <React.Fragment>
        <div
          style={{
            height: "100vh",
            backgroundSize: "cover",
            backgroundImage:
              'url("https://s3.eu-central-1.amazonaws.com/kudypoditys/img/application/background.jpg")'
          }}
        >
          <Header hideSignUpIn noBackground />

          <ForgotPasswordForm loading={isLoading} onSubmit={this.onFormSubmit} />

          {!error ||
            <Grid centered columns={3} style={{ marginTop: '10px' }}>
              <Grid.Column textAlign="center">
                <MessageBox error={true} headerText={'Ooops'} bodyText={error} />
              </Grid.Column>
            </Grid>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage);
