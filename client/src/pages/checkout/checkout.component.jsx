import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotalPrice } from './../../store/redux/cart/cart.selectors'

import './checkout.styles.css'

const CheckoutPage =({ items, totalPrice }) => {
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

const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)
