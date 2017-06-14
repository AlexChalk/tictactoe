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

  xit('has mocking abilities', function() {
    sinon.spy(console, 'log');
    console.log('hey');
    expect(console.log).to.have.been.calledOnce;
  });
});
