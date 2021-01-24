import React, { useContext } from 'react'
import { ReactComponent as ShoppingBagSvg } from '../../assets/shopping-bag.svg'
import { log as Logger } from './../../utils/logger.js'
import { CartContext } from './../../store/contexts/cart/cart.provider'
import { CartIconContainer } from './cart-icon.styles.jsx'

const CartIcon = ({ itemCount }) => {
    const { toggleCartHidden, itemsCount } = useContext(CartContext)
    Logger(itemCount)
    return (
        <CartIconContainer onClick={() => toggleCartHidden() }>
            <ShoppingBagSvg className="shopping-icon" />
            <span className="item-count"> {itemsCount} </span>
        </CartIconContainer>
    )
}


export default CartIcon