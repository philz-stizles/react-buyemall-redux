import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import CollectionOverview from './collection-overview.component'
import Spinner from './../spinner/spinner.component'

const GET_COLLECTIONS = gql`
{
    collections {
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

const CollectionOverviewContainer = () => (
    <Query query={GET_COLLECTIONS}>
        {
            ({loading, error, data}) => {
                console.log(data)
                if(loading) return <Spinner />

                return <CollectionOverview items={data.collections} />
            }
        }
    </Query>
)

export default CollectionOverviewContainer