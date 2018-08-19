import { cityInfosGet } from 'client/logic/banner-list/actions';

export function mapStateToProps(state, ownProps) {
    const { cityInfos } = state;
    return { cityInfos };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getCityInfos() {
            dispatch(cityInfosGet());
        }
    };
}
