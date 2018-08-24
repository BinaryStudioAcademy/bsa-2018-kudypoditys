import { searchUpdate } from "../../logic/search/actions";

export function mapStateToProps(state, ownProps) {
    const { search } = state;
    return {
        destination: search.destination,
        checkIn: search.checkIn,
        checkOut: search.checkOut,
        adults: search.adults,
        children: search.children,
        rooms: search.rooms
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        onSearch() {
            //todo server request
            const serverResponse = [
                {
                    Name: "Name example 1",
                    Description: "Description example 1"
                },
                {
                    Name: "Name example 2",
                    Description: "Description example 2"
                },
                {
                    Name: "Name example 3",
                    Description: "Description example 3"
                }
            ];
            dispatch(searchUpdate({ results: serverResponse }));
        },
        onDestinationChange(value) {
            dispatch(searchUpdate({ destination: value }));
        },
        onDatesChange(value) {
            dispatch(
                searchUpdate({
                    checkIn: value.startDate,
                    checkOut: value.endDate
                })
            );
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
