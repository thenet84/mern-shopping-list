const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config')

const server = express();

//BodyParser Middleware
server.use(bodyParser.json());

//Mongo Connect
mongoose.connect(config.mongodbUri)
  .then(()=> console.log('MongoDB is connected...'))
  .catch(console.error);

server.listen(config.port, config.host, ()=>{
  console.info(`Express listening on port ${config.port}`)
})