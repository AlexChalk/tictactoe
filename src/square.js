(function(exports) {
  'use strict';
  var square = function() {
    var mark = '';
    return {
      getMark: function() {
        return mark;
      },
      setMark: function(marking) {
        if (mark === '') {
          mark = marking;
        } else {
          throw {
            name: 'Error',
            message: 'A square cannot be marked more than once'
          };
        }
        return this;
      }
    };
  };
  exports.square = square;
})(this);
