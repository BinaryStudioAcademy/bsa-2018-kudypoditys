import React from "react";
import {
    Container,
    Segment,
    Grid,
    Image,
    Button,
    Header,
    Icon,
    Message
} from "semantic-ui-react";
import "./booking-segment.scss";
import moment from "moment";
import {
    getPropReviewsArray,
    getPropToggler
} from "client/helpers/reviewToggler";
import Modal from "../modal";
import ReviewForm from "../reviews/addReviewForm";
import MapWidgetModal from "client/components/map-widget-modal";

export class BookingSegment extends React.Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            modalOpen: false
        };
    }

    handleOpen = () => {
        this.setState({ modalOpen: true });
    };

    handleClose = () => {
        this.setState({ modalOpen: false });
    };

    viewBooking = (event, id) => {
        event.preventDefault();
        this.props.viewBooking(id);
    };

    render() {
        const { images, booking } = this.props;
        const dateIn = new Date(booking.dateIn),
            dateOut = new Date(booking.dateOut);

        const start = moment(dateIn);
        const end = moment(dateOut);
        const now = moment();
        const duration = moment.duration(end.diff(start));
        const days = Math.round(duration.asDays());
        const price = Number(booking.room.price) * days;

        let shouldRenderForm = false;

        if (now > start) {
            shouldRenderForm = true;
        }

        return (
            <Segment vertical className="booking-container">
                <Grid className="booking">
                    <Grid.Row className="booking-header">
                        <Grid.Column width={4} textAlign="left" />
                        <Grid.Column width={7} className="booking-info">
                            <Header as="h4">
                                {booking.room.property.name}
                            </Header>
                            <Icon name="map marker alternate" />
                            {console.log(
                                "price",
                                booking.room.price,

                                "name",
                                booking.room.property.name,
                                "coordinates",
                                booking.room.property.coordinates,

                                "imageSrc",
                                booking.room.property.images[0].url,

                                "address",
                                booking.room.property.address,

                                "rating",
                                booking.room.property.rating
                            )}
                            <MapWidgetModal
                                buttonText={booking.room.property.address}
                                properties={[
                                    {
                                        price: booking.room.price,
                                        name: booking.room.property.name,
                                        coordinates:
                                            booking.room.property.coordinates,
                                        imageSrc:
                                            booking.room.property.images[0].url,
                                        address: booking.room.property.address,
                                        rating: booking.room.property.rating
                                    }
                                ]}
                                startPosition={{
                                    latitude:
                                        booking.room.property.coordinates.lat,
                                    longitude:
                                        booking.room.property.coordinates.lng
                                }}
                                zoom={13}
                                controlEnable={true}
                                buttonClass={"searchMapButton"}
                            />

                            <p className="booking-phone">
                                <Icon name="phone" />
                                {booking.room.property.contactPhone}
                            </p>
                            <p className="booking-price">
                                <Icon name="dollar sign" />
                                USD {price}
                            </p>
                            {/* <p className="booking-code">
                                <Icon name="barcode" />
                                 {price}
                            </p> */}
                        </Grid.Column>
                        <Grid.Column width={5} floated="right">
                            <Grid columns={2} divided>
                                <Grid.Column
                                    className="check-date"
                                    textAlign="center"
                                >
                                    <p>CHECK-IN</p>
                                    <Header as="h2">
                                        {moment(dateIn).format("MMM DD")}
                                    </Header>
                                    <p>{moment(dateIn).format("dddd, YYYY")}</p>
                                </Grid.Column>
                                <Grid.Column
                                    className="check-date"
                                    textAlign="center"
                                >
                                    <p>CHECK-OUT</p>
                                    <Header as="h2">
                                        {moment(dateOut).format("MMM DD")}
                                    </Header>
                                    <p>
                                        {moment(dateOut).format("dddd, YYYY")}
                                    </p>
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="booking-footer" verticalAlign="bottom">
                        <Grid.Column width={4}>
                            <Image
                                src={images[0].url}
                                className="booking-image"
                            />
                        </Grid.Column>

                        <Grid.Column
                            width={12}
                            style={{ display: "flex", flexDirection: "row" }}
                        >
                            <Button
                                floated="right"
                                primary
                                content="View booking"
                                onClick={event =>
                                    this.viewBooking(event, booking.id)
                                }
                            />
                            {shouldRenderForm ? (
                                <div className="reviews_add_review__container">
                                    <Modal
                                        className="user_cabinet_add_review__modal"
                                        trigger={
                                            <div className="user_cabinet_add_review__btn">
                                                <Button
                                                    primary
                                                    // color="teal"
                                                    fluid
                                                    content="Add review"
                                                    labelPosition="left"
                                                    icon="edit"
                                                    type="submit"
                                                    onClick={this.handleOpen}
                                                />
                                            </div>
                                        }
                                        open={this.state.modalOpen}
                                        // onClose={this.handleClose}
                                        onClose={this.close}
                                    >
                                        <ReviewForm
                                            property={booking.room.property}
                                            userc={true}
                                            onFormClick={this.handleClose}
                                        />
                                    </Modal>
                                </div>
                            ) : null}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}
