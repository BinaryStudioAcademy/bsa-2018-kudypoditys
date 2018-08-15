import React, { Component, Fragment } from "react";
import { Button, Checkbox } from "semantic-ui-react";
import { Field, reduxForm } from 'redux-form';

const renderCheckbox = ({ input, data }) =>
    < Checkbox {...input}
        label={data}
        onBlur={() => input.onBlur()}
        data={data} />

class CheckboxForm extends Component {
    render() {
        return (
            <Fragment>
                <Button basic>
                    <Field
                        name="select"
                        component={renderCheckbox}
                        data={['Yes']} />
                </Button>
                <Button basic>
                    <Field
                        name="select"
                        component={renderCheckbox}
                        data={['No']} />
                </Button>
            </Fragment>
        )
    }
}
CheckboxForm = reduxForm({
    form: "CheckboxForm"
})(CheckboxForm);

export default CheckboxForm