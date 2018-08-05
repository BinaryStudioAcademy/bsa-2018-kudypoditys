import React, { Component } from 'react';
import { Card, Grid, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import 'client/components/region-banner-component/index.scss';

import { BannerComponent } from './banner';

export default class BannerListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onCardClick = (cityId) => {
        // some logic ...

    }

    render() {
        const { cityInfos } = this.props;
        const [
            city1, city2,
            city3, city4, city5
        ] = cityInfos;

        return (
            <Grid >
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <BannerComponent cityInfo={city1} onClick={() => this.onCardClick(city1.id)} />
                    </Grid.Column>
                    <Grid.Column >
                        <BannerComponent cityInfo={city2} onClick={() => this.onCardClick(city2.id)} />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                    <Grid.Column >
                        <BannerComponent cityInfo={city3} onClick={() => this.onCardClick(city3.id)} />
                    </Grid.Column>
                    <Grid.Column >
                        <BannerComponent cityInfo={city4} onClick={() => this.onCardClick(city4.id)} />
                    </Grid.Column>
                    <Grid.Column >
                        <BannerComponent cityInfo={city5} onClick={() => this.onCardClick(city5.id)} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );

    }
}

BannerListComponent.propTypes = {
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
