//EXPRESS
const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 8080


const app = express()
require('dotenv').config();


app.use(express.json())
app.use(cors())


//DATA CONNECTION
const conn = require('./data/conn')
conn()
app.use('/public', express.static('public'));


//MODELS
const catalogModel = require('./models/products')


app.get('/', async (req, res) => {
  return res.status(200).send('<a href="/dataProducts">/dataProducts</a>')
})

app.get('/dataProducts', async (req, res) => {
  return res.status(200).json({
    catalog: await catalogModel.find({})
  })
})


//GETWAY
app.listen(PORT, function () {
  console.log('servidor no ar')
})
