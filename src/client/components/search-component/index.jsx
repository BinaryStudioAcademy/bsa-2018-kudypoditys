import React from 'react';
import './index.scss';
import { Input, Button, Form } from 'semantic-ui-react';
import { DatesRangeInput } from 'semantic-ui-calendar-react';
import * as moment from 'moment';

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
    }

    handleChange(event, {name, value}) {
        this.setState({ [name]: value });
    }

    toggleRoomSelector(){
        document.getElementById('room-selector').classList.toggle('hidden');
    }

    showRoomSelector(){
        document.getElementById('room-selector').classList.remove('hidden');
    }

    hideRoomSelector(){
        document.getElementById('room-selector').classList.add('hidden');
    }

    render() {
        const selectOptions = [
            { text: '1', value: 1, selected: true },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
            { text: '8', value: 8 },
            { text: '9', value: 9 },
            { text: '10', value: 10 }
        ];
        const childrenOptions = [
            { text: '0', value: 0, selected: true },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
            { text: '8', value: 8 },
            { text: '9', value: 9 },
            { text: '10', value: 10 }
        ];


        return (
            this.props.view === 'bar' ?
            <Form className='search-bar'>
                <div className='destination'>
                    <Input
                        iconPosition='left'
                        icon='map marker alternate'
                        name='destination'
                        placeholder='Where are you going?'
                        onChange={this.handleChange.bind(this)}
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
                    onChange={this.handleChange.bind(this)}
                />
                </div>
                <div
                    className='room-options'
                >
                    <Input
                        icon='user'
                        iconPosition='left'
                        value={`${this.state.adults} adults · ${this.state.children} children`}
                        onClick={this.toggleRoomSelector}
                    />
                    <div
                        id='room-selector'
                        className='room-selector hidden'
                        onMouseEnter={this.showRoomSelector}
                        onMouseLeave={this.hideRoomSelector}
                        >
                        <Form.Group>
                            <Form.Select
                                fluid
                                label='Rooms'
                                name='rooms'
                                options={selectOptions}
                                value={this.state.rooms}
                                onChange={this.handleChange.bind(this)}
                            />
                            <Form.Select
                                fluid
                                label='Adults'
                                name='adults'
                                options={selectOptions}
                                value={this.state.adults}
                                onChange={this.handleChange.bind(this)}
                            />
                            <Form.Select
                                fluid
                                label='Children'
                                name='children'
                                options={childrenOptions}
                                value={this.state.children}
                                onChange={this.handleChange.bind(this)}
                            />
                        </Form.Group>
                    </div>
                </div>
                <div className='btn-wrp'>
                    <Button type='submit' content='Search' primary/>
                </div>
            </Form> :
            <span>Panel</span>
        )
    }

}

export default SearchComponent;