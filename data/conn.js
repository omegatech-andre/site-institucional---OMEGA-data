const mongoose = require('mongoose')
require('dotenv') 

const dbUser = process.env.DB_USER
const dbpass = process.env.DB_PASSWORD

async function conn(){
  try {
    await mongoose.connect(`mongodb+srv://${dbUser}:${dbpass}@site-institucional---om.6t8a4f3.mongodb.net/database---ÔMEGA`)
    console.log('banco no ar')
  } catch (error) {
    console.log(`erro: ${error}`)
  }
}

module.exports = conn