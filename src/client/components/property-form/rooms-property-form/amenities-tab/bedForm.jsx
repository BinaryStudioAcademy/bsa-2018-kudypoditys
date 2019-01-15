import React, {Fragment} from "react";
import {Button, Card, Form, Input, Label} from "semantic-ui-react";
import {Field, formValueSelector} from 'redux-form';
import semanticSelectorFormField from './dropdown-form/semanticSelectorForm'
import {required} from 'client/regexValidationService';
import {connect} from 'react-redux'


const numbers = [{key: '0', text: '1', value: '1'},
    {key: '1', text: '2', value: '2'},
    {key: '2', text: '3', value: '3'},
    {key: '3', text: '4', value: '4'}];

const ages = [{key: '0', text: 'Up to 12 years old', value: 'Up to 12 years old'},
    {key: '1', text: 'Up to 16 years old', value: 'Up to 16 years old'},
    {key: '2', text: 'Up to 6 years old', value: 'Up to 6 years old'}];

let CheckboxBedForm = (props) => {
    const {
        hasExtraBedValue, hasChildrenUpToTwoValue,
        hasChildrenValue, hasAdultsValue
    } = props;
    return (
        <Fragment>
            <Card style={{width: '1000px'}}>
                <Card.Content>
                    <Card.Description style={{fontSize: '18px'}}>Extra Bed Options</Card.Description><br/>
                    <Card.Description>Can you provide extra beds?</Card.Description>
                    <Button basic>
                        <Field
                            name="hasExtraBads"
                            id="hasExtraBads"
                            component="input"
                            type="radio"
                            value="true"
                        />
                        {' '}
                        Yes
                    </Button>
                    <Button basic>
                        <Field
                            id="no"
                            name="hasExtraBads"
                            component="input"
                            type="radio"

                        />
                        {' '}
                        No
                    </Button>
                    {hasExtraBedValue && <div>
                        <Card.Description><br/>Can you provide extra beds?</Card.Description>
                        <Field
                            name="Select amount"
                            component={semanticSelectorFormField}
                            as={Form.Select}
                            options={numbers}
                            placeholder="Select amount"
                            validate={required}/>
                        <Card.Header style={{fontSize: '14px'}}><br/>Check the box(es) if you can accommodate
                            the following guests in extra beds.</Card.Header>
                        <br/>
                        <Field
                            style={{marginTop: '17px'}}
                            name="ChildrenUpTwo"
                            id="ChildrenUpTwo"
                            component="input"
                            type="checkbox"
                        />
                        <label>Children up to 2 years old in cribs</label>
                        {hasChildrenUpToTwoValue && <div>
                            <Card.Description><br/>Enter the price per night, per child</Card.Description>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <Label basic>UAN</Label>
                                <input/>
                                <Label>.00</Label>
                            </Input></div>}
                        <br/>
                        <Field
                            style={{marginTop: '17px'}}
                            name="Children"
                            id="Children"
                            component="input"
                            type="checkbox"
                        />
                        <label>Children</label>
                        {hasChildrenValue && <div>
                            <Field
                                name="child age"
                                component={semanticSelectorFormField}
                                as={Form.Select}
                                options={ages}
                                placeholder="Select child's age"
                                validate={required}/>
                            <Card.Description><br/>Enter the price per night, per child</Card.Description>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <Label basic>UAN</Label>
                                <input/>
                                <Label>.00</Label>
                            </Input></div>}
                        <br/>
                        <Field
                            style={{marginTop: '17px'}}
                            name="Adults"
                            id="Adults"
                            component="input"
                            type="checkbox"
                        />
                        <label>Adults</label>
                        {hasAdultsValue && <div>
                            <Card.Description><br/>Enter the price per night, per child</Card.Description>
                            <Input labelPosition='right' type='text' placeholder='Amount'>
                                <Label basic>UAN</Label>
                                <input/>
                                <Label>.00</Label>
                            </Input></div>}
                    </div>}
                </Card.Content>
            </Card>
        </Fragment>

    )
};

const selector = formValueSelector('AmenitiesTabRegistrationForm');
CheckboxBedForm = connect(
    state => {
        const hasExtraBedValue = selector(state, 'hasExtraBads');
        const hasChildrenUpToTwoValue = selector(state, 'ChildrenUpTwo');
        const hasChildrenValue = selector(state, 'Children');
        const hasAdultsValue = selector(state, 'Adults');
        return {
            hasExtraBedValue,
            hasChildrenUpToTwoValue,
            hasChildrenValue,
            hasAdultsValue
        }
    }
)(CheckboxBedForm);

export default CheckboxBedForm