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

  xit('alternates between "X" and "0" when marking squares', function() {
    myBoard.markSquare('x0y0'); myBoard.markSquare('x0y1'); myBoard.markSquare('x0y2'); myBoard.markSquare('x1y0');
    expect(myBoard.getUpdatedSquares()).to.eql({ 
      x0y0: 'X',
      x0y1: '0',
      x0y2: 'X',
      x1y0: '0'
    });
  });

});
