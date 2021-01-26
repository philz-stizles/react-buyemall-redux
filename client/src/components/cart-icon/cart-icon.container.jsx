import React from 'react'

// METHOD 1
// import { Query, Mutation } from 'react-apollo'

// METHOD 2
import {flowRight as compose} from 'lodash'
import { graphql } from 'react-apollo'


import { gql } from 'apollo-boost'
import CartIcon from './cart-icon.component'

const TOGGLE_CART_HIDDEN = gql`
    mutation toggleCartHidden {
        toggleCartHidden @client
    }
`

const GET_CART_ITEMS_COUNT = gql`
    {
        cartItemsCount @client
    }
`

// METHOD 1
// const CartIconContainer = () => (
//     <Mutation mutation={TOGGLE_CART_HIDDEN}>
//         { 
//             toggleCartHidden => (
//                 <Query query={GET_CART_ITEMS_COUNT}>
//                     {
//                         ({ data: { cartItemsCount } }) => (
//                             <CartIcon toggleCartHidden={toggleCartHidden}  itemCount={cartItemsCount}/> 
//                         )
//                     }
//                 </Query>
//             )
//         }
//     </Mutation>
// )

// METHOD 2
const CartIconContainer = ({ toggleCartHidden, data }) => (
    <CartIcon toggleCartHidden={toggleCartHidden}  itemCount={data.cartItemsCount}/> 
)

// METHOD 1
// export default CartIconContainer

// METHOD 2
export default compose(
    graphql(GET_CART_ITEMS_COUNT),
    graphql(TOGGLE_CART_HIDDEN, {name: 'toggleCartHidden'})
)(CartIconContainer)
