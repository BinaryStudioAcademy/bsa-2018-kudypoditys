import React, {Component,} from "react";
import {Card, Form, Button} from 'semantic-ui-react';

import {cancelOpt} from "./config";

import {required} from 'client/regexValidationService';
import {Field, reduxForm} from 'redux-form';

import semanticSelectorFormField from 'client/components/dropdown-form/semanticSelectorForm'

import CheckInCheckOut from 'client/components/checkin-checkout'
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "../polices-tab/container";


class TabPolices extends Component {
    state = {};

    render() {

        return (

            <Form onSubmit={this.props.handleSubmit}>
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

                        />

                    </Card.Content>
                </Card>


                <Card style={{width: '900px'}} color='teal'>
                    <Card.Content>
                        <Field

                            name="ChekIN"
                            component={CheckInCheckOut}
                            as={Form.Field}


                        />


                    </Card.Content>
                </Card>
                <Button color='teal' fluid
                        type="submit">Continue</Button>
            </Form>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'PolicesTabRegistrationForm'
})(TabPolices))

