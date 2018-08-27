import React from 'react';
import './index.scss';
import { Form } from 'semantic-ui-react'
import { required} from 'client/regexValidationService';
import { Field} from 'redux-form';
import { Icon } from 'semantic-ui-react';
import {bedType,bedAmount} from './options.js';
import semanticSelectorFormField from './dropdown-form/semanticSelectorForm'

class ComplexInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            beds: [
                {key:0, value:1, amount:1, type:'Односпальне / (ширина 90-130см)', display:true, button:false},
                {key:1, value:1, amount:1, type:'Односпальне / (ширина 90-130см)', display:false, button:true},
                {key:2, value:1, amount:1, type:'Односпальне / (ширина 90-130см)', display:false, button:true}
            ],
            addedBeds:{
                0:{type:'', amount:null},
                1:{type:'', amount:null},
                2:{type:'', amount:null}
            },
            guests:1,
            index:0
        }
    }

    componentWillMount(){
        this.props.onchange(this.state.addedBeds,this.state.guests)
    }
    setBeds(key,value){
        let beds = this.state.addedBeds
        if(value.length<=6){
            beds[key].amount = value
        }
        else{
            beds[key].type = value
        }
        this.setState(
            {addedBeds:beds}
        )
    }
    handleSelect(e, name){
        let value = '';
        for(var sym in e){
        value += typeof(e[sym]) === 'string'?
            e[sym]
        :
            ''
        }
        this.setBeds(name,value);
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
                 })
            })
        :
        this.setState({index:index})
    }
    handleInputChange(e){
        const value = e.target.value;
        this.setState(
            {guests:value})
    }
    handleDelete(){
       const index = this.state.index;
       let beds = this.state.beds;
       beds[this.state.index].display = false;
       this.setState({
           beds:beds,
        })
        this.state.index>0
            ?
            this.setState({index:index-1})
            :
            this.setState({index:index})
    }
    render(){
            const beds =this.state.beds;
            const inputs = beds.map((bed)=>(

            bed.display===true?
                <div key={bed.key} className='complex-input'>
                <div>
                    <Field
                        key={'bed' + bed.key}
                        style={{width:'120px', margin:'0 0 0 10px', float:'left', Zindex:'100'}}
                        name={'bed'+bed.key}
                        component={semanticSelectorFormField}
                        as={Form.Select}
                        options={bedType}
                        onChange={(e)=>this.handleSelect(e, bed.key)}
                        label="Тип номеру"
                        placeholder="Виберіть"
                        validate={required}
                    />
                </div>
                    <p>X</p>
                    <div>
                    <Field
                        key={'amount' + bed.key}
                        style={{width:'120px', margin:'0 0 0 10px', float:'left', Zindex:'100'}}
                        name={'amount'+bed.key}
                        component={semanticSelectorFormField}
                        as={Form.Select}
                        options={bedAmount}
                        onChange={(e)=>this.handleSelect(e, bed.key)}
                        placeholder="Виберіть"
                        validate={required}
                    />
                    </div>
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
            ));

        return(
            <div className='plan-price-form'>
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

                       <p id='guestAmountTitle'>Скільки людей можуть зупинитись цьому в номері?</p>
                        <input onChange={this.handleInputChange.bind(this)} name='guestsAmount' type="text" value={this.state.guests}/>
                    </div>
            </div>
        )
    }
}
export default ComplexInput;

