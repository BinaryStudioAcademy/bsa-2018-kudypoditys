import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import './index.scss';
import {mapStateToProps} from './container'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Breadcrumbs extends React.Component {
    render() {
        return (
            <Breadcrumb icon='right angle' sections={this.props.sections} />
        )
    }
}
Breadcrumbs.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            content: PropTypes.string,
            href: PropTypes.string,
        }))
}
export default connect(mapStateToProps)(Breadcrumbs);
