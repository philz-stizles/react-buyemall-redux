import { SHOP_DATA } from './../../../data/shop.data'

const INITIAL_STATE = {
    items: SHOP_DATA,
}

const collectionReducer = (state = INITIAL_STATE, action) => {
    const { type } = action
    switch(type) {
        default:
            return state
    }
}

export default collectionReducer