var expect = chai.expect;

describe('play', function() {
  var firstGame;
  beforeEach(function() {
    firstGame = GAME();
  });
  it('changes turn', function() {
    sinon.stub(firstGame, 'changeTurn');
    firstGame.play('x0y0', 'X');
    expect(firstGame.changeTurn).to.have.been.called;
  });
  it('forbids playing out of turn', function() {
    expect(firstGame.play.bind(firstGame, 'x0y0', '0')).to.throw(/the other player's turn/);
  });
});


