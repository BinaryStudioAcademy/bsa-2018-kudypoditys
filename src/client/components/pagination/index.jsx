import React from "react";
import { Pagination as SemanticPagination } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import history from "client/history";
import queryString from "query-string";
class Pagination extends React.Component {
    constructor() {
        super();
        this.state = {
            searchRequest: { page: 1 }
        };
    }
    onPageChange = (event, data) => {
        if (history.location.search !== "") {
            const searchRequest = queryString.parse(history.location.search);
            console.log(
                "MainSearch this.props.params =   " +
                    JSON.stringify(searchRequest)
            );
            searchRequest.page = data.activePage;
            this.setState({ searchRequest: searchRequest });
            this.props.paginationChanged(searchRequest);
        }
    };
    render() {
        return (
            <SemanticPagination
                defaultActivePage={1}
                totalPages={this.props.pagesCount}
                onPageChange={this.onPageChange}
                activePage={this.state.searchRequest.page}
            />
        );
    }
}

Pagination.propTypes = {
    pagesCount: PropTypes.number
};

Pagination.defaultProps = {
    pagesCount: 1
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);
