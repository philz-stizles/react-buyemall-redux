import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
// import { firestore, convertCollectionsSnapshotToMap } from './../../api/firebase/firebase.utils'
import { fetchCollectionsAsync } from './../../store/redux/collection/collection.actions'
import { selectIsCollectionFetching, selectIsCollectionLoaded } from './../../store/redux/collection/collection.selectors'
import WithSpinner from '../../components/with-spinner.component'
import { createStructuredSelector } from 'reselect'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'
import './shop.styles'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({fetchCollectionsAsync, match, isCollectionFetching, isCollectionLoaded}) => {
    useEffect(() => {
        fetchCollectionsAsync()
    }, [fetchCollectionsAsync])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} render={(props) => (
                <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>
            )}/>
            <Route path={`${match.path}/:collectionId`} render={(props) => (
                <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>
            )}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
})

// const mapDispatchToProps = dispatch => ({
//     updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
// })

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
