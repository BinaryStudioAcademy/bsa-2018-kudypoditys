export function mapStateToProps(state) {
    const {searchSummary} = state;

    return {
        destination: searchSummary.destination,
        numberOfMatched: searchSummary.numberOfMatched
    };
}

