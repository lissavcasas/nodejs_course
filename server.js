const http = require('http');

const myRequest = (req, res) => {
  res.end('Hello World! :)'); // show in the browser
};

const server = http.createServer(myRequest).listen(3000); 


