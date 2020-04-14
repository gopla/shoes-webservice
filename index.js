const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const router = require('./config/routes')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send(
    `It works! <br> See the endpoints <a href="https://github.com/gopla/shoes-webservice" target="_blank">Here!</a>`
  )
})
app.use(router)

app.listen(process.env.PORT || 3000, () => {
  console.log(' -> Server listening on port 3000')
})
