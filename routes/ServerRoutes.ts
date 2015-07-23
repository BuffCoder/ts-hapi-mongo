import hapi = require('hapi');
import joi = require('joi');
import baseRoutes = require('./baseRoutes');
import dataRoutes = require('./dataRoutes');

export class ServerRoutes {
	constructor(server: hapi.Server){
		let routes = [].concat(
			baseRoutes.getRoutes(),
			dataRoutes.getRoutes()
		);
		server.route(routes);
    }
}