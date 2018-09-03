import React from "react";
import { Form, Header, Dropdown, Message } from "semantic-ui-react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import "./index.scss";

export class BookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null
        };
    }

    generateOptions = (from, to) => {
        let options = [];
        for (let i = from; i <= to; i++) {
            options.push({
                text: `${i}`,
                value: i
            });
        }
        return options;
    };

    generateRoomOptions = rooms => {
        let options = [];
        for (let i = 0; i < rooms.length; i++) {
            options.push({ text: rooms[i].roomType.name, value: rooms[i].id });
        }
        return options;
    };

    generatePaymentOptions = paymentTypes => {
        let options = [];
        for (let i = 0; i < paymentTypes.length; i++) {
            options.push({
                text: paymentTypes[i].name,
                value: paymentTypes[i].id
            });
        }
        return options;
    };

    datesChanged = selectedDates => {
        this.props.onDatesChange(selectedDates);
    };

    render() {
        const {
            checkIn,
            checkOut,
            adults,
            children,
            roomId,
            paymentTypeId,
            paymentTypes,
            rooms,
            propertyName,
            error,
            message
        } = this.props;
        const startDate = checkIn === null ? null : moment(checkIn);
        const endDate = checkOut === null ? null : moment(checkOut);
        const childrenOptions = this.generateOptions(0, 10);
        const adultsOptions = this.generateOptions(1, 10);
        const paymentOptions = this.generatePaymentOptions(paymentTypes);
        const roomOptions = this.generateRoomOptions(rooms);

        return (
            <React.Fragment>
                <Header
                    as="h2"
                    style={{ marginBottom: "20px", color: "#274560" }}
                >
                    Make your booking at {propertyName}
                </Header>
                <Form
                    className="booking-form"
                    onSubmit={event => {
                        event.preventDefault();
                        this.props.onBooking({
                            dateIn: Number(startDate),
                            dateOut: Number(endDate),
                            guestsCount: adults + children,
                            roomId: roomId ? roomId : roomOptions[0].value,
                            paymentTypeId: paymentTypeId
                                ? paymentTypeId
                                : paymentOptions[0].value
                        });
                    }}
                    style={{
                        margin: "0 5px 5px 5px",
                        padding: "15px",
                        border: "1px solid #274560",
                        borderRadius: "5px"
                    }}
                >
                    <Form.Field>
                        <label style={{ color: "#274560" }}>
                            Check-in and check-out
                        </label>
                        <div
                            onKeyPress={event => {
                                event.preventDefault();
                            }}
                        >
                            <DateRangePicker
                                startDateId="startDate"
                                endDateId="endDate"
                                required={true}
                                startDate={startDate}
                                endDate={endDate}
                                onDatesChange={this.datesChanged}
                                focusedInput={this.state.focusedInput}
                                onFocusChange={focusedInput => {
                                    this.setState({ focusedInput });
                                }}
                            />
                        </div>
                    </Form.Field>
                    <Form.Group inline>
                        <Form.Field>
                            <label style={{ color: "#274560" }}>Adults</label>
                            <Dropdown
                                fluid
                                selection
                                icon="dropdown"
                                name="adults"
                                options={adultsOptions}
                                value={adults}
                                onChange={(event, input) =>
                                    this.props.onAdultsChange(input.value)
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label style={{ color: "#274560" }}>Children</label>
                            <Dropdown
                                fluid
                                selection
                                icon="dropdown"
                                name="children"
                                options={childrenOptions}
                                value={children}
                                onChange={(event, input) =>
                                    this.props.onChildrenChange(input.value)
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label style={{ color: "#274560" }}>Room</label>
                            <Dropdown
                                fluid
                                selection
                                icon="dropdown"
                                name="room"
                                options={roomOptions}
                                value={roomId ? roomId : roomOptions[0].value}
                                onChange={(event, input) =>
                                    this.props.onRoomChange(input.value)
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label style={{ color: "#274560" }}>
                                Payment type
                            </label>
                            <Dropdown
                                fluid
                                selection
                                icon="dropdown"
                                name="room"
                                options={paymentOptions}
                                value={
                                    paymentTypeId
                                        ? paymentTypeId
                                        : paymentOptions[0].value
                                }
                                onChange={(event, input) =>
                                    this.props.onPaymentTypeChange(input.value)
                                }
                            />
                        </Form.Field>
                    </Form.Group>
                    {error ? <Message negative>{error}</Message> : null}
                    {message ? <Message positive>{message}</Message> : null}
                    <button className="book-btn" type="submit">
                        Book now
                    </button>
                </Form>
            </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookingForm);
