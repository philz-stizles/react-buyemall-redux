import { createSelector } from 'reselect'

const auth = state => state.auth

export const selectLoggedInUser = createSelector(
    [auth],
    (auth) => auth.loggedInUser
)