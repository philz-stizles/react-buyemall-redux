import { combineReducers } from 'redux'
import authReducer from './auth/auth.reducer'
import cartReducer from './cart/cart.reducer'
import menuReducer from './menu/menu.reducer'
import collectionReducer from './collection/collection.reducer'

export default combineReducers({
    auth: authReducer,
    cart: cartReducer,
    menu: menuReducer,
    collection: collectionReducer
})