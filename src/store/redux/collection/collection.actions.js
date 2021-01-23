import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from './collection.types'
import { firestore, convertCollectionsSnapshotToMap } from './../../../api/firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsAsync = () => {
    return dispatch => {
        const collectionsRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())

        collectionsRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}

// export const updateCollections = collectionsMap => ({
//     type: UPDATE_COLLECTIONS,
//     payload: collectionsMap
// })