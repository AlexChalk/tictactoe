var expect = chai.expect;

describe('board', function() {
  var myBoard;
  beforeEach(function() {
    myBoard = board();
  });

  it('tracks updated squares', function() {
    myBoard.markSquare('x0y0', 'X');
    expect(myBoard.getUpdatedSquares()).to.eql({ x0y0: 'X' });
  });

  it('clears record of updated squares', function() {
    myBoard.markSquare('x0y0', 'X');
    myBoard.clearUpdatedSquares();
    expect(myBoard.getUpdatedSquares()).to.eql({});
  });

  it('gets squares', function() {
    expect(myBoard.getSquares().x0y0.getMark()).to.equal('');
  });

});
