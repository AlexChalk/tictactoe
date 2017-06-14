var expect = chai.expect;

describe('square', function() {
  it('can be marked', function() {
    var square0 = square();
    square0.setMark('X');
    expect(square0.getMark()).to.equal('X');
  });
});
