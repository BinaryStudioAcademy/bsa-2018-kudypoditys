import { currenciesGet } from '../logic/currencies/actions';

export function mapStateToProps(state) {
    return {
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        getCurrencies() {
            dispatch(currenciesGet());
        }
    };
}
