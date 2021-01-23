import { UPDATE_COLLECTIONS } from './collection.types'


export const updateCollections = collectionsMap => ({
    type: UPDATE_COLLECTIONS,
    payload: collectionsMap
})