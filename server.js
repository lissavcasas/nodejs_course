const express = require('express');
const server = express();
const homeController = require('./app/controllers/home');

homeController(server);

//Set the port
server.listen(8000);

