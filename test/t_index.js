var fdict = require('../index.js');
var assert = require('assert');

// dictName:
// OALD7
// LDOCE5X
// LDOCE5E
// LDOCE5A
// LDOCE5
// CCALE
// CALD2
// AHD4
describe('Fdict', function() {
	describe('function search', function() {
		it('should return definitions of word "dictionary" from AHD4', function(done) {
			fdict.translate("phenomenon", true, function(definitions) {
				// console.log(definitions);
				assert.equal(Boolean(definitions), true);
				done();
			});
		})
	})
})