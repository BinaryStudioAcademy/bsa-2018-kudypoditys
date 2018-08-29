import React, { Component, Fragment } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';

import { Banner } from './item';
import { mapStateToProps, mapDispatchToProps } from './container';

export class BannerList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCityInfos();
    }

    onCardClick = (cityId) => {
        // some logic ...

    }

    render() {
        const { cityInfos } = this.props;
        const [
            city1, city2,
            city3, city4, city5, city6
        ] = cityInfos;

        return (
            <Grid >
                <Grid.Row columns='equal'>
                    <Grid.Column>
                        <Banner cityInfo={city1} onClick={() => this.onCardClick(city1.id)} />
                    </Grid.Column>
                    <Grid.Column >
                        <Banner cityInfo={city2} onClick={() => this.onCardClick(city2.id)} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Banner cityInfo={city3} onClick={() => this.onCardClick(city3.id)} />
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row columns={3}>
                    <Grid.Column >
                        <Banner cityInfo={city4} onClick={() => this.onCardClick(city4.id)} />
                    </Grid.Column>
                    <Grid.Column >
                        <Banner cityInfo={city5} onClick={() => this.onCardClick(city5.id)} />
                    </Grid.Column>
                    <Grid.Column>
                        <Banner cityInfo={city6} onClick={() => this.onCardClick(city6.id)}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
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


