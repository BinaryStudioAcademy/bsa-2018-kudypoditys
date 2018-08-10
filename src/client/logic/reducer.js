import { combineReducers } from 'redux';
import search from 'client/logic/search/reducer';
import registration from 'client/logic/registration/reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    search,
    form: formReducer.plugin({
        registration: registration
    })
});