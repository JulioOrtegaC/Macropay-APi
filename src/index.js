const express = require ('express')
const bodyParser = require ('body-parse')
const server = express();
const port = 8081
server.use(bodyParser.json()); 
server.use(bodyParser.urlencoded({ extended: false }));

server.listen(port,()=>{ 
    console.log("Servidor corriendo en puerto 8081")
})
