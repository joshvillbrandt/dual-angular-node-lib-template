// import
var chai = require('chai');
var expect = chai.expect;
var angular = require('angular');
var lib_file_location = '../src/Library.js';


function module_exists( name ) {
  try { return require.resolve( name ); }
  catch( e ) { return false; }
}
 
describe('Library', function() {

  it('should load with node', function(){
    expect(module_exists(lib_file_location)).not.to.equal(false);
  });

  it('should load with angular', function(){
    // need to load the script first so we add ourselves to Angular's injector
    require(lib_file_location);

    // try to grab lib with Angular injector
    var lib = angular.injector(['Library']).get('Library');
    expect(lib).not.to.equal(undefined);
  });

  describe('once loaded', function() {
    var lib;

    beforeEach(function(){
      // reloading the module every time probably isn't ideal, but this let us test
      // node and angular loading separately above - well kinda
      expect(module_exists(lib_file_location)).not.to.equal(false);
      lib = require(lib_file_location);
    });

    describe('the doThing() function', function() {
      it('should do something', function(){
        var result = lib.doThing();

        expect(result).to.deep.equal([3, 6, 9]);
      });
    });

  });

});
