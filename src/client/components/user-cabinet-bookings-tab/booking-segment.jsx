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
import BasicMapWidget from "../basic-map-widget";

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
        const headerStyle = { color: "#465672" };

        if (now > start) {
            shouldRenderForm = true;
        }

        return (
            <Segment className="booking-container" style={{ padding: "10px" }}>
                <div className="booking--left-section">
                    <Image
                        src={images[0].url}
                        size="medium"
                        style={{ maxHeight: "200px" }}
                    />
                    <div className="booking-info">
                        <Header
                            as="h1"
                            style={{
                                ...headerStyle,
                                marginLeft: "10px"
                            }}
                        >
                            {booking.room.property.name}
                        </Header>

                        <Modal
                            trigger={
                                <p>
                                    <Icon name="map marker alternate" />
                                    <span
                                        style={{
                                            cursor: "pointer",
                                            color: "#465672",
                                            textDecoration: "underline"
                                        }}
                                    >
                                        {booking.room.property.address}
                                    </span>
                                </p>
                            }
                            fullScreen
                        >
                            <BasicMapWidget
                                style={{ width: "100%", height: "100%" }}
                                coordinates={booking.room.property.coordinates}
                                properties={[booking.room.property]}
                                controlEnable={true}
                                disablePopup={true}
                                fullScreen
                            />
                        </Modal>
                        <p className="booking-phone">
                            <Icon name="phone" />
                            {booking.room.property.contactPhone}
                        </p>
                        <p
                            className="booking-price"
                            style={{ fontSize: "18px" }}
                        >
                            <Icon name="dollar sign" />
                            {" " + price}
                        </p>
                    </div>
                </div>
                <div className="booking--right-section">
                    <Grid columns={2} divided>
                        <Grid.Column className="check-date" textAlign="center">
                            <p>CHECK-IN</p>
                            <Header as="h2" style={headerStyle}>
                                {moment(dateIn).format("MMM DD")}
                            </Header>
                            <p>{moment(dateIn).format("dddd, YYYY")}</p>
                        </Grid.Column>
                        <Grid.Column className="check-date" textAlign="center">
                            <p>CHECK-OUT</p>
                            <Header as="h2" style={headerStyle}>
                                {moment(dateOut).format("MMM DD")}
                            </Header>
                            <p>{moment(dateOut).format("dddd, YYYY")}</p>
                        </Grid.Column>
                    </Grid>
                    <div className="booking-buttons">
                        <Button
                            style={{ margin: "0px 5px" }}
                            floated="right"
                            primary
                            content="View booking"
                            onClick={event =>
                                this.viewBooking(event, booking.id)
                            }
                        />
                        {shouldRenderForm ? (
                            <Modal
                                className="user_cabinet_add_review__modal"
                                trigger={
                                    <Button
                                        style={{ margin: "0px 5px" }}
                                        primary
                                        // color="teal"
                                        fluid
                                        content="Add review"
                                        type="submit"
                                        onClick={this.handleOpen}
                                    />
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
                        ) : null}
                    </div>
                </div>
            </Segment>
        );
    }
}
