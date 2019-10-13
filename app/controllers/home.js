const homeController =  (server) => {
  console.log('HomeController listo'); 

  server.route('/')
  
  .get((req, res) => {
   /*  res.send('Hello, from Node'); */
   res.render('home/index'); //render method shows the template in the browser
  });
};

module.exports = homeController;


