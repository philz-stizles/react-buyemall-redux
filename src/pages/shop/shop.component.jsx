import React, { Component } from 'react'

import './shop.styles.css'
import { SHOP_DATA } from './../../data/shop.data'
import Collection from '../../components/collection/collection.component'

class ShopPage extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div>
                { 
                    collections.map(({id, ...rest}) => {
                        return <Collection key={id} {...rest}/>
                    })
                }
            </div>
        )
    }
}

export default ShopPage
