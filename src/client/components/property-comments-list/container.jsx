export function mapStateToProps(state, ownProps) {
    const { property } = state.propertyPage.property;

    return {
        property: property
    };
}