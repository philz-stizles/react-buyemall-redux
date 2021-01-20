import { SET_LOGGGED_IN_USER } from './auth.types'

const INITIAL_STATE = {
    loggedInUser: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch(type) {
        case SET_LOGGGED_IN_USER:
        return {
            ...state,
            loggedInUser: payload
        }
        default:
            return state
    }
}

export default authReducer