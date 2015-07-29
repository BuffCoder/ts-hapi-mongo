/// <reference path="../../typings/tsd.d.ts"/>
'use strict';

// Testing frameworks
var chai = require('chai'),
	should = chai.should(),
	sinon = require('sinon');
	
// Modules to be mocked
var userCollection = require('../../dest/database/collections/users');

// Module to be tested
var index = require('../../dest/database/index');
	
describe('database.index', function() {
	
	it('should create an array of routes', function() {
		// Arrange
		var userCollectionSpy = sinon.spy(userCollection, 'getMethods');
		
		// Act
		index.Database();
		
		// Assert
		userCollectionSpy.called.should.be.true;
	});
});