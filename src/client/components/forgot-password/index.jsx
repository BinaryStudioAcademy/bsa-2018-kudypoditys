import React, { Fragment }from 'react';
import ModalComponent from 'client/components/modal';
import FormTextInput from 'client/components/input-form/formTextInput.jsx'
import { email } from 'client/regexValidationService';
import { Field, reduxForm } from 'redux-form';
import { Card, Button, Form } from "semantic-ui-react";
import ResetPassword from 'client/components/reset-password'
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from "./container";

class ForgotPassword extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:undefined
        }
    }
    handleEmailChange(e){
        const email = e.target.value
        this.setState({email: email})
    }
    handleSubmit(){
        this.props.inputEmail(this.state.email);
    }
    render(){
        const { pristine, submitting} = this.props;
        return(
        <div>
            <ModalComponent
                trigger = {<p>Forgot password?</p>}
                header = 'Hello'
            >
              <label htmlFor="roomsAmount">Кількість номерів цього типу</label>
            <form onSubmit={this.handleSubmit}>
                <Field
                    component={FormTextInput}
                    as={Form.Input}
                    name="roomsAmount"
                    key='roomsAmount'
                    onChange={this.handleEmailChange.bind(this)}
                    type="text"
                    validate={email} />
                    <Button
                        color="teal"
                        fluid
                        disabled={pristine || submitting}
                        type="submit"
                    >Send message</Button>
            </form>
            </ModalComponent>
            {/* <ResetPassword/> */}
        </div>

        )
    }
}
ForgotPassword = reduxForm({
    form: "TabRegistration"
})(ForgotPassword);
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);