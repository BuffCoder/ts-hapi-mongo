/// <reference path="../typings/mongodb/mongodb.d.ts" />
/// <reference path="../typings/bluebird/bluebird.d.ts" />
import mongodb = require('mongodb');
import Promise = require('bluebird');

let mongoUrl = 'mongodb://localhost:27017/HapiTest';
let myDb = null;

export function getConnection(){
    return new Promise(function(resolve, reject) {
        if(!myDb) {
    		mongodb.MongoClient.connect(mongoUrl, function(error, db){
                if(error){
    				reject(error);
                }
                else{
                    myDb = {
                        db: db,
                        users: db.collection('Users')
                    };
                    resolve(myDb)
                }
            })
    	}
        else {
            resolve(myDb);
        }
    });
}