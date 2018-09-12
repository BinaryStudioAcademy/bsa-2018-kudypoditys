// import {quickFiltersUpdate} from "client/logic/quick-filter/actions";
import { searchUpdate, searchSubmit } from '../../logic/search/actions';
export function mapStateToProps(state) {
    const filters = state.quickFilter;
    const { search } = state;
    return {
        ...search,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        selectFilter(data) {
            dispatch(searchSubmit(data))
        },
    };
}
