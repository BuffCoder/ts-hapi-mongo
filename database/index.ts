/// <reference path="../typings/bluebird/bluebird.d.ts" />
import dbConnection = require('./dbConnection');
import Promise = require('bluebird');
import userCollection = require('../database/collections/users');

export class Database {
	public users
	
	constructor() {
		this.users = userCollection.getMethods();
	}
}