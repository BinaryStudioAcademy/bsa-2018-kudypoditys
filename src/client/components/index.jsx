import React, { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./container";

import ResetPasswordPage from "../pages/reset-password-page";
import RegistrationPage from "../pages/registration-page";
import AddPropertyPage from "../pages/add-property-page";
import EditPropertyPage from "../pages/edit-property-page";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/home-page";
import PropertyPage from "../pages/property-page";
import LoginPage from "../pages/login-page";
import SearchPage from "../pages/search-page";
import { NotFoundPage } from "../pages/404-page";

import UserCabinet from "./user-cabinet/user-cabinet-component";
import AuthHOC from "../components/common/auth-hoc";
import VerifyEmail from "../components/common/verify-email";
import ForgotPasswordPage from "../pages/forgot-password-page";

import SimpleModal from '../components/common/simple-modal';
import ErrorBoundary from "../components/common/error-boundary-handler";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "../history";

import UserTrackingService from "../services/userTrakingService"

export class Root extends Component {
    componentWillMount() {
        this.props.getCurrencies();
        UserTrackingService.setAnonymousToken();
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
