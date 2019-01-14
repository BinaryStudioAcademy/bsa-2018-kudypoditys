import React from "react";
import ReactDOM from "react-dom";
import "whatwg-fetch";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import "client/styles/global.scss";
import reducer from "client/logic/reducer";
import { Router } from "react-router-dom";
import createSagaMidddelware from "redux-saga";
import rootSaga from "client/logic/rootSaga";
import history from "client/history";
import SimpleModal from 'client/components/simple-modal';
import ErrorBoundary from "client/components/error-boundary-handler";
import {socket} from "./logic/socket"
import Root from "./components/root-component";

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
                <Root>
                </Root>
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
