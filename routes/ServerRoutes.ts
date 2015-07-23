import hapi = require('hapi');
import joi = require('joi');
import baseRoutes = require('./baseRoutes');
import dataRoutes = require('./dataRoutes');

export class ServerRoutes {
	private routes: Array<any>
	
	constructor(){
		this.routes = [].concat(
			baseRoutes.getRoutes(),
			dataRoutes.getRoutes()
		);
    }
	
	registerRoutes(server: hapi.Server) {
		server.route(this.routes);
	}
}