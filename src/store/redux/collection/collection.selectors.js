import { createSelector } from 'reselect'

const collectionReducer = state => state.collection

// const ID_TO_TITLE_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

export const selectCollections = createSelector(
    [collectionReducer],
    (collectionReducer) => collectionReducer.items
)

export const selectCollectionsAsArray = createSelector(
    [selectCollections],
    (items) =>  items ? Object.keys(items).map(key => items[key]) : []
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => ((collections) ? collections[collectionUrlParam] : null)
)

export const selectIsCollectionFetching = createSelector(
    [collectionReducer],
    collectionReducer => collectionReducer.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [collectionReducer],
    collectionReducer => !!collectionReducer.items
)
