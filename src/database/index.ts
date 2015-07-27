/// <reference path="../../typings/tsd.d.ts" />
import userCollection = require('../database/collections/users');

export class Database {
	public users: any;

	constructor() {
		this.users = userCollection.getMethods();
	}
}