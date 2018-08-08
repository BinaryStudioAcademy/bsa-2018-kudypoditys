import { combineReducers } from 'redux';
import search from 'client/logic/search/reducer';
import registration from 'client/logic/registration/reducer';

export default combineReducers({
    search,
    registration
});