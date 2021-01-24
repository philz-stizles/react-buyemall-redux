import { createContext } from 'react'

import { menuItems } from './../../../data/directory.data'

const MenuContext = createContext(menuItems)

export default MenuContext