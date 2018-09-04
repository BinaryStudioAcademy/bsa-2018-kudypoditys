import {searchUpdate, searchSubmit} from "../../logic/search/actions";

export function mapStateToProps(state, ownProps) {
    const { search } = state;


    return {
        search

    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        onSearch(data) {

            console.log("gone dispatch data: " + JSON.stringify(data))
            dispatch(searchSubmit(data));
        },
        onQueryChange(value) {
            dispatch(searchUpdate({ query: value }));
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
