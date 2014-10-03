(function(module, window, undefined) {
'use strict';

var factory = function(_) {
  // declare class
  function Library() {}

  // return a string
  Library.doThing = function() {
    // use example from http://lodash.com/
    return _.map([1, 2, 3], function(n) { return n * 3; });
    // output should be [3, 6, 9]
  };

  return Library;
};

// build with node
if(module !== undefined) {
  // dependencies
  var _ = require('lodash');

  // build lib
  var Library = factory(_);

  // node export
  module.exports = Library;

  // hacks just for testing angular in node
  try {
    // angular is only a dev dependency for testing; this will throw an error otherwise
    require.resolve('angular');

    window = {
      angular: require('angular'),
      _: _
    };
  }
  catch( e ) {}
}

// console.log('window is', window)

// build with angular
if(typeof(window) !== 'undefined') {
  window.angular.module('Library', [])
  .factory('Library', [
    function(){
      // build lib
      var Library = factory();

      // angular export
      return Library;
    }
  ]);
}

})(module); //, typeof(window)!=='undefined' ? window:undefined
