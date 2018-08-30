import { getPropertyInfoById } from "../../logic/property-page/actions";

export function mapStateToProps(state, ownProps) {
    const { shownProperties } = state;
    const { property } = state.propertyPage;
    return {
        propertyItemData: shownProperties[ownProps.id],
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
