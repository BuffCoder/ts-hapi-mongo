import hapi = require('hapi');

export function getRoutes() {
    let routes : Array<any> = [
        {
            method: 'GET',
            path: '/',
            handler: get
        }
    ];
    return routes;
}

// Private functions
function get(request: hapi.Request, reply: hapi.IReply) {
    reply("You've reached / as GET");
}