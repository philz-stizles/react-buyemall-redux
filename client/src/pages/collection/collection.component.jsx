import React from 'react'
import { default as CollectionItem } from '../../components/collection-item/collection-item.container'
import { CollectionPageContainer } from './collection.styles'

const CollectionPage = ({ collection }) => {
    console.log(collection)
    const { title, items } = collection
    return (
        <CollectionPageContainer>
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="items">
                {
                    items
                        .filter((item, i) => i < 4)
                        .map(item => {
                        return <CollectionItem key={item.id} item={item} />
                    })
                }
            </div>
        </CollectionPageContainer>
    )
}

export default CollectionPage


