import React, { Component, Fragment } from "react";
import { Card, Button, CardDescription, Container } from 'semantic-ui-react';
import { Field, reduxForm, formValueSelector } from 'redux-form'




class ButtonTab extends Component {

    handleChange = (e, { name, value }) => {
        if(value === "true") {
            value = true
        }
        else if (value === "false") {
            value = false
        }
        this.props.updateTab({ [name]: value });
    };
     toggleAddAmenities = (amenities) => {
        this.props.updateTab({
            addAmenities: {
                ...this.props.addAmenities,
                [amenities]: !this.props.paymentCreditCards[amenities]
            }
        });
    };

    render() {

        return (
            <Fragment >
                <Card style={{ width: '1000px' }} >
                  <div>  <Button fluid basic content='Room amenities'
                        labelPosition='right'
                        icon='right chevron'
                        checked={this.props.amenitytType === "amenities"} value="amenities" onChange={this.handleChange} /> {
                            this.props.amenitytType === "amenities" ?
                                <Container><CardDescription><br />Air conditioning</CardDescription>
                                    <Field name="hasAir"
                                        component="input"
                                        type="checkbox" />
                                    <Card.Description> <br />Private pool</Card.Description>
                                    <Field name="hasPool"
                                        component="input"
                                        type="checkbox" /></Container>
                                : null}</div>
                    <Button fluid basic content='Bathroom' labelPosition='right' icon='right chevron' />
                    <Button fluid basic content='Media & Technology' labelPosition='right' icon='right chevron' />
                    <Button fluid basic content='Food & Drink' labelPosition='right' icon='right chevron' />
                    <Button fluid basic content='Services & Extras' labelPosition='right' icon='right chevron' />
                    <Button fluid basic content='Outdoor & View' labelPosition='right' icon='right chevron' />
                    <Button fluid basic content='Accessibility' labelPosition='right' icon='right chevron' />
                    <Button fluid basic content='Building Characteristics' labelPosition='right' icon='right chevron' />
                    <Button fluid basic content='Entertainment & Family Services' labelPosition='right' icon='right chevron' />
                </Card>
            </Fragment>
        )
    }

}
ButtonTab = reduxForm({
    form: "ButtonTab"
})(ButtonTab);

export default ButtonTab