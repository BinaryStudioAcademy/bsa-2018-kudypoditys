import React, { Fragment } from "react";
import { Card } from 'semantic-ui-react';
import { Field, reduxForm, } from 'redux-form';

let CheckboxAmenitiesForm = (props) => {
        return (
            <Fragment >
                <Card style={{ width: '1000px' }} >
                <Card.Content>
                        <Card.Header style={{ fontSize: '14px' }} >Most Requested by Guests</Card.Header>
                        <Field
                            style={{ marginTop: '17px' }}
                            name="hasAir"
                            component="input"
                            type="checkbox" />
                          <label>Air conditioning</label> <br/>
                        <Field
                            style={{ marginTop: '17px' }}
                            name="hasPool"
                            component="input"
                            type="checkbox"/>
                            <label>Private pool</label> <br/>
                        <Field
                            style={{ marginTop: '17px' }}
                            name="hasBalcony"
                            component="input"
                            type="checkbox" />
                         <label>Balcony</label> <br/>
                        <Field
                            style={{ marginTop: '17px' }}
                            name="hasTerrace"
                            component="input"
                            type="checkbox" />
                        <label>Terrace</label> <br/>
                        <Field
                            style={{ marginTop: '17px' }}
                            name="Bathroom"
                            component="input"
                            type="checkbox" />
                         <label>Bathroom</label> <br/>
                        <Field
                            style={{ marginTop: '17px' }}
                            name="hasTV"
                            component="input"
                            type="checkbox" />
                         <label>Flat-screen TV</label> <br/>
                        <Field
                            style={{ marginTop: '17px' }}
                            name="hasWashing"
                            component="input"
                            type="checkbox" />
                         <label> Washing machine</label> <br/>
                        <Field
                            style={{ marginTop: '17px' }}
                            name="hasKitchenette"
                            component="input"
                            type="checkbox"
                            label="Kitchenette" />
                        <label >Kitchenette</label>
                    </Card.Content>
                    </Card>
            </Fragment>
        )
}
CheckboxAmenitiesForm = reduxForm({
    form: "CheckboxAmenitiesForm"
})(CheckboxAmenitiesForm);

export default CheckboxAmenitiesForm