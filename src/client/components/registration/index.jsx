import React, { Component } from 'react';
import 'client/components/registration/index.scss';
import PropTypes from 'prop-types';
import { Button, Input, Container, Header, Icon, Divider, Label, Form } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from "./container";

export class Registration extends Component {
    state = {
        fullname: '',
        email: '',
        phone: '',
        password: ''
    }

    componentDidMount() {
        this.inputRef.focus();
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        e.target.name === 'password' ? null :
        this.props.registerUpdate({ [e.target.name]: e.target.value });
    }

    handleRegisterClick = () => {
        const { fullname, email, phone, password } = this.state;
        const credValid = validateCredentials({ fullname, email, phone, password });
        this.props.handleSubmit({ fullname, email, phone, errors: credValid.errors });
        this.setState({
            password: ''
        });
    }

    render() {
        const { fullname, email, phone, errors } = this.props;
        const { password } = this.state;
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


Registration.propTypes = {
    fullname: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    password: PropTypes.string,
    errors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            msg: PropTypes.string
        })
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

function validateCredentials(credentials) {
    const { fullname, email, phone, password } = credentials;
    var errors = [];

    if(!fullname || fullname.length < 2 || !fullname.match(/^[a-z ,.'-]+$/i) || fullname.length > 64) {
        errors.push({ name: 'fullname', msg: 'Incorrect name type.' });
    }

    if(!email || !email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) || email.length > 64) {
        errors.push({ name: 'email', msg: 'Incorrect email format.' });
    }

    if(!phone || !phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        errors.push({ name: 'phone', msg: 'Invalid phone format.' });
    }

    if(!password || !password.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32})/)) {
        errors.push({ name: 'password', msg: 'Password must be 8 characters long, at least 1 upscore letter and 1 number.' });
    }

    return {
        valid: errors.length > 0 ? false : true,
        errors
    }
}