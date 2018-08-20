import React, {Component,} from "react";
import {Card, Form, Button} from 'semantic-ui-react';

import {cancelOpt} from "./config";

import {required} from 'client/regexValidationService';
import {Field, reduxForm} from 'redux-form';

import semanticSelectorFormField from 'client/components/dropdown-form/semanticSelectorForm'

import CheckInCheckOut from 'client/components/checkin-checkout'
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "../amenities-tab/container";


class TabPolices extends Component {
    state = {}
    handleContextRef = contextRef => this.setState({contextRef});
    // handleChange = (event, value) => {
    //     this.props.onSelect(value.value);
    //
    // };

    render() {
        const {name} = this.props;
        const {contextRef} = this.state
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
                            // onChange={handleChange}
                        />
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

