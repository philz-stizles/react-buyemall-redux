import { shallow } from 'enzyme'
import React from 'react'
import CartDropdown from './cart-dropdown.component'

it('to render a CartDropdown componenet', () => {
    expect(shallow(<CartDropdown />)).toMatchSnapshot()
})