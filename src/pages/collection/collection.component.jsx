import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionItems } from '../../store/redux/collection/collection.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'
import './collection.styles.css'

const CollectionPage = ({ match }) => {
    return (
        <div className="collection-page">
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

const mapStateToProps = createStructuredSelector({
    items: selectCollectionItems
})

export default connect(mapStateToProps)(CollectionPage)


