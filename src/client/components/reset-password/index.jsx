import React, { Fragment }from 'react';
import FormTextInput from 'client/components/input-form/formTextInput.jsx'
import { password, required } from 'client/regexValidationService';
import { Field, reduxForm } from 'redux-form';
import { Card, Button, Form } from "semantic-ui-react";
import './index.scss';
class ResetPassword extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            password:null,
            confirm:null
        }
    }
    handleNewPasswordChange(e){
        const value = e.target.value
        this.setState({password:value})
    }
    handleConfirmPasswordChange(e){
        const value = e.target.value
        this.setState({confirm:value})
    }
    handleSubmit(e){
        const data = {
            password: this.state.password,
            confirm:this.state.confirm,
            token: this.props.token
        }
        this.props.resetPassword(data)
        e.preventDefault();
        e.stopPropagation();
    }
    render(){
        let both = this.state.password===this.state.confirm?
            false
            : true
        const { pristine, submitting} = this.props;
        return(
        <form onSubmit={this.handleSubmit}>
            <div className='main-container'>
                <h3>New password</h3>
                <div>
                    <label htmlFor="newPassword">Enter new password</label>
                    <Field
                        component={FormTextInput}
                        as={Form.Input}
                        name="newPassword"
                        key='newPassword'
                        type='password'
                        onChange={this.handleNewPasswordChange.bind(this)}
                        validate={[required,password]}
                        autocomplete = 'section-blue email'
                    />
                    <br />
                    <label htmlFor="confirmPassword">Conform password</label>
                    <Field
                        component={FormTextInput}
                        as={Form.Input}
                        name="confirmPassword"
                        key='confirmPassword'
                        type='password'
                        onChange={this.handleConfirmPasswordChange.bind(this)}
                        validate={[required, password]}
                        autocomplete = 'section-blue email'
                    />

                    <Button
                        color="teal"
                        fluid
                        disabled={both || pristine || submitting}
                        type="submit"
                    >
                    Send message</Button>
                </div>
            </div>
        </form>

        )
    }
}
ResetPassword = reduxForm({
    form: "TabRegistration"
})(ResetPassword);
export default ResetPassword;