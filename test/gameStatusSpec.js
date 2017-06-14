var expect = chai.expect;

describe('gameStatus', function() {
  var result = gameStatus;
  var gameBoard = board();
  beforeEach(function() {
    gameBoard.markSquare('x0y0', 'X'); gameBoard.markSquare('x2y0', '0'); gameBoard.markSquare('x0y1', 'X'); gameBoard.markSquare('x2y1', '0');
  });

  xit('result() does not report result if game is incomplete', function() {
    expect(result(gameBoard)).to.equal('n/a');
  });

  xit('result() correctly reports when "X" has won', function() {
    gameBoard.markSquare('x0y2', 'X');
    expect(result(gameBoard)).to.equal('X');
  });
});
