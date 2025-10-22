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


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

app.get('/', (_req, res) => {
  res.status(200).json({
    project: 'site-institucional-omega-data',
    description: "Backend API for Omega Screen services",
    owner: 'Ômega Screen Indústria',
    builder: 'https://github.com/oxdrtech',
    statusCode: 200,
  });
})

app.get('/dataProducts', async (req, res) => {
  try {
    return res.status(200).json({
      catalog: await catalogModel.find({})
    })
  } catch (error) {
    return res.status(500).sendFile(path.join(__dirname, 'public', 'error.html'))
  }
})


//GETWAY
app.listen(8080);
