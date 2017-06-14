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

  var matchesWinningCombo = function(combo, board, mark) {
    return combo.every(function(square) {
      return board.getSquares()[square].getMark() === mark;
    });
  };


  var hasWon = function(board, mark) {
    for (var i = 0; i < winningCombinations.length; i++) {
      if (matchesWinningCombo(winningCombinations[i], board, mark)) {
        return true;
      }
    }
  };

  var isDrawn = function(board) {
    var squares = board.getSquares();
    var keys = Object.keys(squares);
    return keys.every(function(key) {
      return squares[key].getMark() !== '';
    });
  };


  var gameStatus = function(board) {
    if (hasWon(board, 'X')) {
      return 'X';
    } else if (hasWon(board, '0')) {
      return '0';
    } else if (isDrawn(board)) {
      return 'DRAW';
    } else { 
      return 'n/a';
    }
  };
  exports.gameStatus = gameStatus;
})(this);
