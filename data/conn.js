const mongoose = require('mongoose')
require('dotenv') 

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

async function conn(){
  try {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@site-institucional---om.6t8a4f3.mongodb.net/database---ÔMEGA`)
    console.log('banco no ar')
  } catch (error) {
    console.log(`erro: ${error}`)
  }
}

module.exports = conn