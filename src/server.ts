/// <reference path="../typings/tsd.d.ts" />
import hapi = require('hapi');
import serverRoutes = require('./routes/ServerRoutes');

// creating the hapi server instance
let server: hapi.Server = new hapi.Server();

// adding a new connection that can be listened on
server.connection({
  port: 3000,
  host: 'localhost',
  labels: ['web']
});

// defining our routes
serverRoutes.RegisterRoutes(server);

// starting the server
server.start(function (err: any): void {
  if (err) {
    throw err;
  }
  console.log('hapi server started');
});