import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingBagSvg } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from './../../store/redux/cart/cart.actions'
import { selectCartItemsCount } from './../../store/redux/cart/cart.selectors'

import './cart-icon.styles.css'

const CartIcon = ({ toggleCartHidden, itemCount }) => {

    console.log(itemCount)
    return (
        <div className="cart-icon" onClick={() => toggleCartHidden() }>
            <ShoppingBagSvg className="shopping-icon" />
            <span className="item-count"> {itemCount} </span>
        </div>
    )
}

// const mapStateToProps = ({ cart }) => ({
//     itemCount: cart.items.reduce((accumulator, item) => accumulator + item.count, 0)
// })

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);