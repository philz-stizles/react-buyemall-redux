import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart, incrementCartItem, decrementCartItem } from './../../store/redux/cart/cart.actions'

import './checkout-item.styles.css'

const CheckoutItem = ({item, removeFromCart, decrementCartItem, incrementCartItem}) => {
    const { name, count, price, imageUrl } = item
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={() => decrementCartItem(item.id)}>&#10094;</span>
                <span className="value">{count}</span>
                <span className="arrow" onClick={() => incrementCartItem(item.id)}>&#10095;</span>
            </span>
            <span className="price">{price}</span>
            <div onClick={() => removeFromCart(item.id)} className="remove-button">&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeFromCart: id => dispatch(removeFromCart(id)),
    incrementCartItem: id => dispatch(incrementCartItem(id)),
    decrementCartItem: id => dispatch(decrementCartItem(id))
}) 

export default connect(null, mapDispatchToProps)(CheckoutItem)