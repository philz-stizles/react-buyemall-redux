import { createSelector } from 'reselect'

const cart = state => state.cart

export const selectCartItems = createSelector(
    [cart],
    (cart) => cart.items
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (items) => items.reduce((accumulator, item) => accumulator + item.count, 0)
)

export const selectCartHidden = createSelector(
    [cart],
    (cart) => cart.hidden
)

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    (items) => items.reduce((accumulator, item) => accumulator + (item.count * item.price), 0)
)