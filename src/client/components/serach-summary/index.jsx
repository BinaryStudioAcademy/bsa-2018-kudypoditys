import React from 'react';
import './index.scss';
import {Header} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import formatNumber from 'client/helpers/formatNumber'

export class SearchSummary extends React.Component {
    static defaultProps = {
        numberOfMatched: 0
        
    };


    render() {
        const numbersToPrettify = this.props.data.numberOfMatched,
            destination = this.props.data.destination,
            numbers = formatNumber(numbersToPrettify);


        return (

            <Header
                as="h1"
                style={{fontSize: 23, padding: 10, lineHeight: 1.2}}
            >
                {destination}: {numbers} properties found
            </Header>


        )
    }


}


SearchSummary.propTypes = {
    destination: PropTypes.string,
    numberOfMatched: PropTypes.number
};