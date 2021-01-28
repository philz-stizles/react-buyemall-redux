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

export default React.memo(CollectionPreview) // React.memo() can be used on both Function and Class Components
// Component will not re-render if none of its props change
// React.memo() comes with the cost of an increase initial render time compared to when its not used
// Do not memoize Components that do not take props


