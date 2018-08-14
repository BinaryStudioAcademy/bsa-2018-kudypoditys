import defaultState from 'client/logic/defaultState';
import {
    CITY_INFOS_GET
} from './actionType';

function cityInfosReducer(state = defaultState.cityInfos, action) {
    switch (action.type) {
        case CITY_INFOS_GET:
            return CITY_INFOS.map(x => ({ ...x }));
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