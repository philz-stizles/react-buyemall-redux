import React from 'react'
import { GroupContainer } from './form-input.styles'

const FormInput = ({ handleChange, label, ...rest}) => {
    return (
        <GroupContainer>
            <input className="form-input" onChange={handleChange} {...rest} id={rest.name} />
            {
                label 
                ? <label className={`${(rest.value.length) ? 'shrink': ''} form-input-label`} htmlFor={rest.name}>{label}</label>
                : null
            }
        </GroupContainer>
    )
}

export default FormInput