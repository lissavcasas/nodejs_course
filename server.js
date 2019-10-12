const express = require('express');
const server = express();
const homeController = require('./app/controllers/home');
const swig = require('swig');

// Swig configuration: Express server will use Swig as engine template (who renders the files)
server.engine('html', swig.renderFile);
server.set('view engine', 'html'); //motor de vistas de html
server.set('views', __dirname+'/app/views'); //save the files

homeController(server);

//Set the port
server.listen(8000);

