import React from 'react'
import {Divider, Icon, Table} from 'semantic-ui-react'
import QuantityPicker from "client/components/quantity-picker";
import PropTypes from "prop-types";
import _ from "lodash";
import {convert} from "client/helpers/convertCurrency";
import Modal from "client/components/modal";
import BookingForm from "client/components/booking-form";
import titleToCode from "client/helpers/convertCurrency"
import connect from "react-redux/es/connect/connect";
import {mapDispatchToProps, mapStateToProps} from "client/components/rooms-summary-table/container";

export const getIcons = (number) => _.times(number, index => (<Icon name='user'/>));

export class RoomsTable extends React.Component {
    getBedsSummary = bedsInRoom => {
        return (
            <div style={{ padding: "5px" }}>
                {bedsInRoom.map((bed, index) => {
                    return (
                        <span
                            key={index}
                            style={{
                                display: "block",
                                paddingLeft: "23px",
                                color: "#465672"
                            }}
                        >
                            {bed.count} {bed.bedType.name}
                        </span>
                    );
                })}
            </div>
        );
    };

    getRoomsSummary = (rooms, bookButton, property) => {
        const { currency } = this.props;
        const { currency: propCurrency } = property;

        const priceFunc = (price) => convert(propCurrency.code, price, currency.code);
        console.log(currency.code);
        let a = titleToCode.get(currency.code);
        console.log(a);
        return rooms.map(room => (
            <React.Fragment>
                <div className="room-row">
                    <div className="room-row--left-section">
                        <p
                            style={{
                                margin: "0",
                                color: "#465672",
                                fontSize: "18px"
                            }}
                        >
                            <Icon name="bed" />
                            {" " + room.roomType.name}
                        </p>
                        <div>{this.getBedsSummary(room.bedInRooms)}</div>
                    </div>
                    <div className="room-row--right-section">
                        <p
                            style={{
                                margin: "0",
                                color: "rgb(0, 168, 130)",
                                fontSize: "18px",
                                fontWeight: "bold",
                                alignSelf: "center",
                                paddingRight: "5px"
                            }}
                        >
                            {currency.code} {priceFunc(room.price)}
                        </p>
                        {bookButton ? (
                            <Modal
                                trigger={
                                    <div
                                        className="book-btn"
                                        style={{
                                            height: "40px",
                                            width: "150px",
                                            paddingLeft: "10px",
                                            margin: "0"
                                        }}
                                    >
                                        <button
                                            style={{ height: "100%" }}
                                            onClick={() => {
                                                this.props.setRoom(room.id);
                                            }}
                                        >
                                            Book now
                                        </button>
                                    </div>
                                }
                                onClose={this.props.clearBookingForm}
                                closeIcon
                            >
                                {" "}
                                <BookingForm
                                    rooms={rooms}
                                    paymentTypes={property.paymentTypes}
                                />
                            </Modal>
                        ) : null}
                    </div>
                </div>
                <Divider hidden />
            </React.Fragment>
        ));
    };

    componentDidMount() {
    }

    render() {
        console.log("RoomsTable props = ");
        console.log(this.props);

        if (!this.props) return null;

        const roomRow = this.props.rooms.map(r => {

            const badsToSleep = r.bedInRooms.reduce((acc, el) => (acc + el.count), 0);

            return (
                <Table.Row>
                    <Table.Cell>
                        <div>
                            <div className='room-type'>
                                <strong>Type: {r.roomType.name}</strong>
                            </div>
                            <div className='room-area'>
                                <strong>Area:</strong> {r.area} square meters
                            </div>
                            <div className='room-beds'>
                                <strong>Beds:</strong>
                                <br/>
                                {this.getBedsSummary(r.bedInRooms)}
                            </div>
                            <div className='room-description'>
                                <strong>Description:</strong> {r.description ? r.description : ''}
                            </div>
                        </div>
                        </Table.Cell>
                    <Table.Cell>
                        {getIcons(badsToSleep)}
                    </Table.Cell>
                    <Table.Cell>{r.price}$</Table.Cell>
                    {/*TODO: add currency handling*/}
                    <Table.Cell>
                        <QuantityPicker roomsAvailable={r.amount + 1}/>
                    </Table.Cell>
                    <Table.Cell onClick={() => alert('I\'ll reserve Clicked!')}>
                        <input type='submit' value="I'll reserve"/>
                    </Table.Cell>
                </Table.Row>
            );
        });

        const roomsTable =
            (
                <Table celled compact definition>
                    <Table.Header fullWidth>
                        <Table.Row>
                            <Table.HeaderCell width={10} textAlign='center'>Accommodation Type</Table.HeaderCell>
                            <Table.HeaderCell width={1} textAlign='center'>Sleeps</Table.HeaderCell>
                            <Table.HeaderCell width={1} textAlign='center'>Total Price</Table.HeaderCell>
                            <Table.HeaderCell width={1} textAlign='center'>Quantity</Table.HeaderCell>
                            <Table.HeaderCell width={3} textAlign='center'>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {roomRow}
                    </Table.Body>
                </Table>
            );

        return (
            roomsTable
        )
    }
}

RoomsTable.propTypes = {
    property: PropTypes.object.isRequired
};

RoomsTable.defaultProps = {
    property: null,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomsTable);