import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import { addToCart } from '../../store/redux/cart/cart.actions'

import { 
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collection-item.styles'

const CollectionItem = ({ item, addToCart }) => {
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

const mapDispatchToProps = dispatch => ({
    addToCart: cartItem => dispatch(addToCart(cartItem))
})

export default connect(null, mapDispatchToProps)(CollectionItem);