import React from "react";
import classNames from "classnames";
import { Form, Header, Dropdown, Message } from "semantic-ui-react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import "./index.scss";
import history from "client/history";
import QuantityPicker from "../quantity-picker";
import { roomQuantityChanged } from "../../helpers/roomQuantityChanged";
import {
    convertCurrencyByName,
    titleToCode
} from "../../helpers/convertCurrency";
import { getDaysDifference } from "../../helpers/date-helpers";

export class BookingForm extends React.Component {
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
        this.props.onDatesChange(this.props.propertyId, selectedDates);
    };
    handleQuantitySelectionChanged = (e, value, roomId) => {
        const { rooms, selectRoomsAmount } = this.props;
        // this.props.selectRoomsAmount(roomId, roomsAmount, sortedRooms);
        roomQuantityChanged(rooms, value, roomId, selectRoomsAmount);
    };

    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null
        };
    }

    render() {
        console.log(this.props);
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
            propertyCurrency,
            currency,
            error,
            message,
            cancelForFree,
            selectedRoomsAmount,
            roomsAmount,
            roomPrice
        } = this.props;
        const priceFunc = price =>
            convertCurrencyByName(propertyCurrency.code, price, currency.code);
        const daysStaying = getDaysDifference(checkIn, checkOut);
        const currencySymbol = titleToCode.get(currency.code);
        let priceForOneDay = priceFunc(roomPrice);
        let totalPrice = (priceForOneDay * daysStaying).toFixed(1);
        const totalCheck = (totalPrice * selectedRoomsAmount).toFixed(1);
        // TODO: Code duplication

        const startDate = checkIn === null ? null : moment(checkIn);
        const endDate = checkOut === null ? null : moment(checkOut);
        const childrenOptions = this.generateOptions(0, 10);
        const adultsOptions = this.generateOptions(1, 10);
        const paymentOptions = this.generatePaymentOptions(paymentTypes);
        const roomOptions = this.generateRoomOptions(rooms);
        const disableBookButton = true;
        const buttonClasses = classNames({
            "book-btn": true,
            "book-btn-enabled": totalCheck >= 1.0
        });
        // const buttonClass = 'book-btn ' + disableBookButton ? 'book-btn-disabled' : 'book-btn-enabled';
        // totalCheck < 1;

        if (message === "Your booking was a success!") {
            this.props.clearBookingForm();
            history.push({
                pathname: "/user-cabinet",
                search: `?tab=0`
            });
        }

        return (
            <React.Fragment>
                <Header
                    as="h2"
                    style={{ marginBottom: "20px", color: "#274560" }}
                >
                    Make your booking at {propertyName}
                </Header>
                {!cancelForFree ? (
                    <Header
                        as="h5"
                        style={{ margin: "5px", padding: 0, color: "#d12b2b" }}
                    >
                        Careful. You can`t cancel this booking for free!
                    </Header>
                ) : null}
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
                                small={true}
                                x
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
                                    this.props.onRoomChange(input.value, roomId)
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label style={{ color: "#274560" }}>
                                Rooms Amount
                            </label>
                            <QuantityPicker
                                fluid
                                selection
                                icon="dropdown"
                                name="room"
                                roomId={roomId}
                                roomsSelectedAmount={selectedRoomsAmount}
                                roomsAvailable={roomsAmount + 1}
                                onSelectionChanged={
                                    this.handleQuantitySelectionChanged
                                }
                            />
                        </Form.Field>

                        <Form.Field style={{ width: "170px" }}>
                            <label style={{ color: "#274560" }}>
                                Payment type
                            </label>
                            <Dropdown
                                fluid
                                selection
                                icon="dropdown"
                                name="paymentType"
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
                    <p>
                        Total price: {totalCheck} {currencySymbol}
                    </p>
                    <button
                        className={buttonClasses}
                        type="submit"
                        disabled={disableBookButton}
                    >
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
