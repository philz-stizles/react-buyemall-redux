import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection.styles.css'

const Collection = ({ title, items }) => {
    return (
        <div className="collection">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, i) => i < 4)
                        .map(item => {
                        return <CollectionItem key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Collection


