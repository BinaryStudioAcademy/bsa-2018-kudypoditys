import React, { Component, Fragment } from "react";
import { Radio } from "semantic-ui-react";

class CheckboxForm extends Component {
    render() {
        const {
            name, yesText, noText
        } = this.props;
        return (
            <Fragment>
                <Radio
                    name={name}
                    value={true}
                    label={yesText}
                />

                <Radio style={{ marginLeft: 50 }}
                    name={name}
                    value={false}
                    label={noText}
                />
            </Fragment>
        );
    }
}

export default CheckboxForm;

