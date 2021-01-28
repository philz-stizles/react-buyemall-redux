import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store';
import React from 'react'
import Menu from './menu.component'

it('should render Menu with given state from Redux store', () => {
    const initialState = {
        menu: {
            items: [],
        }
    };

    const mockStore = configureStore()
    const store = mockStore(initialState)

    expect(shallow(<Menu store={store}/>)).toMatchSnapshot()
})