/// <reference path="../typings/bluebird/bluebird.d.ts" />
import userCollection = require('../database/collections/users');

export class Database {
	public users: Object;

	constructor() {
		this.users = userCollection.getMethods();
	}
}