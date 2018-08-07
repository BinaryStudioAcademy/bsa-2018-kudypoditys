import React from 'react';

import { storiesOf } from '@storybook/react';
import Breadcrumbs from '../src/client/components/breadcrumbs/index';



const sections1 = [
    { key: 'Home', content: 'Home', href:'#'},
    { key: 'Ukraine', content: 'Ukraine', href:'#'},
    { key: 'Lviv', content: 'Lviv', href:'#'},
    { key: 'Awesome Apart', content: 'Awesome Apart', active: true},
];

const sections2 = [];

const sections3 = [
    { key: 'Home', content: 'Home', href:'#'},
    { key: 'Ukraine', content: 'Ukraine', href:'#'},
    { key: 'Lviv', content: 'Lviv', href:'#'},
    { key: 'Awesome Apart', content: 'Awesome Apart'},
];

storiesOf('Breadcrumbs component', module)
.add('Breadcrumbs with four sections', () =>(
    <Breadcrumbs sections={sections1} />
))
.add('Breadcrumbs with empty input', () => (
    <Breadcrumbs sections={sections2} />
))
.add('Breadcrumbs with no active section', () => (
    <Breadcrumbs sections={sections3} />
));