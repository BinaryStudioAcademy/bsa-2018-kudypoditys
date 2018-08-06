import React from 'react';
import './index.scss';
import {Header} from 'semantic-ui-react';
import PropTypes from 'prop-types';


export class SearchSummaryComponent extends React.Component {
    static defaultProps = {
        numberOfMatched: 0
    };

    constructor(props) {
        super(props);

        this.state = {

            // destination: this.props.destination,
            // numberOfMatched: this.props.numberOfMatched


            //stories mock
            destination: this.props.data.destination,
            numberOfMatched: this.props.data.numberOfMatched

        };


    }

    render() {
        const destination = this.state.destination,
            //pretty numbers are here
            number = this.state.numberOfMatched.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');

        return (

            <Header
                as='h1'
                style={{'font-size': '23px', 'padding': '10px', 'line-height': '1.2'}}>
                {destination}: {number} properties found
            </Header>


        )
    }


}


SearchSummaryComponent.propTypes = {
    destination: PropTypes.string.isRequired,
    numberOfMatched: PropTypes.number.isRequired
};