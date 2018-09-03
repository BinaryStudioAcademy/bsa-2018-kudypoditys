import defaultState from 'client/logic/defaultState';
import {
    CITY_INFOS_GET
} from './actionType';

function cityInfosReducer(state = defaultState.cityInfos, action) {
    switch (action.type) {
        case CITY_INFOS_GET:

            return {
                ...state,
                lviv: action.payload
            };
        default:
            return state;

    }
}

export default cityInfosReducer;

const CITY_INFOS = [{
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
        pictureUrl: 'http://meandyoukraine.com/mainContent/DniproCity/DniproCity_featuredImage.jpg',
        flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
    },
    {
        id: 3,
        city: 'Ternopil',
        properties: 1202,
        avgPrice: 1012,
        pictureUrl: 'http://www.gazeta-misto.te.ua/wp-content/uploads/2017/05/18671255_1124933304279283_1785861677540967562_n.jpg',
        flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
    }, {
        id: 4,
        city: 'Kyiv',
        properties: 92202,
        avgPrice: 182032,
        pictureUrl: 'https://s.inyourpocket.com/gallery/130361.jpg',
        flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
    },
    {
        id: 5,
        city: 'Odessa',
        properties: 5602,
        avgPrice: 2082,
        pictureUrl: 'https://www.hotel-deribas.com/wp-content/uploads/2018/03/19odessa.jpg',
        flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
    },
    {
        id: 6,
        city: 'Kharkiv',
        properties: 602,
        avgPrice: 282,
        pictureUrl: 'http://www.yoldasin.com/wp-content/uploads/2017/04/kharkiv-tren-istasyonu-960x638.jpg',
        flagUrl: 'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png'
    }
];