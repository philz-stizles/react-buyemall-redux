import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'

// Components
import CartItem from '../cart-item/cart-item.component'
import CustomButton from './../custom-button/custom-button.component'

// Context Store
import { CartContext } from './../../store/contexts/cart/cart.provider'

// Styles
import { CartDropdownContainer } from './cart-dropdown.styles'

const CartDropdown = ({ history }) => {
    const { toggleCartHidden, items } = useContext(CartContext)
    return (
        <CartDropdownContainer>
            <div className="cart-items">
                { 
                    (items.length)
                    ?   (items.map(item => {
                            return <CartItem key={item.id} item={item} />
                        }))
                    :   (<span className="empty-message">Your cart is empty</span>)
                }
            </div>
            <CustomButton disabled={items.length <=0 ? true: false} onClick={() => {
                toggleCartHidden()
                history.push('/checkout')
            }}>GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    )
}

export default withRouter(CartDropdown);
