import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store';
import React from 'react'
import SignUpPage from './sign-up.component'

describe('Sign up Component', () => {
    it('should render SignUpPage with given state', () => {
        // const initialState = {
        //     menu: {
        //         items: [],
        //     }
        // };
    
        // const mockStore = configureStore()
        // const store = mockStore(initialState)
    
        expect(shallow(<SignUpPage />)).toMatchSnapshot()
    })

    it('correctly set state onchange', () => {
        // const wrapper = shallow(<SignUpPage />)
        // wrapper.find('[id="displayName"]').simulate('change', { target: { name: 'displayName', value: 'Theo' } })
        // console.log(wrapper.state())

        // const setFormState = jest.fn();
        const wrapper = mount(<SignUpPage />);
        
        // const handleChange = jest.spyOn(React, "useState");
        // handleChange.mockImplementation(formState => [formState, setFormState]);

        // wrapper.find("#displayName").simulate('change', { target: { name: 'displayName', value: 'Theo' } })
        // expect(setFormState).toEqual({
        //     displayName: 'Theo',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        // })
    })
})