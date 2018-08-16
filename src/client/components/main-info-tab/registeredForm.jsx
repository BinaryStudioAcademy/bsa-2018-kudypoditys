import React, { Fragment } from "react";
import { Card, CardDescription, Button, Form } from "semantic-ui-react";
import FormTextInput from '../input-form/formTextInput';
import { required, maxLength20, phoneNumber } from 'client/regexValidationService';
import { Field, reduxForm } from 'redux-form';
import CheckboxForm from './checkboxForm';
import semanticSelectorFormField from './semanticSelectorForm'



const cities = ['Lviv', 'Kyiv', 'Odessa', 'Dnipro', 'Ternopil']


let RegistrationForm = props => {
    const { handleSubmit, pristine, submitting } = props
    return (
        <Fragment onSubmit={handleSubmit} >
            <Card style={{ width: '900px' }} color='teal'>
                <Card.Content>
                    <Card.Description style={{ fontSize: '18px' }}>What's the
                        name of your property?</Card.Description><br />
                    <Field
                        component={FormTextInput}
                        name="PropertyName"
                        label="Property name"
                        type="text"
                        validate={[required, maxLength20]} />
                    <Card.Meta><br />Guests will see this name when they search
                            for a place to stay.</Card.Meta>
                </Card.Content>
            </Card>
            <Card style={{ width: '900px' }} color='teal'>
                <Card.Content>
                    <Card.Description style={{ fontSize: '18px' }}>What are the contact
                        details for this property?</Card.Description><br />
                    <CardDescription>Contact name</CardDescription>
                    <Field
                        component={FormTextInput}
                        name="fullName"
                        type="text"
                        icon="user"
                        validate={[required, maxLength20]} />
                    <CardDescription><br />Contact number (so we can assist with your
                             registration when needed)</CardDescription>
                    <Field
                        component={FormTextInput}
                        name="phoneNumber"
                        type="number"
                        icon="phone"
                        validate={[required, phoneNumber]} />
                    <CardDescription><br /> Do you own multiple apartments, or are you part
                            of a property management company or group?</CardDescription>
                    <CheckboxForm />
                </Card.Content>
            </Card>
            <Card style={{ width: '900px' }} color='teal'>
                <Card.Content>
                    <Card.Description style={{ fontSize: '18px' }}>Channel Manager
                        </Card.Description>
                    <CardDescription><br />Do you work with a channel manager or XML provider
                             to manage your pricing and availability?</CardDescription>
                    <CheckboxForm />
                </Card.Content>
            </Card>
            <Card style={{ width: '900px' }} color='teal'>
                <Card.Content>
                    <Card.Description style={{ fontSize: '18px' }}>Where's your property located?
                        </Card.Description>
                    <CardDescription><br />Street address</CardDescription>
                    <Field
                        component={FormTextInput}
                        name="streetAdres"
                        type="text"
                        label="For example:10 Zelena street"
                        icon="map marker"
                        validate={[required, maxLength20]} />
                    <CardDescription><br />Address line 2</CardDescription>
                    <Field
                        component={FormTextInput}
                        name="address2"
                        type="text"
                        label="For example: flat number and etc."
                        icon="map marker"
                        validate={[required, maxLength20]} />
                    <CardDescription><br />Country/Region</CardDescription>
                    <Field
                        component={FormTextInput}
                        name="address"
                        type="text"
                        label="Ukraina"
                        icon="map marker"
                        validate={[required, maxLength20]} />
                    <CardDescription><br />City</CardDescription>
                    <Field
                    name="selectExample"
                    component={semanticSelectorFormField}
                    as={Form.Select}
                    options={cities}
                    label="Semantic selector"
                    placeholder="Select an option"
                    validate={required}/>
                </Card.Content>
            </Card>
            <Card style={{ width: '900px' }} color='teal'>
                <Card.Content>
                    <Card.Description style={{ fontSize: '18px' }}>Did we contact you?</Card.Description>
                    <CardDescription><br />Were you contacted by a Booking.com representative in
                            the past two weeks before starting your registration process?</CardDescription>
                    <CheckboxForm />
                </Card.Content>
            </Card>
            <Button color='teal' style={{ width: '750px' }}
                disabled={pristine || submitting} >Continue</Button>
        </Fragment>
    );
}

RegistrationForm = reduxForm({
    form: "TabRegistration"
})(RegistrationForm);

export default RegistrationForm;
