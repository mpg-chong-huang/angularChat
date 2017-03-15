'use strict';

angular.module('myApp.filters', [])

.filter('reverse', function() {
  return function(item) {
    return item.slice().reverse();
  };
})

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

