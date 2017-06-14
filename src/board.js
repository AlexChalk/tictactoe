(function(exports) {
  'use strict';
  var board = function() {
    var turn = 0;
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
      markSquare: function(square) {
        if (turn % 2 === 0) {
          squares[square].setMark('X');
        } else {
          squares[square].setMark('0');
        }
        updatedSquares[square] = squares[square].getMark();
        turn += 1;
      },
      getUpdatedSquares: function() {
        return updatedSquares;
      }
    };
  };
  exports.board = board;
})(this);
