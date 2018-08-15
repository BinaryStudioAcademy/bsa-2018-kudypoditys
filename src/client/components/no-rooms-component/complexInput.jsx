import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react'
import { fieldArrayMetaPropTypes } from 'redux-form';

class ComplexInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            beds: [
                {key:1, value:1, type:'Односпальне / (ширина 90-130см)', display:true, button:false},
                {key:2, value:1, type:'Односпальне / (ширина 90-130см)', display:false, button:true},
                {key:3, value:1, type:'Односпальне / (ширина 90-130см)', display:false, button:true}
            ],
            guests:1,
            index:1
        }
    }

    handleChange(e){
        console.log(e.target.value)
        // this.setState(()=>{

        // })
    }

    optionRender(arr){
        const res = arr.map((item)=>
            <option key={item.key} value={item.value}>{item.text}</option>
        );
        return res
    }
    handleClickAdd(){
       const index = this.state.index;
       let beds = this.state.beds;
       beds[this.state.index].display = true;
       this.setState({
           beds:beds,
           index: index+1
    })

    }
    render(){
        const bedType = [
            { key: '1', text: 'Односпальне / (ширина 90-130см)', value: 1 },
            { key: '2', text: 'Двоспальне / (ширина 131-150см)', value: 2 },
            { key: '3', text: 'Широке двоспальне (King size)  / (ширина 151-180см)', value: 2 },
            { key: '4', text: 'Особливо широке двоспальне / (ширина 181-210см)', value: 2 }

          ]
          const bedAmount = [
            { key: '1', text: '1', value: 1 },
            { key: '2', text: '2', value: 2 },
            { key: '3', text: '3', value: 3 },
            { key: '5', text: '4', value: 4 },
            { key: '6', text: '5', value: 5 },
            { key: '7', text: '6', value: 6 }

          ]
        const bedOptions = this.optionRender(bedType);
        const multOptions = this.optionRender(bedAmount);
        const { value } = 1

        const inputs = this.state.beds.map((bed)=>
            bed.display===true?
                <div key={bed.key} className='complex-input'>
                    <select onChange={this.handleChange} name={bed.key} className='plan-price-form-select'>
                        {bedOptions}
                    </select>
                    <p>X</p>
                    <select onChange={this.handleChange} name={bed.key+bed.key} className='plan-price-form-select'>
                        {multOptions}
                    </select>
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
                        {/* <div className='complex-input'>
                            <select name='bedType' className='plan-price-form-select'>
                                {bedOptions}
                            </select>
                            <p>X</p>
                            <select onChange={this.handleChange} name='multiply' className='plan-price-form-select'>
                                {multOptions}
                            </select>
                        </div> */}
                       <p onClick={this.handleClickAdd.bind(this)}>Add</p>
                       <p>Скільки людей можуть зупинитись цьому в номері?</p>
                        <input name='guestsAmount' type="text" value='1'/>
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

