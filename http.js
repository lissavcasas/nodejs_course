const http = require('http');

const myRequest = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html' //write header html
  });
  if (req.url === '/') {
    res.end('Hello World! :)'); 
  }  
  if (req.url === '/about') {
    res.end('This is the About'); 
  }
};

const server = http.createServer(myRequest).listen(3000); 


