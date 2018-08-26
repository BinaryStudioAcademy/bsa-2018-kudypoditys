import React, { Fragment } from "react";
import './index.scss';
import { Card, Button, Form } from "semantic-ui-react";
import ComplexInput from './complexInput.jsx';
import FormTextInput from './input-form';
import { required, number,maxLength } from 'client/regexValidationService';
import { Field, reduxForm } from 'redux-form';
import semanticSelectorFormField from './dropdown-form/semanticSelectorForm.jsx'
import { type, smoking} from './options.js';
class AddRoom extends React.Component {
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
    valToString(val){
        var value = ''
        for(var sym in val){
            value += typeof(val[sym]) === 'string'?
                val[sym]
            :
                ''
            }
        return value
    }
    handleTypeChange(e){
        const value = this.valToString(e);
        this.setState({roomType: value})
    }
    handleSmokeChange(e){
        const value = this.valToString(e);
        this.setState({roomSmoking: value})
    }
    handleRoomAmountChange(e){
        const value = e.target.value
        this.setState({roomAmount:value})
    }
    handleRoomSquareChange(e){
        const value = e.target.value
        this.setState({roomSquare:value})
    }
    handleRoomPriceChange(e){
        const value = e.target.value
        this.setState({roomPrice:value})
    }
    handleComplexInputChange(beds,guests){
        this.setState({beds:beds})
        this.setState({maxGuests:guests})
    }

    render(){
        const { handleSubmit, pristine, submitting } = this.props
        return(
            <form action="" onSubmit={handleSubmit(this.state)}>
            <div className='plan-price-form'>

             <Fragment>

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
                                onChange={this.handleTypeChange.bind(this)}
                                label="Тип номеру"
                                placeholder="Виберіть"
                                validate={required}/>
                                <br />
                            <Field style={{margin:'0 0 0 10px'}}
                                name="smoking"
                                component={semanticSelectorFormField}
                                as={Form.Select}
                                options={smoking}
                                onChange={this.handleSmokeChange.bind(this)}
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
                                onChange={this.handleRoomAmountChange.bind(this)}
                                type="text"
                                validate={[required, number, maxLength(3)]} />
                    </Card.Content>
                </Card>

                <Card style={{ width: '900px' }} color='teal'>
                    <Card.Content>
                        <Card.Description style={{ fontSize: '18px' }}>
                            Ліжка
                        </Card.Description><br />
                        <ComplexInput onchange={this.handleComplexInputChange.bind(this)}/>
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
                                onChange={this.handleRoomSquareChange.bind(this)}
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
                                onChange={this.handleRoomPriceChange.bind(this)}
                                label="UAH/ніч"
                                type="text"
                                validate={[required, number, maxLength(3)]} />
                    </Card.Content>
                </Card>

                <Button type="submit" color='teal' style={{ width: '800px', margin:'auto' }}
                disabled={pristine || submitting} >Continue</Button>

            </Fragment>
          </div>
          </form>
        )
    }
}
AddRoom = reduxForm({
    form: "TabRegistration"
})(AddRoom);
export default AddRoom;

