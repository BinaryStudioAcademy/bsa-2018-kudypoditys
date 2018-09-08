import React from "react";
import "./index.scss";
import { required } from 'client/regexValidationService';

import { mapStateToProps, mapDispatchToProps } from "./container";
import semanticSelectorFormField from 'client/components/dropdown-form/semanticSelectorForm.jsx'
import { Field, reduxForm } from 'redux-form';
import { Card, Button, Form } from "semantic-ui-react";

class Currency extends React.Component {
    handleCurrencyChange(val){
        let currency = '';
        for(const symb in val){
            currency += symb
        }
        console.log('hello from currency', currency)
        this.props.onChange(currency)
       // this.props.updateUserCurrancy(currency)
    }
    render(){

        return(
            <Field
                style={{margin:'0 0 0 10px', width:'60px', fontSize:'12px'}}
                name="type"
                component={semanticSelectorFormField}
                as={Form.Select}
                value={this.props.value}
                options={this.props.options}
                onChange={this.handleCurrencyChange}
                //label="USD"
                placeholder={this.props.value}
                validate={required}/>
        )
    }
}

Currency = reduxForm({
    form: "TabRegistration"
})(Currency);
export default Currency;
