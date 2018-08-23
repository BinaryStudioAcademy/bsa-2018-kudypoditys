import React, {Component, Fragment} from "react";
import {Button} from "semantic-ui-react";
import {Field, reduxForm} from 'redux-form';


class CheckboxForm extends Component {
    render() {
        const {name} = this.props
        return (
            <Fragment>
                <Button basic>
                    <Field
                        name={name}
                        id="yes"
                        component="input"
                        type="radio"
                        value="true"/>
                    {' '}
                    Yes
                </Button>
                <Button basic>
                    <Field
                        name={name}
                        id='no'
                        component="input"
                        type="radio"
                        value="false"/>
                    {' '}
                    No
                </Button>
            </Fragment>
        )
    }
}

CheckboxForm = reduxForm({
    form: "CheckboxForm"
})(CheckboxForm);

export default CheckboxForm