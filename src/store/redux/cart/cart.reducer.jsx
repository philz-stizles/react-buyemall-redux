import { TOGGLE_HIDDEN, ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_CART_ITEM, DECREMENT_CART_ITEM } from './cart.types'
import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch(type) {
        case TOGGLE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_TO_CART:
            return {
                ...state,
                items: addItemToCart(state.items, payload) 
            }

        case REMOVE_FROM_CART:
            const items = state.items.filter(item => item.id !== payload)
            return {
                ...state,
                cart: items
            }

        case INCREMENT_CART_ITEM:
            return {
                ...state
            }

        case DECREMENT_CART_ITEM:
            return {
                ...state
            }

        default:
            return state
    }
}

export default cartReducer