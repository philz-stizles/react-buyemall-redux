import React from 'react'
import { Route } from 'react-router-dom'
import { default as CollectionOverview } from '../../components/collection-overview/collection-overview.container'
import { default as CollectionPage } from '../collection/collection.container'
import './shop.styles'

const ShopPage = ({ match }) =>  {
    // Nested Routing & dynamic route matching
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}

export default ShopPage;
