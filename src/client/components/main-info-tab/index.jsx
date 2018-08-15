import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, Header, Input, CardDescription, Button, Checkbox, Dropdown, Form } from "semantic-ui-react";
import FormTextInput from '../input-form/index';
import { mapStateToProps, mapDispatchToProps } from "./container"


class TabRegistration extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })

    render() {
        return (
            <Fragment textAlign='center'>
                <Header as='h2'>Welcome Elvira!</Header>
                Start by telling us your property's name, contact details, and address.
                <Card style={{ width: '900px' }}     color='teal'>
                    <Card.Content>
                        <Card.Description style={{ fontSize: '18px' }}>What's the
                        name of your property?</Card.Description>
                        <Input />
                        <Card.Meta>Guests will see this name when they search
                            for a place to stay.</Card.Meta>
                    </Card.Content>
                </Card>
                <Card style={{ width: '900px' }}    color='teal'>
                    <Card.Content>
                        <Card.Description style={{ fontSize: '18px' }}>What are the contact
                        details for this property?</Card.Description>
                        <CardDescription>Contact name</CardDescription>
                        <Input />
                        <CardDescription>Contact number (so we can assist with your
                             registration when needed)</CardDescription>
                        <Input />
                        <CardDescription> Do you own multiple apartments, or are you part
                            of a property management company or group?</CardDescription>

                        <Button basic>
                            <Checkbox
                             defaultChecked
                                radio
                                label='Yes'
                                value='this'
                                checked={this.state.value === 'this'}
                                onChange={this.handleChange}
                            />
                        </Button>
                        <Button basic>
                            <Checkbox
                                radio
                                label='No'
                                value='that'
                                checked={this.state.value === 'that'}
                                onChange={this.handleChange}
                            />
                        </Button>
                    </Card.Content>
                </Card>
                <Card style={{ width: '900px' }}  link    color='teal'>
                    <Card.Content>
                        <Card.Description style={{ fontSize: '18px' }}>Channel Manager
                        </Card.Description>
                        <CardDescription>Do you work with a channel manager or XML provider
                             to manage your pricing and availability?</CardDescription>
                        <Button basic>
                            <Checkbox
                                radio
                                label='Yes'
                                value='this1'
                                checked={this.state.value === 'this1'}
                                onChange={this.handleChange}
                            />
                        </Button>
                        <Button basic>
                            <Checkbox
                             defaultChecked
                                radio
                                label='No'
                                value='that1'
                                checked={this.state.value === 'that1'}
                                onChange={this.handleChange}
                            />
                        </Button>
                    </Card.Content>
                </Card>
                <Card style={{ width: '900px' }}  link    color='teal'>
                    <Card.Content>
                        <Card.Description style={{ fontSize: '18px' }}>Where's your property located?
                        </Card.Description>
                        <CardDescription>Street address</CardDescription>
                        <Input />
                        <CardDescription>Address line 2</CardDescription>
                        <Input />
                        <CardDescription>Country/Region</CardDescription>
                        <Input />
                        <CardDescription>City</CardDescription>
                        <Dropdown placeholder='State' search selection />
                        <CardDescription>Zip code</CardDescription>
                        <Input />
                    </Card.Content>
                </Card>
                <Card style={{ width: '900px' }}  link    color='teal'>
                    <Card.Content>
                        <Card.Description style={{ fontSize: '18px' }}>Did we contact you?</Card.Description>
                        <CardDescription>Were you contacted by a Booking.com representative in
                            the past two weeks before starting your registration process?</CardDescription>
                        <Button basic>
                            <Checkbox
                                radio
                                label='Yes'
                                value='this2'
                                checked={this.state.value === 'this2'}
                                onChange={this.handleChange}
                            />
                        </Button>
                        <Button basic>
                            <Checkbox
                             defaultChecked
                                radio
                                label='No'
                                value='that2'
                                checked={this.state.value === 'that2'}
                                onChange={this.handleChange}
                            />
                        </Button>
                    </Card.Content>
                    <Button color='teal' style={{ width: '900px' }} >Continue</Button>
                </Card>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabRegistration);
