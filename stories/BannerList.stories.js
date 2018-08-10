import React from 'react';
import { storiesOf } from '@storybook/react';

import BannerList from 'client/components/banner-list';
import { Banner } from 'client/components/banner-list/item'

const cityInfos = [{
    id: 1,
    city: 'Lviv',
    properties: 4098,
    avgPrice: 12012,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
},
{
    id: 2,
    city: 'Dnipro',
    properties: 202,
    avgPrice: 112,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
},
{
    id: 3,
    city: 'Ternopil',
    properties: 1202,
    avgPrice: 1012,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
}, {
    id: 4,
    city: 'Kyiv',
    properties: 92202,
    avgPrice: 182032,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
},
{
    id: 5,
    city: 'Odessa',
    properties: 5602,
    avgPrice: 2082,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
}
];

const cityInfos2 = [{
    id: 1,
    city: 'Lviv',
    properties: 4098,
    avgPrice: 12012,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
},
{
    id: 2,
    city: 'Dnipro',
    properties: 202,
    avgPrice: 112,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
},
{
    id: 3,
    city: 'Ternopil',
    properties: 1202,
    avgPrice: 1012,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
}, {
    id: 4,
    city: 'Kyiv',
    properties: 92202,
    avgPrice: 182032,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
}
];

const city = {
    id: 6,
    city: 'Lviv',
    properties: 456202,
    avgPrice: 90012,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
};

const city2 = {
    id: 7,
    city: 'Wroclaw',
    properties: 92034,
    avgPrice: 340100,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Wroclaw_-_Ostrow_Tumski.jpg',
    flagUrl: 'https://www.nonstopparty.co.uk/images/_lib//poland-flag-5x3-27508-0-1465403984000.jpg'
};

storiesOf('BannerList', module)
    .add('banner list with five elements', () => <BannerList cityInfos={cityInfos} />)
    .add('banner list with four elements', () => <BannerList cityInfos={cityInfos2} />)
    .add('single banner Lviv', () => <Banner cityInfo={city} onCardClick={() => { }} />)
    .add('single banner Poland', () => <Banner cityInfo={city2} onCardClick={() => { }} />)

