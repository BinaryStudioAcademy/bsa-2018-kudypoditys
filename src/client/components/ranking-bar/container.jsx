import { sortUpdate } from "../../logic/ranking-bar/actions";

export function mapStateToProps(state) {
    const { search } = state;
    return {
        activeItem: search.sortBy
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        onSelect(searchRequest) {
            dispatch(sortUpdate(searchRequest));
        }
    };
}
