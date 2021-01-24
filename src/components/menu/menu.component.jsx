import React, { useContext } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import MenuContext from './../../store/contexts/menu/menu.context'

import './menu.styles.css'

const Menu = () => {
    const items = useContext(MenuContext)
    return (
        <div className="menu">
            {
                items.map(item => {
                    return <MenuItem key={item.id} {...item} />
                })
            }
        </div>
    )
}


export default Menu
