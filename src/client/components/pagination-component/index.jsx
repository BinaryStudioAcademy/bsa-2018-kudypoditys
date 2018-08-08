import React from 'react';
import { Pagination, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export class PaginationComponent extends React.Component {
    render() {
        return (
            <Pagination
                defaultActivePage={1}
                totalPages={this.props.pagesCount}
                onPageChange={this.props.paginationChanged}
            />
        )
    }
}

PaginationComponent.propTypes = {
    pagesCount: PropTypes.number
}

PaginationComponent.defaultProps = {
    pagesCount: 1
}
