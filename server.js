const express = require('express')

const app = express()

const port = 1066

app.get('/', (req,res) => {
    res.send('Hello, world !')
})

app.listen(port, (req, res) => {
    console.log("hi this server runs at port ---", port)
    // return res.send("serer is running")
})