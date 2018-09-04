import React from 'react';
import {Pagination as SemanticPagination} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './container';

class Pagination extends React.Component {

    onPageChange = (event, data) => {
        const searchRequest = this.props.searchRequest
        searchRequest.page=data.activePage
        this.props.paginationChanged(searchRequest)
    }
    render() {
        return (
            <SemanticPagination
                defaultActivePage={1}
                totalPages={this.props.pagesCount}
                onPageChange={this.onPageChange}
                activePage={this.props.searchRequest.page}
            />
        )
    }
}

Pagination.propTypes = {
    pagesCount: PropTypes.number
}

Pagination.defaultProps = {
    pagesCount: 1
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);