const express = require('express')
const app = express()
const port = 5000

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

names = ["hello", "john"]

app.get('/', (req, res) => {
    console.log("request from " + req.ip)
  res.send( names[ getRandomInt( names.length ) ] )
})

app.listen(port, () => {
  console.log(`Random Names API listening on port ${port}`)
})