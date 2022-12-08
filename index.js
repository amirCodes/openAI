const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 5000

const app = express()
const corsOptions = {
  // origin: 'http://localhost:5000',
  AccessControlAllowOrigin: '*',
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/openai', require('./routes/openaiRoutes'))

app.use(cors(corsOptions))
// Enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
app.get('hello OpenAI')

// console.log('hello openAI')
