import { createSelector } from 'reselect'

const menu = state => state.menu

export const selectMenuItems = createSelector(
    [menu],
    (menu) => menu.items
)