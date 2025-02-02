const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.status(200).json({ name: 'test' , desc: 'description'})
})
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT || 3000)
    })

