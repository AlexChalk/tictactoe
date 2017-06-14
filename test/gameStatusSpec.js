var expect = chai.expect;

describe('gameStatus', function() {
  var result = gameStatus;
  var gameBoard;
  beforeEach(function() {
    gameBoard = board();
    gameBoard.markSquare('x0y0', 'X'); gameBoard.markSquare('x2y0', '0'); gameBoard.markSquare('x0y1', 'X'); gameBoard.markSquare('x2y1', '0');
  });

  it('result() does not report result if game is incomplete', function() {
    expect(result(gameBoard)).to.equal('n/a');
  });

  it('result() correctly reports when "X" has won', function() {
    gameBoard.markSquare('x0y2', 'X');
    expect(result(gameBoard)).to.equal('X');
  });

  it('result() correctly reports when "0" has won', function() {
    gameBoard.markSquare('x1y1', 'X');
    gameBoard.markSquare('x2y2', '0');
    expect(result(gameBoard)).to.equal('0');
  });

  it('result() correctly reports when game is drawn', function() {
    gameBoard = board();
    gameBoard.markSquare('x1y1', 'X');
    gameBoard.markSquare('x0y2', '0');
    gameBoard.markSquare('x1y2', 'X');
    gameBoard.markSquare('x1y0', '0');
    gameBoard.markSquare('x2y2', 'X');
    gameBoard.markSquare('x0y0', '0');
    gameBoard.markSquare('x2y0', 'X');
    gameBoard.markSquare('x2y1', '0');
    gameBoard.markSquare('x0y1', 'X');
    expect(result(gameBoard)).to.equal('DRAW');
  });
});
