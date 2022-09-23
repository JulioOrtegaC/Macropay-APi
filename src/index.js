const express = require ('express')
const bodyParser = require ('body-parser')
const server = express();
const port = 8081
const db = require('./helpers/readDatabase')
server.use(bodyParser.json()); 
server.use(bodyParser.urlencoded({ extended: false }));

console.log(db.readDB())
server.listen(port,()=>{ 
    console.log("Servidor corriendo en puerto 8081")
})
