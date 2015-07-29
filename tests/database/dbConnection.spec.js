/// <reference path="../../typings/tsd.d.ts"/>
'use strict';

// Testing frameworks
var chai = require('chai'),
	should = chai.should(),
	expect = chai.expect,
	sinon = require('sinon');
	
// Modules to be mocked
var mongodb = require('mongodb'),
	Promise = require('bluebird');

// Module to be tested
var dbConnection = require('../../dest/database/dbConnection');
	
describe('database.dbConnection', function() {
	
	afterEach(function() {
		mongodb.MongoClient.connect.restore();
	});
	
	it('should return an error on non-successful connection', function(done) {
		// Arrange
		var errorMessage = 'Error';
		sinon.stub(mongodb.MongoClient, 'connect', function(mongoUrl, callback) {
			callback(errorMessage);
		});
		
		// Act
		var response = dbConnection.getConnection();
		
		// Assert
		response.should.be.rejected;
		response.catch(function(error) {
			error.should.equal(errorMessage);
			done();
		});
	});
	
	it('should return database object on successful connection', function(done) {
		// Arrange
		sinon.stub(mongodb.MongoClient, 'connect', function(mongoUrl, callback){
			callback(null, {
				db: {},
				collection: sinon.spy()
			});
		});
		
		// Act
		var response = dbConnection.getConnection();
		
		// Assert
		response.then(function(result) {
			result.should.have.property('db');
			done();
		});
	});
});