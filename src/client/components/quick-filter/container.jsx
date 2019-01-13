import { searchSubmit } from '../../logic/search/actions';

export function mapStateToProps(state) {
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
