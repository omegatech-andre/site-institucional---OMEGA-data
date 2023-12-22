const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const favicon = require('serve-favicon')
const app = express()
app.use(express.json())
app.use(cors())


// Favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//DATA CONNECTION
const conn = require('./data/conn')
conn()
app.use(express.static('public'));


//MODELS
const catalogModel = require('./models/products')


app.get('/', async (req, res) => {
  fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if(err){
      console.log(err)
      return
    }
    res.send(data)
  })
})

app.get('/dataProducts', async (req, res) => {
  return res.status(200).json({
    catalog: await catalogModel.find({})
  })
})


//GETWAY
app.listen(8080, function () {
  console.log('servidor no ar')
})
