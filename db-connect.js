import mongoose from 'mongoose'

// URINNEN
// SENSITIVE DATA => never store stuff like this in code
// connection strings, passwords, secrets

// we need dotenv.config() to be executred BEFOE!
const MONGO_URI = process.env.MONGO_URI
console.log( { MONGO_URI } )


mongoose.connect( MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then( () => console.log("DB Connection estabished!") )
.catch( (err) => console.log("[ERROR] Connection failed", err))
