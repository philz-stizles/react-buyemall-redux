import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import CollectionPage from './collection.component'
import Spinner from './../../components/spinner/spinner.component'

const GET_COLLECTION_BY_TITLE = gql`
    query collectionByTitle($title: String!) {
        collectionByTitle(title: $title) {
            id
            title
            routeName
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`

const CollectionPageContainer = ({match}) => (
    <Query 
        query={GET_COLLECTION_BY_TITLE} 
        variables={{ title: match.params.collectionId }}>
        {
            ({loading, error, data}) => {
                console.log(data)
                if(loading) return <Spinner />

                return <CollectionPage collection={data.collectionByTitle} />
            }
        }
    </Query>
)

export default CollectionPageContainer