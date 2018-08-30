import defaultState from "client/logic/defaultState";

function propertyPageReducer(state = defaultState.activeProperty, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default propertyPageReducer;
