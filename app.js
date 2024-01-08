const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const favicon = require('serve-favicon')
const app = express()
app.use(express.json())
app.use(cors())
require('dotenv').config()


// Favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//DATA CONNECTION
const conn = require('./data/conn')
conn()
app.use(express.static('public'));


//MODELS
const catalogModel = require('./models/products')


app.get('/', (req, res) => {
  try {
    const data = fs.readFileSync('./public/index.html', 'utf8');
    res.send(data);
  } catch (error) {
    console.log(error)
  }
})

app.get('/dataProducts', async (req, res) => {
  return res.status(200).json({
    catalog: await catalogModel.find({})
  })
})


//GETWAY
app.listen(8080);