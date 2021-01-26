import React from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component'
import './collection-overview.styles.css'

const CollectionOverview = ({ items }) => {
    console.log(items)
    return (
        <div className="collection-overview">
            {
                items.map(item => {
                    return <CollectionPreview key={item.id} {...item} />
                })
            }
        </div>
    )
}

export default CollectionOverview


