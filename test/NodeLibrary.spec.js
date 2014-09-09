// import
var chai = require('chai');
var expect = chai.expect;
var lib = require('../src/NodeLibrary.js');
 
describe('NodeLibrary', function() {

  beforeEach(function(){
  });

  describe('the doThing() function', function() {
    it('should do something', function(){
      var result = lib.doThing();

      expect(result).to.equal('here is your thing');
    });
  });

});
