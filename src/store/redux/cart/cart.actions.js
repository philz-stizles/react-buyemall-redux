import { TOGGLE_HIDDEN , ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_CART_ITEM, DECREMENT_CART_ITEM } from './cart.types'

export const toggleCartHidden  = () => ({
    type: TOGGLE_HIDDEN
})

export const addToCart = cartItem => ({
    type: ADD_TO_CART,
    payload: { ...cartItem, count: 1}
})

export const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    payload: id
})

export const incrementCartItem = id => ({
    type: INCREMENT_CART_ITEM,
    payload: id
})

export const decrementCartItem = id => ({
    type: DECREMENT_CART_ITEM,
    payload: id
})