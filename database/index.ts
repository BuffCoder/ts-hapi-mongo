/// <reference path="../typings/bluebird/bluebird.d.ts" />
import dbConnection = require('./dbConnection');
import Promise = require('bluebird');

export interface User {
	username: string,
	age: number
}

export class Database {
	private db
	
	constructor() {}
	
	public getUsers() {
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
	
	public addUser(user : User) {
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
}