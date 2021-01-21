import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { auth } from './../../api/firebase/firebase.utils'
import './header.styles.css'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from './../cart-icon/cart-icon.component'
import CartDropdown from './../cart-dropdown/cart-dropdown.component'
import { selectLoggedInUser } from './../../store/redux/auth/auth.selectors'
import { selectCartHidden } from './../../store/redux/cart/cart.selectors'

const Header = ({ loggedInUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                {
                    (loggedInUser)
                    ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className="option" to="/sign-in">SIGN IN</Link>
                }
                
                <Link className="option" to="/contact">CONTACT</Link>
                <CartIcon />
            </div>
            {
                (hidden) ? null : <CartDropdown />
            }
        </div>
        
    )
}

// const mapStateToProps = ({ auth, cart }) => ({
//     loggedInUser: auth.loggedInUser,
//     hidden: cart.hidden
// })

// const mapStateToProps = (state) => ({
//     loggedInUser: selectLoggedInUser(state),
//     hidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({
    loggedInUser: selectLoggedInUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
