import React, { Component, Fragment } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';

import { Banner } from './item';
import { mapStateToProps, mapDispatchToProps } from './container';
import history from "client/history";
import moment from "moment";

export class BannerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            req: '1'
        }
    }

    componentWillMount() {

    }
    componentDidMount() {
        console.log('Hello from component Did mount')
        this.props.getCityInfos();
        // this.setState({lviv:this.props.city1}, ()=>console.log(this.state.city1))
    }
    onCardClick = (query) => {
        console.log(query)
        let path = `/search-page`;
        history.push(path);
        this.props.onSearch({
            query: query,
            rooms: 1,
            adults: 1,
            children: 1,
            startDate: moment(),
            endDate: moment(),

        })
    }

    render() {
        const { cityInfos, currency } = this.props;
        const [
            city1, city2,
            city3, city4, city5, city6
        ] = cityInfos;
        console.log(this.props.lviv)
        return (
            <div className='container'>
                <Grid >
                    <Grid.Row columns='equal'>
                        <Grid.Column>
                            <Banner currency={currency} cityInfo={city1} onClick={() => this.onCardClick('Lviv')} />
                        </Grid.Column>
                        <Grid.Column >
                            <Banner currency={currency} cityInfo={city2} onClick={() => this.onCardClick('Dnipro')} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Banner currency={currency} cityInfo={city3} onClick={() => this.onCardClick('Ternopil')} />
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row columns={3}>
                        <Grid.Column >
                            <Banner currency={currency} cityInfo={city4} onClick={() => this.onCardClick('Kiev')} />
                        </Grid.Column>
                        <Grid.Column >
                            <Banner currency={currency} cityInfo={city5} onClick={() => this.onCardClick('Odessa')} />
                        </Grid.Column>
                        <Grid.Column>
                            <Banner currency={currency} cityInfo={city6} onClick={() => this.onCardClick('Kharkiv')} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );

    }
}

BannerList.propTypes = {
    cityInfos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            city: PropTypes.string.isRequired,
            flagUrl: PropTypes.string.isRequired,
            properties: PropTypes.number.isRequired,
            avgPrice: PropTypes.number.isRequired,
            pictureUrl: PropTypes.string.isRequired
        })
    ).isRequired
};

BannerList.defaultProps = {
    cityInfos: []
};

export default connect(mapStateToProps, mapDispatchToProps)(BannerList);


