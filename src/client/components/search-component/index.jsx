import React from 'react';
import './index.scss';
import { Select, Input } from 'semantic-ui-react';
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
        console.log('event');
        this.setState({ [name]: value });
    }

    render() {
        const selectOptions = [
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
            <form className='search-bar'>
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
                <div className='guest-options'>
                    <Input
                        icon='user'
                        iconPosition='left'
                        value=''
                        placeholder={`${this.state.adults} adults · ${this.state.children} children`}
                        onFocus={(event) => {event.target.classList.remove('hidden');}}
                    />
                    <div
                        className='guest-options-edit hidden'
                        >
                        <Select
                            name='rooms'
                            placeholder='Rooms'
                            options={selectOptions}
                        />
                        <Select
                            name='adults'
                            placeholder='Adults'
                            options={selectOptions}
                        />
                        <Select
                            name='children'
                            placeholder='Children'
                            options={selectOptions}
                        />
                    </div>
                </div>
            </form>
        )
    }

}

export default SearchComponent;