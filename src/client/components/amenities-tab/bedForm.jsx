import React, { Component, Fragment } from "react";
import { Button, Card, Form, Input, Label } from "semantic-ui-react";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import semanticSelectorFormField from 'client/components/dropdown-form/semanticSelectorForm'
import { required } from 'client/regexValidationService';
import { connect } from 'react-redux'

const numbers = [{ key: '0', text: '1', value: '1' },
{ key: '1', text: '2', value: '2' },
{ key: '2', text: '3', value: '3' },
{ key: '3', text: '4', value: '4' }];

const ages = [{ key: '0', text: 'Up to 12 years old', value: 'Up to 12 years old' },
{ key: '1', text: 'Up to 16 years old', value: 'Up to 16 years old' },
{ key: '2', text: 'Up to 6 years old', value: 'Up to 6 years old' }]


let CheckboxBedForm = (props) => {
    const { hasExtraBedValue, hasChildrenUpToTwoValue,
        hasChildrenValue, hasAdultsValue } = props
    return (
        <Fragment >
            <Card style={{ width: '1000px' }} >
                <Card.Content>
                    <Card.Description style={{ fontSize: '18px' }}>Extra Bed Options</Card.Description><br />
                    <Card.Description >Can you provide extra beds?</Card.Description>
                    <Button basic>
                        <Field
                            name="yes"
                            id="yes"
                            component="input"
                            type="radio"
                            value="yes" />
                        {' '}
                        Yes
                </Button>
                    <Button basic>
                        <Field
                            id="no"
                            name="yes1"
                            component="input"
                            type="radio"
                            value="no" />
                        {' '}
                        No
                </Button>
                    {hasExtraBedValue && <div>
                        <Card.Description ><br />Can you provide extra beds?</Card.Description>
                        <Field
                            name="selectExample"
                            component={semanticSelectorFormField}
                            as={Form.Select}
                            options={numbers}
                            label="Semantic selector"
                            placeholder="Select an option"
                            validate={required} /></div>}
                    <Card.Header style={{ fontSize: '14px' }} ><br/>Check the box(es) if you can accommodate
                         the following guests in extra beds.</Card.Header>
                    <Card.Description ><br />Children up to 2 years old in cribs</Card.Description>
                    <Field
                        name="ChildrenUpTwo"
                        id="ChildrenUpTwo"
                        component="input"
                        type="checkbox"
                    />
                    {hasChildrenUpToTwoValue && <div>
                        <Card.Description ><br />Enter the price per night, per child</Card.Description>
                        <Input labelPosition='right' type='text' placeholder='Amount'>
                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Input> </div>}
                    <Card.Description ><br />Children</Card.Description>
                    <Field
                        name="Children"
                        id="Children"
                        component="input"
                        type="checkbox"
                    />
                    {hasChildrenValue && <div>
                        <Field
                            name="selectExample"
                            component={semanticSelectorFormField}
                            as={Form.Select}
                            options={ages}
                            placeholder="Select an option"
                            validate={required} />
                        <Card.Description ><br />Enter the price per night, per child</Card.Description>
                        <Input labelPosition='right' type='text' placeholder='Amount'>
                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Input> </div>}
                    <Card.Description ><br />Adults</Card.Description>
                    <Field
                        name="Adults"
                        id="Adults"
                        component="input"
                        type="checkbox"
                    />
                    {hasAdultsValue && <div>
                        <Card.Description ><br />Enter the price per night, per child</Card.Description>
                        <Input labelPosition='right' type='text' placeholder='Amount'>
                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Input> </div>}
                </Card.Content>
            </Card>
        </Fragment>


    )
}

CheckboxBedForm = reduxForm({
    form: "checkboxForm"
})(CheckboxBedForm);

const selector = formValueSelector('checkboxBadForm')
CheckboxBedForm = connect(
    state => {
        const hasExtraBedValue = selector(state, 'yes');
        const hasChildrenUpToTwoValue = selector(state, 'ChildrenUpTwo');
        const hasChildrenValue = selector(state, 'Children');
        const hasAdultsValue = selector(state, 'Adults')
        return {
            hasExtraBedValue,
            hasChildrenUpToTwoValue,
            hasChildrenValue,
            hasAdultsValue
        }
    }
)(CheckboxBedForm)

export default CheckboxBedForm