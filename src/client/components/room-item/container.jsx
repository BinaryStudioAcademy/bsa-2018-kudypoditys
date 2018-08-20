
export function mapStateToProps(state) {
    const { propertyLayoutTab } = state;
    return {
        ...propertyLayoutTab,
    };
}

