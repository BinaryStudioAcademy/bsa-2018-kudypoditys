import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button, Welcome} from '@storybook/react/demo';
import {SearchSummary} from "../src/client/components/serach-summary";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ));


storiesOf('SearchSummary component', module)
    .add('Lviv and proper number', () => <SearchSummary data={{destination: "Lviv", numberOfMatched: '12345'}}/>)
    .add('negative number', () => <SearchSummary data={{destination: "Dnipro", numberOfMatched: '-13321'}}/>)
    .add('Odessa and invalid number', () => <SearchSummary data={{destination: "Odessa", numberOfMatched: 'sad'}}/>);

