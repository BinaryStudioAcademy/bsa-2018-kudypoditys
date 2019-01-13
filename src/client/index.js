import React from "react";
import ReactDOM from "react-dom";
import "whatwg-fetch";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import "./styles/global.scss";
import reducer from "./logic/reducer";
import ResetPasswordPage from './pages/reset-password-page'
import RegistrationPage from "./pages/registration-page";
import AddPropertyPage from "./pages/add-property-page";
import EditPropertyPage from "./pages/edit-property-page";
import { Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import PropertyPage from "./pages/property-page";
import LoginPage from "./pages/login-page";
import SearchPage from "./pages/search-page";
import { NotFoundPage } from "./pages/404-page";
import createSagaMidddelware from "redux-saga";
import rootSaga from "./logic/rootSaga";
import history from "./history";
import UserCabinet from "./pages/user-cabinet";
import AuthHOC from "./components/auth-hoc";
import VerifyEmail from "./components/verify-email";
import ForgotPasswordPage from "./pages/forgot-password-page";
import SimpleModal from './components/simple-modal';
import ErrorBoundary from "./components/error-boundary-handler";
import {socket} from "./logic/socket"

const sagaMiddelware = createSagaMidddelware();
const middleware = [sagaMiddelware];
const store = createStore(
    reducer,
    composeWithDevTools(),
    applyMiddleware(...middleware)
);
sagaMiddelware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
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
                        component={({match}) => (
                            <AuthHOC Component={() => <EditPropertyPage match={match}/>} />
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
    </Provider>,
    document.getElementById("root")
);

window.addEventListener("beforeunload", (ev) => 
{  
    if(socket)
        socket.emit('onClose');
    ev.preventDefault();
});
