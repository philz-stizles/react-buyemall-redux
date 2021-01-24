import { useState, createContext, useEffect } from 'react'
import { 
    addItemToCart, removeItemFromCart, incrementCartItem, decrementCartItem, 
    getItemsCount, getTotalPrice 
} from './cart.utils'

export const CartContext = createContext({
    hidden: true,
    toggleCartHidden: () => {},
    items: [],
    addToCart: () => {},
    removeFromCart: () => {},
    incrementItem: () => {},
    decrementItem: () => {},
    itemsCount: 0,
    totalPrice: 0
})

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true)
    const [items, setItems] = useState([])
    const [itemsCount, setItemsCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const toggleCartHidden = () => setHidden(!hidden)
    const addToCart = (item) => setItems(addItemToCart(items, item))
    const removeFromCart = (id) => setItems(removeItemFromCart(items, id))
    const incrementItem = (id) => setItems(incrementCartItem(items, id))
    const decrementItem = (id) => setItems(decrementCartItem(items, id))

    // UseEFect as ComponentDidMount & ComponentWillUpdate
    useEffect(() => {
        setItemsCount(getItemsCount(items))
        setTotalPrice(getTotalPrice(items))
    }, [items])

    return <CartContext.Provider value={{
        hidden,
        toggleCartHidden,
        items,
        itemsCount,
        totalPrice,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem
    }}>{children}</CartContext.Provider>
}

export default CartProvider