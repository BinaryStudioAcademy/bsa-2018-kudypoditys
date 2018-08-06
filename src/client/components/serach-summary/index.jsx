import React from 'react';
import './index.scss';
import {Header} from 'semantic-ui-react';
import PropTypes from 'prop-types';


export class SearchSummary extends React.Component {
    static defaultProps = {
        numberOfMatched: 0
    };


    render() {
        const destination = this.props.data.destination,
            //pretty numbers are here
            number = this.props.data.numberOfMatched.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');

        return (

            <Header
                as="h1"
                style={{fontSize: 23, padding: 10, lineHeight: 1.2}}>
                {destination}: {number} properties found
            </Header>


        )
    }


}


SearchSummary.propTypes = {
    destination: PropTypes.string.isRequired,
    numberOfMatched: PropTypes.number.isRequired
};