import React, { Component } from 'react'
import { Dropdown, Grid, Segment } from 'semantic-ui-react'

const quantityOptions = [
    { key: 1, text: '1', value: 1 },
    { key: 2, text: '2', value: 2 },
    { key: 3, text: '3', value: 3 },
    { key: 4, text: '4', value: 4 },
    { key: 5, text: '5', value: 5 },
];

export default class QuantityPicker extends Component {
    state = {};

    handleChange = (e, { value }) => {
        e.preventDefault();
        console.log(value);
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <Dropdown
                onChange={this.handleChange}
                options={quantityOptions}
                placeholder='0'
                compact
                selection
                value={value}
            />
        )
    }
}
