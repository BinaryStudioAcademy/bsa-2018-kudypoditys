import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'client/styles/global.scss';
import reducer from 'client/logic/reducer';
import App from 'client/components/app';
import { increment } from 'client/logic/counter/actions';
import Quickfilter from 'client/components/quickfilter'

    const store = createStore(
        reducer,
        composeWithDevTools()
    );

    setInterval(() => {
        store.dispatch(increment());
    }, 1000);

ReactDOM.render(
    <Provider store={store}>
        <Quickfilter />
    </Provider>,
    document.getElementById('root')
);