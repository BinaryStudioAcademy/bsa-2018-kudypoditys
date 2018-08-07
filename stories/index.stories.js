import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { NavigationBar } from '../src/client/components/navigation-bar';

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


const handleClick = () => {
    console.log('clicked');
};

storiesOf('Navigation Bar', module)
    .add('Navigation with empty reviews count props', () => (
        <NavigationBar
            infoClick={handleClick}
            facilitiesClick={handleClick}
            GoodToKnowClick={handleClick}
            reviewsClick={handleClick}
        />
    ));

storiesOf('Navigation Bar', module)
    .add('Navigation 10 reviews', () => (
        <NavigationBar
            infoClick={handleClick}
            facilitiesClick={handleClick}
            GoodToKnowClick={handleClick}
            reviewsClick={handleClick}
            reviewsCount={10}
        />
    ));

storiesOf('Navigation Bar', module)
    .add('Navigation 100 reviews', () => (
        <NavigationBar
            infoClick={handleClick}
            facilitiesClick={handleClick}
            GoodToKnowClick={handleClick}
            reviewsClick={handleClick}
            reviewsCount={100}
        />
    ));

storiesOf('Navigation Bar', module)
    .add('Navigation 1000 reviews', () => (
        <NavigationBar
            infoClick={handleClick}
            facilitiesClick={handleClick}
            GoodToKnowClick={handleClick}
            reviewsClick={handleClick}
            reviewsCount={1000}
        />
    ));

storiesOf('Navigation Bar', module)
    .add('Navigation 10000 reviews', () => (
        <NavigationBar
            infoClick={handleClick}
            facilitiesClick={handleClick}
            GoodToKnowClick={handleClick}
            reviewsClick={handleClick}
            reviewsCount={10000}
        />
    ));