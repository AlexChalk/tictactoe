var expect = chai.expect;

describe('square', function() {
  var square0;
  beforeEach(function() {
    square0 = square();
  });
  it('can be marked', function() {
    square0.setMark('X');
    expect(square0.getMark()).to.equal('X');
  });
  it('can only be marked with an X or 0', function() {
    expect(square0.setMark.bind(square0, 'A')).to.throw(/can only be marked with an "X" or "0"/);
  });
  it('cannot be marked more than once', function() {
    square0.setMark('X');
    expect(square0.setMark.bind(square0, '0')).to.throw(/cannot be marked more than once/);
  });
});
