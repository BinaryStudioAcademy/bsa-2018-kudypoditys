import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Quickfilter from 'client/components/quick-filter';

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

const boxes = [
    {name:'mark9', ischecked: true, label:'Excelent location: 9+', amount: 321},
    {name:'mark8', ischecked: false, label:'Very good location: 8+', amount: 658}
];
storiesOf('Quick filter widget component', module)
.add('QuickFilter', () => (
    <Quickfilter boxes={boxes}/>
));
