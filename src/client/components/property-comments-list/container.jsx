export function mapStateToProps(state, ownProps) {
    const { property } = state.propertyPage;

    return {
        property
    };
}