import React, { Fragment } from "react";
import './index.scss';
import { Card, CardDescription, Button, Form } from "semantic-ui-react";
import PropTypes from 'prop-types';
import { fieldArrayMetaPropTypes } from 'redux-form';
import ComplexInput from './complexInput.jsx';
import RoomSquare from './roomSquare.jsx';
import BasePriceForm from './basePrice.jsx';
import ApplyBtn from './applyButton.jsx';
import FormTextInput from './input-form';
import { required, maxLength20, phoneNumber, number,maxLength } from 'client/regexValidationService';
import { Field, reduxForm } from 'redux-form';
import semanticSelectorFormField from './dropdown-form/semanticSelectorForm.jsx'
import SelectInput from './selectInput.jsx'
import { type, smoking} from './options.js';
//import RoomSquare from './roomSquare';
class AddRoom extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            roomType:'',
            roomSmoking:'',
            roomAmount:'',
            roomSquare:'',
            roomPrice:''
        }
    }

    // handleTypeChange(value){
    //     console.log(value)
    // }
    // handleSmokeChange(value){
    //     console.log(value)
    // }
    // handleRoomAmountChange(e){
    //     console.log(e.target.value)
    // }
    // handleRoomSquareChange(e){
    //     console.log(e.target.value)
    // }
    // handleRoomPriceChange(e){
    //     console.log(e.target.value)
    // }
    // handleSubmit(e){
    //     console.log(e.target)
    //     e.preventDefault();
    //     e.stopPropagation();
    // }
    render(){
        const { value } = 1
        const { handleSubmit, pristine, submitting } = this.props
        return(
            // <reduxForm>
            //     <Field
            //         component={ApplyBtn}
            //         type='text'
            //         onchange={this.handleFormChange}
            //         validate={[required, number]}
            //     />
            // </reduxForm>
            // <ApplyBtn onchange={this.handleFormChange}/>
            <form action="" onSubmit={handleSubmit}>
            <div className='plan-price-form'>

             <Fragment key='1'>

                <Card style={{ width: '900px' }} color='teal'>
                    <Card.Content>
                        <Card.Description style={{ fontSize: '18px' }}>
                            Виберіть
                        </Card.Description><br />
                            <Field
                                style={{margin:'0 0 0 10px', width:'120px'}}
                                name="type"
                                component={semanticSelectorFormField}
                                as={Form.Select}
                                options={type}
                                onChange={this.handleTypeChange}
                                label="Тип номеру"
                                placeholder="Виберіть"
                                validate={required}/>
                                <br />
                            <Field style={{margin:'0 0 0 10px'}}
                                name="smoking"
                                component={semanticSelectorFormField}
                                as={Form.Select}
                                options={smoking}
                                onChange={this.handleSmokeChange}
                                label="Куріння"
                                placeholder="Виберіть"
                                validate={required}/>
                                <br />

                                <label htmlFor="roomsAmount">Кількість номерів цього типу</label>
                            <Field
                                component={FormTextInput}
                                as={Form.Input}
                                name="roomsAmount"
                                key='roomsAmount'
                                onChange={this.handleRoomAmountChange}
                                type="text"
                                validate={[required, number, maxLength(3)]} />
                    </Card.Content>
                </Card>

                <Card style={{ width: '900px' }} color='teal'>
                    <Card.Content>
                        <Card.Description style={{ fontSize: '18px' }}>
                            Ліжка
                        </Card.Description><br />
                        <ComplexInput/>
                    </Card.Content>
                </Card>

                <Card style={{ width: '900px' }} color='teal'>
                    <Card.Content>
                        <Card.Description style={{ fontSize: '18px' }}>
                            Площа номера(необов'язково)
                        </Card.Description><br />
                                <label htmlFor="roomsAmount"></label>
                            <Field
                                component={FormTextInput}
                                as={Form.Input}
                                name="roomSquare"
                                key="roomSquare"
                                onChange={this.handleRoomSquareChange}
                                label="кв.м"
                                type="text"
                                validate={number} />
                    </Card.Content>
                </Card>
                <Card style={{ width: '900px' }} color='teal'>
                    <Card.Content>
                        <Card.Description style={{ fontSize: '18px' }}>
                            Базова ціна за ніч
                        </Card.Description><br />
                            <span className='form-info'>
                                Це найнижча ціна, яку ми автоматично застосовуємо
                                до цього номера на всі дати.
                                Перш ніж ваше помешкання почне отримувати бронювання,
                                ви можете налаштувати сезонні ціни в особистому кабінеті.
                            </span>
                            <label htmlFor="roomPrice">Ціна за 1 особу</label>
                            <Field
                                component={FormTextInput}
                                as={Form.Input}
                                name="roomPrice"
                                key="roomPrice"
                                onChange={this.handleRoomPriceChange}
                                label="UAH/ніч"
                                type="text"
                                validate={[required, number, maxLength(3)]} />
                    </Card.Content>
                </Card>

                <Button type="submit" color='teal' style={{ width: '750px', margin:'auto' }}
                disabled={pristine || submitting} >Continue</Button>

            </Fragment>




                 {/* <form action="">
                    <div name='1' className="plan-price-form-group" onClick={this.onFocusHandler}>
                        <h3>Виберіть</h3>
                        <SelectInput
                            name='type'
                            options={typeOptions}
                            label='Тип номеру'
                            onchange={this.handleFormChange.bind(this)}
                        />
                        <label  htmlFor="type"className='plan-price-form-label'>Тип номеру</label>
                        <select name='type' className='plan-price-form-select'>
                            {typeOptions}
                        </select>

                        <label htmlFor="smoking" className='plan-price-form-label' >Куріння</label>
                        <select name='smoking' className='plan-price-form-select' placeholder='Виберіть' >
                            {smokingOptions}
                        </select>
                        <label  htmlFor="roomsAmount" className='plan-price-form-label'>Кількість номерів (цього типу)</label>
                        <input name='roomsAmount'type="text"/>
                        <reduxForm >
                            <Field
                            component={FormTextInput}
                            name="PropertyName"
                            label="Property name"
                            type="text"
                            validate={[required, maxLength20]} />

                        </reduxForm >

                        </div>

                   <ComplexInput onFocus={this.onFocusHandler.bind(this)} />
                   <RoomSquare />
                   <BasePriceForm/>
                   <ApplyBtn/>

                </form> */}
          </div>
          </form>
        )
    }
}
AddRoom = reduxForm({
    form: "TabRegistration"
})(AddRoom);
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

export default AddRoom;

