import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./index.scss";
import { Banner } from "./item";
import { mapStateToProps, mapDispatchToProps } from "./container";
import history from "client/history";
import moment from "moment";
import _ from "lodash";
import _fp from "lodash/fp";

export class BannerList extends Component {

    componentWillMount() {
        this.props.getCityInfos();
    };

    onCardClick = query => {
        const path = `/search-page`;
        history.push(path);
        this.props.onSearch({
            query: query,
            rooms: 1,
            adults: 1,
            children: 1,
            startDate: moment().startOf("day"),
            endDate: moment().startOf("day").add(1, "days")
        });
    };

    addGridParametersToCities = cities => {
        return _.map(cities, (city, i) => ({
            ...city,
            width: i === 2 ? 8 : null
        }));
    }

    render() {
        const quantityCards = 3;
        const { cityInfos, currency } = this.props;
        const citiesRows = _fp.flow(
            this.addGridParametersToCities,
            _fp.chunk(quantityCards)
        )(cityInfos.cities);

        return (
            <div className='container'>
                {_.head(citiesRows) ? (
                <Grid>
                        {_.map(citiesRows, (cities, index) => (
                        <Grid.Row key={index} columns='equal'>
                            { _.map(cities, city => (
                                <Grid.Column width={city.width} key={city.id}>
                                    <Banner
                                        currency={currency}
                                        cityInfo={city}
                                        onClick={() => this.onCardClick(city.name)}
                                    />
                                </Grid.Column>
                            ))}
                        </Grid.Row>
                    ))}
                </Grid>
            ) : null}
            </div>
        );
    };
}

BannerList.propTypes = {
    cityInfos:  PropTypes.objectOf(
                    PropTypes.arrayOf(
                        PropTypes.shape({
                            id: PropTypes.number.isRequired,
                            name: PropTypes.string.isRequired,
                            properties: PropTypes.number.isRequired,
                            avgPrice: PropTypes.number.isRequired,
                            imageUrl: PropTypes.string.isRequired,
                            flagUrl: PropTypes.string.isRequired
                        })
                    )
                )
};

BannerList.defaultProps = {
    cityInfos: {
        cities: []
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BannerList);
