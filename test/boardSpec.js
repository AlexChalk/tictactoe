var expect = chai.expect;

describe('board', function() {
  it('has 9 properties', function() {
    var myBoard = board();
    expect(myBoard.numProperties()).to.equal(9);
  });
  xit('has mocking abilities', function() {
    sinon.spy(console, 'log');
    console.log('hey');
    expect(console.log).to.have.been.calledOnce;
  });
});
