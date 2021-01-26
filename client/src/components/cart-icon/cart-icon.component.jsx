import React from 'react'
import { ReactComponent as ShoppingBagSvg } from '../../assets/shopping-bag.svg'
import { log as Logger } from '../../utils/logger.js'

import './cart-icon.styles.css'

const CartIcon = ({ toggleCartHidden, itemCount }) => {

    Logger(itemCount)
    return (
        <div className="cart-icon" onClick={() => toggleCartHidden() }>
            <ShoppingBagSvg className="shopping-icon" />
            <span className="item-count"> {itemCount} </span>
        </div>
    )
}


export default CartIcon