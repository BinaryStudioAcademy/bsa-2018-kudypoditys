import { getRoomPrice} from 'client/logic/rooms-summary-table/actions';


export function mapStateToProps(state) {
    const { rooms } = state.rooms;
    return {
        rooms: rooms
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        findPricePrice(id) {
            dispatch(getRoomPrice(id));
        }
    }
}