(function(exports){
  var GAME = function() {
    var turn = 0;
    var gameBoard = board();
    var changeTurn = function() {
      turn += 1;
    };
    var result = function() {
      return gameStatus(gameBoard);
    };
    var markSquare = function(square, symbol) {
      if ((turn % 2 === 0 && symbol === '0') || (turn % 2 !== 0 && symbol === 'X')) {
        throw playingOutOfTurn;
      } else {
        gameBoard.markSquare(square, symbol);
      }
    };
    var gameisOver = {
      name: 'Error',
      message: 'This game is over'
    };
    var playingOutOfTurn = {
      name: 'Error',
      message: 'It is the other player\'s turn'
    };

    return {
      play: function(square, symbol) {
        if (result() !== 'n/a') {
          throw gameisOver;
        } else {
          markSquare(square, symbol);
          changeTurn();
        }
      },

      reportUpdatedSquares: function() {
        return gameBoard.getUpdatedSquares();
      },

      clearUpdatedSquares: function() {
        return gameBoard.clearUpdatedSquares();
      },

      checkGameStatus: function() {
        return result();
      }
    };
  };
  exports.GAME = GAME;
})(this);

