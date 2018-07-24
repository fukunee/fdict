var fdict = require('../index.js');
var assert = require('assert');

describe('Fdict', function() {
	describe('function search', function() {

		//AHD4
		it('should return definitions of word "dictionary" from AHD4', function(done) {
			fdict.dictionary('./dict/AHD4.mdx').then(function(dictionary) {
				//// dictionary is loaded
				dictionary.search({
					phrase: 'dictionary', /// '*' and '?' supported
					max: 10 /// maximum results
				}).then(function(foundWords) {
					// console.log('Found words:');
					// console.log(foundWords); /// foundWords is array
					var word = '' + foundWords[0];
					// console.log('Loading definitions for: ' + word);
					return dictionary.lookup(word); /// typeof word === string
				}).then(function(definitions) {
					// console.log('definitions:'); /// definition is array
					// console.log(definitions);
					assert.equal(definitions.length > 0, true);
					done();
				});
			});
		})

		//LDOCE5X
		it('should return definitions of word "dictionary" from LDOCE5X', function(done) {
			fdict.dictionary('./dict/LDOCE5X.mdx').then(function(dictionary) {
				//// dictionary is loaded
				dictionary.search({
					phrase: 'dictionary', /// '*' and '?' supported
					max: 10 /// maximum results
				}).then(function(foundWords) {
					// console.log('Found words:');
					// console.log(foundWords); /// foundWords is array
					var word = '' + foundWords[0];
					// console.log('Loading definitions for: ' + word);
					return dictionary.lookup(word); /// typeof word === string
				}).then(function(definitions) {
					// console.log('definitions:'); /// definition is array
					// console.log(definitions);
					assert.equal(definitions.length > 0, true);
					done();
				});
			});
		})

		//LDOCE5
		it('should return definitions of word "dictionary" from LDOCE5', function(done) {
			fdict.dictionary('./dict/LDOCE5.mdx').then(function(dictionary) {
				//// dictionary is loaded
				dictionary.search({
					phrase: 'dictionary', /// '*' and '?' supported
					max: 10 /// maximum results
				}).then(function(foundWords) {
					// console.log('Found words:');
					// console.log(foundWords); /// foundWords is array
					var word = '' + foundWords[0];
					// console.log('Loading definitions for: ' + word);
					return dictionary.lookup(word); /// typeof word === string
				}).then(function(definitions) {
					// console.log('definitions:'); /// definition is array
					// console.log(definitions);
					assert.equal(definitions.length > 0, true);
					done();
				});
			});
		})

		//CCALE
		it('should return definitions of word "dictionary" from CCALE', function(done) {
			fdict.dictionary('./dict/CCALE.mdx').then(function(dictionary) {
				//// dictionary is loaded
				dictionary.search({
					phrase: 'dictionary', /// '*' and '?' supported
					max: 10 /// maximum results
				}).then(function(foundWords) {
					// console.log('Found words:');
					// console.log(foundWords); /// foundWords is array
					var word = '' + foundWords[0];
					// console.log('Loading definitions for: ' + word);
					return dictionary.lookup(word); /// typeof word === string
				}).then(function(definitions) {
					// console.log('definitions:'); /// definition is array
					// console.log(definitions);
					assert.equal(definitions.length > 0, true);
					done();
				});
			});
		})

		//CALD2
		it('should return definitions of word "dictionary" from CALD2', function(done) {
			fdict.dictionary('./dict/CALD2.mdx').then(function(dictionary) {
				//// dictionary is loaded
				dictionary.search({
					phrase: 'dictionary', /// '*' and '?' supported
					max: 10 /// maximum results
				}).then(function(foundWords) {
					// console.log('Found words:');
					// console.log(foundWords); /// foundWords is array
					var word = '' + foundWords[0];
					// console.log('Loading definitions for: ' + word);
					return dictionary.lookup(word); /// typeof word === string
				}).then(function(definitions) {
					// console.log('definitions:'); /// definition is array
					// console.log(definitions);
					assert.equal(definitions.length > 0, true);
					done();
				});
			});
		})

		//OALD7
		it('should return definitions of word "dictionary" from OALD7', function(done) {
			fdict.dictionary('./dict/OALD7.mdx').then(function(dictionary) {
				//// dictionary is loaded
				dictionary.search({
					phrase: 'dictionary', /// '*' and '?' supported
					max: 10 /// maximum results
				}).then(function(foundWords) {
					// console.log('Found words:');
					// console.log(foundWords); /// foundWords is array
					var word = '' + foundWords[0];
					// console.log('Loading definitions for: ' + word);
					return dictionary.lookup(word); /// typeof word === string
				}).then(function(definitions) {
					// console.log('definitions:'); /// definition is array
					// console.log(definitions);
					assert.equal(definitions.length > 0, true);
					done();
				});
			});
		})

		//LDOCE5A
		it('should return definitions of word "dictionary" from LDOCE5A', function(done) {
			fdict.dictionary('./dict/LDOCE5A.mdx').then(function(dictionary) {
				//// dictionary is loaded
				dictionary.search({
					phrase: 'dictionary', /// '*' and '?' supported
					max: 10 /// maximum results
				}).then(function(foundWords) {
					// console.log('Found words:');
					// console.log(foundWords); /// foundWords is array
					var word = '' + foundWords[0];
					// console.log('Loading definitions for: ' + word);
					return dictionary.lookup(word); /// typeof word === string
				}).then(function(definitions) {
					// console.log('definitions:'); /// definition is array
					// console.log(definitions);
					assert.equal(definitions.length > 0, true);
					done();
				});
			});
		})

		//LDOCE5E
		it('should return definitions of word "dictionary" from LDOCE5E', function(done) {
			fdict.dictionary('./dict/LDOCE5E.mdx').then(function(dictionary) {
				//// dictionary is loaded
				dictionary.search({
					phrase: 'dictionary', /// '*' and '?' supported
					max: 10 /// maximum results
				}).then(function(foundWords) {
					// console.log('Found words:');
					// console.log(foundWords); /// foundWords is array
					var word = '' + foundWords[0];
					// console.log('Loading definitions for: ' + word);
					return dictionary.lookup(word); /// typeof word === string
				}).then(function(definitions) {
					// console.log('definitions:'); /// definition is array
					// console.log(definitions);
					assert.equal(definitions.length > 0, true);
					done();
				});
			});
		})
	})
})