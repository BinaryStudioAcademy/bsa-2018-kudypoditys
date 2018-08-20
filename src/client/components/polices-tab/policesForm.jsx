import React, {Fragment} from "react";
import {Card, CardDescription, Button, Form} from "semantic-ui-react";
// import FormTextInput from '../input-form/formTextInput';
import {required, maxLength20, phoneNumber} from 'client/regexValidationService';
import {Field, reduxForm} from 'redux-form';
// import CheckboxForm from './checkboxForm';
import semanticSelectorFormField from 'client/components/dropdown-form/semanticSelectorForm'
import {cancelOpt} from './config'
import CheckInCheckOut from 'client/components/checkin-checkout'
import {connect} from 'react-redux';


let PolicesForm = props => {
    const {handleSubmit, pristine, submitting} = props;
    return (
        <Form>
            <Card style={{width: '900px'}} color='teal'>
                <Card.Content>
                    <Card.Description style={{fontSize: '18px'}}>Cancellations.
                        When can your guests cancel their booking for free?</Card.Description><br/>
                    <Field

                        name="Cancellations"
                        component={semanticSelectorFormField}
                        as={Form.Select}
                        options={cancelOpt}

                        placeholder="1 day before arrival"
                        onChange={handleChange}
                        validate={required}/>
                    {/*<Card.Meta><br />Guests will see this name when they search*/}
                    {/*for a place to stay.</Card.Meta>*/}
                </Card.Content>
            </Card>


            <Card style={{width: '900px'}} color='teal'>
                <Card.Content>
                    <Field

                        name="ChekIN"
                        component={CheckInCheckOut}
                        as={Form.Field}
                        // options={cancelOpt}
                        // placeholder="1 day before arrival"

                        validate={required}/>
                    {/*<CheckInCheckOut/>*/}

                </Card.Content>
            </Card>
        </Form>

    );
}
const onSubmit = (values, dispatch) => {
    console.log(values)
};
const handleChange = (event, value, target) => {
    console.log(event)
    console.log(value)
    console.log(target)
};

export default connect()(reduxForm({
    form: 'TabPolices',
    onSubmit,
})(PolicesForm));

