import { combineReducers } from 'redux';
import search from 'client/logic/search/reducer';
import login from 'client/logic/login-component/reducer';
export default combineReducers({
    search,
    login
});