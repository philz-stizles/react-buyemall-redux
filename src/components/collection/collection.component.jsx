import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection.styles.css'

const Collection = ({ title, items }) => {
    return (
        <div className="collection">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.map(item => {
                        return <CollectionItem {...item} />
                    })
                }
            </div>
        </div>
    )
}

export default Collection


