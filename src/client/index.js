import React from "react";
import ReactDOM from "react-dom";
import "whatwg-fetch";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import "client/styles/global.scss";
import reducer from "client/logic/reducer";

import Registration from "client/components/registration";
import { PropertyCreationTabs } from "client/components/property-creation-tabs";
import { Router, Route, Switch } from "react-router-dom";
import CheckInCheckOut from 'client/components/checkin-checkout'
import { HomePage } from 'client/components/home-page'
import PropertyPage from "client/components/property-page";
import Login from "client/components/login";
import SearchPage from "client/components/search-page";
import { NotFoundPage } from "client/components/404-page";
import createSagaMidddelware from 'redux-saga';
import rootSaga from 'client/logic/rootSaga';
import history from 'client/history';

const sagaMiddelware = createSagaMidddelware();
const middleware = [
    sagaMiddelware
];
const store = createStore(reducer, composeWithDevTools(), applyMiddleware(...middleware));
sagaMiddelware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/reg" component={Registration} />
                <Route exact path="/log" component={Login} />
                <Route exact path="/checkin-checkout" component={CheckInCheckOut} />
                <Route path="/search-page" component={SearchPage} />
                <Route path="/property-page" component={PropertyPage} />
                <Route path="/add-property/" component={PropertyCreationTabs} />
                <Route path="/404" component={NotFoundPage} />

            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);
