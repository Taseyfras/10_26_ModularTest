var expect = require('chai').expect;
var greet = require('./greet.js');
var string = 'string';

describe('greet', function(){
	it('should return a string', function(){
		expect(string).to.be.a('string');
		expect(greet.welcome('name')).to.equal('hello name');
	});
});



