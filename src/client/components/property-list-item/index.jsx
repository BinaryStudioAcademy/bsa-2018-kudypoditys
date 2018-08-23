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
            <Card
                fluid
                style={{
                    padding: 0,

                }}
            >
                <CardContent>
                    <Grid>
                        <Grid.Column style={{width: "24%"}}>
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

                                src={propertyItemData.image}
                                floated="left"
                                style={{
                                    width: 150,
                                    height: 150
                                }}
                            />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header
                                as="h3"


                                onClick={this.handleRedirectToDetails}
                            >

                                <Header.Content
                                    style={{
                                        fontSize: 24,
                                        fontWeight: "bold",
                                        color: "#182c4f",
                                        opacity: 0.8

                                    }}
                                >
                                    {propertyItemData.name}
                                </Header.Content>
                            </Header>
                            <Rating defaultRating={propertyItemData.propertyStars} maxRating={5} disabled/>
                            <CardMeta
                                style={{
                                    marginTop: 4
                                }}
                            >
                                <Container className="location__span">
                                    <Icon
                                        name="map marker alternate"
                                        size="small"
                                        onClick={this.handleRedirectToMap}
                                    />

                                    {propertyItemData.location}
                                    <MapWidgetModal
                                        properties={[
                                            {
                                                price: 3000,
                                                name:
                                                    "Avangard Kulisha Apartment",
                                                latitude: 49.8376405,
                                                longitude: 24.0253219,
                                                imageSrc:
                                                    "https://www.hotelimperialeroma.it/data/jpg/hotel-imperiale-rome-11.jpg",
                                                address:
                                                    "15 Panteleimona Kulisha Street, Львов",
                                                rating: "8/10"
                                            }
                                        ]}
                                        startPosition={{
                                            latitude: 49.837089,
                                            longitude: 24.021161
                                        }}
                                        zoom={13}
                                        controlEnable={true}
                                        buttonClass={"searchMapButton"}
                                    />
                                    <span className="Property_list__distanceToCenter">({propertyItemData.distanceToCenter} km from center)</span>
                                </Container>
                            </CardMeta>

                            <Message className='search_result__message'
                                style={{
                                    color: "red",
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
                                    color: "red",
                                    display:
                                        propertyItemData.availableRoomsCount ===
                                        1
                                            ? "block"
                                            : "none"
                                }}
                            >
                                The last available room!!!
                            </Message>
                        </Grid.Column>
                        <Grid.Column style={{width: "24%"}}>
                            <Grid columns={2}>
                                <Grid.Column>
                                    <Container style={{textAlign: "center"}}>
                                        <span className="ratingName">
                                            {" "}
                                            {ratingStatus}
                                        </span>
                                        <br/>
                                        <span className="reviewsNumber">{propertyItemData.reviewsNamber} reviews</span>

                                    </Container>
                                </Grid.Column>
                                <Grid.Column style={{textAlign: "right"}}>

                                    <span className="rating"> {propertyItemData.rating}</span>
                                </Grid.Column>
                            </Grid>
                            <Grid columns={1}>
                                <Grid.Column>

                                    <Container
                                        floated="right"
                                        textAlign="right"
                                        style={{

                                            display:
                                                propertyItemData.availableRoomsCount ===
                                                0
                                                    ? "none"
                                                    : "block"
                                        }}
                                    >
                                        <span className="priceInfo">

                                            {propertyItemData.priceFrom}

                                            {propertyItemData.curency}
                                        </span>

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
                                            Choose room
                                        </Button>
                                    </Container>
                                </Grid.Column>
                            </Grid>
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
        location: PropTypes.string.isRequired,
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
