import React from 'react'
import { connect } from 'react-redux'

import './shop.styles.css'
import Collection from '../../components/collection/collection.component'

const ShopPage = ({ items }) =>  {

    return (
        <div>
            <h1>Collections</h1>
            { 
                items
                    .map(({id, ...rest}) => {
                    return <Collection key={id} {...rest}/>
                })
            }
        </div>
    )
}

const mapStateToProps = ({ collection }) => ({
    items: collection.items
})

export default connect(mapStateToProps)(ShopPage);
