import defaultState from 'client/logic/defaultState';


function propertyPageReducer(state = defaultState.shownProperties, action) {
    switch (action.type) {

        default: {
            return state;
        }
    }

}

export default propertyPageReducer;