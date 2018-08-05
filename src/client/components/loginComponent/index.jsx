import React from 'react';
import './index.scss';
import { Input, Button, Form, Dropdown, Header, Container, Grid, Segment, Message } from 'semantic-ui-react';

class LoginComponent extends React.Component {
    constructor(proops) {
        super(proops);
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
        }
    }
    handleChange(event, { name, value }) {
        this.setState({ [name]: value });
    }
    handleClickLogin() {

    }
    handleClickRegister() {

    }
    render() {
        return (
            <div className="loginComponent" >
                <Grid centered columns={3} >
                    <Grid.Column textAlign='center' style={{ marginTop: "30vh" }}>
                        <Header as='h1'>Log-in to your account</Header>
                        <Form >
                            <Segment stacked secondary>
                                <Form.Field>
                                    <Input
                                        iconPosition='left'
                                        icon='user'
                                        type="text"
                                        name="email"
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
                                        placeholder="Password"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Form.Field>
                                <Button
                                    color='teal'
                                    attached='bottom'
                                    content='Login'
                                    onClick={this.handleClick}
                                />
                            </Segment>
                        </Form>
                        <Message negative>
                            <p>Please enter your e-mail</p>
                            <p>Please enter a valid e-mail</p>
                            <p>Please enter your password</p>
                            <p>Your password must be at least 6 characters</p>
                        </Message>
                        <Message >
                            New to us? <a href="">Register</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>

        );
    }
}

export default LoginComponent;