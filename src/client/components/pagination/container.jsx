
import { paginationUpdate } from '../../logic/pagination/actions';

export function mapStateToProps(state) {
    const {search} = state;
    return {
        activePage: search
    };
}

export function mapDispatchToProps(dispatch) {

    return {

        paginationChanged(pageNumber) {
            console.log(JSON.stringify('pageNumber'+ pageNumber))
            dispatch(paginationUpdate(pageNumber));
        }
    };
}
