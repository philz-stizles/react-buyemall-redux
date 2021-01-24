import React, {useContext} from 'react'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { CollectionPageContainer } from './collection.styles'

import CollectionsContext from './../../store/contexts/collections/collections.context'

// ************ USING CONTEXT ************
// **********      Method 1    ***********
const CollectionPage = ({ match }) => {
    const collectionsContext = useContext(CollectionsContext)
    const collection = collectionsContext[match.params.collectionId]
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

export default CollectionPage


// ********** Method 2 ************
// const CollectionPage = ({ match }) => {
//     return (
//         <CollectionsContext.Consumer>
//             {
//                 collections => {
//                     const collection = collections[match.params.collectionId]
//                     const { title, items} = collection
//                     return (
//                         <CollectionPageContainer>
//                             <h1 className="title">{title.toUpperCase()}</h1>
//                             <div className="items">
//                             {
//                                 items.filter((item, i) => i < 4)
//                                     .map(item => <CollectionItem key={item.id} item={item} />)
//                             }
//                             </div>
//                         </CollectionPageContainer>
//                     )
//                 }
//             }
//         </CollectionsContext.Consumer>
//     )
// }

// export default CollectionPage


