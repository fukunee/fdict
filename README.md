### FDICT

fdict is an english  dictionary .

```
var fdict = require('fdict');

fdict.dictionary('dictionary.mdx').then(function(dictionary) {
	dictionary.search({
		phrase: 'hello*', /// '*' and '?' supported
		max: 10 /// maximum results
	}).then(function(foundWords) {
		var word = '' + foundWords[0];
		return dictionary.lookup(word); 
	}).then(function(definitions) {
		console.log('definitions:'); /// definition is array
		console.log(definitions);
	});
});
```