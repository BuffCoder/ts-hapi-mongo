/// <reference path="../../typings/tsd.d.ts" />
import hapi = require('hapi');
import ServerRoutes = require('./ServerRoutes');

export function getRoutes(): Array<ServerRoutes.Route> {
    let routes: Array<ServerRoutes.Route> = [
        {
            method: 'GET',
            path: '/',
            handler: get
        }
    ];
    return routes;
}

// private functions
function get(request: hapi.Request, reply: hapi.IReply): void {
    reply('You\'ve reached / as GET');
}