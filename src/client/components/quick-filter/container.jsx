import {quickFiltersUpdate} from "client/logic/quick-filter/actions";

export function mapStateToProps(state) {
    const filters = state.quickFilter;
    return {
        boxes: filters
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        selectFilter(searchRequest) {
            dispatch(quickFiltersUpdate(searchRequest));
        }
    };
}
