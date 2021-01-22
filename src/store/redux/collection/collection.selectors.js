import { createSelector } from 'reselect'

const collectionReducer = state => state.collection

// const ID_TO_TITLE_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

export const selectCollectionsAsArray = createSelector(
    [collectionReducer],
    (collectionReducer) => Object.keys(collectionReducer.items).map(key => {
        const collection = collectionReducer.items[key]
        return {
            id: collection.id,
            title: collection.title,
            routeName: collection.routeName,
            items: collection.items
        }
    } )
)

export const selectCollections = createSelector(
    [collectionReducer],
    (collectionReducer) => collectionReducer.items
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
)
