import { menuItems } from './../../../data/directory.data'

const INITIAL_STATE = {
    items: menuItems
}

const menuReducer = (state = INITIAL_STATE, action) => {
    const { type } = action
    switch(type) {
        default:
            return state
    }
}

export default menuReducer