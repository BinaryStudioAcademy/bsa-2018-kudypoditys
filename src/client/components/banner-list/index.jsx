import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./index.scss";

import { Banner } from "./item";
import { mapStateToProps, mapDispatchToProps } from "./container";
import history from "client/history";
import moment from "moment";

export class BannerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            req: "1"
        };
    }

    componentWillMount() {
        this.props.getCityInfos();
        // this.setState({lviv:this.props.city1}, ()=>console.log(this.state.city1))
    }
    onCardClick = query => {
        let path = `/search-page`;
        history.push(path);
        this.props.onSearch({
            query: query,
            rooms: 1,
            adults: 1,
            children: 1,
            startDate: moment(),
            endDate: moment()
        });
    };

    render() {


        const { cityInfos, currency} = this.props;
        const {Dnipro, Kiev, Odessa, Lviv, Kharkiv, Ternopil} = cityInfos;

        return (
            <div className='container'>
                <Grid >
                    <Grid.Row columns='equal'>
                        <Grid.Column>
                            <Banner
                                currency={currency}
                                cityInfo={Lviv}
                                onClick={() => this.onCardClick("Lviv")}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Banner
                                currency={currency}
                                cityInfo={Dnipro}
                                onClick={() => this.onCardClick("Dnipro")}
                            />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Banner
                                currency={currency}
                                cityInfo={Ternopil}
                                onClick={() => this.onCardClick("Ternopil")}
                            />
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Banner
                                currency={currency}
                                cityInfo={Kiev}
                                onClick={() => this.onCardClick("Kiev")}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Banner
                                currency={currency}
                                cityInfo={Odessa}
                                onClick={() => this.onCardClick("Odessa")}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Banner
                                cityInfo={Kharkiv}
                                onClick={() => this.onCardClick("Kharkiv")}
                            />
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BannerList);
