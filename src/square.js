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
          if (marking === 'X' || marking === '0') {
            mark = marking;
          } else {
            throw {
              name: 'Error',
              message: 'A square can only be marked with an "X" or "0"'
            };
          }
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
