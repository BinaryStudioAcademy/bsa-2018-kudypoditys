import React from "react";
import ReactDOM from "react-dom";
import "whatwg-fetch";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import "client/styles/global.scss";
import reducer from "client/logic/reducer";

import Slider from "client/components/slider";
import Registration from "client/components/registration";
import { PropertyCreationTabs } from "client/components/property-creation-tabs";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import CheckInCheckOut from 'client/components/checkin-checkout'
import {HomePage} from 'client/components/home-page'
import PropertyPage from "client/components/property-page";
import Search from "client/components/search";
import Login from "client/components/login";
import SearchPage from "client/components/search-page";
import {NotFoundPage} from "client/components/404-page";

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/reg" component={Registration}/>
                <Route exact path="/log" component={Login}/>
                <Route path="/search-page" component={SearchPage}/>
                <Route path="/property-page" component={PropertyPage}/>
                <Route path="/add-property/" component={PropertyCreationTabs} />
                <Route path="/404" component={NotFoundPage}/>

            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);