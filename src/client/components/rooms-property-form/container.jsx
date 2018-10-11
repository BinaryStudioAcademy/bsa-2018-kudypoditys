
import { roomTypesGet } from 'client/logic/room-types/actions';
import { bedTypesGet } from 'client/logic/bed-types/actions';
import { editRoomIndexUpdate } from 'client/logic/1test-rooms-tab/actions';

import { getFormValues } from 'redux-form';

export function mapStateToProps(state) {
    const values = getFormValues('propertyForm')(state) || {};
    const { roomTypes } = state.roomTypes;
    const { bedTypes } = state.bedTypes;
    const { editRoomIndex } = state.testRoomsTab;
    return {
        rooms: values.rooms,
        roomTypes,
        bedTypes,
        editRoomIndex
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        getRoomTypes: () => dispatch(roomTypesGet()),
        getBedTypes: () => dispatch(bedTypesGet()),
        updateEditRoomIndex: (index) => dispatch(editRoomIndexUpdate(index))
    }
}
