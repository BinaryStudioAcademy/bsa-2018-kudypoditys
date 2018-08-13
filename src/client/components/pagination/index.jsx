import React from 'react';
import {Pagination as SemanticPagination} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class Pagination extends React.Component {
    render() {
        return (
            <SemanticPagination
                defaultActivePage={1}
                totalPages={this.props.pagesCount}
                onPageChange={this.props.paginationChanged}
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
