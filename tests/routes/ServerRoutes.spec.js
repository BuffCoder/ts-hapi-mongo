/// <reference path="../../typings/tsd.d.ts"/>
'use strict';

// Testing frameworks
var chai = require('chai'),
	should = chai.should(),
	sinon = require('sinon');
	
// Modules to be mocked
var baseRoutes = require('../../dest/routes/baseRoutes'),
	userRoutes = require('../../dest/routes/userRoutes');

// Module to be tested
var serverRoutes = require('../../dest/routes/ServerRoutes');
	
describe('routes.ServerRoutes', function() {
	
	it('should create an array of routes', function() {
		// Arrange
		var server = {
			route: sinon.spy()
		};
		var baseRouteData = [
			{
				method: 'GET',
				path: '/',
				handler: function(){}
			}
		];
		var userRoutesData = [
			{
				method: 'GET',
				path: '/users',
				handler: function(){}
			}
		];
		sinon.stub(baseRoutes, 'getRoutes', function() {
			return baseRouteData;
		});
		sinon.stub(userRoutes, 'getRoutes', function() {
			return userRoutesData;
		});
		
		// Act
		serverRoutes.RegisterRoutes(server);
		
		// Assert
		server.route.called.should.be.true;
		server.route.calledWith([].concat(baseRouteData,userRoutesData));
	});
});