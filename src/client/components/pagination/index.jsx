import React from "react";
import { Pagination as SemanticPagination } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import history from "client/history";
import queryString from "query-string";
class Pagination extends React.Component {
    onPageChange = (event, data) => {
        if (history.location.search !== "") {
            const searchRequest = queryString.parse(history.location.search);
                              searchRequest.page = data.activePage;
            this.props.paginationChanged(searchRequest);
        }
    };
    render() {

        let searchRequest = {}
        if (history.location.search !== "") {
             searchRequest = queryString.parse(history.location.search);
        }

        return (
            <SemanticPagination
                defaultActivePage={1}
                totalPages={this.props.pagesCount}
                onPageChange={this.onPageChange}
                activePage={ searchRequest.page}
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
