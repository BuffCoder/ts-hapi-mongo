/// <reference path="../../typings/tsd.d.ts" />
import hapi = require('hapi');
import baseRoutes = require('./baseRoutes');
import userRoutes = require('./userRoutes');

export function RegisterRoutes(server: hapi.Server): void {
	let routes: Array<Route> = [].concat(
		baseRoutes.getRoutes(),
		userRoutes.getRoutes()
	);
	server.route(routes);
}

export class Route implements hapi.IRouteConfiguration{
    method: string;
	path: string;
	handler: hapi.IRouteHandlerConfig;
}