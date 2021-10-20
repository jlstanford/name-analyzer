const express = require('express')
var app = express()
var router = require('./router')

router(app)
app.listen(3000, 'localhost', (request,response) => {
    console.log('Server listening at http://localhost:3000')
})

