import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { NavigationBar } from '../src/client/components/navigation-bar';

storiesOf('Navigation Bar', module)
    .add('Navigation with empty reviews count props', () => (
        <NavigationBar
            infoClick={action('clicked')}
            facilitiesClick={action('clicked')}
            goodToKnowClick={action('clicked')}
            reviewsClick={action('clicked')}
        />
    ));

storiesOf('Navigation Bar', module)
    .add('Navigation 10 reviews', () => (
        <NavigationBar
            infoClick={action('clicked')}
            facilitiesClick={action('clicked')}
            goodToKnowClick={action('clicked')}
            reviewsClick={action('clicked')}
            reviewsCount={10}
        />
    ));

storiesOf('Navigation Bar', module)
    .add('Navigation 100 reviews', () => (
        <NavigationBar
            infoClick={action('clicked')}
            facilitiesClick={action('clicked')}
            goodToKnowClick={action('clicked')}
            reviewsClick={action('clicked')}
            reviewsCount={100}
        />
    ));

storiesOf('Navigation Bar', module)
    .add('Navigation 1000 reviews', () => (
        <NavigationBar
            infoClick={action('clicked')}
            facilitiesClick={action('clicked')}
            goodToKnowClick={action('clicked')}
            reviewsClick={action('clicked')}
            reviewsCount={1000}
        />
    ));

storiesOf('Navigation Bar', module)
    .add('Navigation 10000 reviews', () => (
        <NavigationBar
            infoClick={action('clicked')}
            facilitiesClick={action('clicked')}
            GoodToKnowClick={action('clicked')}
            reviewsClick={action('clicked')}
            reviewsCount={10000}
        />
    ));