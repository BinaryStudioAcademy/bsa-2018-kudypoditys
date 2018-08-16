import React from 'react';

import {storiesOf} from '@storybook/react';

import Quickfilter from 'client/components/quick-filter';

const boxes1 = [
    {id: '1', ischecked: true, label: 'Pool', amount: 321, type: 'Facility'},
    {id: '2', ischecked: false, label: 'Very good location: 8+', amount: 658, type: 'Review Score'},
    {id: '4', ischecked: false, label: 'Hotel', amount: 658, type: 'Property Type'},
    {id: '3', ischecked: false, label: 'Hostel', amount: 658, type: 'Property Type'}
];
const boxes2 = [
    {id: '1', ischecked: true, label: 'Pool', type: 'Facility'},
    {id: '2', ischecked: false, label: 'Very good location: 8+', type: 'Review Score'},
    {id: '4', ischecked: false, label: 'Hotel', type: 'Property Type'},
    {id: '3', ischecked: false, label: 'Hostel', type: 'Property Type'}
];
const boxes3 = [
    {id: '1', label: 'Pool', amount: 321, type: 'Facility'},
    {id: '2', label: 'Very good location: 8+', amount: 658, type: 'Review Score'},
    {id: '4', label: 'Hotel', amount: 432, type: 'Property Type'},
    {id: '3', label: 'Hostel', amount: 111, type: 'Property Type'}
];
storiesOf('Quick filter widget component', module)
    .add('QuickFilter with four boxes', () => (
        <Quickfilter boxes={boxes1}/>
    ))
    .add('QuickFilter with no amount', () => (
        <Quickfilter boxes={boxes2}/>
    ))
    .add('QuickFilter with no check', () => (
        <Quickfilter boxes={boxes3}/>
    ))
