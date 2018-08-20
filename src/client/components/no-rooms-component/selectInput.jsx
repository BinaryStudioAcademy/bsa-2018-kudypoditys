import React from "react";
import './index.scss';
class SelectInput extends React.Component{

    render(){
        const { label, options, name, className, onchange } = this.props
        return(

            <div>
                <label  htmlFor={name} className='plan-price-form-label'>{label}</label>
                <select onChange={onchange} name={name} className={className?className:'plan-price-form-select'}>
                    {options}
                </select>
            </div>
        )
    }
}
export default SelectInput;