import { gql } from 'apollo-boost'
import { 
    addItemToCart, removeItemFromCart, incrementCartItem, decrementCartItem,  
    getCartItemsCount, getCartTotalPrice 
} from './cart.utils'

export const typeDefs = gql`
    extend type Item {
        count: Int
    }

    extend type Mutation {
        toggleCartHidden: Boolean!
        addItemToCart(item: Item!): [Item]
        removeItemFromCart(id: Int!): [Item]
        incrementCartItem(id: Int!): [Item]
        decrementCartItem(id: Int!): [Item]
    }
`

const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`

const GET_CART_ITEMS = gql`
    {
        cartItems @client
    }
`

const GET_CART_ITEMS_COUNT = gql`
    {
        cartItemsCount @client
    }
`

const GET_CART_TOTAL_PRICE = gql`
    {
        cartTotalPrice @client
    }
`

export const resolvers = {
    Mutation: {
        toggleCartHidden: (_root, _args, _context, _info) => {
            const { cartHidden } = _context.cache.readQuery({
                query: GET_CART_HIDDEN
            })

            _context.cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: { cartHidden: !cartHidden }
            })

            return !cartHidden
        },
        addItemToCart: (_root, _args, _context, _info) => {
            const { cartItems } = _context.cache.readQuery({
                query: GET_CART_ITEMS
            })

            const newCartItems = addItemToCart(cartItems, _args.item)

            _context.cache.writeQuery({
                query: GET_CART_ITEMS_COUNT,
                data: { 
                    cartItemsCount: getCartItemsCount(newCartItems)
                }
            })

            _context.cache.writeQuery({
                query: GET_CART_TOTAL_PRICE,
                data: { 
                    cartTotalPrice: getCartTotalPrice(newCartItems)
                }
            })

            _context.cache.writeQuery({
                query: GET_CART_ITEMS,
                data: { 
                    cartItems:  newCartItems,
                }
            })

            return newCartItems
        },
        removeItemFromCart: (_root, _args, _context, _info) => {
            const { cartItems } = _context.cache.readQuery({
                query: GET_CART_ITEMS
            })

            const newCartItems = removeItemFromCart(cartItems, _args.id)

            _context.cache.writeQuery({
                query: GET_CART_ITEMS_COUNT,
                data: { 
                    cartItemsCount: getCartItemsCount(newCartItems)
                }
            })

            _context.cache.writeQuery({
                query: GET_CART_TOTAL_PRICE,
                data: { 
                    cartTotalPrice: getCartTotalPrice(newCartItems)
                }
            })

            _context.cache.writeQuery({
                query: GET_CART_ITEMS,
                data: { 
                    cartItems:  newCartItems,
                }
            })

            return newCartItems
        },
    }
}