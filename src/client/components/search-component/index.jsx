import React from 'react';
import './index.scss';
import Calendar from 'react-calendar';
import { Select } from 'semantic-ui-react';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: {
                destination: '',
                checkIn: '',
                checkOut: '',
                rooms: 1,
                adults: 2,
                children: 0
            }
        };
    }

    handleChange(event){

    }

    render() {
        const checkIn = this.state.searchValue.checkIn;
        const checkOut = this.state.searchValue.checkOut;
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
            <form>
                <div className='destination'>
                    <input
                        name='city'
                        placeholder='Where are you going?'
                        onChange={this.handleChange}
                    />
                </div>
                <div className='check-in'>
                    {checkIn === '' ? 'Check-in' : 'Error'}
                    <Calendar
                        className='hidden'
                        minDetail='year'
                    />
                </div>
                <div className='check-out'>
                    {checkOut === '' ? 'Check-out' : 'Error'}
                    <Calendar
                        className='hidden'
                        minDetail='year'
                    />
                </div>
                <div className='guest-options'>
                    {this.state.searchValue.adults} adults · {this.state.searchValue.children} children
                    <div className='guest-options-edit'>
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