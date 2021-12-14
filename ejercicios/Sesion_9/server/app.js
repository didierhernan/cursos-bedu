const express = require('express')
const app = express();
// express
// Creating an Express application

// A port where our application will be mounted
const APP_PORT = 3001

// Getting routes definitions
app.use('/api', require('./routes'))

app.listen(APP_PORT,()=>{
    console.log(`Express on port ${APP_PORT}`)
})