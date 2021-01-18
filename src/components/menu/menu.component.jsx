import React from 'react'
import MenuItem from '../menu-item/menu-item.component'

import './menu.styles.css'
import { menuItems } from './../../data/directory.data'

class Menu extends React.Component {
    state = {
        menuItems: menuItems
    }

    render() {
        const { menuItems } = this.state

        return (
            <div className="menu">
                {
                    menuItems.map(item => {
                        return <MenuItem key={item.id} {...item} />
                    })
                }
            </div>
        )
    }
}

export default Menu
