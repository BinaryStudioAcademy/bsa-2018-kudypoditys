import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './index.scss';
import tag from 'client/components/region-banner-list/img/tag.svg';

export class Banner extends Component {

    render() {
        const { cityInfo, onCardClick } = this.props;
        const imgStyles = (url) => ({
            background: `url(${url})`,
            backgroundSize: 'cover',
        });

        return (
            <Container onClick={onCardClick} className="banner" style={imgStyles(cityInfo.pictureUrl)}>
                <Card.Content>
                    <Card.Header className="title">
                        {cityInfo.city}
                        <img src={cityInfo.flagUrl} alt="/" style={{ width: 59 }} />
                    </Card.Header>
                    <Card.Meta>
                        <h5 className="subtitle">{Intl.NumberFormat('en-US').format(cityInfo.properties)}   properties</h5>
                    </Card.Meta>
                    <Card.Description className="avg-price" style={{ backgroundImage: `url(${tag})` }}>
                        <span className="avg-price_text">
                            Average price
                        </span>
                        <span className="avg-price_count">
                            UAH  {Intl.NumberFormat('en-US').format(cityInfo.avgPrice)}
                        </span>

                    </Card.Description>
                </Card.Content>

            </Container>

        );
    }
}

Banner.propTypes = {
    cityInfo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        flagUrl: PropTypes.string.isRequired,
        properties: PropTypes.number.isRequired,
        avgPrice: PropTypes.number.isRequired,
        pictureUrl: PropTypes.string.isRequired
    }),

    onCardClick: PropTypes.func
};