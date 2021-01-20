import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import { addToCart } from './../../store/redux/cart/cart.actions'

import './collection-item.styles.css'

const CollectionItem = ({ item, addToCart }) => {
    const { name, price, imageUrl } = item
    return (
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton onClick={() => addToCart(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addToCart: cartItem => dispatch(addToCart(cartItem))
})

export default connect(null, mapDispatchToProps)(CollectionItem);