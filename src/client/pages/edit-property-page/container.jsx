import { getPropertyInfoById } from "../../logic/property-page/actions";

export function mapStateToProps(state, ownProps) {
    return {};
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getProperty(id) {
            dispatch(getPropertyInfoById(id));
        }
    };
}
