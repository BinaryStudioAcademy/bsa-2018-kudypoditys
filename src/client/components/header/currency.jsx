import React from "react";
import "./index.scss";
import { required } from 'client/regexValidationService';

import { mapStateToProps, mapDispatchToProps } from "./container";
import semanticSelectorFormField from 'client/components/dropdown-form/semanticSelectorForm.jsx'
import { Field, reduxForm } from 'redux-form';
import { Card, Button, Form } from "semantic-ui-react";

class Currency extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            roomType:'',
            roomSmoking:'',
            roomAmount:'',
            roomSquare:'',
            roomPrice:'',
            beds:{},
            maxGuests:''
        }
    }
    handleCurrencyChange(val){
        let currency = '';
        for(const symb in val){
            currency += symb
        }
        this.props.onChange(currency)
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
                onChange={this.handleCurrencyChange.bind(this)}
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
