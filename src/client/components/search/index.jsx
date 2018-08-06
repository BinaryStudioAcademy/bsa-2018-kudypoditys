import React from 'react';
import './index.scss';
import { Input, Button, Form, Dropdown, Header } from 'semantic-ui-react';
import { DatesRangeInput } from 'semantic-ui-calendar-react';
import moment from 'moment';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: '',
            date: '',
            rooms: 1,
            adults: 2,
            children: 0
        };
        this.roomSelector = React.createRef();
    }

    handleChange = (event, {name, value}) => {
        this.setState({ [name]: value });
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

    showRoomSelector = () => {
        this.roomSelector.current.classList.remove('hidden');
    }

    hideRoomSelector = () => {
        this.roomSelector.current.classList.add('hidden');
    }

    render() {
        const selectOptions = this.generateOptions(1, 10);
        const childrenOptions = this.generateOptions(0, 10);
        const { view } = this.props;

        return (
            view === 'bar' ?
            <Form className='search search--view-bar' >
                <div className='destination'>
                    <Input
                        iconPosition='left'
                        icon='map marker alternate'
                        name='destination'
                        placeholder='Where are you going?'
                        onChange={this.handleChange}
                    />
                </div>
                <div className='check-in-out'>
                <DatesRangeInput
                    closable
                    minDate={moment()}
                    dateFormat='ddd D MMM'
                    popupPosition='bottom center'
                    icon='calendar alternate outline'
                    iconPosition='left'
                    placeholder='Check-in - Check-out'
                    name='date'
                    value={this.state.date}
                    onChange={this.handleChange}
                />
                </div>
                <div
                    className='room-options'
                >
                    <Input
                        icon='user'
                        iconPosition='left'
                        value={`${this.state.adults} adult${this.state.adults > 1 ? 's' : ''} · ${this.state.children} ${this.state.children === 1 ? 'child' : 'children'}`}
                        onClick={this.toggleRoomSelector}
                    />
                    <div
                        ref={this.roomSelector}
                        className='room-selector hidden'
                        onMouseEnter={this.showRoomSelector}
                        onMouseLeave={this.hideRoomSelector}
                    >
                        <Form.Field inline>
                            <label>Rooms</label>
                            <Dropdown
                                fluid
                                selection
                                name='rooms'
                                options={selectOptions}
                                value={this.state.rooms}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field inline>
                            <label>Adults</label>
                            <Dropdown
                                fluid
                                selection
                                name='adults'
                                options={selectOptions}
                                value={this.state.adults}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field inline>
                            <label>Children</label>
                            <Dropdown
                                fluid
                                selection
                                name='children'
                                options={childrenOptions}
                                value={this.state.children}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                    </div>
                </div>
                <div className='btn-wrp'>
                    <Button type='submit' content='Search' primary/>
                </div>
            </Form> :
            <Form className='search search--view-panel'>
            <Header as='h2'>Search</Header>
            <Form.Field className='destination'>
                <label>Destination/property name:</label>
                <input
                    name='destination'
                    placeholder='Where are you going?'
                    onChange={this.handleChange}
                />
            </Form.Field>
            <Form.Field className='check-in-out'>
                <label>Check-in and Check-out date</label>
                <DatesRangeInput
                    closable
                    minDate={moment()}
                    dateFormat='ddd D MMM'
                    popupPosition='bottom center'
                    icon='calendar alternate outline'
                    iconPosition='left'
                    placeholder='Check-in - Check-out'
                    name='date'
                    value={this.state.date}
                    onChange={this.handleChange}
                />
            </Form.Field>
            <div className='room-options'>
                <div
                    className='room-selector'
                >
                    <Form.Field>
                        <Dropdown
                            fluid
                            selection
                            name='adults'
                            text={`${this.state.adults} ${this.state.adults === 1 ? 'Adult' : 'Adults'}`}
                            options={selectOptions}
                            value={this.state.adults}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Group inline>
                        <Dropdown
                            selection
                            name='children'
                            text={`${this.state.children === 0 ? 'No Children' : `${this.state.children} ${this.state.children === 1 ? 'Child' : 'Children'}`}`}
                            options={childrenOptions}
                            value={this.state.children}
                            onChange={this.handleChange}
                        />
                        <Dropdown
                            selection
                            name='rooms'
                            text={`${this.state.rooms} ${this.state.rooms === 1 ? 'Room' : 'Rooms'}`}
                            options={selectOptions}
                            value={this.state.rooms}
                            onChange={this.handleChange}
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

export default SearchComponent;