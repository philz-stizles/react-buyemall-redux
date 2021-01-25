import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles.jsx'
import { log as Logger } from './../../utils/logger.js'

const CollectionPreview = ({ title, items }) => {
    Logger(title, items)
    return (
        <CollectionPreviewContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <PreviewContainer>
                {
                    items
                        .filter((item, i) => i < 4)
                        .map(item => {
                        return <CollectionItem key={item.id} item={item} />
                    })
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview


