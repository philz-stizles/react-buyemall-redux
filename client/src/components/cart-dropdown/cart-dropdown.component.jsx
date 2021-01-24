import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Components
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'

// Redux Store
import { selectCartItems } from '../../store/redux/cart/cart.selectors'
import { toggleCartHidden } from '../../store/redux/cart/cart.actions'

// Styles
import './cart-dropdown.styles.css'

const CartDropdown = ({ items, history, dispatch }) => {
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
                dispatch(toggleCartHidden())
                history.push('/checkout')
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    items: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
