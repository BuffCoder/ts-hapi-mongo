/// <reference path="../typings/bluebird/bluebird.d.ts" />
import hapi = require('hapi');
import joi = require('joi');
import Promise = require('bluebird');
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
                            username: joi.string(),
                            age: joi.number().integer()
                        }
                    }
                }
            }
        ];
    return routes;
}

// Private functions
function get(request: hapi.Request, reply: hapi.IReply) {
    db.users.get().then(function(users : any) {
        reply(users);
    })
    .catch(function(error) {
		reply(error);
	});
}

function post(request: hapi.Request, reply: hapi.IReply) {
    let user = {
        username: request.payload.username,
        age: request.payload.age
    };
    db.users.insert(user).then(function(user : any) {
        reply("User added");
    })
    .catch(function(error) {
		reply(error);
	});
}