import { getPropertyInfoById } from "../../logic/property-page/actions";

export function mapStateToProps(state, ownProps) {
    const { property } = state.propertyPage;
    return {
        property: property
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getProperty(id) {
            dispatch(getPropertyInfoById(id));
        }
    };
}
