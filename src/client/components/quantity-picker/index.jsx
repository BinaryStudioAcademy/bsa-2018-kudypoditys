import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import _ from 'lodash'
import PropTypes from "prop-types";

const quantityOptions = [
    { key: 1, text: '1', value: 1 },
    { key: 2, text: '2', value: 2 },
    { key: 3, text: '3', value: 3 },
    { key: 4, text: '4', value: 4 },
    { key: 5, text: '5', value: 5 },
];
export const getOptions = (number, prefix = '') =>
    _.times(number, index => ({
        key: index,
        text: `${prefix}${index}`,
        value: index,
    }));

export default class QuantityPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null
        };
    }

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
                options={getOptions(this.props.roomsAvailable, '')}
                // placeholder='0'
                compact
                selection
                value={value}
            />
        )
    }
}

QuantityPicker.propTypes = {
    roomsAvailable: PropTypes.number.isRequired
};

QuantityPicker.defaultProps = {
    roomsAvailable: 0,
};
