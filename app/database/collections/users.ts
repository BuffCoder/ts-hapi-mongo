/// <reference path="../../../typings/tsd.d.ts" />
import Promise = require('bluebird');
import dbConnection = require('../dbConnection');


export class User {
	username: string;
	age: number;
}

export function getMethods(): Object {
	let collectionMethods: Object = {
		get: get,
		insert: insert
	};
	return collectionMethods;
}

function get(): any {
	return new Promise(function(resolve: any, reject: any): any {
        dbConnection.getConnection().then(function(db: any): void {
			db.users.find().toArray(function(error: any, results: User): void {
				if (error) {
					reject(error);
				} else {
					resolve(results);
				}
			});
		}).catch(function(error: any): void {
			reject(error);
		});
    });
}

function insert(user: User): any {
	return new Promise(function(resolve: any, reject: any): any {
		dbConnection.getConnection().then(function(db: any): void {
			db.users.insert(user, function(error: any, record: User): void {
				if (error) {
					reject(error);
				} else {
					resolve(record);
				}
			});
		}).catch(function(error: any): void {
			reject(error);
		});
	});
}