/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var toBr = require('./index');

/**
 * Test
 */

describe('newline-remove', function() {
  it('should assert argument types', function() {
    toBr.bind(toBr, 123)
      .should.throw('newline-to-br: val should be a string');
  });

  it('should strip all newlines from the string', function() {
    var val = 'foo \n bar \r \n bla bla bla bla';
    toBr(val).should.eql('foo <br> bar <br> <br> bla bla bla bla');
  })
});
