import React, { useContext } from 'react'

// Context Store
import { CartContext } from './../../store/contexts/cart/cart.provider'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.css'

const CheckoutPage =({ totalPrice }) => {
    const { items } = useContext(CartContext)
    return (
            <div className="checkout-page">
                <div className="checkout-header">

                    <div className="header-block">
                        <span>Product</span>
                    </div>

                    <div className="header-block">
                        <span>Description</span>
                    </div>

                    <div className="header-block">
                        <span>Quantity</span>
                    </div>

                    <div className="header-block">
                        <span>Price</span>
                    </div>

                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                
                {
                    items.map(item => {
                        return <CheckoutItem key={item.id} item={item} />
                    })
                }
                
                <div className="total">TOTAL PRICE: ${totalPrice}</div>
            </div>
    )
}

export default CheckoutPage
