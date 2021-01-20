import React from 'react'

import './form-input.styles.css'

const FormInput = ({ handleChange, label, ...rest}) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...rest} id={rest.name} />
            {
                label 
                ? <label className={`${(rest.value.length) ? 'shrink': ''} form-input-label`} htmlFor={rest.name}>{label}</label>
                : null
            }
        </div>
    )
}

export default FormInput