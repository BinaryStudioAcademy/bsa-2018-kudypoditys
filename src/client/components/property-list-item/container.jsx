
export function mapStateToProps(state) {
    const { property } = state;
    return {
        propertyItemData: property.propertyItemData
    };
}
