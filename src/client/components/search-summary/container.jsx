export function mapStateToProps(state) {
    const {searchSummary} = state;

    return {
        destination: searchSummary.destination,
        totalCount: searchSummary.totalCount
    };
}

