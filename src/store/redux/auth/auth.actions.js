import { SET_LOGGGED_IN_USER } from './auth.types'

export const setLoggedInUser = user => ({
    type: SET_LOGGGED_IN_USER,
    payload: user
})