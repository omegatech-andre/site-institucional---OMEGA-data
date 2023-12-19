const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())


//DATA CONNECTION
const conn = require('./data/conn')
conn()
app.use('/public', express.static('public'));


//MODELS
const catalogModel = require('./models/products')


app.get('/', async (req, res) => {
  return res.status(200).json({
    catalog: await catalogModel.find({})
  })
})


//GETWAY
app.listen(8080, function () {
  console.log('servidor no ar')
})
