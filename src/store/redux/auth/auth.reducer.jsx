import { 
    SET_LOGGGED_IN_USER,
    SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS, 
    SIGN_IN_FAILURE, SIGN_OUT_FAILURE, SIGN_UP_FAILURE 
} from './auth.types'

const INITIAL_STATE = {
    loggedInUser: null,
    error: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch(type) {
        case SET_LOGGGED_IN_USER:
            return {
                ...state,
                loggedInUser: payload
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                loggedInUser: payload,
                error: null
            };
        case SIGN_OUT_SUCCESS:
        return {
            ...state,
            loggedInUser: null,
            error: null
        };
        case SIGN_IN_FAILURE:
        case SIGN_OUT_FAILURE:
        case SIGN_UP_FAILURE:
        return {
            ...state,
            error: payload
        };
        default:
            return state
    }
}

export default authReducer