/// <reference path="../../typings/tsd.d.ts" />
import mongodb = require('mongodb');
import Promise = require('bluebird');

let mongoUrl: string = 'mongodb://localhost:27017/HapiTest';
let myDb: any = null;

export function getConnection(): any {
    return new Promise(function(resolve: any, reject: any): any {
        if (!myDb) {
    		mongodb.MongoClient.connect(mongoUrl, function(error: any, db: mongodb.Db): void{
                if (error) {
    				reject(error);
                } else {
                    myDb = {
                        db: db,
                        users: db.collection('Users')
                    };
                    resolve(myDb);
                }
            });
    	} else {
            resolve(myDb);
        }
    });
}