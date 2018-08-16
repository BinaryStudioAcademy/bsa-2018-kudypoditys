import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react'
import { fieldArrayMetaPropTypes } from 'redux-form';
import ComplexInput from './complexInput.jsx';
import RoomSquare from './roomSquare.jsx';
import BasePriceForm from './basePrice.jsx';
import ApplyBtn from './applyButton.jsx'

class AddRoom extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            roomType:'',
            roomSmoking:''
        }
    }
    // AddRoom(){
    //     this.setState({displayAddForm:true});
    // }
    onFocusHandler(e){

        //const a = e.target;
        console.log(e.target.name)
    }
    optionRender(arr){
        const res = arr.map((item)=>
            <option key={item.key} value={item.value}>{item.text}</option>
        );
        return res
    }
    render(){
        const type = [
            { key: '0', text: 'Виберіть', value: '' },
            { key: '1', text: 'Одномісний', value: 'Одномісний' },
            { key: '2', text: 'Двомісний', value: 'Двомісний' },
            { key: '3', text: 'Тримісний', value: 'Тримісний' },
            { key: '4', text: 'Люкс', value: 'luxury' },
          ]
        const smoking=[
            { key: '1', text: 'Для некурців', value: 'nosmoke' },
            { key: '2', text: 'Для курців', value: 'smoke' },
            { key: '3', text: 'У номерах цього типу можливе розміщення як курців, так і некурців', value: 'both' },
        ]
        const beds = [
            { key: '1', text: 'Односпальне', value: '1' },
            { key: '2', text: 'Двоспальне', value: '2' },
            { key: '3', text: 'Широке двоспальне', value: '2' }
        ]
        const typeOptions = this.optionRender(type);
        const smokingOptions = this.optionRender(smoking);
        const bedOptions = this.optionRender(beds);
        const { value } = 1
        return(
            <div className='plan-price-form'>
                <form action="">
                    <div name='1' className="plan-price-form-group" onClick={this.onFocusHandler}>
                        <h3>Виберіть</h3>
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
                    </div>

                   <ComplexInput onFocus={this.onFocusHandler.bind(this)} />
                   <RoomSquare />
                   <BasePriceForm/>
                   <ApplyBtn/>

                </form>
            </div>
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
export default AddRoom;

