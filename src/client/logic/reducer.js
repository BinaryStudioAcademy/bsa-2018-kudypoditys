import { combineReducers } from 'redux';
import search from 'client/logic/search/reducer';
import slider from 'client/logic/slider/reducer';

export default combineReducers({
    search,
    slider
});