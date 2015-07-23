/// <reference path="../typings/mongodb/mongodb.d.ts" />
import mongodb = require('mongodb');
let mongoUrl = 'mongodb://localhost:27017/HapiTest';
let hapiTestDb = null;

export function getConnection(next){
	if(!hapiTestDb) {
		mongodb.MongoClient.connect(mongoUrl, function(err, db){
            if(err){
				console.log('Error connecting to: ' + mongoUrl);
                next(err,null);
            }
            else{
                hapiTestDb = {
                    db: db,
                    users: db.collection('Users')
                };
                next(null,hapiTestDb);
            }
        })
	}
    else {
        next(null,hapiTestDb);
    }
}