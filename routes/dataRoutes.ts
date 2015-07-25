/// <reference path="../typings/bluebird/bluebird.d.ts" />
import hapi = require('hapi');
import joi = require('joi');
import ServerRoutes = require('./ServerRoutes');
import database = require('../database/index');
import userCollection = require('../database/collections/users');

let db: database.Database;

export function getRoutes(): Array<ServerRoutes.Route> {
    db = new database.Database();
    let routes: Array<ServerRoutes.Route> = [
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

// private functions
function get(request: hapi.Request, reply: hapi.IReply): void {
    db.users.get().then(function(users: userCollection.User): void {
        reply(users);
    })
    .catch(function(error: any): void {
		reply(error);
	});
}

function post(request: hapi.Request, reply: hapi.IReply): void {
    let user: userCollection.User = {
        username: request.payload.username,
        age: request.payload.age
    };
    db.users.insert(user).then(function(response: userCollection.User): void {
        reply('User added');
    })
    .catch(function(error: any): void {
		reply(error);
	});
}