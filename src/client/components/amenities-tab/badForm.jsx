import React, { Component, Fragment } from "react";
import { Button, Card, Form, Input, Label } from "semantic-ui-react";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import semanticSelectorFormField from 'client/components/dropdown-form/semanticSelectorForm'
import { required } from 'client/regexValidationService';
import { connect } from 'react-redux'

const numbers = ['1', '2', '3', '4']
const ages = ['Up to 12 years old', 'Up to 16 years old', 'Up to 6 years old']

class CheckboxBadForm extends Component {
    render() {
        const { hasExtraBedValue, hasChildrenUpToTwoValue,
            hasChildrenValue, hasAdultsValue } = this.props
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
                                name="yes"
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
                        <Card.Header as='h6'>Check the box(es) if you can accommodate
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
                                label="Semantic selector"
                                placeholder="Select an option"
                                validate={required} />
                            <Card.Description ><br />Enter the price per night, per child</Card.Description>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <Label basic>$</Label>
                                <input />
                                <Label>.00</Label>
                            </Input> </div>}}
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
                            </Input> </div>}}
                    </Card.Content>
                </Card>
            </Fragment>


        )
    }
}
CheckboxBadForm = reduxForm({
    form: "CheckboxForm"
})(CheckboxBadForm);

const selector = formValueSelector('CheckboxBadForm')
CheckboxBadForm = connect(
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
)(CheckboxBadForm)

export default CheckboxBadForm