import React, {Component} from 'react'
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
class ShopPage extends Component {
    // state = {
    //     isLoading: true
    // }

    // collectionsStateUnSubscription = null

    componentDidMount() {
        this.props.fetchCollectionsAsync()
        // const collectionsRef = firestore.collection('collections')
        // this.collectionsStateUnSubscription = collectionsRef.onSnapshot(async snapshot => {
        //     console.log(snapshot)
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        //     console.log(collectionsMap)
        //     this.props.updateCollections(collectionsMap)
        //     this.setState({ isLoading: false })
        // })

        // Using Fetch & Promises - Data will be retrieved only when the componenet is mounted and will not listen for changes, 
        // a feature which observables provide
        // fetch('https://firestore.googleapis.com/v1/projects/%%/databases/(defaults)/documents/collections/collections')
        //    .then(response => response.json())
        //    .then(data => {
        //       console.log(data)
        //       const collectionsMap = %methodToConvertData%
        //       this.props.updateCollections(collectionsMap)
        //       this.setState({ isLoading: false })
        //    })
    }

    // componentWillUnmount() {
    //     this.collectionsStateUnSubscription()
    // }

    render() {
        // const { isLoading } = this.state
        const { match, isCollectionFetching, isCollectionLoaded } = this.props
        // match.path | match.params
        // history.push
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
