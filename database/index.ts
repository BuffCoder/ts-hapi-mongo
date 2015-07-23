import dbConnection = require('./dbConnection')

export class Database {
	private db
	
	constructor() {}
	
	public getUsers(next) {
		dbConnection.getConnection(function(err,db){
			db.users.find().toArray(function(err, results){
              if(err){
                  next(err,null);
              }
              else{
                  next(null, results);
              }
          })
		});
	}
}