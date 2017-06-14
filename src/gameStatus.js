(function(exports) {
  var winningCombinations = [
    ['x0y0', 'x0y1', 'x0y2'],
    ['x1y0', 'x1y1', 'x1y2'],
    ['x2y0', 'x2y1', 'x2y2'],
    ['x0y0', 'x1y0', 'x2y0'],
    ['x0y1', 'x1y1', 'x2y1'],
    ['x0y2', 'x1y2', 'x2y2'],
    ['x0y0', 'x1y1', 'x2y2'],
    ['x0y2', 'x1y1', 'x2y0']];

  var hasWon = function(board, mark) {
    winningCombinations.forEach(function(combo) {
      combo.every(function(square) {
        return board.getSquares()[square].getMark() !== mark;
      });
    });
  };

  var gameStatus = function(board) {
    if (hasWon(board, 'X')) {
      return 'X';
    } else { 
      return 'n/a';
    }
  };
  exports.gameStatus = gameStatus;
})(this);
