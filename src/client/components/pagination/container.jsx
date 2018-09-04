
import { paginationUpdate } from '../../logic/pagination/actions';

export function mapStateToProps(state) {
    const {search} = state;
    return {
        activePage: search
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        onSelect(searchRequest) {
            dispatch(paginationUpdate(searchRequest));
        }
    };
}
