const expressServer = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

if(process.env.NODE_ENV !== 'production') require('dotenv').config() // Ensure to add .env to .gitignore so
// to ensure that you never send any sensitive info

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = expressServer()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

if(process.env.NODE_ENV === 'production') {
    app.use(expressServer.static(path.join(__dirname, 'client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

const port = process.env.PORT || 5000    // Ensure to configure proxy within the client app
// inside package.json => http://localhost:5000

app.listen(port, error => {
    if (error) throw error

    console.log(`Server running on port ${port}`)
})

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