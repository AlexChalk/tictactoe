var expect = chai.expect;

describe('board', function() {
  var myBoard;
  beforeEach(function() {
    myBoard = board();
  });

  it('marks squares', function() {
    myBoard.markSquare('x0y0');
    expect(myBoard.getUpdatedSquares()).to.eql({ x0y0: 'X' });
  });

  it('alternates between "X" and "0" when marking squares', function() {
    myBoard.markSquare('x0y0'); myBoard.markSquare('x0y1'); myBoard.markSquare('x0y2'); myBoard.markSquare('x1y0');
    expect(myBoard.getUpdatedSquares()).to.eql({ 
      x0y0: 'X',
      x0y1: '0',
      x0y2: 'X',
      x1y0: '0'
    });
  });

  it('does not report result if game is incomplete', function() {
    myBoard.markSquare('x0y0');
    expect(myBoard.winner()).to.equal('n/a');
  });



  xit('has mocking abilities', function() {
    sinon.stub(console, 'log');
    console.log('hey');
    expect(console.log).to.have.been.calledOnce;
  });
});
