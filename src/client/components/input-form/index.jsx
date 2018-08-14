import React from 'react';
import './index.scss'



const FormTextInput = ({ input, max, min, label, type, required, autocomplete, meta: { touched, error } }) => {
    return (
    <div className="input">
        <input {...input}
            type={type}
            placeholder={label}
            required={required}
            autoComplete={autocomplete}
            max={max}
            min={min} />
        {touched &&
                error &&
                <span className='error'>
                    {error}
                </span>}
    </div>
)
}
export default FormTextInput