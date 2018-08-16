import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react'
import { fieldArrayMetaPropTypes } from 'redux-form';
import { Icon } from 'semantic-ui-react';
import {bedType,bedAmount} from './options.js';
class ComplexInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            beds: [
                {key:0, value:1, amount:1, type:'Односпальне / (ширина 90-130см)', display:true, button:false},
                {key:1, value:1, amount:1, type:'Односпальне / (ширина 90-130см)', display:false, button:true},
                {key:2, value:1, amount:1, type:'Односпальне / (ширина 90-130см)', display:false, button:true}
            ],
            guests:1,
            index:0
        }
    }
    setGuests(){
        let amount = 0;
        for(let bed of this.state.beds){
            if(bed.display){
                amount+=bed.value*bed.amount
            }
        }
        this.setState({guests:amount})
    }
    handleTypeChange(e){
        const index = e.target.name;
        let beds = this.state.beds;
        beds[index].value = Number(e.target.value)
        this.setState(
            {beds:beds},()=>this.setGuests()
        )
    }
    handleAmountChange(e){
        const index = e.target.name;
        let beds = this.state.beds;
        beds[index].amount = Number(e.target.value)
        this.setState(
            {beds:beds},()=>this.setGuests()
        )
    }
    optionRender(arr){
        const res = arr.map((item)=>
            <option key={item.key} value={item.value}>{item.text}</option>
        );
        return res
    }
    handleClickAdd(){
       const index = this.state.index;
       this.state.index<2
        ?
            this.setState({index:index+1},()=>{
                let beds = this.state.beds;
                beds[this.state.index].display = true;
                this.setState({
                    beds:beds,
                 },()=>this.setGuests())
            })
        :
        this.setState({index:index})
    }
    handleInputChange(e){
        const value = e.target.value;
        this.setState({guests:value})
    }
    handleDelete(){
       const index = this.state.index;
       let beds = this.state.beds;
       beds[this.state.index].display = false;
       this.setState({
           beds:beds,
        },()=>this.setGuests())
        this.state.index>0
            ?
            this.setState({index:index-1},()=>console.log(this.state))
            :
            this.setState({index:index})
   }
    render(){

        const bedOptions = this.optionRender(bedType);
        const multOptions = this.optionRender(bedAmount);
        const { value } = 1

        const inputs = this.state.beds.map((bed)=>

            bed.display===true?
                <div key={bed.key} className='complex-input'>
                    <select name = {bed.key}  onChange={this.handleTypeChange.bind(this)} name={bed.key} className='plan-price-form-select'>
                        {bedOptions}
                    </select>
                    <p>X</p>
                    <select name={bed.key} onChange={this.handleAmountChange.bind(this)} className='plan-price-form-select'>
                        {multOptions}
                    </select>
                    {bed.button?
                    <div onClick={this.handleDelete.bind(this)} className='delete-btn'>
                        <Icon name='remove circle' color='red'/>
                        Видалити
                    </div>
                    :
                    null
                    }
                </div>
                :
                null
        );

        return(
            <div className='plan-price-form'>
                <form action="">

                    <div name='2' className="plan-price-form-group">
                        <h3>Ліжка</h3>
                        <span>
                            Розкажіть тільки про основні ліжка в номері.
                            Не включайте інформацію про додаткові ліжка.
                        </span>
                        {inputs}

                        {this.state.index === 2
                        ?
                            null
                        :
                            <div className='add-btn' onClick={this.handleClickAdd.bind(this)}>
                                 <Icon id='add-icon' name='add circle' color='blue'/>
                                <span>Додати</span>
                            </div>
                        }

                       <p>Скільки людей можуть зупинитись цьому в номері?</p>
                        <input name='guestsAmount' onChange={this.handleInputChange.bind(this)} type="text" value={this.state.guests}/>
                    </div>

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
export default ComplexInput;

