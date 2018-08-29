import React, { Component, Fragment } from "react";
import { Button, Radio, Segment } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

class CheckboxForm extends Component {
    render() {
        const { name, handleChange } = this.props;
        return (
            <Fragment>
                <Radio
                    name={name}
                    value={name+" true"}
                    label="Yes"
                    onChange={handleChange}
                />

                <Radio style={{marginLeft:50}}
                    name={name}
                    value={name +" false"}
                    label="No"
                    onChange={handleChange}
                />
            </Fragment>
        );
    }
}

CheckboxForm = reduxForm({
    form: "CheckboxForm"
})(CheckboxForm);

export default CheckboxForm;

