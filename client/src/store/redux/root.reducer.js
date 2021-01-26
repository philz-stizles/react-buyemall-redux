import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './auth/auth.reducer'
import menuReducer from './menu/menu.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    auth: authReducer,
    menu: menuReducer
})

export default persistReducer(persistConfig, rootReducer)