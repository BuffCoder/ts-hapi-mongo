/// <reference path="../../typings/bluebird/bluebird.d.ts" />
import dbConnection = require('../dbConnection');
import Promise = require('bluebird');

export interface User {
	username: string,
	age: number
}

export function getMethods(){
	let collectionMethods = {
		get: get,
		insert: insert
	}
	return collectionMethods;
}
	
function get() {
	return new Promise(function(resolve, reject) {
        dbConnection.getConnection().then(function(db : any) {
			db.users.find().toArray(function(error, results) {
				if(error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		})
		.catch(function(error) {
			reject(error);
		});
    });
}

function insert(user : User) {
	return new Promise(function(resolve, reject) {
		dbConnection.getConnection().then(function(db : any) {
			db.users.insert(user, function(error, record) {
				if(error) {
					reject(error);
				}
				else {
					resolve(record);
				}
			})
		})
		.catch(function(error) {
			reject(error);
		});
	})
}