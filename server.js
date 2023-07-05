const express = require('express')
const json = require('./names.json')
const app = express()
const port = 5000

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

names = json.names
//console.log(names)

app.get('/', (req, res) => {
    newName = names[ getRandomInt( names.length ) ]
    //console.log("request from " + req.ip + " responding with '" + newName + "'")
    res.send( newName )
})

app.listen(port, () => {
    console.log(`Random Names API listening on port ${port}`)
})