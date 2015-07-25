import hapi = require('hapi');
import baseRoutes = require('./baseRoutes');
import dataRoutes = require('./dataRoutes');

export function RegisterRoutes(server: hapi.Server): void {
	let routes: Array<Route> = [].concat(
		baseRoutes.getRoutes(),
		dataRoutes.getRoutes()
	);
	server.route(routes);
}

export class Route implements hapi.IRouteConfiguration{
    method: string;
	path: string;
	handler: hapi.IRouteHandlerConfig;
}