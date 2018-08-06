import React from 'react';
import { Input, Button, Form, Header, Grid, Segment, Message } from 'semantic-ui-react';

export class LoginComponent extends React.Component {

    handleChange = () => {
        console.log('Change');
    }

    handleClickLogin = () => {
        console.log('Login')
    }

    handleClickRegister = () => {
        console.log('Register')
    }

    handleClickForgot = () => {
        console.log('Forgot')
    }

    render() {
        const listItems = this.props.errors.map((error,i) =>
            <li key={i}>{error.message}</li>
        );
        return (
            <div className="loginComponent" >
                <Grid centered columns={3} >
                    <Grid.Column textAlign='center' style={{ marginTop: "25vh" }}>
                        <Header as='h1'>Log-in to your account</Header>
                        <Form >
                            <Segment stacked secondary>
                                <Form.Field>
                                    <Input
                                        iconPosition='left'
                                        icon='user'
                                        type="text"
                                        name="email"
                                        value={this.props.email}
                                        placeholder="E-mail address"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Input
                                        iconPosition='left'
                                        icon='lock'
                                        type="password"
                                        name="password"
                                        value={this.props.password}
                                        placeholder="Password"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Form.Field>
                                <Form.Field style={{ textAlign: 'right' }}>
                                    <a tabIndex="0" onClick={this.handleClickForgot}>Forgot the password ?</a>
                                </Form.Field>
                                <Button.Group>
                                    <Button positive onClick={this.handleClickLogin}>Login</Button>
                                    <Button.Or />
                                    <Button primary onClick={this.handleClickRegister}>Register</Button>
                                </Button.Group>
                            </Segment>
                        </Form>
                        {this.props.errors.length ?
                            <Message negative style={{ textAlign: 'left' }}>
                                <p>{listItems}</p>
                            </Message> : ''
                        }
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}