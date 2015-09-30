/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var HiText = __webpack_require__(2);

	var Person = React.createClass({
	    displayName: 'Person',

	    componentDidMount: function componentDidMount() {},
	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(HiText, {
	                html: this.props.text

	            })
	        );
	    }
	});

	var App = React.createClass({
	    displayName: 'App',

	    getInitialState: function getInitialState() {
	        return {
	            hi1: 'ja'
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        var _this = this;

	        setTimeout(function () {
	            _this.setState({ async: 'ja' });
	        }, 2000);
	    },
	    render: function render() {
	        var html = '\n            JavaScript (/ˈdʒɑːvəˌskrɪpt/[5]) is a high level, dynamic, untyped, and interpreted programming language.[6]\n            It has been standardized in the ECMAScript language specification.\n        ';

	        var text = 'Hello highlight text!!!!';

	        return React.createElement(
	            'div',
	            { id: 'app' },
	            React.createElement(
	                'h1',
	                null,
	                'HiText testing'
	            ),
	            React.createElement(
	                'h2',
	                null,
	                'basic'
	            ),
	            React.createElement(
	                HiText,
	                { ref: 'hi1', hi: this.state.hi1 },
	                html
	            ),
	            React.createElement(
	                'h2',
	                null,
	                'Case sensitive'
	            ),
	            React.createElement(
	                HiText,
	                { ref: 'hi2', hi: this.state.hi1, 'case-sensitive': true },
	                html
	            ),
	            React.createElement(
	                'h2',
	                null,
	                'With Async'
	            ),
	            React.createElement(
	                HiText,
	                { ref: 'hi3', hi: this.state.async },
	                html
	            )
	        );
	    }
	});

	React.render(React.createElement(App, null), document.body);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function webpackUniversalModuleDefinition(root, factory) {
		if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["ReactHiText"] = factory();else root["ReactHiText"] = factory();
	})(undefined, function () {
		return (/******/(function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			})(
			/************************************************************************/
			/******/[
			/* 0 */
			function (module, exports, __webpack_require__) {

				module.exports = __webpack_require__(1);

				/***/
			},
			/* 1 */
			function (module, exports, __webpack_require__) {

				'use strict';

				var escapeRegExp = __webpack_require__(2);

				var regexpEscapes = {
					'0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
					'5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
					'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
					'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
					'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
				};

				/** Used to escape characters for inclusion in compiled string literals. */
				var stringEscapes = {
					'\\': '\\',
					"'": "'",
					'\n': 'n',
					'\r': 'r',
					'\u2028': 'u2028',
					'\u2029': 'u2029'
				};

				var re = '';

				for (var k in stringEscapes) {
					re += '\\\\' + stringEscapes[k] + '|';
				}
				for (var k in regexpEscapes) {
					re += '\\\\' + regexpEscapes[k] + '|';
				}

				var tagSrc = '(<\/?[^>]+>)?';

				var HiText = React.createClass({
					displayName: 'HiText',

					getDefaultProps: function getDefaultProps() {
						return {
							className: 'highlight',
							'case-sensitive': false,
							hi: ''
						};
					},
					componentDidMount: function componentDidMount() {
						this.el = this.getDOMNode();
						this._html = this.el.innerHTML;

						this.setHighlight(this.props.hi, this.props['case-sensitive']);
					},

					setHighlight: function setHighlight(word, caseSens) {
						word = word.trim();
						if (!word) return;

						var className = this.props.className;
						var _this = this;

						_this.hasMatched = false;

						if (word > 1) {} else {}

						var highlight = function highlight(rootNode) {

							var wrap = function wrap(node) {
								if (node.nodeType === 3) {
									var pos = caseSens ? node.data.indexOf(word) : node.data.toLowerCase().indexOf(word.toLowerCase());

									if (pos < 0) return;

									var nt;

									if (pos === 0) {
										nt = node.splitText(word.length);
									} else if (pos > 0) {
										nt = node.splitText(pos).splitText(word.length);
									}

									var target = nt.previousSibling;

									var span = document.createElement('span');
									span.className = className;
									span.textContent = target.data;

									nt.parentNode.replaceChild(span, target);

									_this.hasMatched = true;
									wrap(nt);
								} else if (node.nodeType === 1 && node.childNodes && !(node.tagName === 'SPAN' && node.classList.contains(className)) && !/^(style|script)$/i.test(node.tagName)) {
									highlight(node);
								}
							};

							for (var i = 0; i < rootNode.childNodes.length; ++i) {
								wrap(rootNode.childNodes[i]);
							}

							return;
						};

						highlight(this.el);

						return this;
					},

					clean: function clean() {
						var spans = this.el.querySelectorAll('.' + this.props.className);

						Array.prototype.forEach.call(spans, function (span) {
							var text = document.createTextNode(span.textContent);
							span.parentNode.replaceChild(text, span);
						});

						return this;
					},

					componentDidUpdate: function componentDidUpdate() {
						this.setHighlight(this.props.hi, this.props['case-sensitive']);
					},

					render: function render() {
						return React.createElement('span', null, this.props.children);
					}
				});

				module.exports = HiText;

				/***/
			},
			/* 2 */
			function (module, exports, __webpack_require__) {

				'use strict';

				var baseToString = __webpack_require__(3),
				    escapeRegExpChar = __webpack_require__(4);

				/**
	    * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
	    * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
	    */
				var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
				    reHasRegExpChars = RegExp(reRegExpChars.source);

				/**
	    * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
	    * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
	    *
	    * @static
	    * @memberOf _
	    * @category String
	    * @param {string} [string=''] The string to escape.
	    * @returns {string} Returns the escaped string.
	    * @example
	    *
	    * _.escapeRegExp('[lodash](https://lodash.com/)');
	    * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
	    */
				function escapeRegExp(string) {
					string = baseToString(string);
					return string && reHasRegExpChars.test(string) ? string.replace(reRegExpChars, escapeRegExpChar) : string || '(?:)';
				}

				module.exports = escapeRegExp;

				/***/
			},
			/* 3 */
			function (module, exports) {

				/**
	    * Converts `value` to a string if it's not one. An empty string is returned
	    * for `null` or `undefined` values.
	    *
	    * @private
	    * @param {*} value The value to process.
	    * @returns {string} Returns the string.
	    */
				'use strict';

				function baseToString(value) {
					return value == null ? '' : value + '';
				}

				module.exports = baseToString;

				/***/
			},
			/* 4 */
			function (module, exports) {

				/** Used to escape characters for inclusion in compiled regexes. */
				'use strict';

				var regexpEscapes = {
					'0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
					'5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
					'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
					'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
					'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
				};

				/** Used to escape characters for inclusion in compiled string literals. */
				var stringEscapes = {
					'\\': '\\',
					"'": "'",
					'\n': 'n',
					'\r': 'r',
					'\u2028': 'u2028',
					'\u2029': 'u2029'
				};

				/**
	    * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
	    *
	    * @private
	    * @param {string} chr The matched character to escape.
	    * @param {string} leadingChar The capture group for a leading character.
	    * @param {string} whitespaceChar The capture group for a whitespace character.
	    * @returns {string} Returns the escaped character.
	    */
				function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
					if (leadingChar) {
						chr = regexpEscapes[chr];
					} else if (whitespaceChar) {
						chr = stringEscapes[chr];
					}
					return '\\' + chr;
				}

				module.exports = escapeRegExpChar;

				/***/
			}
			/******/])
		);
	});
	;
	/***/ /***/ /***/ /***/ /***/

/***/ }
/******/ ]);