(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReactHiText"] = factory();
	else
		root["ReactHiText"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	'use strict';
	/** TODO
	 * code for try fix cross tag issue
	 */
	//var escapeRegExp = require('lodash/string/escapeRegExp')
	//
	//var regexpEscapes = {
	//    '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
	//    '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
	//    'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
	//    'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
	//    'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
	//};
	//
	///** Used to escape characters for inclusion in compiled string literals. */
	//var stringEscapes = {
	//    '\\': '\\',
	//    "'": "'",
	//    '\n': 'n',
	//    '\r': 'r',
	//    '\u2028': 'u2028',
	//    '\u2029': 'u2029'
	//}
	//
	//var re = ''
	//
	//for(var k in stringEscapes){
	//    re += '\\\\' + stringEscapes[k] + '|'
	//}
	//for(var k in regexpEscapes){
	//    re += '\\\\' + regexpEscapes[k] + '|'
	//}
	//
	//var tagSrc = '(<\/?[^>]+>)?'

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

	    _flatten: function _flatten(node) {
	        var _this = this;
	        for (var i = 0, children = node.childNodes, nodeCount = children.length; i < nodeCount; i++) {
	            var child = children[i];
	            if (child.nodeType === 1) {
	                _this._flatten(child);
	            } else if (child.nodeType === 3) {
	                var next = child.nextSibling;
	                if (next && next.nodeType === 3) {
	                    var combined_text = child.data + next.data;
	                    var new_node = node.ownerDocument.createTextNode(combined_text);
	                    node.insertBefore(new_node, child);
	                    node.removeChild(child);
	                    node.removeChild(next);
	                    i--;
	                    nodeCount--;
	                }
	            }
	        }
	    },
	    clean: function clean() {
	        var spans = this.el.querySelectorAll('.' + this.props.className);

	        Array.prototype.forEach.call(spans, function (span) {
	            span.parentNode.replaceChild(span.firstChild, span);
	        });
	        this._flatten(this.el);
	        this.hasMatched = false;
	        return this;
	    },

	    componentDidUpdate: function componentDidUpdate(prevProps) {
	        this.setHighlight(this.props.hi, this.props['case-sensitive']);
	    },

	    render: function render() {
	        return React.createElement(
	            'span',
	            null,
	            this.props.children
	        );
	    }
	});

	module.exports = HiText;

/***/ }
/******/ ])
});
;