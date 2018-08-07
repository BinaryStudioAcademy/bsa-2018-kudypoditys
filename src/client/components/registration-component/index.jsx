import React, { Component } from 'react';
import 'client/components/registrationComponent/index.scss';
import PropTypes from 'prop-types';
import { Button, Input, Container, Header, Icon, Divider, Label, Form } from 'semantic-ui-react';

export default class RegistrationComponent extends Component {
    componentDidMount() {
        this.inputRef.focus();
    }

    handleInputChange = (e) => {
        this.props.handleChange({ name: e.target.name, value: e.target.value });
    }

    handleRegisterClick = (e) => {
        this.props.handleClick(e.target.name);
    }

    render() {
        const { fullname, email, phone, password, errors } = this.props;
        const 
            fullname_err = errors.find(err => err.name === 'fullname'),
            email_err = errors.find(err => err.name === 'email'),
            phone_err = errors.find(err => err.name === 'phone'),
            password_err = errors.find(err => err.name === 'password');

        return (
            <Container text className='registration-c-wrapper'>
                <Header className='registration-c-header'>Register</Header>
                <Form>
                <Form.Field>
                    <Label basic className={fullname_err ? 'shown' : 'hidden'} color='red' pointing='below'>
                        { fullname_err ? fullname_err.msg : '' }
                    </Label>
                    <Input 
                        className='registration-c-input' 
                        icon='user' iconPosition='left' 
                        name='fullname' 
                        type='text' 
                        placeholder='Full Name' 
                        fluid
                        ref={(input) => { this.inputRef = input; }}
                        value={fullname}
                        onChange={this.handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Label basic className={email_err ? 'shown' : 'hidden'} color='red' pointing='below'>
                        { email_err ? email_err.msg : '' }
                    </Label>
                    <Input 
                        className='registration-c-input' 
                        icon='envelope' iconPosition='left' 
                        name='email' 
                        type='email'
                        placeholder='E-mail' 
                        fluid
                        value={email}
                        onChange={this.handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Label basic className={phone_err ? 'shown' : 'hidden'} color='red' pointing='below'>
                        { phone_err ? phone_err.msg : '' }
                    </Label>
                    <Input 
                        className='registration-c-input' 
                        icon='phone' iconPosition='left' 
                        name='phone' 
                        type='number' 
                        placeholder='Phone' 
                        fluid
                        value={phone}
                        onChange={this.handleInputChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Label basic className={password_err ? 'shown' : 'hidden'} color='red' pointing='below'>
                        { password_err ? password_err.msg : '' }
                    </Label>
                    <Input 
                        className='registration-c-input' 
                        icon='key' iconPosition='left' 
                        name='password' 
                        type='password' 
                        placeholder='Password' 
                        fluid
                        value={password}
                        onChange={this.handleInputChange}
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
                    name='register'
                    onClick={this.handleRegisterClick}
                >
                    <Icon name='check'/>
                    Submit
                </Button>
                
                <Divider hidden/>
            </Container>
        )
    }
}


RegistrationComponent.propTypes = {
    fullname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    errors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            msg: PropTypes.string
        })
    ).isRequired
}