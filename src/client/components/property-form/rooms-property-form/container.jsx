
import { roomTypesGet } from "../../../logic/room-types/actions";
import { mealsGet } from '../../../logic/meals/actions';
import { mealTypesGet } from '../../../logic/meal-types/actions';
import { bedTypesGet } from '../../../logic/bed-types/actions';
import { editRoomIndexUpdate } from '../../../logic/1test-rooms-tab/actions';

import { getFormValues } from 'redux-form';

export function mapStateToProps(state) {
    const values = getFormValues('propertyForm')(state) || {};
    const { roomTypes } = state.roomTypes;
    const { meals } = state.meals;
    const { mealTypes } = state.mealTypes;
    const { bedTypes } = state.bedTypes;
    const { editRoomIndex } = state.testRoomsTab;
    return {
        rooms: values.rooms,
        roomTypes,
        meals,
        mealTypes,
        bedTypes,
        editRoomIndex
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        getRoomTypes: () => dispatch(roomTypesGet()),
        getMeals: () => dispatch(mealsGet()),
        getMealTypes: () => dispatch(mealTypesGet()),
        getBedTypes: () => dispatch(bedTypesGet()),
        updateEditRoomIndex: (index) => dispatch(editRoomIndexUpdate(index))
    }
}
