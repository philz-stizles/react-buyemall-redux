const expressServer = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const app = expressServer()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

if(process.env.NODE_ENV === 'production') {
    app.use(expressServer.static(path.join(__dirname, 'client/build')))
}

const port = process.env.PORT || 5000

app.listen(port, error => {
    if (error) throw error

    console.log('Server running on port ')
})