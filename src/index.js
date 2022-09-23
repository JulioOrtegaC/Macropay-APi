const express = require ('express')
const bodyParser = require ('body-parser')
const server = express();
const port = 8081
const addresscontroller=require('./controller/AddressController');
const middleware = require('./middlewares/validatephrase')
server.use(bodyParser.json()); 
server.use(bodyParser.urlencoded({ extended: false }));

server.all('/contacts',middleware.validate,middleware.validatemethods,addresscontroller.index)

server.delete('/contacts/:contact_id',middleware.validatemethods,addresscontroller.delete)

server.all('/contacts/:contact_id',middleware.validatemethods,addresscontroller.search)

server.all('/contact',middleware.validatemethods,addresscontroller.create)

server.all('*',addresscontroller.notfound)

server.listen(port,()=>{ 
    console.log("Servidor corriendo en puerto 8081")
})
