import { searchUpdate } from '../../logic/search/actions';

export function mapStateToProps(state, ownProps) {
    const { search } = state;
    return {
        propertyName: search.destination,
        checkIn: search.checkIn,
        checkOut: search.checkOut,
        adults: search.adults,
        children: search.children,
        rooms: search.rooms
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        onAvailabilityCheck() {
            //todo server request
            const serverResponse = [
                { room: 'Available room type' },
                { room: 'Available room type2' },
                { room: 'Available room type3' },
            ];
            dispatch(searchUpdate({ results : serverResponse}));
        },
        onCheckInChange(value) {
            dispatch(searchUpdate({ checkIn: value }));
        },
        onCheckOutChange(value) {
            dispatch(searchUpdate({ checkOut: value }));
        },
        onAdultsChange(value) {
            dispatch(searchUpdate({ adults: value }));
        },
        onChildrenChange(value) {
            dispatch(searchUpdate({ children: value }));
        },
        onRoomsChange(value) {
            dispatch(searchUpdate({ rooms: value }));
        }
    };
}