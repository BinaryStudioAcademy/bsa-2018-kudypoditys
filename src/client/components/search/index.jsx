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

    hideRoomSelector = () => {
        this.roomSelector.current.classList.add('hidden');
    }

    adultsOutput = () => {
        if (this.state.adults === 1) return '1 Adult';
        return `${this.state.adults} Adults`;
    }

    childrenOutput = () => {
        switch(this.state.children) {
            case 0:
                return 'No children';
            case 1:
                return '1 Child';
            default:
                return `${this.state.children} Children`;
        }
    }

    roomsOutput = () => {
        if (this.state.rooms === 1) return '1 Room';
        return `${this.state.rooms} Rooms`;
    }

    handleSubmit = () => {
        const { checkIn, checkOut } = this.parseDateRange(this.state.date);
        const searchValue = {
            destination: this.state.destination,
            checkIn: checkIn,
            checkOut: checkOut,
            rooms: this.state.rooms,
            adults: this.state.adults,
            children: this.state.children
        }
        this.props.onSubmit(searchValue);
    }

    parseDateRange = dateRangeString => {
        let pos = 4;

        let dateIn='', monthIn='', dateOut='', monthOut='';
        for (; dateRangeString.charAt(pos) !== ' '; pos++) {
            dateIn += dateRangeString.charAt(pos);
        }
        pos++;
        for (; dateRangeString.charAt(pos) !== ' '; pos++) {
            if (pos === dateRangeString.length) break;
            monthIn += dateRangeString.charAt(pos);
        }
        pos += 7;
        for (; dateRangeString.charAt(pos) !== ' '; pos++) {
            if (pos >= dateRangeString.length) break;
            dateOut += dateRangeString.charAt(pos);
        }
        pos++;
        for (; pos<dateRangeString.length; pos++) {
            if (pos >= dateRangeString.length) break;
            monthOut += dateRangeString.charAt(pos);
        }
        const checkIn = this.getDateObject(dateIn, monthIn);
        const checkOut = this.getDateObject(dateOut, monthOut);

        return { checkIn, checkOut };
    }

    getDateObject = (date, month) => {
        if (date === '' || month === '') return null;

        const currentDate = new Date(Date.now());
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        month = this.monthStringToNumber(month);

        if (currentMonth < month)
            return new Date(currentYear + 1, month, date);
        else
            return new Date(currentYear, month, date);
    }

    monthStringToNumber = monthString => {
        switch(monthString) {
            case 'Jan':
                return 0;
            case 'Feb':
                return 1;
            case 'Mar':
                return 2;
            case 'Apr':
                return 3;
            case 'May':
                return 4;
            case 'Jun':
                return 5;
            case 'Jul':
                return 6;
            case 'Aug':
                return 7;
            case 'Sep':
                return 8;
            case 'Oct':
                return 9;
            case 'Nov':
                return 10;
            case 'Dec':
                return 11;
            default:
                return -1;
        }
    }

    render() {
        const selectOptions = this.generateOptions(1, 10);
        const childrenOptions = this.generateOptions(0, 10);
        const { view } = this.props;

        return (
            view === 'bar' ?
            <Form className='search search--view-bar' onSubmit={this.handleSubmit}>
                <div className='destination'>
                    <Input
                        iconPosition='left'
                        icon='map marker alternate'
                        name='destination'
                        placeholder='Where are you going?'
                        onChange={this.handleChange}
                        onFocus={this.hideRoomSelector}
                        required
                    />
                </div>
                <div className='check-in-out'>
                <DatesRangeInput
                    closable
                    required
                    autoComplete='off'
                    minDate={moment()}
                    dateFormat='ddd D MMM'
                    popupPosition='bottom center'
                    icon='calendar alternate outline'
                    iconPosition='left'
                    placeholder='Check-in - Check-out'
                    name='date'
                    value={this.state.date}
                    onChange={this.handleChange}
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
                    required
                />
            </Form.Field>
            <Form.Field className='check-in-out'>
                <label>Check-in and Check-out date</label>
                <DatesRangeInput
                    closable
                    required
                    autoComplete='off'
                    minDate={moment()}
                    dateFormat='ddd D MMM'
                    popupPosition='bottom center'
                    icon='calendar alternate outline'
                    iconPosition='left'
                    placeholder='Check-in - Check-out'
                    name='date'
                    value={this.state.date}
                    onChange={this.handleChange}
                    onKeyPress={event => event.preventDefault()}
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
                            text={this.adultsOutput()}
                            options={selectOptions}
                            value={this.state.adults}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Group inline>
                        <Dropdown
                            selection
                            name='children'
                            text={this.childrenOutput()}
                            options={childrenOptions}
                            value={this.state.children}
                            onChange={this.handleChange}
                        />
                        <Dropdown
                            selection
                            name='rooms'
                            text={this.roomsOutput()}
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