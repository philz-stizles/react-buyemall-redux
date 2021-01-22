import React from 'react'
import { CustomButtonContainer } from './custom-button.styles'

const CustomButton = ({ children, ...rest }) => (
    <CustomButtonContainer {...rest}>{children}</CustomButtonContainer>
)

export default CustomButton
