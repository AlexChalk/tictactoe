(function(){
  'use strict';
  if (typeof Object.prototype.numProperties !== 'function') {
    Object.prototype.numProperties = function() {
      return Object.keys(this).length;
    };
  }
})();
