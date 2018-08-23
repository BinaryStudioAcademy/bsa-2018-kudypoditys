import React from "react";
import ReactDOM from "react-dom";
import "whatwg-fetch";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import "client/styles/global.scss";
import reducer from "client/logic/reducer";

import RegistrationPage from "client/pages/registration-page";
import PropertyCreationTabs from "client/pages/add-property-page";
import { Router, Route, Switch } from "react-router-dom";
import CheckInCheckOut from "client/pages/checkin-checkout-page";
import { HomePage } from "client/pages/home-page";
import PropertyPage from "client/pages/property-page";
import LoginPage from "client/pages/login-page";
import SearchPage from "client/pages/search-page";
import { NotFoundPage } from "client/pages/404-page";
import createSagaMidddelware from "redux-saga";
import rootSaga from "client/logic/rootSaga";
import history from "client/history";
import PhotoTab from "./components/photo-tab-registration-property";
import UserCabinet from "./components/user-cabinet";

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
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/signup" component={RegistrationPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route
                    exact
                    path="/checkin-checkout"
                    component={CheckInCheckOut}
                />
                <Route path="/search-page" component={SearchPage} />
                <Route path="/property-page" component={PropertyPage} />
                <Route path="/add-property/" component={PropertyCreationTabs} />
                <Route path="/404" component={NotFoundPage} />
                <Route path="/user-cabinet" component={UserCabinet} />

                {/* EXAMPLE:  <Route path="/verifyemail/:token" component={....} /> */}

                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);
