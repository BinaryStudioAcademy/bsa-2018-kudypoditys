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
import MainHeader from 'client/components/header';

import PropertyDescription from 'client/components/property-description'
import  PropertyListItem  from 'client/components/property-list-item';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            {[
                <MainHeader />,
                <Search
                    key="Search"
                    view='bar'

                    checkIn={new Date('Aug 14 2018')}
                    checkOut={new Date('Aug 16 2018')}
                    adults={1}
                    rooms={1}
                    children={0}
                    onDestinationChange = { value => console.log(`destination: ${value}`)}
                    onCheckInChange = { value => console.log(`check-in: ${new Date(value)}`)}
                    onCheckOutChange = { value => console.log(`check-in: ${new Date(value)}`)}
                    onAdultsChange = { value => console.log(`adults: ${value}`)}
                    onChildrenChange = { value => console.log(`children: ${value}`)}
                    onRoomsChange = { value => console.log(`rooms: ${value}`)}
                />,
                <AvailabilityPanel
                    key="Availability"
                />,

                <RankingBar
                    key="RankingBar"
                />,
                <PropertyDescription
                    key="RankingBar"
                    id='xyz-1'
                />,

                <SearchSummary/>,

                <PropertyListItem
                    key="PropertyListItem"
                    id='foundProperty1'
                />

            ]}
        </React.Fragment>

    </Provider>,
    document.getElementById('root')
);
