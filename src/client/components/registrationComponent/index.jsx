import React, { Component } from 'react';
import 'client/components/registrationComponent/index.scss';

import { Button, Input, Container, Header, Icon, Divider, Label, Form } from 'semantic-ui-react';

export default class RegistrationComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: '',
            email: '',
            phone: '',
            password: '',
            fullname_err: false,
            email_err: false,
            phone_err: false,
            password_err: false
        };

        this.inputChange = this.inputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.inputRef = React.createRef();
    }

    inputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit() {
        const dataValid = this.validateCredentials();
        if(dataValid) {
            const { fullname, email, phone, password } = this.state;
            const registrationData = {
                fullname,
                email,
                phone,
                password
            }
            this.props.sendRegistrationData(registrationData); // API POST REQUEST
            console.log(dataValid); // SHOULD BE: «TRUE»
        }
    }

    validateCredentials() {
        const { fullname, email, phone, password } = this.state;

        if(!fullname || fullname.length < 2 || !fullname.match(/^[a-z ,.'-]+$/i) || fullname.length > 64) {
            this.setState({
                fullname_err: true
            });
            return false;
        } else if(this.state.fullname_err) {
            this.setState({
                fullname_err: false
            });
        }

        if(!email || !email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) || email.length > 64) {
            this.setState({
                email_err: true
            });
            return false;
        } else if(this.state.email_err) {
            this.setState({
                email_err: false
            });
        }

        if(!phone || !phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
            this.setState({
                phone_err: true
            });
            return false;
        } else if(this.state.phone_err) {
            this.setState({
                phone_err: false
            });
        }

        if(!password || !password.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32})/)) {
            this.setState({
                password_err: true
            });
            return false;
        } else if(this.state.password_err) {
            this.setState({
                password_err: false
            });
        }

        return true;
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        const { fullname, email, phone, password, fullname_err, email_err, phone_err, password_err } = this.state;
        return (
            <Container text className='registration-c-wrapper'>
                <Header className='registration-c-header'>Register</Header>
                <Form>
                <Form.Field>
                    <Label basic className={fullname_err ? 'shown' : 'hidden'} color='red' pointing='below'>
                        Incorrect user name
                    </Label>
                    <Input 
                        className='registration-c-input' 
                        icon='user' iconPosition='left' 
                        name='fullname' 
                        type='text' 
                        placeholder='Full Name' 
                        fluid
                        ref={this.inputRef}
                        value={fullname}
                        onChange={this.inputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Label basic className={email_err ? 'shown' : 'hidden'} color='red' pointing='below'>
                        Incorrect e-mail
                    </Label>
                    <Input 
                        className='registration-c-input' 
                        icon='envelope' iconPosition='left' 
                        name='email' 
                        type='email'
                        placeholder='E-mail' 
                        fluid
                        value={email}
                        onChange={this.inputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Label basic className={phone_err ? 'shown' : 'hidden'} color='red' pointing='below'>
                        Invalid phone number
                    </Label>
                    <Input 
                        className='registration-c-input' 
                        icon='phone' iconPosition='left' 
                        name='phone' 
                        type='number' 
                        placeholder='Phone' 
                        fluid
                        value={phone}
                        onChange={this.inputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Label basic className={password_err ? 'shown' : 'hidden'} color='red' pointing='below'>
                        Incorrect password
                    </Label>
                    <Input 
                        className='registration-c-input' 
                        icon='key' iconPosition='left' 
                        name='password' 
                        type='password' 
                        placeholder='Password' 
                        fluid
                        value={password}
                        onChange={this.inputChange}
                    />
                </Form.Field>
                </Form>

                <Button 
                    className='registration-c-button' 
                    icon labelPosition='left' 
                    floated='right' 
                    color='blue' 
                    size='medium' 
                    basic
                    onClick={this.onSubmit}
                >
                    <Icon name='check'/>
                    Submit
                </Button>
                
                <Divider hidden/>
            </Container>
        )
    }
}