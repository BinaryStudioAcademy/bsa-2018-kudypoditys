import React from "react";
import "./index.scss";
import { Icon, Table ,Popup} from "semantic-ui-react";
import QuantityPicker from "../quantity-picker";
import _ from "lodash";
import {
    convert,
    titleToCode
} from "../../helpers/convertCurrency";
import Modal from "../components/modal";
import BookingForm from "../booking-form";
import connect from "react-redux/es/connect/connect";
import { mapDispatchToProps, mapStateToProps } from "./container";
import { getDaysDifference } from "../../helpers/date-helpers";
import Tooltip from "react-tooltip-lite";
import MealsTable from "./mealsTable";

export const getIcons = number =>
    _.times(number, index => <Icon key={index} name="user" />);

export class RoomsTable extends React.Component {

    componentDidMount() {}

    componentDidUpdate() {}

    handleToggleCollapseDescription(roomId, ev) {
        ev.preventDefault();
        this.props.toggleRoomDescriptionCollapse(roomId);
    };

    getBedsSummary = bedsInRoom => {
        return (
            <div style={{ padding: "5px" }}>
                {bedsInRoom.map((bed, index) => {
                    return (
                        <span key={index} className='table-title'>
                            {bed.count} {bed.bedType.name}
                        </span>
                    );
                })}
            </div>
        );
    };

    handleQuantitySelectionChanged = (e, value, roomId) => {
        const { rooms } = this.props;
        const roomsAmount = value;
        const sortedRooms = rooms;
        if(roomId && roomsAmount && sortedRooms) {
            this.props.selectRoomsAmount(roomId, roomsAmount, sortedRooms);
        }
        // roomQuantityChanged(rooms, value, roomId, selectRoomsAmount)
    };

    render() {
        if (!this.props || !this.props.rooms) return null;
        const {
            rooms,
            user,
            property,
            currency,
            checkIn,
            checkOut
        } = this.props;
        const { currency: propCurrency } = property;
        let bookButton = false;
        if (user) bookButton = true;

        const priceFunc = price => convert(propCurrency.code, price, currency.code);
        const currencySymbol = titleToCode.get(currency.code);
        const daysStaying = getDaysDifference(checkIn, checkOut);
        let roomRow = null;
        if (this.props.rooms.length > 0) {
            roomRow = this.props.rooms.map(room => {
                const bedsToSleep = room.bedInRooms.reduce(
                    (acc, el) => acc + el.count,
                    0
                );
                let priceForOneDay = priceFunc(room.price);
                let totalPrice = (priceForOneDay * daysStaying).toFixed(1);
                // const totalCheck = (totalPrice * room.selectedAmount).toFixed(1);
                const soldOutDaysAgo = room.lastReservation ? room.lastReservation.bookedDaysAgo : null;
                const soldOutPrice = room.lastReservation ? room.lastReservation.pricePerNight.toFixed(0) : null; 
                return ([
                    (
                        <Table.Row key={room.id} id={room.id}>
                            <Table.Cell>
                                <div>
                                    <div className="room-type">
                                        <p
                                            style={{
                                                margin: "0",
                                                color: "#465672",
                                                fontSize: "18px"
                                            }}
                                        >
                                            {/*<Icon name="bed"/>*/}
                                            Room: {room.roomType.name}
                                        </p>
                                    </div>
                                    <div className="room-area">
                                        <strong> Area: </strong> {room.area} square
                                        meters
                                    </div>
                                    <div className="room-beds">
                                        <strong> Beds: </strong> <br />
                                        {this.getBedsSummary(room.bedInRooms)}
                                    </div>
                                    <div>
                                        <strong> Description: </strong>
                                        <p className='room-description' >
                                            {room.description &&
                                            room.description.length > 50 &&
                                            room.descriptionCollapsed
                                                ? room.description.slice(0, 50)
                                                : room.description}
                                            <a href=''
                                               onClick={this.handleToggleCollapseDescription.bind(this, room.id)}>
                                                ...
                                            </a>
                                        </p>
                                    </div>
                                    <div>
                                        <strong><Icon name="food"/> Meals info</strong>
                                        { room.mealInRooms && room.mealInRooms.length > 0 ?
                                            <Popup 
                                                trigger={
                                                    <p className='table-title'>
                                                        <span style={{borderBottom: "1px dashed  #000",color : "#465672", cursor : "help"}}>Included</span> 
                                                    </p>
                                                }
                                                content={
                                                    <MealsTable meals={room.mealInRooms} />
                                                }
                                            />
                                        :   <div className='table-title'>
                                                <span>No included</span>
                                            </div>
                                        }   
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell> {getIcons(bedsToSleep)} </Table.Cell>
                            <Table.Cell>
                                {totalPrice}&nbsp;{currencySymbol}
                            </Table.Cell>
                            <Table.Cell>
                                <QuantityPicker
                                    roomId={room.id}
                                    roomsSelectedAmount={room.selectedAmount}
                                    roomsAvailable={room.available + 1}
                                    onSelectionChanged={
                                        this.handleQuantitySelectionChanged
                                    }
                                    disabled={!room.available}
                                />
                            </Table.Cell>
                            <Table.Cell>
                                {bookButton ? (
                                    <Modal
                                        trigger={
                                            <div>
                                                <div
                                                    className="book-btn"
                                                    style={{
                                                        height: "30px",
                                                        width: "100px",
                                                        // paddingLeft: "10px",
                                                        margin: "0"
                                                    }}
                                                >
                                                    {/*TODO: Use there Semantic button*/}
                                                    {room.available ? (
                                                        <button
                                                            className="book-btn"
                                                            disabled={!room.selectedAmount}
                                                            style={{
                                                                height: "100%"
                                                            }}
                                                            onClick={() => {
                                                                this.props.setRoom(
                                                                    room.id
                                                                );
                                                            }}
                                                        >
                                                            Book now
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className={"btn-sold-out"}
                                                            style={{ height: "100%", backgroundColor: "darkred" }}
                                                            disabled={true}
                                                        >
                                                            Sold out
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        }
                                        onClose={this.props.clearBookingForm}
                                        closeIcon
                                    >
                                    {/* todo: insert (pass) params - rooms Amount */}
                                        <BookingForm
                                            rooms={rooms}
                                            paymentTypes={property.paymentTypes}
                                            handleQuantitySelectionChanged={this.handleQuantitySelectionChanged}
                                        />
                                    </Modal>
                                ) : null}
                            </Table.Cell>
                        </Table.Row>
                    ),
                    (
                        <Table.Row key={1000 + room.id} id={1000+room.id}>
                            { room.available ? (
                                null
                            ) : (
                                <Table.Cell colSpan={5}>
                                    <Tooltip
                                        content={'To give you an idea of the price range, we looked at how much this was booked for when it sold out. The price we\'re showing is based on the average price per night'}
                                        direction="up"
                                        className="target"
                                        distance={3}
                                        arrow={false}
                                    >
                                        <div className={'sold-out-message'}>
                                            { (soldOutDaysAgo < 6 && soldOutDaysAgo > 0)
                                                ? `You missed it. The last room on our site sold out ${soldOutDaysAgo} days ago for US$\xA0${soldOutPrice}`
                                                : `You missed it! Sold for US$\xA0${soldOutPrice} on our site`
                                            }
                                        </div>
                                    </Tooltip>
                                </Table.Cell>
                            )
                            }
                        </Table.Row>
                    )
                    ]
                );
            });
        } else {
            roomRow = (
                <div> There are not any available rooms in the property </div>
            );
        }

        return (
            <Table celled compact definition>
                <Table.Header fullWidth>
                    <Table.Row>
                        <Table.HeaderCell width={10} textAlign="center">
                            Accommodation Type
                        </Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center">
                            Sleeps
                        </Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center">
                            Total Price
                        </Table.HeaderCell>
                        <Table.HeaderCell width={1} textAlign="center">
                            Quantity
                        </Table.HeaderCell>
                        <Table.HeaderCell width={3} textAlign="center">
                            Actions
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{roomRow}</Table.Body>
            </Table>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomsTable);
