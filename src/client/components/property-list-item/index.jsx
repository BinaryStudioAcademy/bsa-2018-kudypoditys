import React from "react";
import {
    Card,
    Message,
    Image,
    Button,
    CardContent,
    Grid,
    CardMeta,
    CardDescription,
    Container,
    Icon,
    Header,
    Label,
    Rating
} from "semantic-ui-react";
import "./index.scss";
import PropTypes from "prop-types";
import {mapStateToProps} from "./container";
import {connect} from "react-redux";
import MapWidgetModal from "client/components/map-widget-modal";
import history from 'client/history';


export class PropertyListItem extends React.Component {
    handleRedirectToMap = id => {
        //todo  handleRedirectToMap
    };
    handleAddToComparison = id => {
        //todo
    };
    handleAddToFavorites = id => {
        //todo
    };
    handleRedirectToDetails = id => {
        history.push('/property-page');
        // this.props.actions.redirectToDetails(id)
    };

    componentDidMount() {
        //  this.props.actions.fetchAllProperty();
    }

    render() {
        const {propertyItemData} = this.props;
        console.log(propertyItemData);

        let ratingStatus = "";
        if (propertyItemData.rating >= 9) {
            ratingStatus = "Excellent";
        } else if (propertyItemData.rating >= 7) {
            ratingStatus = "Very Good";
        } else if (propertyItemData.rating >= 5) {
            ratingStatus = "Good";
        } else if (propertyItemData.rating >= 1) {
            ratingStatus = "Not good";
        }

        return (
            <Card className="property_card"
                  fluid
                  style={{
                    padding: 0,

                }}
            >
                <CardContent>
                    <Grid className="search_page__grid">

                        <Grid.Column style={{
                            width: "20%", paddingLeft: 0,
                            paddingRight: 0
                        }}>
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

                              //todo =>  src={propertyItemData.images[0].url}
                                floated="left"
                                style={{
                                    width: 150,
                                    height: 150
                                }}
                            />
                        </Grid.Column>

                        <Grid.Column style={{
                            width: "80%", paddingLeft: 0,
                            paddingRight: 0
                        }}>
                            <div className="card_row">
                                <div className="header_grd">
                                    <Header
                                        as="h3"
                                        style={{
                                            marginBottom: 6
                                        }}

                                        onClick={this.handleRedirectToDetails}
                                    > <Header.Content
                                        style={{
                                            fontSize: 24,
                                            fontWeight: "bold",
                                            color: "#182c4f",
                                            opacity: 0.8,
                                            cursor: 'pointer'

                                        }} onClick={this.handleRedirectToDetails}
                                    >
                                        {propertyItemData.name}
                                    </Header.Content>

                                    </Header>
                                    <Rating defaultRating={propertyItemData.rating} maxRating={5} disabled/>
                                </div>
                                <div className="rating_block">
                                    <div style={{
                                        textAlign: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        paddingRight: 10
                                    }}>
                                        <div className="ratingName">
                                            {" "}
                                            {ratingStatus}
                                        </div>
                                        <br/>
                                        <span className="reviewsNumber">{propertyItemData.reviewsNamber} reviews</span>

                                    </div>


                                    <div className="rating_num"> {propertyItemData.rating}</div>
                                </div>
                            </div>
                            <div className="card_row__location">

                                <div className="location__span">
                                    <Icon
                                        name="map marker alternate"
                                        size="small"
                                        onClick={this.handleRedirectToMap}
                                    />
                                    {propertyItemData.address +" - "}


                                    <MapWidgetModal
                                        properties={[
                                            {
                                                price: 3000,
                                                name:
                                                    "Avangard Kulisha Apartment",
                                                latitude: propertyItemData.coordinates.lat,
                                                longitude: propertyItemData.coordinates.lng,
                                                imageSrc:
                                                    "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-11.jpg",
                                                address:
                                                    "15 Panteleimona Kulisha Street, Львов",
                                                rating: "8/10"
                                            }
                                        ]}
                                       // startPosition= {propertyItemData.coordinates}
                                        zoom={13}
                                        controlEnable={true}
                                        buttonClass={"searchMapButton"}
                                    />
                                    <span

                                        className="Property_list__distanceToCenter">({propertyItemData.distanceToCenter} km from center)</span>
                                </div>


                            </div>

                            <div className="card_row__price">
                                <div className="roomType">
                                    <Icon name="add user"/>

                                    {/*todo!!! {propertyItemData.rooms[0].roomType.name} */}
                                </div>


                                {/*<div className="price"style={{*/}
                                {/*padding: 10*/}
                                {/*}} >*/}
                                <span className="priceInfo">

                                  {/* US ${propertyItemData.rooms[0].price} */}
                                </span>


                                {/*</div>*/}

                            </div>


                            <div className="card_row__order">
                                <div className="search-page__messages">
                                    <Message className='search_result__message'
                                             style={{

                                                 display:
                                                     propertyItemData.availableRoomsCount ===
                                                     0
                                                         ? "block"
                                                         : "none"
                                             }}
                                    >
                                        Unfortunately we do not have any available rooms
                                    </Message>
                                    <Message className='search_result__message'
                                             style={{

                                                 display:
                                                     propertyItemData.availableRoomsCount ===
                                                     1
                                                         ? "block"
                                                         : "none"
                                             }}
                                    >
                                        The last available room!!!
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
                                            : this
                                                .handleRedirectToDetails
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
export default connect(mapStateToProps)(PropertyListItem);
