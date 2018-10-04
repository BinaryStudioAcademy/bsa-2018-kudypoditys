import React from "react";
import {
    Card,
    Message,
    Image,
    Button,
    CardContent,
    Grid,
    Icon,
    Header,
    Label,
    Rating
} from "semantic-ui-react";
import "./index.scss";
import PropTypes from "prop-types";
import { mapStateToProps, mapDispatchToProps } from "./container";
import { connect } from "react-redux";
import MapWidgetModal from "client/components/map-widget-modal";
import history from "client/history";
import {
    getGroupedArray,
    getAvgFromArray
} from "client/helpers/avgReviewRating";
import RatingBlock from "../reviews/ratingBlock";
import { convert } from '../../helpers/convertCurrency';

export class PropertyListItem extends React.Component {
    handleRedirectToMap = id => {
        //todo  handleRedirectToMap
    };
    handleRedirectToDetails = () => {
        if (history.location.search !== "") {
            history.push({
                pathname: "/property/" + this.props.propertyItemData.id,
                search: history.location.search
            });
            this.props.onRedirectOnDetails(); // TODO
        } else {
            history.push("/property/" + this.props.propertyItemData.id);
        }
    };

    componentDidMount() {
        //  this.props.actions.fetchAllProperty();
    }

    render() {
        const {
            propertyItemData, itemIndex, currency, allCurrencies
        } = this.props;

        const propertyCurrency = propertyItemData.currency.code;

        // AVG PROPERTY RATING
        const avgPropRatingArray = getGroupedArray(
            propertyItemData.reviews,
            "avgReview"
        );
        const avgPropRating = getAvgFromArray(avgPropRatingArray);

        let currentBg;
        if (itemIndex === 0) {
            currentBg = "#f9fbff";
        } else {
            currentBg = "";
        }
        return (
            <Card
                className="property_card"
                fluid
                style={{
                    padding: 0,
                    backgroundColor: currentBg
                }}
            >
                <CardContent>
                    <Grid className="search_page__grid">
                        <Grid.Column
                            style={{
                                width: "20%",
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                        >
                            <Label
                                as="a"
                                color="orange"
                                ribbon
                                style={{
                                    display:
                                        propertyItemData.mealType === undefined
                                            ? "none"
                                            : "block"
                                }}
                            >
                                {propertyItemData.mealType}
                            </Label>
                            <Image
                                src={propertyItemData.images[0].url}
                                floated="left"
                                style={{
                                    width: 150,
                                    height: 150
                                }}
                            />
                        </Grid.Column>

                        <Grid.Column
                            style={{
                                width: "80%",
                                paddingLeft: 0,
                                paddingRight: 0
                            }}
                        >
                            <div className="card_row">
                                <div className="header_grd">
                                    <Header
                                        as="h3"
                                        style={{
                                            marginBottom: 6
                                        }}
                                        onClick={this.handleRedirectToDetails}
                                    >
                                        {" "}
                                        <Header.Content
                                            style={{
                                                fontSize: 24,
                                                fontWeight: "bold",
                                                color: "#182c4f",
                                                // opacity: 0.8,
                                                cursor: "pointer"
                                            }}
                                            onClick={
                                                this.handleRedirectToDetails
                                            }
                                        >
                                            {propertyItemData.name}
                                        </Header.Content>
                                    </Header>
                                    <Rating
                                        defaultRating={propertyItemData.rating}
                                        maxRating={5}
                                        disabled
                                    />
                                </div>


                                <div className="rating_listItem">
                                    <RatingBlock
                                        avgPropRating={avgPropRating}
                                        reviewsCount={
                                            propertyItemData.reviews.length
                                        }
                                        property={propertyItemData}
                                    />
                                </div>
                            </div>
                            <div className="card_row__location">
                                <div className="location__span">
                                    <Icon
                                        name="map marker alternate"
                                        size="small"
                                        onClick={this.handleRedirectToMap}
                                    />
                                    {propertyItemData.address + " - "}

                                    <MapWidgetModal
                                        style={{
                                            width: "100%",
                                            height: "100%"
                                        }}
                                        properties={[
                                            {
                                                currency: propertyItemData.currency,
                                                price:
                                                    propertyItemData.rooms[0]
                                                        .price,
                                                name: propertyItemData.name,
                                                coordinates: {
                                                    lat:
                                                        propertyItemData
                                                            .coordinates.lat,
                                                    lng:
                                                        propertyItemData
                                                            .coordinates.lng
                                                },
                                                latitude:
                                                    propertyItemData.coordinates
                                                        .lat,
                                                longitude:
                                                    propertyItemData.coordinates
                                                        .lng,
                                                imageSrc:
                                                    propertyItemData.images[0]
                                                        .url,
                                                address:
                                                    propertyItemData.address,
                                                rating: propertyItemData.rating
                                            }
                                        ]}
                                        startPosition={{
                                            latitude:
                                                propertyItemData.coordinates
                                                    .lat,
                                            longitude:
                                                propertyItemData.coordinates.lng
                                        }}
                                        zoom={13}
                                        controlEnable={true}
                                        fullScreen
                                        buttonClass={"searchMapButton"}
                                    />
                                    <span className="Property_list__distanceToCenter">
                                        ({propertyItemData.distanceToCentre} km
                                        from center)
                                    </span>
                                </div>
                            </div>

                            <div className="card_row__price">
                                <div className="roomType">
                                    <Icon name="add user" />

                                    {propertyItemData.rooms[0].roomType.name}
                                </div>
                                <span className="priceInfo">
                                    {currency.code} {convert(propertyCurrency, propertyItemData.rooms[0].price, currency.code)}
                                </span>
                            </div>

                            <div className="card_row__order">
                                <div className="search-page__messages">
                                    <Message
                                        className="search_result__message"
                                        style={{
                                            display:
                                                propertyItemData.id % 2 === 0
                                                    ? "block"
                                                    : "none"
                                        }}
                                    >
                                        Property was recently booked!
                                    </Message>
                                </div>

                                <Button
                                    className="search-page__main-button"
                                    color={
                                        propertyItemData.availableRoomsCount ===
                                            0
                                            ? "grey"
                                            : "blue"
                                    }
                                    floated="right"
                                    onClick={
                                        propertyItemData.availableRoomsCount ===
                                            0
                                            ? ""
                                            : this.handleRedirectToDetails
                                    }
                                >
                                    Choose your room
                                </Button>
                            </div>
                        </Grid.Column>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

PropertyListItem.propTypes = {
    propertyItemData: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        address: PropTypes.string.isRequired,
        coordinates: PropTypes.string.isRequired,
        distanceToCenter: PropTypes.number.isRequired,
        priceTo: PropTypes.number.isRequired,
        priceFrom: PropTypes.number.isRequired,
        curency: PropTypes.string.isRequired,
        reviewsNamber: PropTypes.number.isRequired,
        locationRating: PropTypes.number.isRequired,
        availableRoomsCount: PropTypes.number.isRequired,
        mealType: PropTypes.string
    })
};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyListItem);
