import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { auth } from '../../api/firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { default as CartIcon } from '../cart-icon/cart-icon.container'
import { default as CartDropdown } from '../cart-dropdown/cart-dropdown.container'
import { selectLoggedInUser } from '../../store/redux/auth/auth.selectors'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles'

const Header = ({ loggedInUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                {
                    (loggedInUser)
                    ? <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    : <OptionLink to="/sign-in">SIGN IN</OptionLink>
                }
                
                <OptionLink to="/contact">CONTACT</OptionLink>
                <CartIcon />
            </OptionsContainer>
            {
                (hidden) ? null : <CartDropdown />
            }
        </HeaderContainer>
        
    )
}

const mapStateToProps = createStructuredSelector({
    loggedInUser: selectLoggedInUser
})

export default connect(mapStateToProps)(Header)
