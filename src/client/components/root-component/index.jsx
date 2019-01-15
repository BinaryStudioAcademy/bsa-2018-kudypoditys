import React, { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./container";

import ResetPasswordPage from "client/pages/reset-password-page";
import RegistrationPage from "client/pages/registration-page";
import AddPropertyPage from "client/pages/add-property-page";
import EditPropertyPage from "client/pages/edit-property-page";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "client/pages/home-page";
import PropertyPage from "client/pages/property-page";
import LoginPage from "client/pages/login-page";
import SearchPage from "client/pages/search-page";
import { NotFoundPage } from "client/pages/404-page";

import UserCabinet from "client/pages/user-cabinet";
import AuthHOC from "client/components/auth-hoc";
import VerifyEmail from "client/components/verify-email";
import ForgotPasswordPage from "client/pages/forgot-password-page";

import SimpleModal from 'client/components/simple-modal';
import ErrorBoundary from "client/components/error-boundary-handler";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "client/history";

export class Root extends Component {
    componentWillMount() {
        this.props.getCurrencies();
    };

    render() {
        return (
            <Provider store={this.props.store}>
                <ErrorBoundary>
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/signup" component={RegistrationPage} />
                            <Route exact path="/verifyemail" component={VerifyEmail} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/resetpassword" component={ResetPasswordPage} />
                            <Route exact path="/forgotpassword" component={ForgotPasswordPage} />
                            <Route path="/search-page" component={SearchPage} />
                            <Route
                                path="/property/:id/edit"
                                component={({ match }) => (
                                    <AuthHOC Component={() => <EditPropertyPage match={match} />} />
                                )}
                            />
                            <Route path="/property/:id" component={PropertyPage} />
                            <Route
                                path="/add-property/"
                                component={() => (
                                    <AuthHOC Component={AddPropertyPage} />
                                )}
                            />
                            <Route path="/404" component={NotFoundPage} />
                            <Route
                                path="/user-cabinet"
                                component={() =>
                                    <AuthHOC Component={() => <UserCabinet />} />
                                }
                            />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </Router>
                    <SimpleModal />
                </ErrorBoundary>
            </Provider>
        );
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
