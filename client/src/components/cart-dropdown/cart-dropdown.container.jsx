import React from 'react'
import { Query,  Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import CartDropdown from './cart-dropdown.component'

const TOGGLE_CART_HIDDEN = gql`
    mutation toggleCartHidden {
        toggleCartHidden @client
    }
`

const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`

const CartDropdownContainer = () => (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
        { 
            toggleCartHidden =>  (
                <Query query={GET_CART_ITEMS}>
                    {
                        ({data}) => {
                            return <CartDropdown toggleCartHidden={toggleCartHidden} items={data.cartItems} />
                        }
                    }
                </Query>
            )
        }
    </Mutation>
)

export default CartDropdownContainer 
