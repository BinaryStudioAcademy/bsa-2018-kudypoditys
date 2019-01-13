import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./index.scss";
import { Banner } from "./item";
import { mapStateToProps, mapDispatchToProps } from "./container";
import history from "../../history";
import moment from "moment";
import _ from "lodash"

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
        const { cityInfos, currency} = this.props;
        cityInfos.cities = this.addGridParametersToCities(cityInfos.cities);
        cityInfos.cities = _.chunk(cityInfos.cities, quantityCards);
        return (
            <div className='container'>
            { _.head(cityInfos.cities) ? (
                <Grid>
                    { _.map(cityInfos.cities, (cities, index) => (
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
