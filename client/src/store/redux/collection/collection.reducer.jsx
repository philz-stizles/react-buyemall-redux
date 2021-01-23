import { UPDATE_COLLECTIONS } from './collection.types'
import { SHOP_DATA } from './../../../data/shop.data.object'

const INITIAL_STATE = {
    items: SHOP_DATA,
}

const collectionReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch(type) {
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                items: payload
            }
        default:
            return state
    }
}

export default collectionReducer