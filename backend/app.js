require('dotenv').config()
require('./Config/db')
const cookieParser = require('cookie-parser')
const express = require('express')
const cors = require('cors')
const app = express();

app.use(express.json({extended:true}));
app.use(cors())
// app.use('/', require('./Routes'))
app.use(cookieParser())

app.listen(process.env.PORT, function(){
    console.log(`Server Listening on PORT ${process.env.PORT}`)
})