import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import CustomButton from './../custom-button/custom-button.component'

import './cart-dropdown.styles.css'

const CartDropdown = ({ items }) => {
    return (
        <div className="cart-dropdown">
            { items.map(item => {
                return <CartItem key={item.id} item={item} />
            })}
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart }) => ({
    items: cart.items
})

export default connect(mapStateToProps)(CartDropdown);
