var expect = chai.expect;

describe('play', function() {
  var firstGame;
  beforeEach(function() {
    firstGame = GAME();
  });

  it('forbids playing out of turn', function() {
    expect(firstGame.play.bind(firstGame, 'x0y0', '0')).to.throw(/the other player's turn/);
  });

  it('changes turn', function() {
    firstGame.play('x0y0', 'X');
    expect(firstGame.play.bind(firstGame, 'x1y0', '0')).to.not.throw();
  });

  it('forbids playing a completed game', function() {
    firstGame.play('x0y0', 'X'); firstGame.play('x2y0', '0'); firstGame.play('x0y1', 'X'); firstGame.play('x2y1', '0'); firstGame.play('x0y2', 'X');
    expect(firstGame.play.bind(firstGame, 'x1y0', '0')).to.throw(/game is over/);
  });

  it('reportUpdatedSquares returns all updated squares', function() {
    firstGame.play('x0y0', 'X');
    firstGame.play('x0y1', '0');
    expect(firstGame.reportUpdatedSquares()).to.eql({x0y0: 'X', x0y1: '0'});
  });

  it('clearUpdatedSquares clears updated squares record', function() {
    firstGame.play('x0y0', 'X');
    firstGame.play('x0y1', '0');
    firstGame.clearUpdatedSquares();
    expect(firstGame.reportUpdatedSquares()).to.eql({});
  });

  it('checkGameStatus correctly returns result', function() {
    firstGame.play('x0y0', 'X'); firstGame.play('x2y0', '0'); firstGame.play('x0y1', 'X'); firstGame.play('x2y1', '0'); firstGame.play('x0y2', 'X');
    expect(firstGame.checkGameStatus()).to.equal('X');
  });
});


