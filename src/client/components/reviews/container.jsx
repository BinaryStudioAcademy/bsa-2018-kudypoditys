import { cityInfosGet } from 'client/logic/banner-list/actions';

export function mapStateToProps(state, ownProps) {

    return ownProps;
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getCityInfos() {
            dispatch(cityInfosGet());
        }
    };
}
