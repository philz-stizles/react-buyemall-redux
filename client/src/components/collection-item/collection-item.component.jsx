import React from 'react'

import { 
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collection-item.styles'

const CollectionItem = ({ item, addItemToCart }) => {
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
            <AddButton onClick={() => addItemToCart(item)} inverted>ADD TO CART</AddButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem