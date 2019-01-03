import React from "react";
import "./index.scss";
import {
    Divider,
    Container,
    List,
    Header,
    Icon,
    Sidebar,
    Label,
    Popup
} from "semantic-ui-react";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./container";
import AppHeader from "client/components/header";
import AvailabilityPanel from "client/components/availability-panel";
import Slider from "client/components/slider";
import PropertyDescription from "client/components/property-description";
import {PropertySummary} from "client/components/property-summary";
import {NavigationBar} from "client/components/navigation-bar";
import BasicMapWidget from "client/components/basic-map-widget";
import Modal from "../../components/modal";
import BookingForm from "../../components/booking-form";
import ReactDOM from "react-dom";
import HouseRules from "./rules";
import PaymentMethods from "./payment";
import Reviews from "../../components/reviews";
import {
    getGroupedArray,
    getAvgFromArray
} from "client/helpers/avgReviewRating";
import {PropertyCommentsList} from "client/components/property-comments-list";
import RoomsTable from "client/components/rooms-table";
import {socket} from '../../logic/socket';
import * as moment from 'moment';

export class PropertyPage extends React.Component {
    toggleReviews = () => {
        this.setState({reviewsVisible: !this.state.reviewsVisible});
    };

    componentWillMount() {
        this.props.getProperty(this.props.match.params.id);
        this.props.getBookings();
        this.props.getRooms(
            this.props.match.params.id,
            this.props.checkIn,
            this.props.checkOut
        );
        socket.connect();
        socket.emit('openPropertyRoom',this.props.match.params.id);
        socket.emit('openPropertyPage',this.props.match.params.id);
        socket.on('nowLooking',(res) => this.setState({nowLooking : res}));
    }

    componentWillUnmount() {
        this.props.clearPropertyPageSlice();
        socket.emit('leavePropertyRoom',this.props.property.id);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    getImagesArray(propertyImages) {
        let images = [];
        for (let i = 0; i < propertyImages.length; i++) {
            images.push(propertyImages[i].url);
        }
        return images;
    }

    scrollTo = targetRef => {
        const node = ReactDOM.findDOMNode(this.refs[targetRef]);
        node.scrollIntoView();
    };
    hideReviews = () => {
        this.setState({reviewsVisible: false});
    };
    handleSearchResults = searchResult => {
    };

    constructor(props) {
        super(props);
        this.state = {
            reviewsVisible: false,
            nowLooking : 0
        };
    }

    render() {
        const {property, user, rooms} = this.props;
        // const avgPropRatingArray = getGroupedArray(property.reviews, "avgReview")
        const {reviewsVisible} = this.state;
        const dividerStyle = {
            color: "#465672",
            borderTop: "1px solid #46567215",
            borderBottom: "1px solid #465672"
        };
        const headerStyle = {
            color: "#465672",
            cursor: "default"
        };
        if (!property)
            return (
                <div className="centeredqqq">
                    <div className="lds-spinner">
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
            );
        const notes = property.notes;
        //AVG PROPERTY RATING
        const avgPropRatingArray = getGroupedArray(
            property.reviews,
            "avgReview"
        );
        const avgPropRating = getAvgFromArray(avgPropRatingArray);

        const pics = this.getImagesArray(property.images);

        let lastBookedTime = 0;

        if(property.lastBooked)
        {
            const bookedTime = moment().diff(property.lastBooked, 'minutes');
            lastBookedTime = bookedTime !== 0 ? bookedTime : 1;
        }
              
        return (
            <div className="mock">
                <AppHeader
                    showSearch={true}
                    handleSearchResults={this.handleSearchResults}
                />

                <Sidebar
                    onHide={this.hideReviews}
                    visible={reviewsVisible}
                    animation="overlay"
                    direction="right"
                    width="very wide"
                    vertical
                    style={{
                        backgroundColor: "white",
                        boxShadow: "0 0 3px 1px #dddddd"
                    }}
                >
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            padding: "20px 15px 0 20px"
                        }}
                    >
                        <Reviews property={property}/>
                    </div>
                </Sidebar>
                <Sidebar.Pusher>
                    <div className="property-page__wrapper">
                        <div text className="property-page__wrapper-left_side">
                            {
                                <Modal
                                    trigger={
                                        <div
                                            className="book-btn"
                                            style={{
                                                height: "33px",
                                                visibility:
                                                    !user ||
                                                    ((!rooms ||
                                                        !rooms.length) &&
                                                        user)
                                                        ? "hidden"
                                                        : "visible"
                                            }}
                                        >
                                            <button>Book now</button>
                                            <div
                                                className="book-icon"
                                                style={{
                                                    cursor: "pointer"
                                                }}
                                            >
                                                <Icon
                                                    name="bookmark"
                                                    size="large"
                                                />
                                            </div>
                                        </div>
                                    }
                                    onClose={this.props.clearBookingForm}
                                    closeIcon
                                >
                                    <BookingForm
                                        rooms={rooms}
                                        paymentTypes={property.paymentTypes}
                                    />
                                </Modal>
                            }
                            <Divider
                                style={{
                                    ...dividerStyle,
                                    width: "250px"
                                }}
                            />
                            <Modal
                                trigger={
                                    <span>
                                        <BasicMapWidget
                                            key="BasicMapWidget"
                                            properties={[property]}
                                            coordinates={property.coordinates}
                                            controlEnable={false}
                                            rounded
                                            centered
                                        />
                                    </span>
                                }
                                fullScreen
                            >
                                <BasicMapWidget
                                    style={{width: "100%", height: "100%"}}
                                    coordinates={property.coordinates}
                                    properties={[property]}
                                    controlEnable={true}
                                    disablePopup={true}
                                    fullScreen
                                />
                            </Modal>
                            <PropertyCommentsList style={{width: "100%", height: "100%"}} {...property} />
                        </div>

                        <Container
                            text
                            className="property-page__wrapper-right_side"
                        >
                            <NavigationBar
                                reviewsCount={property.reviews.length}
                                facilitiesClick={() => {
                                    this.scrollTo("facilitiesRef");
                                }}
                                infoClick={() => {
                                    this.scrollTo("roomsRef");
                                }}
                                reviewsClick={() => {
                                    this.toggleReviews();
                                }}
                            />
                            <Divider/>
                            <PropertySummary
                                rating={avgPropRating}
                                totalReviews={property.reviews.length}
                                property={property}
                                labelBelow={notes && notes.recentlyBooked}
                                nowLooking={this.state.nowLooking}
                            />
                            {notes && notes.recentlyBooked ? (
                                <Label
                                    color="orange"
                                    tag
                                    style={{left: 0, marginBottom: 15}}
                                >
                                    This property was booked{" "}
                                    {notes.recentlyBooked} time
                                    {notes.recentlyBooked === 1 ? "" : "s"}{" "}
                                    today
                                </Label>
                            ) : null}
                            { lastBookedTime ? 
                                lastBookedTime < 60 ? (<Popup trigger={
                                <Label
                                    color="red"
                                    tag
                                    style={{left:10, marginBottom: 15}}>
                                    {<Icon name="clock"/>} {"Someone just booked this"}
                                </Label>
                                }  
                            content={`Last booked: ${lastBookedTime} minutes ago`} />)
                            :
                             (
                                <Label
                                    color="red"
                                    tag
                                    style={{left:10, marginBottom: 15}}>
                                    {<Icon name="clock"/>} {`Last booked: ${parseInt(lastBookedTime/60, 10)} hour ago`}
                                </Label>
                             )
                            : null
                            }
                            <br/>    
                            <Slider pics={pics} slideIndex={0}/>

                            <Divider hidden/>
                            <div
                                className="property-page__description"
                                style={{width: "100%"}}
                            >
                                <PropertyDescription
                                    property={property}
                                    style={{width: "100%"}}
                                />
                                <Divider style={dividerStyle}/>
                                <Container
                                    text
                                    style={{
                                        display: "table",
                                        lineHeight: 1.2,
                                        width: "100%"
                                    }}
                                >
                                    <div className="facilities-section">
                                        <div ref={"facilitiesRef"}>
                                            <Header as="h2" style={headerStyle}>
                                                Facilities
                                            </Header>
                                            <List>
                                                {property.facilityLists.map(
                                                    (item, i) => {
                                                        return (
                                                            <List.Item
                                                                style={{
                                                                    marginBottom:
                                                                        "5px"
                                                                }}
                                                            >
                                                                <List.Content>
                                                                    <span
                                                                        key={i}
                                                                        style={{
                                                                            fontSize: 16,
                                                                            lineHeight: 1.2,
                                                                            color:
                                                                                "rgb(166,174,188)"
                                                                        }}
                                                                    >
                                                                        {
                                                                            item
                                                                                .facility
                                                                                .name
                                                                        }
                                                                    </span>
                                                                </List.Content>
                                                            </List.Item>
                                                        );
                                                    }
                                                )}
                                            </List>
                                        </div>
                                        <div className="rules-payment-section">
                                            <Header as="h2" style={headerStyle}>
                                                Hotel Policy
                                            </Header>
                                            <HouseRules
                                                rules={
                                                    property.accommodationRule
                                                }
                                            />
                                            <Header as="h2" style={headerStyle}>
                                                Payment Method
                                            </Header>
                                            <PaymentMethods
                                                paymentTypes={
                                                    property.paymentTypes
                                                }
                                            />
                                        </div>
                                    </div>
                                </Container>
                            </div>

                            <Divider
                                style={{
                                    color: "#465672",
                                    borderTop: "1px solid #46567215",
                                    borderBottom: "1px solid #465672"
                                }}
                            />

                            <AvailabilityPanel style={{width: "100%"}}/>
                            <Divider style={dividerStyle}/>
                            <div ref={"roomsRef"}>
                                <Header
                                    as="h2"
                                    style={{
                                        ...headerStyle,
                                        paddingLeft: "15px"
                                    }}
                                >
                                    Rooms
                                </Header>
                                <RoomsTable
                                    roomsZ = {rooms}
                                />
                                {/*<RoomsSummaryTable*/}
                                    {/*ref={"roomsRef"}*/}
                                    {/*rooms={rooms}*/}
                                {/*/>*/}
                            </div>
                            <Divider hidden/>
                        </Container>
                    </div>
                </Sidebar.Pusher>
            </div>
        )
            ;
    }
}

PropertyPage.propTypes = {};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyPage);
