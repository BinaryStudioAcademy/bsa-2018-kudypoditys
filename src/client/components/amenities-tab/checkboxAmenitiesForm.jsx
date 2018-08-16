import React, { Component, Fragment } from "react";
import {  Card,  CardDescription } from 'semantic-ui-react';
import { Field, reduxForm, } from 'redux-form';

class CheckboxAmenitiesForm extends Component {
    render() {
        return (
            <Fragment >
                <Card style={{ width: '1000px', padding:"30px" }} >
                    <Card.Header as='h3'>Most Requested by Guests</Card.Header>
                    <CardDescription>Air conditioning</CardDescription>
                    <Field name="hasAir"
                        component="input"
                        type="checkbox" />
                    <Card.Description> Private pool</Card.Description>
                    <Field name="hasPool"
                        component="input"
                        type="checkbox" />
                    <CardDescription>Balcony</CardDescription>
                    <Field name="hasBalcony"
                        component="input"
                        type="checkbox" />
                     <CardDescription>Terrace</CardDescription>
                    <Field name="hasTerrace"
                        component="input"
                        type="checkbox" />
                    <CardDescription>Bathroom</CardDescription>
                    <Field name="Bathroom"
                        component="input"
                        type="checkbox" />
                     <CardDescription>Flat-screen TV</CardDescription>
                    <Field name="hasTV"
                        component="input"
                        type="checkbox" />
                </Card>
            </Fragment>
        )
    }
}
CheckboxAmenitiesForm = reduxForm({
    form: "CheckboxAmenitiesForm"
})(CheckboxAmenitiesForm);

export default CheckboxAmenitiesForm