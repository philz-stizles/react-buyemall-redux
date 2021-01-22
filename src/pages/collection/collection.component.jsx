import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../store/redux/collection/collection.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'
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

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)


