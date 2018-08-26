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
            confirmPassword:null
        }
    }
    handleNewPasswordChange(e){
        const value = e.target.value
        this.setState({password:value}, ()=>console.log(this.state))
    }
    handleConfirmPasswordChange(e){
        const value = e.target.value
        this.setState({confirmPassword:value}, ()=>console.log(this.state))
    }
    render(){
        return(

            <div className='main-container'>

                <h3>New password</h3>
                <div>
                    <label htmlFor="newPassword">Enter new password</label>
                    <Field
                        component={FormTextInput}
                        as={Form.Input}
                        name="newPassword"
                        key='newPassword'
                        onChange={this.handleNewPasswordChange.bind(this)}
                        type="text"
                        validate={[required,password]}
                        value={'a'}
                    />
                    <br />
                    <label htmlFor="confirmPassword">Conform password</label>
                    <Field
                        component={FormTextInput}
                        as={Form.Input}
                        name="confirmPassword"
                        key='confirmPassword'
                        onChange={this.handleConfirmPasswordChange.bind(this)}
                        type="text"
                        validate={[required, password]} />
                </div>
            </div>

        )
    }
}
ResetPassword = reduxForm({
    form: "TabRegistration"
})(ResetPassword);
export default ResetPassword;