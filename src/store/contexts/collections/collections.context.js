import { createContext } from 'react'

import { SHOP_DATA } from './../../../data/shop.data.object'

const CollectionsContext = createContext(SHOP_DATA)

export default CollectionsContext