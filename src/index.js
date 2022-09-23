const express = require ('express')
const bodyParse = require ('body-parse')
const server = express();
const port = 8081

server.listen(port,()=>{ 
    console.log("Servidor corriendo en puerto 8081")
})
