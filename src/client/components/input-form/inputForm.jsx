import React from 'react';
import './index.scss'
const renderField = (field) => (
    <div className="input">
        <input {...field.input}
            type={field.type}
            placeholder={field.label}
            required={field.required}
            autoComplete={field.autocomplete}
            max={field.max}
            min={field.min} />
        {field.meta.touched && field.meta.error &&
            <span className="error">{field.meta.error}</span>}
    </div>
)

export default renderField

