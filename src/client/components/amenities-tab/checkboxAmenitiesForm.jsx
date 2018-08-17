import React, { Fragment } from "react";
import { Card, CardDescription } from 'semantic-ui-react';
import { Field, reduxForm, } from 'redux-form';

let CheckboxAmenitiesForm = (props) => {
        return (
            <Fragment >
                <Card style={{ width: '1000px' }} >
                <Card.Content>
                        <Card.Header style={{ fontSize: '14px' }} >Most Requested by Guests</Card.Header>
                        <CardDescription><br />Air conditioning</CardDescription>
                        <Field name="hasAir"
                            component="input"
                            type="checkbox" />
                        <Card.Description> <br />Private pool</Card.Description>
                        <Field name="hasPool"
                            component="input"
                            type="checkbox" />
                        <CardDescription><br />Balcony</CardDescription>
                        <Field name="hasBalcony"
                            component="input"
                            type="checkbox" />
                        <CardDescription><br />Terrace</CardDescription>
                        <Field name="hasTerrace"
                            component="input"
                            type="checkbox" />
                        <CardDescription><br />Bathroom</CardDescription>
                        <Field name="Bathroom"
                            component="input"
                            type="checkbox" />
                        <CardDescription><br />Flat-screen TV</CardDescription>
                        <Field name="hasTV"
                            component="input"
                            type="checkbox" />
                        <CardDescription><br /> Washing machine</CardDescription>
                        <Field name="hasWashing"
                            component="input"
                            type="checkbox" />
                    <CardDescription><br />Kitchenette</CardDescription>
                        <Field name="hasKitchenette"
                            component="input"
                            type="checkbox" />
                    </Card.Content>
                    </Card>
            </Fragment>
        )
}
CheckboxAmenitiesForm = reduxForm({
    form: "CheckboxAmenitiesForm"
})(CheckboxAmenitiesForm);

export default CheckboxAmenitiesForm