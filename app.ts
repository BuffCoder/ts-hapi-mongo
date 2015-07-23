import hapi = require('hapi');
import serverRoutes = require('./routes/ServerRoutes');

// creating the hapi server instance
let server = new hapi.Server();

// adding a new connection that can be listened on
server.connection({
  port: 3000,
  host: 'localhost',
  labels: ['web']
});
 
// defining our routes
let routes = new serverRoutes.ServerRoutes();
routes.registerRoutes(server);
 
// starting the server
server.start(function (err) {
  if (err) {
    throw err;
  }
  
  console.log('hapi server started');
});