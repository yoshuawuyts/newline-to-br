/**
 * Module dependencies
 */

var assert = require('assert');

/**
 * Format newlines to <br> tags
 *
 * @param {String} val
 * @return {String}
 * @api public
 */

module.exports = function removeNewlines(val) {
  assert.equal(typeof val, 'string', 'newline-to-br: val should be a string');
  return val.replace(/(\r\n|\n|\r)/gm, '<br>');
}
