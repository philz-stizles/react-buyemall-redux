export const addItemToCart = (existingItems, payload) => {

    const existingCartItem =  existingItems.find(item => item.id === payload.id)
    if(existingCartItem) {
        existingCartItem.count += 1
        return [...existingItems.filter(item => item.id !== payload.id), {...existingCartItem}]
    }

    return [...existingItems, { ...payload, count: 1}]
}