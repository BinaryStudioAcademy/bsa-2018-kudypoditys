import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import search from 'client/logic/search/reducer';
import login from 'client/logic/login/reducer';
export default combineReducers({
    // form: formReducer,
    // login
    search,
    form: formReducer.plugin({
        login: login
    })
});