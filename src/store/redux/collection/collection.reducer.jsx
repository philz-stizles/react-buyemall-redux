import { UPDATE_COLLECTIONS, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from './collection.types'
// import { SHOP_DATA } from './../../../data/shop.data.object'

const INITIAL_STATE = {
    // items: SHOP_DATA,
    items: null,
    isFetching: false,
    errorMessage: undefined
}

const collectionReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch(type) {
        // case UPDATE_COLLECTIONS:
        //     return {
        //         ...state,
        //         items: payload
        //     }
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: payload
            }
        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: payload
            }
        default:
            return state
    }
}

export default collectionReducer