import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'client/styles/global.scss';
import reducer from 'client/logic/reducer';

import Search from 'client/components/search';
import AvailabilityPanel from 'client/components/availability-panel';
import RankingBar from 'client/components/ranking-bar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = createStore(
    reducer,
    composeWithDevTools()
);

// todo add corresponding pages to routes components
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Search}/>
            <Route path='/search' component={Search}/>
            <Route path='/property/:id' component={Search}/>
        </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
