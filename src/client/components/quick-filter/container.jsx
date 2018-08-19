import {quickFiltersUpdate} from "client/logic/quick-filter/actions";

export function mapStateToProps(state) {
    // const { filters } = state.filters;
    // return {
    //     boxes: filters
    // };
}

export function mapDispatchToProps(dispatch) {
    return {
        selectFilter(filter) {
            dispatch(quickFiltersUpdate(filter));
        }
    };
}
