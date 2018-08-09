import {
    PROPERTY_ITEM_UPDATE ,
    PROPERTY_ITEM_DELETE,
    PROPERTY_ITEM_INSERT ,
    FETCH_PROPERTY_ITEM,
    FETCH_ALL_PROPERTY
} from './actionTypes';

 export function propertyItemUpdate(payload) {
    return {
        type: PROPERTY_ITEM_UPDATE,
         payload
  };
};
export function propertyItemInsert(payload) {
    return {
        type: PROPERTY_ITEM_INSERT,
         payload
  };
};
export function propertyItemDelete(id) {
    return {
        type: PROPERTY_ITEM_DELETE,
         payload : {id}
  };
};
export function fetchPropertyItem(id) {
    return {
        type: FETCH_PROPERTY_ITEM,
         payload : {id},
  };
};
export function fetchAllProperty() {
    return {
        type:FETCH_ALL_PROPERTY
  };
};

