import React, { useContext } from 'react'

// Context Store
import { CartContext } from './../../store/contexts/cart/cart.provider'

import { 
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collection-item.styles'

const CollectionItem = ({ item }) => {
    const { addToCart } = useContext(CartContext)
    const { name, price, imageUrl } = item
    return (
        <CollectionItemContainer>
            <BackgroundImage className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addToCart(item)} inverted>ADD TO CART</AddButton>
        </CollectionItemContainer>
    )
}


export default CollectionItem