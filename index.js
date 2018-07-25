var mdictParser = require(__dirname + '/src/mdict-parser.js');
var Promise = require('bluebird');


var dictionary = function(filenames) {
	if (!Array.isArray(filenames)) {
		filenames = [filenames];
	}
	return new Promise(function(resolve, reject) {
		mdictParser.load(filenames).then(function(resources) {
			return resources.mdx;
		}).then(function(mdx) {
			resolve({
				lookup: function(string) {
					return mdx(string);
				},
				search: function(params) {
					if (typeof params === 'string' || params instanceof String) {
						params = {
							phrase: params
						};
					}
					params = params || {};
					params.phrase = params.phrase || '';
					params.max = params.max || 10;
					params.follow = params.follow || false;
					return mdx(params);
				}
			});
		});
	});
};
// dictName:
// OALD7
// LDOCE5X
// LDOCE5E
// LDOCE5A
// LDOCE5
// CCALE
// CALD2
// AHD4
module.exports.translate = function(keyWord, isExact, callback) {
	dictionary(__dirname + '/dict/OALD7.mdx').then(function(dictOALD7) {
		dictOALD7.search({
			phrase: keyWord,
			max: 1
		}).then(function(foundOALD7) {
			var word = '' + foundOALD7[0];
			if (isExact) {
				if (keyWord != word) {
					return "";
				}
			}
			return dictOALD7.lookup(word);
		}).then(function(defOALD7) {
			dictionary(__dirname + '/dict/LDOCE5X.mdx').then(function(dictLDOCE5X) {
				dictLDOCE5X.search({
					phrase: keyWord,
					max: 1
				}).then(function(foundLDOCE5X) {
					var word = '' + foundLDOCE5X[0];
					if (isExact) {
						if (keyWord != word) {
							return "";
						}
					}
					return dictLDOCE5X.lookup(word);
				}).then(function(defLDOCE5X) {
					dictionary(__dirname + '/dict/LDOCE5E.mdx').then(function(dictLDOCE5E) {
						dictLDOCE5E.search({
							phrase: keyWord,
							max: 1
						}).then(function(foundLDOCE5E) {
							var word = '' + foundLDOCE5E[0];
							if (isExact) {
								if (keyWord != word) {
									return "";
								}
							}
							return dictLDOCE5E.lookup(word);
						}).then(function(defLDOCE5E) {
							dictionary(__dirname + '/dict/LDOCE5A.mdx').then(function(dictLDOCE5A) {
								dictLDOCE5A.search({
									phrase: keyWord,
									max: 1
								}).then(function(foundLDOCE5A) {
									var word = '' + foundLDOCE5A[0];
									if (isExact) {
										if (keyWord != word) {
											return "";
										}
									}
									return dictLDOCE5A.lookup(word);
								}).then(function(defLDOCE5A) {
									dictionary(__dirname + '/dict/LDOCE5.mdx').then(function(dictLDOCE5) {
										dictLDOCE5.search({
											phrase: keyWord,
											max: 1
										}).then(function(foundLDOCE5) {
											var word = '' + foundLDOCE5[0];
											if (isExact) {
												if (keyWord != word) {
													return "";
												}
											}
											return dictLDOCE5.lookup(word);
										}).then(function(defLDOCE5) {
											dictionary(__dirname + '/dict/CCALE.mdx').then(function(dictCCALE) {
												dictCCALE.search({
													phrase: keyWord,
													max: 1
												}).then(function(foundCCALE) {
													var word = '' + foundCCALE[0];
													if (isExact) {
														if (keyWord != word) {
															return "";
														}
													}
													return dictCCALE.lookup(word);
												}).then(function(defCCALE) {
													dictionary(__dirname + '/dict/CALD2.mdx').then(function(dictCALD2) {
														dictCALD2.search({
															phrase: keyWord,
															max: 1
														}).then(function(foundCALD2) {
															var word = '' + foundCALD2[0];
															if (isExact) {
																if (keyWord != word) {
																	return "";
																}
															}
															return dictCALD2.lookup(word);
														}).then(function(defCALD2) {
															dictionary(__dirname + '/dict/AHD4.mdx').then(function(dictAHD4) {
																dictAHD4.search({
																	phrase: keyWord,
																	max: 1
																}).then(function(foundAHD4) {
																	var word = '' + foundAHD4[0];
																	if (isExact) {
																		if (keyWord != word) {
																			return "";
																		}
																	}
																	return dictAHD4.lookup(word);
																}).then(function(defAHD4) {
																	var definition = {
																		"defAHD4": defAHD4[0],
																		"defCALD2": defCALD2[0],
																		"defCCALE": defCCALE[0],
																		"defLDOCE5": defLDOCE5[0],
																		"defLDOCE5A": defLDOCE5A[0],
																		"defLDOCE5E": defLDOCE5E[0],
																		"defLDOCE5X": defLDOCE5X[0],
																		"defOALD7": defOALD7[0]
																	}
																	callback(definition);
																})
															})
														})
													})
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		});
	});
}