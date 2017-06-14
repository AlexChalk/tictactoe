(function(exports) {
  'use strict';
  var square = function() {
    var mark = '';
    return {
      getMark: function() {
        return mark;
      },
      setMark: function(marking) {
        mark = marking;
        return this;
      }
    };
  };
  exports.square = square;
})(this);
