import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

import './cart-item.styles.css'

const CartItem = ({item}) => {
    const { name, imageUrl, price, count } = item
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name}/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{count} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem
