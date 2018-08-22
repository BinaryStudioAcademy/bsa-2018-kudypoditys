import React from 'react';
import './index.scss';
import { Form } from 'semantic-ui-react'
import { fieldArrayMetaPropTypes } from 'redux-form';
import { required, maxLength20, phoneNumber, number,maxLength } from 'client/regexValidationService';
import { Field, reduxForm } from 'redux-form';
import { Icon } from 'semantic-ui-react';
import {bedType,bedAmount} from './options.js';
class ApplyBtn extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){

        return(
            <Form.Field >
                <input onChange={this.props.onchange} name='roomsAmount'type="text"/>
            {/* // <div className="plan-price-form-group">
            //     <button className='continue-btn'>Продовжити</button>
            // </div> */}
            </Form.Field >
        )
    }
}
    // Quickfilter.propTypes = {
    //     boxes: PropTypes.arrayOf(
    //         PropTypes.shape({
    //             id: PropTypes.string,
    //             ischecked: PropTypes.boolean,
    //             label:PropTypes.string,
    //             amount: PropTypes.oneOfType([PropTypes.number],[PropTypes.string]),
    //             type: PropTypes.string
    //         })
    //     ),
    //     OnQuickFilterChange: PropTypes.func
    // }
export default ApplyBtn;

