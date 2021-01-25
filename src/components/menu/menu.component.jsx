import React from 'react'
import { connect } from 'react-redux'
import MenuItem from '../menu-item/menu-item.component'

import { MenuContainer } from './menu.styles'

const Menu = ({ items }) => {
    return (
        <MenuContainer>
            {
                items.map(item => {
                    return <MenuItem key={item.id} {...item} />
                })
            }
        </MenuContainer>
    )
}

const mapStateToProps = ({ menu }) => ({
    items: menu.items
})

export default connect(mapStateToProps)( Menu);
