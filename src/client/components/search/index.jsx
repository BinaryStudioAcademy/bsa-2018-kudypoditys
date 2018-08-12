import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { Input, Button, Form, Dropdown, Header } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';

import { mapStateToProps, mapDispatchToProps } from './container';
import './index.scss';

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.roomSelector = React.createRef();
    }

    generateOptions = (from, to) => {
        let options = [];
        for (let i=from; i<=to; i++) {
            options.push({
                text: `${i}`,
                value: i
            });
        }
        return options;
    }

    toggleRoomSelector = () => {
        this.roomSelector.current.classList.toggle('hidden');
    }

    hideRoomSelector = () => {
        this.roomSelector.current.classList.add('hidden');
    }

    adultsOutput = () => {
        if (this.props.adults === 1) return '1 Adult';
        return `${this.props.adults} Adults`;
    }

    childrenOutput = () => {
        switch(this.props.children) {
            case 0:
                return 'No children';
            case 1:
                return '1 Child';
            default:
                return `${this.props.children} Children`;
        }
    }

    roomsOutput = () => {
        if (this.props.rooms === 1) return '1 Room';
        return `${this.props.rooms} Rooms`;
    }

    handleSubmit = () => {
        this.props.onSearch();
    }

    render() {
        const selectOptions = this.generateOptions(1, 10);
        const childrenOptions = this.generateOptions(0, 10);
        const { view, destination, checkIn, checkOut, rooms, adults, children } = this.props;

        return (
            view === 'bar' ?
            <Form className='search search--view-bar' onSubmit={this.handleSubmit}>
                <div className='destination'>
                    <Input
                        iconPosition='left'
                        icon='map marker alternate'
                        name='destination'
                        placeholder='Where are you going?'
                        value={destination}
                        onChange={(event, input) => this.props.onDestinationChange(input.value)}
                        onFocus={this.hideRoomSelector}
                        required
                    />
                </div>
                <div className='check-in-out'>
                    <DateInput
                        closable
                        required
                        autoComplete='off'
                        minDate={moment()}
                        dateFormat='MMM D YYYY'
                        popupPosition='bottom center'
                        icon='calendar alternate outline'
                        iconPosition='left'
                        placeholder='Check-in'
                        name='checkIn'
                        value={checkIn === null ? '' : moment(checkIn).format('MMM D YYYY')}
                        onChange={(event, input) => this.props.onCheckInChange(moment(input.value))}
                        onFocus={this.hideRoomSelector}
                        onKeyPress={event => event.preventDefault()}
                    />
                    <DateInput
                        closable
                        required
                        autoComplete='off'
                        minDate={moment()}
                        dateFormat='MMM D YYYY'
                        popupPosition='bottom center'
                        icon='calendar alternate outline'
                        placeholder='Check-out'
                        name='checkOut'
                        value={checkOut === null ? '' : moment(checkOut).format('MMM D YYYY')}
                        onChange={(event, input) => this.props.onCheckOutChange(moment(input.value))}
                        onFocus={this.hideRoomSelector}
                        onKeyPress={event => event.preventDefault()}
                    />
                </div>
                <div className='room-options'>
                    <Input
                        icon='user'
                        iconPosition='left'
                        value={`${this.adultsOutput()} · ${this.childrenOutput()}`}
                        onClick={this.toggleRoomSelector}
                    />
                    <div
                        ref={this.roomSelector}
                        className='room-selector hidden'
                        onMouseLeave={this.hideRoomSelector}
                    >
                        <Form.Field inline>
                            <label>Rooms</label>
                            <Dropdown
                                fluid
                                selection
                                name='rooms'
                                options={selectOptions}
                                value={rooms}
                                onChange={(event, input) => this.props.onRoomsChange(input.value)}
                            />
                        </Form.Field>
                        <Form.Field inline>
                            <label>Adults</label>
                            <Dropdown
                                fluid
                                selection
                                name='adults'
                                options={selectOptions}
                                value={adults}
                                onChange={(event, input) => this.props.onAdultsChange(input.value)}
                            />
                        </Form.Field>
                        <Form.Field inline>
                            <label>Children</label>
                            <Dropdown
                                fluid
                                selection
                                name='children'
                                options={childrenOptions}
                                value={children}
                                onChange={(event, input) => this.props.onChildrenChange(input.value)}
                            />
                        </Form.Field>
                    </div>
                </div>
                <div className='btn-wrp'>
                    <Button type='submit' content='Search' primary/>
                </div>
            </Form> :
            <Form className='search search--view-panel' onSubmit={this.handleSubmit}>
            <Header as='h2'>Search</Header>
            <Form.Field className='destination'>
                <label>Destination/property name:</label>
                <input
                    name='destination'
                    placeholder='Where are you going?'
                    value={this.props.destination}
                    onChange={event => this.props.onDestinationChange(event.currentTarget.value)}
                    required
                />
            </Form.Field>
            <div className='check-in-out'>
                <Form.Field>
                    <label>Check-in date</label>
                    <DateInput
                        closable
                        required
                        autoComplete='off'
                        minDate={moment()}
                        dateFormat='MMM D YYYY'
                        popupPosition='bottom center'
                        icon='calendar alternate outline'
                        iconPosition='left'
                        placeholder='Check-in'
                        name='checkIn'
                        value={checkIn === null ? '' : moment(checkIn).format('MMM D YYYY')}
                        onChange={(event, input) => this.props.onCheckInChange(moment(input.value))}
                        onKeyPress={event => event.preventDefault()}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Check-out date</label>
                    <DateInput
                        closable
                        required
                        autoComplete='off'
                        minDate={moment()}
                        dateFormat='MMM D YYYY'
                        popupPosition='bottom center'
                        icon='calendar alternate outline'
                        iconPosition='left'
                        placeholder='Check-out'
                        name='checkOut'
                        value={checkOut === null ? '' : moment(checkOut).format('MMM D YYYY')}
                        onChange={(event, input) => this.props.onCheckOutChange(moment(input.value))}
                        onKeyPress={event => event.preventDefault()}
                    />
                </Form.Field>
            </div>
            <div className='room-options'>
                <div
                    className='room-selector'
                >
                    <Form.Field>
                        <Dropdown
                            fluid
                            selection
                            name='adults'
                            text={this.adultsOutput()}
                            options={selectOptions}
                            value={adults}
                            onChange={(event, input) => this.props.onAdultsChange(input.value)}
                        />
                    </Form.Field>
                    <Form.Group inline>
                        <Dropdown
                            selection
                            name='children'
                            text={this.childrenOutput()}
                            options={childrenOptions}
                            value={children}
                            onChange={(event, input) => this.props.onChildrenChange(input.value)}
                        />
                        <Dropdown
                            selection
                            name='rooms'
                            text={this.roomsOutput()}
                            options={selectOptions}
                            value={rooms}
                            onChange={(event, input) => this.props.onRoomsChange(input.value)}
                        />
                    </Form.Group>
                </div>
            </div>
            <div className='btn-wrp'>
                <Button type='submit' content='Search' primary/>
            </div>
        </Form>
        )
    }

}

Search.propTypes = {
    view: PropTypes.string.isRequired,
    destination: PropTypes.string,
    checkIn: PropTypes.number,
    checkOut: PropTypes.number,
    adults: PropTypes.number,
    children: PropTypes.number,
    rooms: PropTypes.number,
    onDestinationChange: PropTypes.func.isRequired,
    onCheckInChange: PropTypes.func.isRequired,
    onCheckOutChange: PropTypes.func.isRequired,
    onAdultsChange: PropTypes.func.isRequired,
    onChildrenChange: PropTypes.func.isRequired,
    onRoomsChange: PropTypes.func.isRequired
}

Search.defaultProps = {
    destination: '',
    checkIn: null,
    checkOut: null,
    adults: 1,
    children: 0,
    rooms: 1
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);