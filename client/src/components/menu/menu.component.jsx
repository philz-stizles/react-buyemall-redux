import React from 'react'
import { connect } from 'react-redux'
import MenuItem from '../menu-item/menu-item.component'

import './menu.styles.css'

const Menu = ({ items }) => {
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

const mapStateToProps = ({ menu }) => ({
    items: menu.items
})

export default connect(mapStateToProps)( Menu);
