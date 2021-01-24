import React, { useContext } from 'react'

// Context Store
import { CartContext } from './../../store/contexts/cart/cart.provider'

import './checkout-item.styles.css'

const CheckoutItem = ({item}) => {
    const { incrementItem,  decrementItem, removeFromCart } = useContext(CartContext)
    const { name, count, price, imageUrl } = item

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={() => decrementItem(item.id)}>&#10094;</span>
                <span className="value">{count}</span>
                <span className="arrow" onClick={() => incrementItem(item.id)}>&#10095;</span>
            </span>
            <span className="price">{price}</span>
            <div onClick={() => removeFromCart(item.id)} className="remove-button">&#10005;</div>
        </div>
    )
}

export default CheckoutItem