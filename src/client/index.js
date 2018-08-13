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

import PropertyPage from "client/components/property-page";
import SearchPage from "./components/search-page";

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SearchPage} />
                <Route path="/search" component={Registration} />
                <Route path="/property/:id" component={PropertyPage} />
                <Route path="/add-property/" component={PropertyCreationTabs} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
