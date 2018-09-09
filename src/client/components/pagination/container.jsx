
import { paginationUpdate } from '../../logic/pagination/actions';

export function mapStateToProps(state) {
    const {search} = state;
    return {
        activePage: search
    };
}

export function mapDispatchToProps(dispatch) {

    return {

        paginationChanged(searchRequest) {
            console.log('pag  searchRequest'+ JSON.stringify(searchRequest))
            dispatch(paginationUpdate(searchRequest));
        }
    };
}
