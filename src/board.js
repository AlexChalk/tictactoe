(function(exports) {
  'use strict';
  var board = function() {
    var squares = {
      x0y0: square(),
      x0y1: square(),
      x0y2: square(),
      x1y0: square(),
      x1y1: square(),
      x1y2: square(),
      x2y0: square(),
      x2y1: square(),
      x2y2: square(),
    };
    var updatedSquares = {};

    return {
      markSquare: function(square, mark) {
        squares[square].setMark(mark);
        updatedSquares[square] = squares[square].getMark();
      },
      getUpdatedSquares: function() {
        return updatedSquares;
      },
      getSquares: function() {
        return squares;
      },
      winner: function() {
        return 'n/a';
      }

    };
  };
  exports.board = board;
})(this);
