import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'client/styles/global.scss';
import reducer from 'client/logic/reducer';

import Search from 'client/components/search';
import LoginComponent from './components/login';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            {[
                // <Search
                //     key="Search"
                //     view='bar'
                //     checkIn={new Date('Aug 14 2018')}
                //     checkOut={new Date('Aug 16 2018')}
                //     adults={1}
                //     rooms={1}
                //     children={0}
                //     onDestinationChange={value => console.log(`destination: ${value}`)}
                //     onCheckInChange={value => console.log(`check-in: ${new Date(value)}`)}
                //     onCheckOutChange={value => console.log(`check-in: ${new Date(value)}`)}
                //     onAdultsChange={value => console.log(`adults: ${value}`)}
                //     onChildrenChange={value => console.log(`children: ${value}`)}
                //     onRoomsChange={value => console.log(`rooms: ${value}`)}
                // />,
                <LoginComponent
                    key="Login"
                // mailChanged={null}
                // passwordChanged={null}
                // registrationClicked={null}
                // loginClicked={null}
                // forgotClicked={null}
                // email={null}
                // password={null}
                //errors={[]}
                />
            ]}
        </React.Fragment>

    </Provider>,
    document.getElementById('root')
);
