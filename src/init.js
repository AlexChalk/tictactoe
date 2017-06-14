(function(exports){
  var GAME = function() {
    var turn = 0;
    var gameBoard = board();
    var result = gameStatus(gameBoard);
    var gameisOver = {
      name: 'Error',
      message: 'Game is over'
    };
    var playingOutOfTurn = {
      name: 'Error',
      message: 'It is the other player\'s turn'
    };
    var markSquare = function(square, symbol) {
      if ((turn % 2 === 0 && symbol === '0') || (turn % 2 !== 0 && symbol === 'X')) {
        throw playingOutOfTurn;
      } else {
        gameBoard.markSquare(square, symbol);
      }
    };

    return {
      changeTurn: function() {
        turn += 1;
      },

      play: function(square, symbol) {
        // if (result !== 'n/a') {
        //   throw gameisOver;
        // } else {
          markSquare(square, symbol);
          this.changeTurn();
        // }
      },

      reportUpdatedSquares: function() {
        return gameBoard.getUpdatedSquares;
      },

      checkGameStatus: function() {
        return result;
      }
    };
  };
  exports.GAME = GAME;
})(this);

