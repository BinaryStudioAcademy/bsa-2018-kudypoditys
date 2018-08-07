import React from 'react';

import { storiesOf } from '@storybook/react';

import SliderComponent from 'client/components/slider-component';

const pics = [
    'https://picsum.photos/600/302',
    'https://picsum.photos/600/303',
    'https://picsum.photos/600/304',
    'https://picsum.photos/600/305',
    'https://picsum.photos/600/306'
];

const handleSlideChange = (index) => {
    console.log(`Slide changed to ${index}`);
}

storiesOf('SliderComponent', module)
    .add('Slider With Pictures', () => <SliderComponent pics={pics} handleSlideChange={handleSlideChange} slideId={0} />)
    .add('Slider Without Pictures', () => <SliderComponent pics={[]} handleSlideChange={handleSlideChange} slideId={0} />)