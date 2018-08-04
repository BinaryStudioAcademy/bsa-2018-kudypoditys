import React, { PropTypes } from 'react';
import './index.scss';
import {Header, Container,} from 'semantic-ui-react';



class SearchSummaryComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            destination: this.props.destination,
            numberOfMatched: this.props.numberOfMatched


            //stories mock
            // destination: this.props.data.destination,
            // numberOfMatched: this.props.data.numberOfMatched

        };


    }



    static defaultProps = {
          numberOfMatched: 0
    };


    render() {
        const destination = this.state.destination,
            number = this.state.numberOfMatched.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');

        return (

            <Header as='h1' className='search-sum'>
                {destination}: {number} properties found
            </Header>



        )
    }


}


export default SearchSummaryComponent;