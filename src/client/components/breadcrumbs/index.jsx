import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import './index.scss';
import {mapStateToProps} from './container'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            breadcrumbsSections: [
                {key: 'Home', content: 'Home', href: '#'},
                {key: 'Ukraine', content: 'Ukraine', href: '#'},
                {key: 'Lviv', content: 'Lviv', href: '#'},
                {key: 'Awesome Apart', content: 'Awesome Apart', active: true},
            ]
        }
    }
    render() {
        return (
            <Breadcrumb icon='right angle' sections={this.state.breadcrumbsSections}/>
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
