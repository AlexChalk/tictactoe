var expect = chai.expect;

describe('board', function() {
  var myBoard;
  beforeEach(function() {
    myBoard = board();
  });

  it('marks squares', function() {
    myBoard.markSquare('x0y0', 'X');
    expect(myBoard.getUpdatedSquares()).to.eql({ x0y0: 'X' });
  });

  it('gets squares', function() {
    expect(myBoard.getSquares().x0y0.getMark()).to.equal('');
  });

});
