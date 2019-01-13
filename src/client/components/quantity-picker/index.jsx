import React, { Component } from "react"
import { Dropdown } from "semantic-ui-react"
import _ from "lodash"
import PropTypes from "prop-types";

export const getOptions = (number, prefix = '') =>
    _.times(number, index => ({
        key: index,
        text: `${prefix}${index}`,
        value: index,
    }));

export class QuantityPicker extends Component {
    handleChange = (e, {value}) => {
        this.props.onSelectionChanged(e, value, this.props.roomId)
    };

    render() {
        const { roomsAvailable, roomsSelectedAmount, roomId, onSelectionChanged, ...rest} = this.props;
        const options = getOptions(roomsAvailable, '');

        return (
            <Dropdown
                {...rest}
                onChange={this.handleChange}
                options={options}
                // placeholder='0'
                compact
                selection
                value={roomsSelectedAmount}
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