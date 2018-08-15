import React from 'react';

import {storiesOf} from '@storybook/react';

import Quickfilter from 'client/components/rooms-summary-tables/';
import RoomsSummaryTable from '../src/client/components/rooms-summary-table';

const rooms1 = {
    rooms: [
        {
            id: '1',
            type: 'Standart Double room',
            bedsAmount: 1,
            sleeps: 2,
            beds: '2 beds',
            info: 'Our room is so amazing'
        },
        {id: '2', type: 'Carska Room', bedsAmount: 1, sleeps: 1, beds: '1 Carskiy bad', info: 'Our room is so carska'},
        {
            id: '3',
            type: 'Obshchajna Room',
            bedsAmount: 3,
            beds: '4 Neudobnyh bad',
            sleeps: 4,
            info: 'Our room is so obshchajna'
        },
        {
            id: '4',
            type: 'Polu Obshchajna Room',
            bedsAmount: 1,
            beds: '3 Neudobnyh bad',
            sleeps: 3,
            info: 'Our room is almost obshchajna'
        }
    ],
    showRoomPrice(id) {
        console.log(id)
    }
};
const rooms2 = {
    rooms: [
        {id: '1', type: 'Standart Double room', bedsAmount: 1, sleeps: 2, info: 'Our room is so amazing'},
        {id: '2', type: 'Carska Room', bedsAmount: 1, sleeps: 1, info: 'Our room is so carska'},
        {id: '3', type: 'Obshchajna Room', bedsAmount: 3, sleeps: 4, info: 'Our room is so obshchajna'},
        {id: '4', type: 'Polu Obshchajna Room', bedsAmount: 1, sleeps: 3, info: 'Our room is almost obshchajna'}
    ],
    showRoomPrice(id) {
        console.log(id)
    }
};
const rooms3 = {
    rooms: [
        {
            id: '1',
            type: 'Standart Double room',
            bedsAmount: 1,
            sleeps: 2,
            beds: '2 beds',
            info: 'Our room is so amazing'
        },
        {id: '2', type: 'Carska Room', bedsAmount: 1, sleeps: 1, beds: '1 Carskiy bad', info: 'Our room is so carska'},
        {
            id: '3',
            type: 'Obshchajna Room',
            bedsAmount: 3,
            beds: '4 Neudobnyh bad',
            sleeps: 4,
            info: 'Our room is so obshchajna'
        },
        {
            id: '4',
            type: 'Polu Obshchajna Room',
            bedsAmount: 1,
            beds: '3 Neudobnyh bad',
            sleeps: 3,
            info: 'Our room is almost obshchajna'
        }
    ],
    showRoomPrice(id) {
        console.log(id)
    }
};

storiesOf('RoomsSummaryTable', module)
    .add('RoomsSummaryTable with four rooms', () => (
        <RoomsSummaryTable rooms={rooms1}/>
    ))
    .add('RoomsSummaryTable no beds', () => (
        <RoomsSummaryTable rooms={rooms2}/>
    ))
    .add('RoomsSummaryTable with no sleeps', () => (
        <RoomsSummaryTable rooms={rooms3}/>
    ))
