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

export class QuantityPicker extends Component {
    handleChange = (e, {value}) => {
        this.props.onSelectionChanged(e, value, this.props.roomId)
        // TODO: dispatch event(action) with roomId, selectedRoomsAmount
    };

    render() {
        const options = getOptions(this.props.roomsAvailable, '');
        const val = options.filter(o => o.value === this.props.roomsSelectedAmount)[0].value;

        return (
            <Dropdown
                onChange={this.handleChange}
                options={options}
                // placeholder='0'
                compact
                selection
                value={val}
            />
        )
    }
}

QuantityPicker.propTypes = {
    roomId: PropTypes.number.isRequired,
    roomsSelectedAmount: PropTypes.number.isRequired,
    roomsAvailable: PropTypes.number.isRequired,
    onSelectionChanged: PropTypes.func.isRequired
};

QuantityPicker.defaultProps = {
    roomId: 0,
    roomsSelectedAmount: 0,
    roomsAvailable: 0,
    onSelectionChanged: null
};

export default QuantityPicker;