import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import './index.scss';
import {mapStateToProps} from './container'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: []
        }
    }

    handleClick = (e) => {
        if(e.target.nodeName.toLowerCase() !== 'a')
            return;

        const positionType = e.target.id;
        const positionValue = e.target.innerText;

        this.props.onClick({ [positionType]: positionValue });
    };

    componentWillMount() {
        const { country, city, property } = this.props;
        let sections = [];

        if(country && !city && !property && country.length > 0) {
            sections = [
                { key: 'Home', content: 'Home', id: 'home', link: true },
                { key: country, content: country, id: 'country', link: false },
            ]
        } else if(country && city && !property && city.length > 0) {
            sections = [
                { key: 'Home', content: 'Home', id: 'home', link: true },
                { key: country, content: country, id: 'country', link: true },
                { key: city, content: city, id: 'city', link: false },
            ]
        } else if (country && city && property && property.length > 0) {
            sections = [
                { key: 'Home', content: 'Home', id: 'home', link: true },
                { key: country, content: country, id: 'country', link: true },
                { key: city, content: city, id: 'city', link: true },
                { key: property, content: property, id: 'property', link: false },
            ]
        } else {
            sections = [
                { key: 'Home', content: 'Home', id: 'home', link: true },
            ]
        }

        this.setState({
            sections: sections
        });
    };

    render() {
        return (
            <Breadcrumb onClick={this.handleClick} icon='right angle' sections={this.state.sections}/>
        )
    }
}

Breadcrumbs.propTypes = {
    country: PropTypes.string,
    city: PropTypes.string,
    property: PropTypes.string
};

export default connect(mapStateToProps)(Breadcrumbs);
