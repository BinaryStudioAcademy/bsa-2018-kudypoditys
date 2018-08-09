import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'client/styles/global.scss';
import reducer from 'client/logic/reducer';

import Search from 'client/components/search';

import SearchSummary from 'client/components/search-summary';

import AvailabilityPanel from 'client/components/availability-panel';
import RankingBar from 'client/components/ranking-bar';

import PropertyDescription from 'client/components/property-description'
import PropertyPage from 'client/components/property-page'

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            {[

                <PropertyPage/>
            ]}
        </React.Fragment>

    </Provider>,
    document.getElementById('root')
);
