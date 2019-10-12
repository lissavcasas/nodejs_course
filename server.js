const http = require('http');
// createServer is a method that recieves a callback with 2 parameters
const server = http.createServer(function (req, res) {
  // req is the request to the server, res is the answer/response to send to the client.
  res.end('Hello World!!'); // show in the browser
}).listen(3000); // set.the port


