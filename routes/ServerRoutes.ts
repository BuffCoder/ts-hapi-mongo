import hapi = require('hapi');
import joi = require('joi');
import baseRoutes = require('./baseRoutes');
import dataRoutes = require('./dataRoutes');

export function RegisterRoutes(server : hapi.Server) {
	let routes = [].concat(
		baseRoutes.getRoutes(),
		dataRoutes.getRoutes()
	);
	server.route(routes);
}