import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './auth/auth.reducer'
import cartReducer from './cart/cart.reducer'
import menuReducer from './menu/menu.reducer'
import collectionReducer from './collection/collection.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    menu: menuReducer,
    collection: collectionReducer
})

export default persistReducer(persistConfig, rootReducer)