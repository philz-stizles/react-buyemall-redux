import React from 'react'
import { withRouter } from 'react-router-dom'

// Components
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

// Styles
import './cart-dropdown.styles.css'

const CartDropdown = ({ items, history, toggleCartHidden }) => {
    return (
        <div className="cart-dropdown">
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
        </div>
    )
}

export default withRouter(CartDropdown);
