import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import BannerListComponent from 'client/components/region-banner-list';

const cityInfos = [{
    id: 1,
    city: 'Lviv',
    properties: 1202,
    avgPrice: 12012,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://icons.iconarchive.com/icons/wikipedia/flags/1024/UA-Ukraine-Flag-icon.png'
},
{
    id: 2,
    city: 'Lviv',
    properties: 1202,
    avgPrice: 12012,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://icons.iconarchive.com/icons/wikipedia/flags/1024/UA-Ukraine-Flag-icon.png'
},
{
    id: 3,
    city: 'Lviv',
    properties: 1202,
    avgPrice: 12012,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://icons.iconarchive.com/icons/wikipedia/flags/1024/UA-Ukraine-Flag-icon.png'
}, {
    id: 4,
    city: 'Lviv',
    properties: 1202,
    avgPrice: 12032,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://icons.iconarchive.com/icons/wikipedia/flags/1024/UA-Ukraine-Flag-icon.png'
},
{
    id: 5,
    city: 'Lviv',
    properties: 1202,
    avgPrice: 12012,
    pictureUrl: 'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
    flagUrl: 'http://icons.iconarchive.com/icons/wikipedia/flags/1024/UA-Ukraine-Flag-icon.png'
}];

storiesOf('BannerListComponent', module)
    .add('with cities', () => <BannerListComponent cityInfos={cityInfos} />)

