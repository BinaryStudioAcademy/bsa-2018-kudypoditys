import React from 'react';

import { storiesOf } from '@storybook/react';

import Quickfilter from 'client/components/quick-filter';

const boxes1 = [
    {name:'mark9', ischecked: true, label:'Excelent location: 9+', amount: 321},
    {name:'mark8', ischecked: false, label:'Very good location: 8+', amount: 658}
];
const boxes2 = [];

const boxes3 = [
    {name:'mark9', ischecked: true, label:'Excelent location: 9+'},
    {name:'mark8', ischecked: false, label:'Very good location: 8+'}
];
const boxes4 = [
    {name:'mark9', label:'Excelent location: 9+', amount: 321},
    {name:'mark8',  label:'Very good location: 8+', amount: 658}
];
storiesOf('Quick filter widget component', module)
.add('QuickFilter with two boxes', () => (
    <Quickfilter boxes={boxes1}/>
))
.add('QuickFilter with empty props', () => (
    <Quickfilter boxes={boxes2}/>
))
.add('QuickFilter with no amount', () => (
    <Quickfilter boxes={boxes3}/>
))
.add('QuickFilter with no ckeck', () => (
    <Quickfilter boxes={boxes4}/>
))
