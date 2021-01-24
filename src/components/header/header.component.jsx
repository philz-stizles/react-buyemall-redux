import React, { useContext } from 'react'
import { auth } from './../../api/firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from './../cart-icon/cart-icon.component'
import CartDropdown from './../cart-dropdown/cart-dropdown.component'
import AuthContext from './../../store/contexts/auth/auth.context'
import { CartContext } from './../../store/contexts/cart/cart.provider'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles'

const Header = () => {
    // Context Store
    const loggedInUser = useContext(AuthContext)
    const {hidden} = useContext(CartContext)

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

export default Header
