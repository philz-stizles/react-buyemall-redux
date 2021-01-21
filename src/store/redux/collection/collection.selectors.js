import { createSelector } from 'reselect'

const collection = state => state.collection

export const selectCollectionItems = createSelector(
    [collection],
    (collection) => collection.items
)