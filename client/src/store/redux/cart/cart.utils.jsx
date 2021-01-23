import { log as Logger } from './../../../utils/logger'

export const addItemToCart = (existingItems, payload) => {
    const existingCartItem =  existingItems.find(item => item.id === payload.id)
    if(existingCartItem) {
        return existingItems.map(item => (item.id === payload.id) ? {...item, count: item.count + 1} : item)
    }

    return [...existingItems, { ...payload, count: 1}]
}

export const removeItemFromCart = (existingItems, payload) => {
    return existingItems.filter(item => item.id !== payload)
}

export const incrementCartItem = (existingItems, id) => {
    const existingCartItem =  existingItems.find(item => item.id ===id)
    if(existingCartItem) {
        return existingItems.map(item => (item.id === id) ? {...item, count: item.count + 1} : item)
    }

    return existingItems
}

export const decrementCartItem = (existingItems, id) => {
    Logger(id)

    const existingCartItem =  existingItems.find(item => item.id === id)
    if(existingCartItem) {
        const filteredItems = existingItems.filter(item => item.id !== id)
        if(existingCartItem.count <= 1) {
            return filteredItems
        }
            
        return existingItems.map(item => (item.id === id) ? {...item, count: item.count - 1} : item)
    }

    return existingItems
}