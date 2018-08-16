import React from "react";
import ReactDOM from "react-dom";
import "whatwg-fetch";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import "client/styles/global.scss";
import reducer from "client/logic/reducer";
import NoRoom from "./components/no-rooms-component";

// import Search from "client/components/search";
// import Registration from "client/components/registration";
// import LoginComponent from "./components/login";

// import SearchSummary from "client/components/search-summary";
// import AvailabilityPanel from "client/components/availability-panel";
// import RankingBar from "client/components/ranking-bar";
// import PropertyDescription from "client/components/property-description";
// import PropertyListItem from "client/components/property-list-item";
// import {PropertyCreationTabs} from 'client/components/property-creation-tabs'
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { DummyComponent } from "./helpers/dummyComponent";
// import BasicMapWidget from './components/basic-map-widget';


//const store = createStore(reducer, composeWithDevTools());

// TODO: add corresponding pages to routes components
ReactDOM.render(
    // <Provider store={store}>
        <NoRoom />,
    // </Provider>,
    document.getElementById("root")
);
 /* <BrowserRouter>
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
        </BrowserRouter> */
