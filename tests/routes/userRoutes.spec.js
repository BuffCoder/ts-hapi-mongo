/// <reference path="../../typings/tsd.d.ts"/>
'use strict';

// Testing frameworks
var chai = require('chai'),
	should = chai.should();

// Module to be tested
var userRoutes = require('../../dest/routes/userRoutes');
	
describe('routes.userRoutes', function() {
	
	it('should create default data routes', function() {
		// Arrange
		
		// Act
		var routes = userRoutes.getRoutes();
		
		// Assert
		routes.should.have.length.greaterThan(0);
		for(var i=0; i<routes.length; i++) {
			routes[i].should.have.property('method').which.is.a.String;
			routes[i].should.have.property('path').which.is.a.String;
			routes[i].should.have.property('handler').which.is.a.Function;
		}
	});
});