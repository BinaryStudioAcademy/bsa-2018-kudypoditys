import React from "react";
import ReactDOM from "react-dom";
import "whatwg-fetch";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import "client/styles/global.scss";
import reducer from "client/logic/reducer";
import createSagaMidddelware from "redux-saga";
import rootSaga from "client/logic/rootSaga";
import {socket} from "./logic/socket"
import Root from "./components";

const sagaMiddelware = createSagaMidddelware();
const middleware = [sagaMiddelware];
const store = createStore(
    reducer,
    composeWithDevTools(),
    applyMiddleware(...middleware)
);
sagaMiddelware.run(rootSaga);

ReactDOM.render(<Root store={store}/>, document.getElementById("root"));

window.addEventListener("beforeunload", (ev) =>
{
    if(socket)
        socket.emit('onClose');
    ev.preventDefault();
});
