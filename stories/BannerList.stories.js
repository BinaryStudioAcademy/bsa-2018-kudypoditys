import React from 'react';
import { storiesOf } from '@storybook/react';

import {BannerList} from 'client/components/banner-list';
import { Banner } from 'client/components/banner-list/item'

const cityInfos = {
    Lviv: {
        id: 1,
        name: "Lviv",
        properties: 8,
        avgPrice: 120,
        imageUrl:
            "http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg",
        flagUrl:
            "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
    },
    Dnipro: {
        id: 6,
        name: "Dnipro",
        properties: 3,
        avgPrice: 22,
        imageUrl:
            "http://meandyoukraine.com/mainContent/DniproCity/DniproCity_featuredImage.jpg",
        flagUrl:
            "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
    },
    Ternopil: {
        id: 3,
        name: "Ternopil",
        properties: 3,
        avgPrice: 28,
        imageUrl:
            "http://www.gazeta-misto.te.ua/wp-content/uploads/2017/05/18671255_1124933304279283_1785861677540967562_n.jpg",
        flagUrl:
            "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
    },
    Kiev: {
        id: 2,
        name: "Kiev",
        properties: 7,
        avgPrice: 32,
        imageUrl: "https://s.inyourpocket.com/gallery/130361.jpg",
        flagUrl:
            "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
    },
    Odessa: {
        id: 4,
        name: "Odessa",
        properties: 4,
        avgPrice: 24,
        imageUrl:
            "https://www.hotel-deribas.com/wp-content/uploads/2018/03/19odessa.jpg",
        flagUrl:
            "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
    },
    Kharkiv: {
        id: 5,
        name: "Kharkiv",
        properties: 2,
        avgPrice: 27,
        imageUrl:
            "http://www.yoldasin.com/wp-content/uploads/2017/04/kharkiv-tren-istasyonu-960x638.jpg",
        flagUrl:
            "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
    }
};

const cityInfos2 = {
    Lviv: {
        id: 1,
        name: "Lviv",
        properties: 8,
        avgPrice: 120,
        imageUrl:
            "http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg",
        flagUrl:
            "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
    },
    Dnipro: {
        id: 6,
        name: "Dnipro",
        properties: 3,
        avgPrice: 22,
        imageUrl:
            "http://meandyoukraine.com/mainContent/DniproCity/DniproCity_featuredImage.jpg",
        flagUrl:
            "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
    },
    Ternopil: {
        id: 3,
        name: "Ternopil",
        properties: 3,
        avgPrice: 28,
        imageUrl:
            "http://www.gazeta-misto.te.ua/wp-content/uploads/2017/05/18671255_1124933304279283_1785861677540967562_n.jpg",
        flagUrl:
            "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
    },
    Kiev: {
        id: 2,
        name: "Kiev",
        properties: 7,
        avgPrice: 32,
        imageUrl: "https://s.inyourpocket.com/gallery/130361.jpg",
        flagUrl:
            "http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png"
    }
};

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
    .add('banner list with five elements', () =>
        <BannerList cities={cityInfos} getCityInfos={() => {
        }}/>)
    .add('banner list with four elements', () =>
        <BannerList cities={cityInfos2} getCityInfos={() => {
        }}/>)
    .add('single banner Lviv', () => <Banner cityInfo={city} onCardClick={() => { }} />)
    .add('single banner Poland', () => <Banner cityInfo={city2} onCardClick={() => { }} />)

