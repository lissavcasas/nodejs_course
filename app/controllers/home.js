const homeController =  (server) => {
  console.log('HomeController listo'); 

  server.route('/')
  
  .get((req, res) => {
    res.send('Hello, from Node');
  });
};

module.exports = homeController;