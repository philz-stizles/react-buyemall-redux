const expressServer = require('express')
const compression = require('compression')
const enforce = require('express-sslify');
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
let COLLECTION_DATA = require('./data')

if(process.env.NODE_ENV !== 'production') require('dotenv').config() // Ensure to add .env to .gitignore so
// to ensure that you never send any sensitive info

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = expressServer()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

if(process.env.NODE_ENV === 'production') {
    // run compression and enforce https in the production
    app.use(compression());
    app.use(enforce.HTTPS({ trustProtoHeader: true }));

    app.use(expressServer.static(path.join(__dirname, 'client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    }

    console.log(body)

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if(stripeErr) {
            console.log(stripeErr)
            res.status(500).send({ error: stripeErr})
        } else {
            res.status(200).send({ success: stripeRes})
            console.log(stripeRes)
        }
    })
})

// GraphQL schema
var schema = buildSchema(`
    type Query {
        collections(name: String): [Collection]
        collectionById(id: Int!): Collection
        collectionByTitle(title: String!): Collection
    },
    type Mutation {
        addCollection(title: String!, routeName: String): Collection
        editCollection(id: Int!, title: String, routeName: String): Collection
        deleteCollection(id: Int!): DeleteResponse
    },
    type Collection {
        id: Int
        title: String
        routeName: String
        items: [Item]
    },
    type Item {
        id: Int
        name: String
        imageUrl: String
        price: Float
    },
    type DeleteResponse {
        ok: Boolean!
    }
`);


// Root resolver
var root = {
    collectionById: ({id}) => {
        return COLLECTION_DATA.filter(item => item.id === id)[0]
    },
    collectionByTitle: ({title}) => {
        return COLLECTION_DATA.filter(item => item.title.toLowerCase() === title.toLowerCase())[0]
    },
    collections: ({name}) => {
        if(!name) return COLLECTION_DATA

        return COLLECTION_DATA.filter(item => item.name === name)
    },
    addCollection: ({title, routeName}) => {
        COLLECTION_DATA = [ ...COLLECTION_DATA.filter(item => item.id !== id)]
        return {
            ok: true
        }
    },
    deleteCollection: ({id}) => {
        COLLECTION_DATA = [ ...COLLECTION_DATA.filter(item => item.id !== id)]
        return {
            ok: true
        }
    }
};

// Create a GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

const port = process.env.PORT || 4000    // Ensure to configure proxy within the client app
// inside package.json => http://localhost:4000

app.listen(port, error => {
    if (error) throw error
    console.log('Express + GraphQL Server Now Running On localhost:4000/graphql')
});

