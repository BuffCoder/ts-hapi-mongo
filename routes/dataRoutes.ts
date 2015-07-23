import hapi = require('hapi');
import joi = require('joi');
import database = require('../database/index');
let db

export function getRoutes() {
    db = new database.Database();
    let routes : Array<any> = [
            {
                method: 'GET',
                path: '/data',
                handler: get
            },
            {
                method: 'POST',
                path: '/data',
                handler: post,
                config: {
                    validate: {
                        payload: {
                            name: joi.string(),
                            quantity: joi.number().integer()
                        }
                    }
                }
            }
        ];
    return routes;
}

// Private functions
function get(request: hapi.Request, reply: hapi.IReply) {
    db.getUsers(function(err, results){
        if(err){
            reply(err);
        }
        else {
            reply(results);
        }
    });
    //reply("You've reached /data as GET");
}

function post(request: hapi.Request, reply: hapi.IReply) {
    reply("You've reached /data as POST");
}