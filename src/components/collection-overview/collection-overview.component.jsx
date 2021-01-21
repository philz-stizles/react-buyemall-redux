import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionItems } from '../../store/redux/collection/collection.selectors'
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

const mapStateToProps = createStructuredSelector({
    items: selectCollectionItems
})

export default connect(mapStateToProps)(CollectionOverview)


