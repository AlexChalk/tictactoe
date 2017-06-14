(function(exports) {
  'use strict';
  var square = function() {
    var mark = '';
    var incorrectMarking = {
      name: 'Error',
      message: 'A square can only be marked with an "X" or "0"'
    };
    var marksCannotBeOverwritten = {
      name: 'Error',
      message: 'A square cannot be marked more than once'
    };
    var insertMarkIfXOr0 = function(marking) {
      if (marking === 'X' || marking === '0') {
        mark = marking;
      } else {
        throw incorrectMarking;
      }
    };

    return {

      getMark: function() {
        return mark;
      },

      setMark: function(marking) {
        if (mark === '') {
          insertMarkIfXOr0(marking);
        } else {
          throw marksCannotBeOverwritten;
        }
        return this;
      }

    };
  };
  exports.square = square;
})(this);
