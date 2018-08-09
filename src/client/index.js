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

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            {[
                <Search
                    key="Search"
                    view='bar'
                />,
                <AvailabilityPanel
                    key='Availability'
                />
            ]}
        </React.Fragment>

    </Provider>,
    document.getElementById('root')
);
