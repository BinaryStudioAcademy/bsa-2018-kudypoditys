import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import SearchComponent from '../src/client/components/search/index';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ));

storiesOf('Search', module)
    .add('search bar with values', () => (
        <SearchComponent
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
        <SearchComponent
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