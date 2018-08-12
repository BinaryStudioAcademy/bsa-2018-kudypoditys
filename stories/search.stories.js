import React from 'react';

import { storiesOf } from '@storybook/react';

import { Search } from '../src/client/components/search/index';

storiesOf('Search', module)
    .add('search bar with values', () => (
        <Search
            view='bar'
            destination='Lviv'
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
            onSearch = { () => console.log('Search propeties!')}
        />
    ))

    .add('search panel with empty values', () => (
        <Search
            view='panel'
            onDestinationChange = { value => console.log(`destination: ${value}`)}
            onCheckInChange = { value => console.log(`check-in: ${new Date(value)}`)}
            onCheckOutChange = { value => console.log(`check-in: ${new Date(value)}`)}
            onAdultsChange = { value => console.log(`adults: ${value}`)}
            onChildrenChange = { value => console.log(`children: ${value}`)}
            onRoomsChange = { value => console.log(`rooms: ${value}`)}
            onSearch = { () => console.log('Search propeties!')}
        />
    ));