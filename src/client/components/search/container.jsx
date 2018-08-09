import { searchUpdate } from 'client/logic/search/actions';

export function mapStateToProps(state, ownProps) {
    const { search } = state;
    return {
        destination: search.destination
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        onSearch() {
            dispatch(searchUpdate({ destination: 'UPDATED' }));
        }
    };
}