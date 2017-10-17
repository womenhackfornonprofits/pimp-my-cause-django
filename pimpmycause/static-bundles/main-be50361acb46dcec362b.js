/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * @preserve Qwery - A selector engine
  * https://github.com/ded/qwery
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else context[name] = definition()
})('qwery', this, function () {

  var classOnly = /^\.([\w\-]+)$/
    , doc = document
    , win = window
    , html = doc.documentElement
    , nodeType = 'nodeType'
  var isAncestor = 'compareDocumentPosition' in html ?
    function (element, container) {
      return (container.compareDocumentPosition(element) & 16) == 16
    } :
    function (element, container) {
      container = container == doc || container == window ? html : container
      return container !== element && container.contains(element)
    }

  function toArray(ar) {
    return [].slice.call(ar, 0)
  }

  function isNode(el) {
    var t
    return el && typeof el === 'object' && (t = el.nodeType) && (t == 1 || t == 9)
  }

  function arrayLike(o) {
    return (typeof o === 'object' && isFinite(o.length))
  }

  function flatten(ar) {
    for (var r = [], i = 0, l = ar.length; i < l; ++i) arrayLike(ar[i]) ? (r = r.concat(ar[i])) : (r[r.length] = ar[i])
    return r
  }

  function uniq(ar) {
    var a = [], i, j
    label:
    for (i = 0; i < ar.length; i++) {
      for (j = 0; j < a.length; j++) {
        if (a[j] == ar[i]) {
          continue label
        }
      }
      a[a.length] = ar[i]
    }
    return a
  }


  function normalizeRoot(root) {
    if (!root) return doc
    if (typeof root == 'string') return qwery(root)[0]
    if (!root[nodeType] && arrayLike(root)) return root[0]
    return root
  }

  /**
   * @param {string|Array.<Element>|Element|Node} selector
   * @param {string|Array.<Element>|Element|Node=} opt_root
   * @return {Array.<Element>}
   */
  function qwery(selector, opt_root) {
    var m, root = normalizeRoot(opt_root)
    if (!root || !selector) return []
    if (selector === win || isNode(selector)) {
      return !opt_root || (selector !== win && isNode(root) && isAncestor(selector, root)) ? [selector] : []
    }
    if (selector && arrayLike(selector)) return flatten(selector)


    if (doc.getElementsByClassName && selector == 'string' && (m = selector.match(classOnly))) {
      return toArray((root).getElementsByClassName(m[1]))
    }
    // using duck typing for 'a' window or 'a' document (not 'the' window || document)
    if (selector && (selector.document || (selector.nodeType && selector.nodeType == 9))) {
      return !opt_root ? [selector] : []
    }
    return toArray((root).querySelectorAll(selector))
  }

  qwery.uniq = uniq

  return qwery
}, this);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(8);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(0);
var rotatingCubes = __webpack_require__(3);
var hamburgerMenu = __webpack_require__(4);
var profileImagePreview = __webpack_require__(5);
var geolocator = __webpack_require__(6);
var masonry = __webpack_require__(7);

var $html = $('html');
$html.classList.add('js');

console.log("PIMP");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* ROTATING HOMEPAGE CUBES */


var $ = __webpack_require__(0);
var cubesList = $('.cube');

setInterval(function () {
    cubesList.forEach(function (cube) {
        cube.classList.toggle("active");
    });
}, 2500);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Hamburger Menu */

var $ = __webpack_require__(0);
var $navigation = $('js-header-nav')[0];
var $menuEl = $('.js-header-list')[0];

$navigation.addEventListener('click', function (event) {
    var $srcElement = event.target;

    $srcElement.classList.contains('js-nav-toggle') ? $menuEl.classList.toggle('navigation__menu--mobile') : $menuEl.classList.remove('navigation__menu--mobile');
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Profile Image preview */
var $ = __webpack_require__(0);
var $imageEl = $('.profile-img')[0];
var $s3DirectWidget = $('.s3direct')[0];

if ($s3DirectWidget) {
	$s3DirectWidget.addEventListener('change', function (event) {
		setTimeout(function () {
			var $uploadedImageLinkEl = $('.file-link')[0];
			$imageEl.src = $uploadedImageLinkEl.href;
		}, 500);
	});
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log("Loaded masonry");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(11)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:400,400i,700,900|Open+Sans:600,700,300);", ""]);

// module
exports.push([module.i, "@charset \"UTF-8\";\n/* =================================\n   VENDORS / FOUNDATION\n   ================================= */\nmeta.foundation-version {\n  font-family: \"/5.5.3/\"; }\n\nmeta.foundation-mq-small {\n  font-family: \"/only screen/\";\n  width: 0; }\n\nmeta.foundation-mq-small-only {\n  font-family: \"/only screen and (max-width: 40em)/\";\n  width: 0; }\n\nmeta.foundation-mq-medium {\n  font-family: \"/only screen and (min-width:40.0625em)/\";\n  width: 40.0625em; }\n\nmeta.foundation-mq-medium-only {\n  font-family: \"/only screen and (min-width:40.0625em) and (max-width:64em)/\";\n  width: 40.0625em; }\n\nmeta.foundation-mq-large {\n  font-family: \"/only screen and (min-width:64.0625em)/\";\n  width: 64.0625em; }\n\nmeta.foundation-mq-large-only {\n  font-family: \"/only screen and (min-width:64.0625em) and (max-width:90em)/\";\n  width: 64.0625em; }\n\nmeta.foundation-mq-xlarge {\n  font-family: \"/only screen and (min-width:90.0625em)/\";\n  width: 90.0625em; }\n\nmeta.foundation-mq-xlarge-only {\n  font-family: \"/only screen and (min-width:90.0625em) and (max-width:120em)/\";\n  width: 90.0625em; }\n\nmeta.foundation-mq-xxlarge {\n  font-family: \"/only screen and (min-width:120.0625em)/\";\n  width: 120.0625em; }\n\nmeta.foundation-data-attribute-namespace {\n  font-family: false; }\n\nhtml, body {\n  height: 100%; }\n\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  font-size: 100%; }\n\nbody {\n  background: #fff;\n  color: #222;\n  cursor: auto;\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.5;\n  margin: 0;\n  padding: 0;\n  position: relative; }\n\na:hover {\n  cursor: pointer; }\n\nimg {\n  max-width: 100%;\n  height: auto; }\n\nimg {\n  -ms-interpolation-mode: bicubic; }\n\n#map_canvas img,\n#map_canvas embed,\n#map_canvas object,\n.map_canvas img,\n.map_canvas embed,\n.map_canvas object,\n.mqa-display img,\n.mqa-display embed,\n.mqa-display object {\n  max-width: none !important; }\n\n.left {\n  float: left !important; }\n\n.right {\n  float: right !important; }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after {\n  clear: both; }\n\n.hide {\n  display: none; }\n\n.invisible {\n  visibility: hidden; }\n\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nimg {\n  display: inline-block;\n  vertical-align: middle; }\n\ntextarea {\n  height: auto;\n  min-height: 50px; }\n\nselect {\n  width: 100%; }\n\n.row {\n  margin: 0 auto;\n  max-width: 62.5rem;\n  width: 100%; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n  .row.collapse > .column,\n  .row.collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row .row {\n    margin: 0 -0.9375rem;\n    max-width: none;\n    width: auto; }\n    .row .row:before, .row .row:after {\n      content: \" \";\n      display: table; }\n    .row .row:after {\n      clear: both; }\n    .row .row.collapse {\n      margin: 0;\n      max-width: none;\n      width: auto; }\n      .row .row.collapse:before, .row .row.collapse:after {\n        content: \" \";\n        display: table; }\n      .row .row.collapse:after {\n        clear: both; }\n\n.column,\n.columns {\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n  width: 100%;\n  float: left; }\n\n.column + .column:last-child,\n.columns + .column:last-child, .column +\n.columns:last-child,\n.columns +\n.columns:last-child {\n  float: right; }\n\n.column + .column.end,\n.columns + .column.end, .column +\n.columns.end,\n.columns +\n.columns.end {\n  float: left; }\n\n@media only screen {\n  .small-push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .small-pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .small-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .small-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .small-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .small-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .small-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .small-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .small-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .small-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .small-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .small-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .small-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .small-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .small-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .small-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .small-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .small-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .small-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .small-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .small-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .small-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .small-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .small-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column,\n  .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .small-1 {\n    width: 8.33333%; }\n  .small-2 {\n    width: 16.66667%; }\n  .small-3 {\n    width: 25%; }\n  .small-4 {\n    width: 33.33333%; }\n  .small-5 {\n    width: 41.66667%; }\n  .small-6 {\n    width: 50%; }\n  .small-7 {\n    width: 58.33333%; }\n  .small-8 {\n    width: 66.66667%; }\n  .small-9 {\n    width: 75%; }\n  .small-10 {\n    width: 83.33333%; }\n  .small-11 {\n    width: 91.66667%; }\n  .small-12 {\n    width: 100%; }\n  .small-offset-0 {\n    margin-left: 0 !important; }\n  .small-offset-1 {\n    margin-left: 8.33333% !important; }\n  .small-offset-2 {\n    margin-left: 16.66667% !important; }\n  .small-offset-3 {\n    margin-left: 25% !important; }\n  .small-offset-4 {\n    margin-left: 33.33333% !important; }\n  .small-offset-5 {\n    margin-left: 41.66667% !important; }\n  .small-offset-6 {\n    margin-left: 50% !important; }\n  .small-offset-7 {\n    margin-left: 58.33333% !important; }\n  .small-offset-8 {\n    margin-left: 66.66667% !important; }\n  .small-offset-9 {\n    margin-left: 75% !important; }\n  .small-offset-10 {\n    margin-left: 83.33333% !important; }\n  .small-offset-11 {\n    margin-left: 91.66667% !important; }\n  .small-reset-order {\n    float: left;\n    left: auto;\n    margin-left: 0;\n    margin-right: 0;\n    right: auto; }\n  .column.small-centered,\n  .columns.small-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.small-uncentered,\n  .columns.small-uncentered {\n    float: left;\n    margin-left: 0;\n    margin-right: 0; }\n  .column.small-centered:last-child,\n  .columns.small-centered:last-child {\n    float: none; }\n  .column.small-uncentered:last-child,\n  .columns.small-uncentered:last-child {\n    float: left; }\n  .column.small-uncentered.opposite,\n  .columns.small-uncentered.opposite {\n    float: right; }\n  .row.small-collapse > .column,\n  .row.small-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.small-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.small-uncollapse > .column,\n  .row.small-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; } }\n\n@media only screen and (min-width: 40.0625em) {\n  .medium-push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .medium-pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .medium-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .medium-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .medium-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .medium-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .medium-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .medium-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .medium-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .medium-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .medium-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .medium-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .medium-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .medium-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .medium-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .medium-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .medium-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .medium-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .medium-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .medium-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .medium-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .medium-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .medium-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .medium-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column,\n  .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .medium-1 {\n    width: 8.33333%; }\n  .medium-2 {\n    width: 16.66667%; }\n  .medium-3 {\n    width: 25%; }\n  .medium-4 {\n    width: 33.33333%; }\n  .medium-5 {\n    width: 41.66667%; }\n  .medium-6 {\n    width: 50%; }\n  .medium-7 {\n    width: 58.33333%; }\n  .medium-8 {\n    width: 66.66667%; }\n  .medium-9 {\n    width: 75%; }\n  .medium-10 {\n    width: 83.33333%; }\n  .medium-11 {\n    width: 91.66667%; }\n  .medium-12 {\n    width: 100%; }\n  .medium-offset-0 {\n    margin-left: 0 !important; }\n  .medium-offset-1 {\n    margin-left: 8.33333% !important; }\n  .medium-offset-2 {\n    margin-left: 16.66667% !important; }\n  .medium-offset-3 {\n    margin-left: 25% !important; }\n  .medium-offset-4 {\n    margin-left: 33.33333% !important; }\n  .medium-offset-5 {\n    margin-left: 41.66667% !important; }\n  .medium-offset-6 {\n    margin-left: 50% !important; }\n  .medium-offset-7 {\n    margin-left: 58.33333% !important; }\n  .medium-offset-8 {\n    margin-left: 66.66667% !important; }\n  .medium-offset-9 {\n    margin-left: 75% !important; }\n  .medium-offset-10 {\n    margin-left: 83.33333% !important; }\n  .medium-offset-11 {\n    margin-left: 91.66667% !important; }\n  .medium-reset-order {\n    float: left;\n    left: auto;\n    margin-left: 0;\n    margin-right: 0;\n    right: auto; }\n  .column.medium-centered,\n  .columns.medium-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.medium-uncentered,\n  .columns.medium-uncentered {\n    float: left;\n    margin-left: 0;\n    margin-right: 0; }\n  .column.medium-centered:last-child,\n  .columns.medium-centered:last-child {\n    float: none; }\n  .column.medium-uncentered:last-child,\n  .columns.medium-uncentered:last-child {\n    float: left; }\n  .column.medium-uncentered.opposite,\n  .columns.medium-uncentered.opposite {\n    float: right; }\n  .row.medium-collapse > .column,\n  .row.medium-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.medium-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.medium-uncollapse > .column,\n  .row.medium-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; } }\n\n@media only screen and (min-width: 64.0625em) {\n  .large-push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .large-pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .large-push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .large-pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .large-push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .large-pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .large-push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .large-pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .large-push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .large-pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .large-push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .large-pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .large-push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .large-pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .large-push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .large-pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .large-push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .large-pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .large-push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .large-pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .large-push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .large-pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .large-push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .large-pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; }\n  .column,\n  .columns {\n    position: relative;\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .large-1 {\n    width: 8.33333%; }\n  .large-2 {\n    width: 16.66667%; }\n  .large-3 {\n    width: 25%; }\n  .large-4 {\n    width: 33.33333%; }\n  .large-5 {\n    width: 41.66667%; }\n  .large-6 {\n    width: 50%; }\n  .large-7 {\n    width: 58.33333%; }\n  .large-8 {\n    width: 66.66667%; }\n  .large-9 {\n    width: 75%; }\n  .large-10 {\n    width: 83.33333%; }\n  .large-11 {\n    width: 91.66667%; }\n  .large-12 {\n    width: 100%; }\n  .large-offset-0 {\n    margin-left: 0 !important; }\n  .large-offset-1 {\n    margin-left: 8.33333% !important; }\n  .large-offset-2 {\n    margin-left: 16.66667% !important; }\n  .large-offset-3 {\n    margin-left: 25% !important; }\n  .large-offset-4 {\n    margin-left: 33.33333% !important; }\n  .large-offset-5 {\n    margin-left: 41.66667% !important; }\n  .large-offset-6 {\n    margin-left: 50% !important; }\n  .large-offset-7 {\n    margin-left: 58.33333% !important; }\n  .large-offset-8 {\n    margin-left: 66.66667% !important; }\n  .large-offset-9 {\n    margin-left: 75% !important; }\n  .large-offset-10 {\n    margin-left: 83.33333% !important; }\n  .large-offset-11 {\n    margin-left: 91.66667% !important; }\n  .large-reset-order {\n    float: left;\n    left: auto;\n    margin-left: 0;\n    margin-right: 0;\n    right: auto; }\n  .column.large-centered,\n  .columns.large-centered {\n    margin-left: auto;\n    margin-right: auto;\n    float: none; }\n  .column.large-uncentered,\n  .columns.large-uncentered {\n    float: left;\n    margin-left: 0;\n    margin-right: 0; }\n  .column.large-centered:last-child,\n  .columns.large-centered:last-child {\n    float: none; }\n  .column.large-uncentered:last-child,\n  .columns.large-uncentered:last-child {\n    float: left; }\n  .column.large-uncentered.opposite,\n  .columns.large-uncentered.opposite {\n    float: right; }\n  .row.large-collapse > .column,\n  .row.large-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row.large-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .row.large-uncollapse > .column,\n  .row.large-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem;\n    float: left; }\n  .push-0 {\n    position: relative;\n    left: 0;\n    right: auto; }\n  .pull-0 {\n    position: relative;\n    right: 0;\n    left: auto; }\n  .push-1 {\n    position: relative;\n    left: 8.33333%;\n    right: auto; }\n  .pull-1 {\n    position: relative;\n    right: 8.33333%;\n    left: auto; }\n  .push-2 {\n    position: relative;\n    left: 16.66667%;\n    right: auto; }\n  .pull-2 {\n    position: relative;\n    right: 16.66667%;\n    left: auto; }\n  .push-3 {\n    position: relative;\n    left: 25%;\n    right: auto; }\n  .pull-3 {\n    position: relative;\n    right: 25%;\n    left: auto; }\n  .push-4 {\n    position: relative;\n    left: 33.33333%;\n    right: auto; }\n  .pull-4 {\n    position: relative;\n    right: 33.33333%;\n    left: auto; }\n  .push-5 {\n    position: relative;\n    left: 41.66667%;\n    right: auto; }\n  .pull-5 {\n    position: relative;\n    right: 41.66667%;\n    left: auto; }\n  .push-6 {\n    position: relative;\n    left: 50%;\n    right: auto; }\n  .pull-6 {\n    position: relative;\n    right: 50%;\n    left: auto; }\n  .push-7 {\n    position: relative;\n    left: 58.33333%;\n    right: auto; }\n  .pull-7 {\n    position: relative;\n    right: 58.33333%;\n    left: auto; }\n  .push-8 {\n    position: relative;\n    left: 66.66667%;\n    right: auto; }\n  .pull-8 {\n    position: relative;\n    right: 66.66667%;\n    left: auto; }\n  .push-9 {\n    position: relative;\n    left: 75%;\n    right: auto; }\n  .pull-9 {\n    position: relative;\n    right: 75%;\n    left: auto; }\n  .push-10 {\n    position: relative;\n    left: 83.33333%;\n    right: auto; }\n  .pull-10 {\n    position: relative;\n    right: 83.33333%;\n    left: auto; }\n  .push-11 {\n    position: relative;\n    left: 91.66667%;\n    right: auto; }\n  .pull-11 {\n    position: relative;\n    right: 91.66667%;\n    left: auto; } }\n\n[class*=\"block-grid-\"] {\n  display: block;\n  padding: 0;\n  margin: 0 -0.5rem; }\n  [class*=\"block-grid-\"]:before, [class*=\"block-grid-\"]:after {\n    content: \" \";\n    display: table; }\n  [class*=\"block-grid-\"]:after {\n    clear: both; }\n  [class*=\"block-grid-\"] > li {\n    display: block;\n    float: left;\n    height: auto;\n    padding: 0 0.5rem 1rem; }\n\n@media only screen {\n  .small-block-grid-1 > li {\n    list-style: none;\n    width: 100%; }\n    .small-block-grid-1 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-1 > li:nth-of-type(1n+1) {\n      clear: both; }\n  .small-block-grid-2 > li {\n    list-style: none;\n    width: 50%; }\n    .small-block-grid-2 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-2 > li:nth-of-type(2n+1) {\n      clear: both; }\n  .small-block-grid-3 > li {\n    list-style: none;\n    width: 33.33333%; }\n    .small-block-grid-3 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-3 > li:nth-of-type(3n+1) {\n      clear: both; }\n  .small-block-grid-4 > li {\n    list-style: none;\n    width: 25%; }\n    .small-block-grid-4 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-4 > li:nth-of-type(4n+1) {\n      clear: both; }\n  .small-block-grid-5 > li {\n    list-style: none;\n    width: 20%; }\n    .small-block-grid-5 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-5 > li:nth-of-type(5n+1) {\n      clear: both; }\n  .small-block-grid-6 > li {\n    list-style: none;\n    width: 16.66667%; }\n    .small-block-grid-6 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-6 > li:nth-of-type(6n+1) {\n      clear: both; }\n  .small-block-grid-7 > li {\n    list-style: none;\n    width: 14.28571%; }\n    .small-block-grid-7 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-7 > li:nth-of-type(7n+1) {\n      clear: both; }\n  .small-block-grid-8 > li {\n    list-style: none;\n    width: 12.5%; }\n    .small-block-grid-8 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-8 > li:nth-of-type(8n+1) {\n      clear: both; }\n  .small-block-grid-9 > li {\n    list-style: none;\n    width: 11.11111%; }\n    .small-block-grid-9 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-9 > li:nth-of-type(9n+1) {\n      clear: both; }\n  .small-block-grid-10 > li {\n    list-style: none;\n    width: 10%; }\n    .small-block-grid-10 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-10 > li:nth-of-type(10n+1) {\n      clear: both; }\n  .small-block-grid-11 > li {\n    list-style: none;\n    width: 9.09091%; }\n    .small-block-grid-11 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-11 > li:nth-of-type(11n+1) {\n      clear: both; }\n  .small-block-grid-12 > li {\n    list-style: none;\n    width: 8.33333%; }\n    .small-block-grid-12 > li:nth-of-type(1n) {\n      clear: none; }\n    .small-block-grid-12 > li:nth-of-type(12n+1) {\n      clear: both; } }\n\n@media only screen and (min-width: 40.0625em) {\n  .medium-block-grid-1 > li {\n    list-style: none;\n    width: 100%; }\n    .medium-block-grid-1 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-1 > li:nth-of-type(1n+1) {\n      clear: both; }\n  .medium-block-grid-2 > li {\n    list-style: none;\n    width: 50%; }\n    .medium-block-grid-2 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-2 > li:nth-of-type(2n+1) {\n      clear: both; }\n  .medium-block-grid-3 > li {\n    list-style: none;\n    width: 33.33333%; }\n    .medium-block-grid-3 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-3 > li:nth-of-type(3n+1) {\n      clear: both; }\n  .medium-block-grid-4 > li {\n    list-style: none;\n    width: 25%; }\n    .medium-block-grid-4 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-4 > li:nth-of-type(4n+1) {\n      clear: both; }\n  .medium-block-grid-5 > li {\n    list-style: none;\n    width: 20%; }\n    .medium-block-grid-5 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-5 > li:nth-of-type(5n+1) {\n      clear: both; }\n  .medium-block-grid-6 > li {\n    list-style: none;\n    width: 16.66667%; }\n    .medium-block-grid-6 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-6 > li:nth-of-type(6n+1) {\n      clear: both; }\n  .medium-block-grid-7 > li {\n    list-style: none;\n    width: 14.28571%; }\n    .medium-block-grid-7 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-7 > li:nth-of-type(7n+1) {\n      clear: both; }\n  .medium-block-grid-8 > li {\n    list-style: none;\n    width: 12.5%; }\n    .medium-block-grid-8 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-8 > li:nth-of-type(8n+1) {\n      clear: both; }\n  .medium-block-grid-9 > li {\n    list-style: none;\n    width: 11.11111%; }\n    .medium-block-grid-9 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-9 > li:nth-of-type(9n+1) {\n      clear: both; }\n  .medium-block-grid-10 > li {\n    list-style: none;\n    width: 10%; }\n    .medium-block-grid-10 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-10 > li:nth-of-type(10n+1) {\n      clear: both; }\n  .medium-block-grid-11 > li {\n    list-style: none;\n    width: 9.09091%; }\n    .medium-block-grid-11 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-11 > li:nth-of-type(11n+1) {\n      clear: both; }\n  .medium-block-grid-12 > li {\n    list-style: none;\n    width: 8.33333%; }\n    .medium-block-grid-12 > li:nth-of-type(1n) {\n      clear: none; }\n    .medium-block-grid-12 > li:nth-of-type(12n+1) {\n      clear: both; } }\n\n@media only screen and (min-width: 64.0625em) {\n  .large-block-grid-1 > li {\n    list-style: none;\n    width: 100%; }\n    .large-block-grid-1 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-1 > li:nth-of-type(1n+1) {\n      clear: both; }\n  .large-block-grid-2 > li {\n    list-style: none;\n    width: 50%; }\n    .large-block-grid-2 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-2 > li:nth-of-type(2n+1) {\n      clear: both; }\n  .large-block-grid-3 > li {\n    list-style: none;\n    width: 33.33333%; }\n    .large-block-grid-3 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-3 > li:nth-of-type(3n+1) {\n      clear: both; }\n  .large-block-grid-4 > li {\n    list-style: none;\n    width: 25%; }\n    .large-block-grid-4 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-4 > li:nth-of-type(4n+1) {\n      clear: both; }\n  .large-block-grid-5 > li {\n    list-style: none;\n    width: 20%; }\n    .large-block-grid-5 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-5 > li:nth-of-type(5n+1) {\n      clear: both; }\n  .large-block-grid-6 > li {\n    list-style: none;\n    width: 16.66667%; }\n    .large-block-grid-6 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-6 > li:nth-of-type(6n+1) {\n      clear: both; }\n  .large-block-grid-7 > li {\n    list-style: none;\n    width: 14.28571%; }\n    .large-block-grid-7 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-7 > li:nth-of-type(7n+1) {\n      clear: both; }\n  .large-block-grid-8 > li {\n    list-style: none;\n    width: 12.5%; }\n    .large-block-grid-8 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-8 > li:nth-of-type(8n+1) {\n      clear: both; }\n  .large-block-grid-9 > li {\n    list-style: none;\n    width: 11.11111%; }\n    .large-block-grid-9 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-9 > li:nth-of-type(9n+1) {\n      clear: both; }\n  .large-block-grid-10 > li {\n    list-style: none;\n    width: 10%; }\n    .large-block-grid-10 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-10 > li:nth-of-type(10n+1) {\n      clear: both; }\n  .large-block-grid-11 > li {\n    list-style: none;\n    width: 9.09091%; }\n    .large-block-grid-11 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-11 > li:nth-of-type(11n+1) {\n      clear: both; }\n  .large-block-grid-12 > li {\n    list-style: none;\n    width: 8.33333%; }\n    .large-block-grid-12 > li:nth-of-type(1n) {\n      clear: none; }\n    .large-block-grid-12 > li:nth-of-type(12n+1) {\n      clear: both; } }\n\n/* small displays */\n@media only screen {\n  .show-for-small-only, .show-for-small-up, .show-for-small, .show-for-small-down, .hide-for-medium-only, .hide-for-medium-up, .hide-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .hide-for-small-only, .hide-for-small-up, .hide-for-small, .hide-for-small-down, .show-for-medium-only, .show-for-medium-up, .show-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .visible-for-small-only, .visible-for-small-up, .visible-for-small, .visible-for-small-down, .hidden-for-medium-only, .hidden-for-medium-up, .hidden-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .hidden-for-small-only, .hidden-for-small-up, .hidden-for-small, .hidden-for-small-down, .visible-for-medium-only, .visible-for-medium-up, .visible-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.show-for-small-only, table.show-for-small-up, table.show-for-small, table.show-for-small-down, table.hide-for-medium-only, table.hide-for-medium-up, table.hide-for-medium, table.show-for-medium-down, table.hide-for-large-only, table.hide-for-large-up, table.hide-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.show-for-small-only, thead.show-for-small-up, thead.show-for-small, thead.show-for-small-down, thead.hide-for-medium-only, thead.hide-for-medium-up, thead.hide-for-medium, thead.show-for-medium-down, thead.hide-for-large-only, thead.hide-for-large-up, thead.hide-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.show-for-small-only, tbody.show-for-small-up, tbody.show-for-small, tbody.show-for-small-down, tbody.hide-for-medium-only, tbody.hide-for-medium-up, tbody.hide-for-medium, tbody.show-for-medium-down, tbody.hide-for-large-only, tbody.hide-for-large-up, tbody.hide-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.show-for-small-only, tr.show-for-small-up, tr.show-for-small, tr.show-for-small-down, tr.hide-for-medium-only, tr.hide-for-medium-up, tr.hide-for-medium, tr.show-for-medium-down, tr.hide-for-large-only, tr.hide-for-large-up, tr.hide-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.show-for-small-only, td.show-for-small-only, th.show-for-small-up, td.show-for-small-up, th.show-for-small, td.show-for-small, th.show-for-small-down, td.show-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.hide-for-medium-up, td.hide-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.show-for-medium-down, td.show-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.hide-for-large-up, td.hide-for-large-up, th.hide-for-large, td.hide-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* medium displays */\n@media only screen and (min-width: 40.0625em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .show-for-medium-only, .show-for-medium-up, .show-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .hide-for-medium-only, .hide-for-medium-up, .hide-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .visible-for-medium-only, .visible-for-medium-up, .visible-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .hidden-for-medium-only, .hidden-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.show-for-medium-only, table.show-for-medium-up, table.show-for-medium, table.show-for-medium-down, table.hide-for-large-only, table.hide-for-large-up, table.hide-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.show-for-medium-only, thead.show-for-medium-up, thead.show-for-medium, thead.show-for-medium-down, thead.hide-for-large-only, thead.hide-for-large-up, thead.hide-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.show-for-medium-only, tbody.show-for-medium-up, tbody.show-for-medium, tbody.show-for-medium-down, tbody.hide-for-large-only, tbody.hide-for-large-up, tbody.hide-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.show-for-medium-only, tr.show-for-medium-up, tr.show-for-medium, tr.show-for-medium-down, tr.hide-for-large-only, tr.hide-for-large-up, tr.hide-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.show-for-medium-only, td.show-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.show-for-medium, td.show-for-medium, th.show-for-medium-down, td.show-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.hide-for-large-up, td.hide-for-large-up, th.hide-for-large, td.hide-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* large displays */\n@media only screen and (min-width: 64.0625em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.show-for-large-only, table.show-for-large-up, table.show-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.show-for-large-only, thead.show-for-large-up, thead.show-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.show-for-large-only, tbody.show-for-large-up, tbody.show-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.show-for-large-only, tr.show-for-large-up, tr.show-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.show-for-large-only, td.show-for-large-only, th.show-for-large-up, td.show-for-large-up, th.show-for-large, td.show-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* xlarge displays */\n@media only screen and (min-width: 90.0625em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .hide-for-large-only, .show-for-large-up, .hide-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .show-for-large-only, .hide-for-large-up, .show-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .hidden-for-large-only, .visible-for-large-up, .hidden-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .visible-for-large-only, .hidden-for-large-up, .visible-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.hide-for-large-only, table.show-for-large-up, table.hide-for-large, table.hide-for-large-down, table.show-for-xlarge-only, table.show-for-xlarge-up, table.show-for-xlarge, table.show-for-xlarge-down, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up, table.hide-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.hide-for-large-only, thead.show-for-large-up, thead.hide-for-large, thead.hide-for-large-down, thead.show-for-xlarge-only, thead.show-for-xlarge-up, thead.show-for-xlarge, thead.show-for-xlarge-down, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up, thead.hide-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.hide-for-large-only, tbody.show-for-large-up, tbody.hide-for-large, tbody.hide-for-large-down, tbody.show-for-xlarge-only, tbody.show-for-xlarge-up, tbody.show-for-xlarge, tbody.show-for-xlarge-down, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up, tbody.hide-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.hide-for-large-only, tr.show-for-large-up, tr.hide-for-large, tr.hide-for-large-down, tr.show-for-xlarge-only, tr.show-for-xlarge-up, tr.show-for-xlarge, tr.show-for-xlarge-down, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up, tr.hide-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.show-for-large-up, td.show-for-large-up, th.hide-for-large, td.hide-for-large, th.hide-for-large-down, td.hide-for-large-down, th.show-for-xlarge-only, td.show-for-xlarge-only, th.show-for-xlarge-up, td.show-for-xlarge-up, th.show-for-xlarge, td.show-for-xlarge, th.show-for-xlarge-down, td.show-for-xlarge-down, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up, th.hide-for-xxlarge, td.hide-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* xxlarge displays */\n@media only screen and (min-width: 120.0625em) {\n  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .hide-for-large-only, .show-for-large-up, .hide-for-large, .hide-for-large-down, .hide-for-xlarge-only, .show-for-xlarge-up, .hide-for-xlarge, .hide-for-xlarge-down, .show-for-xxlarge-only, .show-for-xxlarge-up, .show-for-xxlarge, .show-for-xxlarge-down {\n    display: inherit !important; }\n  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .show-for-large-only, .hide-for-large-up, .show-for-large, .show-for-large-down, .show-for-xlarge-only, .hide-for-xlarge-up, .show-for-xlarge, .show-for-xlarge-down, .hide-for-xxlarge-only, .hide-for-xxlarge-up, .hide-for-xxlarge, .hide-for-xxlarge-down {\n    display: none !important; }\n  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .hidden-for-large-only, .visible-for-large-up, .hidden-for-large, .hidden-for-large-down, .hidden-for-xlarge-only, .visible-for-xlarge-up, .hidden-for-xlarge, .hidden-for-xlarge-down, .visible-for-xxlarge-only, .visible-for-xxlarge-up, .visible-for-xxlarge, .visible-for-xxlarge-down {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .visible-for-large-only, .hidden-for-large-up, .visible-for-large, .visible-for-large-down, .visible-for-xlarge-only, .hidden-for-xlarge-up, .visible-for-xlarge, .visible-for-xlarge-down, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up, .hidden-for-xxlarge, .hidden-for-xxlarge-down {\n    clip: rect(1px, 1px, 1px, 1px);\n    height: 1px;\n    overflow: hidden;\n    position: absolute !important;\n    width: 1px; }\n  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.hide-for-large-only, table.show-for-large-up, table.hide-for-large, table.hide-for-large-down, table.hide-for-xlarge-only, table.show-for-xlarge-up, table.hide-for-xlarge, table.hide-for-xlarge-down, table.show-for-xxlarge-only, table.show-for-xxlarge-up, table.show-for-xxlarge, table.show-for-xxlarge-down {\n    display: table !important; }\n  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.hide-for-large-only, thead.show-for-large-up, thead.hide-for-large, thead.hide-for-large-down, thead.hide-for-xlarge-only, thead.show-for-xlarge-up, thead.hide-for-xlarge, thead.hide-for-xlarge-down, thead.show-for-xxlarge-only, thead.show-for-xxlarge-up, thead.show-for-xxlarge, thead.show-for-xxlarge-down {\n    display: table-header-group !important; }\n  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.hide-for-large-only, tbody.show-for-large-up, tbody.hide-for-large, tbody.hide-for-large-down, tbody.hide-for-xlarge-only, tbody.show-for-xlarge-up, tbody.hide-for-xlarge, tbody.hide-for-xlarge-down, tbody.show-for-xxlarge-only, tbody.show-for-xxlarge-up, tbody.show-for-xxlarge, tbody.show-for-xxlarge-down {\n    display: table-row-group !important; }\n  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.hide-for-large-only, tr.show-for-large-up, tr.hide-for-large, tr.hide-for-large-down, tr.hide-for-xlarge-only, tr.show-for-xlarge-up, tr.hide-for-xlarge, tr.hide-for-xlarge-down, tr.show-for-xxlarge-only, tr.show-for-xxlarge-up, tr.show-for-xxlarge, tr.show-for-xxlarge-down {\n    display: table-row; }\n  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.show-for-large-up, td.show-for-large-up, th.hide-for-large, td.hide-for-large, th.hide-for-large-down, td.hide-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.show-for-xlarge-up, td.show-for-xlarge-up, th.hide-for-xlarge, td.hide-for-xlarge, th.hide-for-xlarge-down, td.hide-for-xlarge-down, th.show-for-xxlarge-only, td.show-for-xxlarge-only, th.show-for-xxlarge-up, td.show-for-xxlarge-up, th.show-for-xxlarge, td.show-for-xxlarge, th.show-for-xxlarge-down, td.show-for-xxlarge-down {\n    display: table-cell !important; } }\n\n/* Orientation targeting */\n.show-for-landscape,\n.hide-for-portrait {\n  display: inherit !important; }\n\n.hide-for-landscape,\n.show-for-portrait {\n  display: none !important; }\n\n/* Specific visibility for tables */\ntable.hide-for-landscape, table.show-for-portrait {\n  display: table !important; }\n\nthead.hide-for-landscape, thead.show-for-portrait {\n  display: table-header-group !important; }\n\ntbody.hide-for-landscape, tbody.show-for-portrait {\n  display: table-row-group !important; }\n\ntr.hide-for-landscape, tr.show-for-portrait {\n  display: table-row !important; }\n\ntd.hide-for-landscape, td.show-for-portrait,\nth.hide-for-landscape,\nth.show-for-portrait {\n  display: table-cell !important; }\n\n@media only screen and (orientation: landscape) {\n  .show-for-landscape,\n  .hide-for-portrait {\n    display: inherit !important; }\n  .hide-for-landscape,\n  .show-for-portrait {\n    display: none !important; }\n  /* Specific visibility for tables */\n  table.show-for-landscape, table.hide-for-portrait {\n    display: table !important; }\n  thead.show-for-landscape, thead.hide-for-portrait {\n    display: table-header-group !important; }\n  tbody.show-for-landscape, tbody.hide-for-portrait {\n    display: table-row-group !important; }\n  tr.show-for-landscape, tr.hide-for-portrait {\n    display: table-row !important; }\n  td.show-for-landscape, td.hide-for-portrait,\n  th.show-for-landscape,\n  th.hide-for-portrait {\n    display: table-cell !important; } }\n\n@media only screen and (orientation: portrait) {\n  .show-for-portrait,\n  .hide-for-landscape {\n    display: inherit !important; }\n  .hide-for-portrait,\n  .show-for-landscape {\n    display: none !important; }\n  /* Specific visibility for tables */\n  table.show-for-portrait, table.hide-for-landscape {\n    display: table !important; }\n  thead.show-for-portrait, thead.hide-for-landscape {\n    display: table-header-group !important; }\n  tbody.show-for-portrait, tbody.hide-for-landscape {\n    display: table-row-group !important; }\n  tr.show-for-portrait, tr.hide-for-landscape {\n    display: table-row !important; }\n  td.show-for-portrait, td.hide-for-landscape,\n  th.show-for-portrait,\n  th.hide-for-landscape {\n    display: table-cell !important; } }\n\n/* Touch-enabled device targeting */\n.show-for-touch {\n  display: none !important; }\n\n.hide-for-touch {\n  display: inherit !important; }\n\n.touch .show-for-touch {\n  display: inherit !important; }\n\n.touch .hide-for-touch {\n  display: none !important; }\n\n/* Specific visibility for tables */\ntable.hide-for-touch {\n  display: table !important; }\n\n.touch table.show-for-touch {\n  display: table !important; }\n\nthead.hide-for-touch {\n  display: table-header-group !important; }\n\n.touch thead.show-for-touch {\n  display: table-header-group !important; }\n\ntbody.hide-for-touch {\n  display: table-row-group !important; }\n\n.touch tbody.show-for-touch {\n  display: table-row-group !important; }\n\ntr.hide-for-touch {\n  display: table-row !important; }\n\n.touch tr.show-for-touch {\n  display: table-row !important; }\n\ntd.hide-for-touch {\n  display: table-cell !important; }\n\n.touch td.show-for-touch {\n  display: table-cell !important; }\n\nth.hide-for-touch {\n  display: table-cell !important; }\n\n.touch th.show-for-touch {\n  display: table-cell !important; }\n\n/* Screen reader-specific classes */\n.show-for-sr {\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  overflow: hidden;\n  position: absolute !important;\n  width: 1px; }\n\n.show-on-focus {\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  overflow: hidden;\n  position: absolute !important;\n  width: 1px; }\n  .show-on-focus:focus, .show-on-focus:active {\n    position: static !important;\n    height: auto;\n    width: auto;\n    overflow: visible;\n    clip: auto; }\n\n/* Print visibility */\n.print-only,\n.show-for-print {\n  display: none !important; }\n\n@media print {\n  .print-only,\n  .show-for-print {\n    display: block !important; }\n  .hide-on-print,\n  .hide-for-print {\n    display: none !important; }\n  table.show-for-print {\n    display: table !important; }\n  thead.show-for-print {\n    display: table-header-group !important; }\n  tbody.show-for-print {\n    display: table-row-group !important; }\n  tr.show-for-print {\n    display: table-row !important; }\n  td.show-for-print {\n    display: table-cell !important; }\n  th.show-for-print {\n    display: table-cell !important; } }\n\n/* =================================\nBASE / COLOURS\n================================= */\n.accent-color {\n  color: #441144; }\n\n.pink-color {\n  color: #DC0E54; }\n\n.purple-color {\n  color: #DC0E54; }\n\n.green-color {\n  color: #809b29; }\n\n.mustard-color {\n  color: #d7be01; }\n\n.light-color {\n  color: #FEFEFE; }\n\n/* =================================\n   BASE / TYPOGRAPHY\n   ================================= */\n.underline {\n  text-decoration: underline; }\n\nh2 {\n  font-weight: 100; }\n\n*, html, body {\n  font-size: 16px;\n  font-family: \"Open Sans\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #3c3c3c;\n  font-family: \"Lato\", sans-serif;\n  text-align: center; }\n\n.h1,\nh1 {\n  font-size: 1.95em;\n  font-weight: 400; }\n\n.h2,\nh2 {\n  font-size: 1.8em;\n  margin: 1.625em 0 1.25em 0;\n  font-weight: 700; }\n\n.h3,\nh3 {\n  font-size: 1.5em;\n  margin: 1.875em 0 1.25em 0;\n  font-weight: 400; }\n\n.h4,\nh4 {\n  font-size: 1.3em;\n  margin: 2.125em 0 1.25em 0;\n  font-weight: 400; }\n\n.h5,\nh5 {\n  font-size: 1.2em;\n  margin: 2.25em 0 1.25em 0;\n  font-weight: 400; }\n\n.body-text,\np {\n  margin: 30px 0 15px 0;\n  font-size: 1em;\n  line-height: 1.3em;\n  color: #000;\n  font-family: \"Open Sans\", sans-serif;\n  text-align: left;\n  font-weight: 300; }\n  .body-text:first-of-type,\n  p:first-of-type {\n    margin-top: 0; }\n\n.text-link {\n  color: #DC0E54; }\n\n.helptext {\n  font-style: italic;\n  font-size: .8rem;\n  font-color: #444; }\n\nstrong,\nb,\n.bold {\n  font-weight: 700; }\n\n.small {\n  font-weight: 300;\n  font-size: .8em; }\n\n/* =================================\n   BASE / SETTINGS\n   ================================= */\n.text-align-center {\n  text-align: center !important; }\n\n.text-align-right {\n  text-align: right !important; }\n\n.text-align-left {\n  text-align: left !important; }\n\n.margin-top-0 {\n  margin-top: 0 !important; }\n\n.margin-bottom-15 {\n  margin-bottom: 15px !important; }\n\n.margin-top-15 {\n  margin-top: 15px !important; }\n\n.margin-top-30 {\n  margin-top: 30px !important; }\n\n.margin-top-45 {\n  margin-top: 45px !important; }\n\n.margin-bottom-0 {\n  margin-bottom: 0 !important; }\n\n.margin-30 {\n  margin: 30px !important; }\n\n.margin-right-5 {\n  margin-right: 5px !important; }\n\n.margin-bottom-30 {\n  margin-bottom: 30px !important; }\n\n.padding-bottom-30 {\n  padding-bottom: 30px !important; }\n\n.padding-top-30 {\n  padding-top: 30px !important; }\n\n.visuallyhidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.clearfix {\n  clear: both; }\n\n.display-inline-block {\n  display: inline-block !important; }\n\n.display-block {\n  display: block !important; }\n\n.uppercase {\n  text-transform: uppercase !important; }\n\n.unstyled-list {\n  margin: 0;\n  padding: 0; }\n  .unstyled-list li {\n    list-style: none; }\n\n/* =================================\n   LAYOUT / FOOTER\n   ================================= */\n.footer {\n  background-color: #FEFEFE;\n  width: 100%;\n  color: #FEFEFE;\n  text-align: center;\n  padding: 2em 0;\n  text-transform: uppercase;\n  font-size: .7em;\n  color: #888888; }\n  .footer ul {\n    padding: 0;\n    margin: 0; }\n    .footer ul li {\n      display: inline-block; }\n  .footer__navigation {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap; }\n    @media only screen and (min-width: 720px) {\n      .footer__navigation {\n        flex-direction: row; } }\n  .footer__logo {\n    width: 5em;\n    display: block;\n    margin: 0 auto;\n    margin-bottom: 16px; }\n    @media only screen and (min-width: 720px) {\n      .footer__logo {\n        display: inline;\n        margin-bottom: 0; } }\n  .footer__link {\n    color: #888888;\n    margin-right: 15px; }\n  .footer__legal {\n    text-align: left; }\n    .footer__legal p {\n      display: inline;\n      color: #888888; }\n  .footer__social {\n    display: block;\n    margin: 0 auto;\n    margin-top: 16px; }\n    .footer__social a {\n      margin: 1px; }\n    .footer__social svg {\n      width: 15px;\n      height: 15px; }\n    @media only screen and (min-width: 720px) {\n      .footer__social {\n        display: inline;\n        margin-top: 0; } }\n  @media only screen and (min-width: 720px) {\n    .footer__info {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      align-items: center;\n      justify-content: flex-end; } }\n  .footer__legal, .footer__info {\n    flex: 1 0 auto; }\n\ninput[type=\"text\"],\ninput[type=\"email\"],\ninput[type=\"password\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"number\"],\ninput [type=\"submit\"],\nselect {\n  width: 100%;\n  margin: .5em 0;\n  padding: .5em .8em;\n  font-size: 1em;\n  font-weight: 100;\n  border-top: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #eee;\n  border-bottom: 1px solid #eee; }\n\ntextarea {\n  width: 100%;\n  margin: .5em 0;\n  padding: .5em;\n  font-size: 1em;\n  font-weight: 100;\n  text-align: left;\n  border-top: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  border-right: 1px solid #eee;\n  border-bottom: 1px solid #eee; }\n\nselect {\n  -webkit-appearance: none;\n  background: url(\"https://s3-eu-west-1.amazonaws.com/pimpmycause-images/custom-icons/chevron-down.svg\") no-repeat right center;\n  background-color: #FEFEFE;\n  background-position-x: 95%;\n  background-size: 16px;\n  border-radius: 0; }\n\nform p {\n  margin-top: 0; }\n\nform label {\n  font-weight: 400; }\n\n.has-error > select,\n.has-error > input,\n.has-error > textarea,\n.has-error > img {\n  border: 1px red solid !important; }\n\n.form-group {\n  margin-bottom: 1rem; }\n\n.form-error {\n  font-size: .9em;\n  margin: 0; }\n\n.text-danger {\n  color: red; }\n\n.errorlist {\n  padding: 0;\n  margin: 0;\n  display: block; }\n  .errorlist li {\n    color: red;\n    line-height: 1em;\n    line-height: .6em;\n    font-size: .7em;\n    list-style: none; }\n\n/* =================================\n   LAYOUT / HEADER\n   ================================= */\n.navigation {\n  background-color: #441144; }\n  .navigation__link,\n  .navigation p {\n    color: #FEFEFE;\n    display: inline-block;\n    margin: 0; }\n  .navigation__wrap {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    @media (min-width: 900px) {\n      .navigation__wrap {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: space-between; } }\n  .navigation__dropdown {\n    display: none;\n    position: absolute;\n    margin-left: -.5em;\n    z-index: 21;\n    padding: 0; }\n    .navigation__dropdown li {\n      display: block;\n      text-align: left;\n      padding: .5em;\n      background: #441144;\n      padding-left: 1em;\n      padding-right: 2em; }\n      .navigation__dropdown li:hover {\n        background: #4E1B4E; }\n  .navigation__username {\n    color: #FEFEFE;\n    font-weight: bold;\n    text-decoration: none;\n    text-align: right;\n    margin-bottom: 0;\n    padding-right: .2em; }\n  .navigation__list {\n    margin: 0;\n    padding: 0;\n    display: inline-block;\n    list-style: none;\n    display: flex;\n    flex-wrap: wrap;\n    margin-left: 1em; }\n  .navigation__item {\n    display: inline-block;\n    flex: 1 0 auto;\n    text-align: center;\n    padding: .5em; }\n  .navigation__menu--mobile .navigation__toggle {\n    display: inline-block;\n    color: #fff;\n    position: absolute;\n    margin-top: 0;\n    margin-left: 0;\n    width: 2em;\n    height: 2em;\n    flex: 2em 0;\n    background: transparent; }\n    .navigation__menu--mobile .navigation__toggle:before, .navigation__menu--mobile .navigation__toggle:after {\n      content: '';\n      position: absolute;\n      top: 0px;\n      width: 2em;\n      height: 1px;\n      background-color: currentColor; }\n    .navigation__menu--mobile .navigation__toggle:before {\n      -webkit-transform: rotate(-45deg);\n      transform: rotate(-45deg); }\n    .navigation__menu--mobile .navigation__toggle:after {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg); }\n  .navigation__menu--mobile .navigation__button {\n    margin-top: 3em;\n    position: absolute;\n    right: 3em; }\n  .navigation__menu--mobile .logo-container {\n    padding: 0;\n    margin-left: 1em; }\n  .navigation__menu--mobile .navigation__menu {\n    border-top: 1px solid #FEFEFE; }\n  .navigation__menu--mobile {\n    display: block;\n    min-height: 100vh;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    transition: top 0.2s;\n    bottom: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    z-index: 1000;\n    list-style: none;\n    margin: 0;\n    background-color: #441144;\n    border-rop: 1px solid #FEFEFE; }\n    .navigation__menu--mobile nav,\n    .navigation__menu--mobile li,\n    .navigation__menu--mobile ul {\n      display: block;\n      margin: 0;\n      padding: 0;\n      text-align: center;\n      position: relative; }\n      .navigation__menu--mobile nav:hover,\n      .navigation__menu--mobile li:hover,\n      .navigation__menu--mobile ul:hover {\n        background: #441144; }\n      .navigation__menu--mobile nav p,\n      .navigation__menu--mobile li p,\n      .navigation__menu--mobile ul p {\n        display: none; }\n    .navigation__menu--mobile .navigation__link {\n      padding: 1.5em; }\n    .navigation__menu--mobile li {\n      text-transform: uppercase; }\n  .navigation__menu {\n    display: none; }\n    @media (min-width: 900px) {\n      .navigation__menu {\n        flex: auto;\n        display: inline-block;\n        max-width: 600px;\n        text-align: right; } }\n  .navigation__button {\n    flex: 3em 1;\n    position: relative;\n    border: none;\n    border-radius: 0;\n    background: 0 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin: 0;\n    padding-left: 0;\n    max-width: 2.1em;\n    height: 3em;\n    padding: 0; }\n  .navigation__toggle {\n    color: #fff;\n    position: absolute;\n    margin-left: 2px;\n    margin-top: 0px;\n    width: 2em;\n    height: 1px;\n    background-color: currentColor; }\n    .navigation__toggle:before {\n      content: '';\n      position: absolute;\n      top: -10px;\n      left: 0;\n      width: 2em;\n      height: 1px;\n      background-color: currentColor; }\n    .navigation__toggle:after {\n      content: '';\n      position: absolute;\n      top: 10px;\n      left: 0;\n      width: 2em;\n      height: 1px;\n      background-color: currentColor; }\n    @media (min-width: 900px) {\n      .navigation__toggle {\n        display: none; } }\n  .navigation__menu--has-dropdown:hover {\n    background: #4E1B4E; }\n    .navigation__menu--has-dropdown:hover .navigation__dropdown {\n      display: block; }\n  .navigation__login {\n    display: none; }\n    .navigation__login-social {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end; }\n    .navigation__login .button {\n      margin: .5em 0; }\n    @media (min-width: 900px) {\n      .navigation__login {\n        display: inline-block;\n        text-align: right;\n        display: flex;\n        flex-direction: column; } }\n  .navigation__register, .navigation__logout {\n    text-align: right;\n    font-size: .8em;\n    color: #FEFEFE;\n    border-radius: 50%;\n    display: inline; }\n\n.logo-container {\n  flex: 1 0 auto;\n  display: inline-block;\n  max-width: 7em; }\n  .logo-container img {\n    width: 100%;\n    padding: 2em 0; }\n\n/* =================================\n   UTILS / MIXINS\n   ================================= */\n/* =================================\n   COMPONENTS / BUTTONS\n   ================================= */\n.button,\nbutton {\n  text-align: center;\n  display: inline;\n  border-radius: 2em;\n  width: auto;\n  margin: .5em 0;\n  padding: .5em 2.3em;\n  font-size: 1em;\n  font-weight: 100;\n  color: #fff; }\n  .button a,\n  button a {\n    color: #fff; }\n\n.button--primary {\n  background-color: #DC0E54;\n  border: 1px solid #DC0E54; }\n\n.button--secondary {\n  background-color: #441144;\n  border: 1px solid #441144; }\n\n.button--unstyled {\n  background-color: transparent;\n  border: 0;\n  padding: 0; }\n\n.button--transparent {\n  background-color: transparent;\n  border: 0;\n  padding: 0;\n  border: 1px solid #fff;\n  padding: .3em .8em; }\n\n.button--danger {\n  background-color: #FF0033;\n  border: 1px solid #FF0033; }\n\n/* =================================\n   COMPONENTS / SLIDER\n   ================================= */\n.slider {\n  position: relative;\n  min-height: 25em;\n  background: #F1F1F1; }\n  .slider__slide {\n    width: 100%;\n    background: #F1F1F1;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    min-height: 20em;\n    position: absolute;\n    animation: slide-fade 15s infinite;\n    opacity: 1;\n    top: 0;\n    left: 0;\n    overflow: hidden; }\n  .slider__img {\n    display: inline-block;\n    height: 25em;\n    flex: 1 1 8em;\n    background-size: cover;\n    background-position: center center; }\n  .slider__link {\n    color: #DC0E54;\n    font-weight: bold; }\n    .slider__link::after {\n      content: '\\2192'; }\n  .slider__text {\n    padding: 1em;\n    display: inline-block;\n    flex: 2; }\n  .slider__paragraph {\n    text-align: left;\n    color: #3c3c3c; }\n  .slider__subtitle {\n    color: #DC0E54; }\n  .slider__title {\n    text-align: left;\n    color: #3c3c3c; }\n\n@keyframes slide-fade {\n  0% {\n    opacity: 1; }\n  26.6666666667% {\n    opacity: 1; }\n  33.3333333333% {\n    opacity: 0; }\n  93.3333333333% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.slider__slide:nth-child(1) {\n  animation-delay: 10s; }\n\n.slider__slide:nth-child(2) {\n  animation-delay: 5s; }\n\n.slider__slide:nth-child(3) {\n  animation-delay: 0s; }\n\n/* =================================\n   COMPONENTS / CUBES\n   ================================= */\n.cube-box {\n  padding: 0; }\n\n.cube-row {\n  width: 100%; }\n\n.cube__title {\n  color: #441144;\n  font-weight: 600;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.cube-wrapper {\n  width: 50%;\n  height: 0;\n  padding-top: 50%;\n  position: relative;\n  float: left; }\n\n.cube {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all 1500ms ease;\n  transform: perspective(500px) rotateY(-90deg) translateX(-50%) rotateY(90deg);\n  transform-style: preserve-3d; }\n\n.img-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden; }\n  .img-wrapper img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%; }\n\n.cube-icon-txt {\n  background-color: #d7be01; }\n  .cube-icon-txt img {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 5%;\n    height: 60%; }\n\n.default-state,\n.active-state {\n  height: 100%;\n  width: 100%; }\n\n/* Set up cube from two div's layed on top of each other */\n.flip-to-top .active-state {\n  transform: rotateX(90deg) rotateY(-90deg) translateX(150%) rotateY(90deg); }\n\n.default-state {\n  transform: rotateY(-90deg) translateX(50%) rotateY(90deg); }\n\n/* Rotate the cube - both panels together */\n.cube.flip-to-top.active {\n  transform: perspective(500px) rotateX(-90deg) translateY(50%);\n  z-index: 10; }\n\n.default-state {\n  background: #809b29; }\n\n.active-state {\n  background: #d7be01; }\n\n/* =================================\n   COMPONENTS / TWITTER\n   ================================= */\n.timeline-Tweet-text {\n  font-size: 1.125rem !important; }\n\n/* =================================\n   COMPONENTS / SOCIAL TILE\n   ================================= */\n.social-tile {\n  flex: 1;\n  margin: 1em;\n  background-color: #FEFEFE;\n  display: flex;\n  flex-direction: column;\n  min-height: 808px; }\n  .social-tile__wrapper {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    min-width: 10em; }\n    @media only screen and (min-width: 550px) {\n      .social-tile__wrapper {\n        flex-direction: row; } }\n  .social-tile__body {\n    flex: auto;\n    padding: 1.125rem; }\n    .social-tile__body > p {\n      color: #888888; }\n  .social-tile__title {\n    max-height: 4.625rem;\n    line-height: 4.625rem;\n    background-color: #DC0E54;\n    text-align: center;\n    margin: 0;\n    flex: 1;\n    align-items: flex-end;\n    color: #FEFEFE;\n    font-weight: bold; }\n\n.file-input {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.inputfile + label {\n  display: none; }\n\n.inputfile + label {\n  display: inline-block; }\n\n.inputfile + label {\n  cursor: pointer; }\n\n.file-input {\n  display: block !important; }\n\n.s3direct {\n  display: none;\n  margin-top: 10px;\n  float: none !important; }\n\n.js .s3direct {\n  display: block;\n  text-align: center; }\n\n.file-remove {\n  display: none !important; }\n\n.file-link {\n  visibility: hidden;\n  height: 0;\n  padding: 0;\n  margin: 0; }\n\n.marketer__wrapper {\n  position: relative;\n  position: relative;\n  background: #F2F2F2; }\n\n.marketer__edit {\n  margin-left: 15px;\n  font-size: .7em;\n  color: #809b29; }\n\n.marketer__title {\n  text-align: center;\n  background: #809b29;\n  margin: 0;\n  color: #FEFEFE;\n  padding: 10px 0; }\n\n.marketer__text {\n  color: #FEFEFE;\n  text-align: left;\n  margin-top: 0; }\n\n.marketer__info {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 5px;\n  display: none;\n  padding: 1em;\n  color: #FEFEFE; }\n\n.marketer__link {\n  background-color: #FEFEFE;\n  padding: 6px 8px;\n  color: #3c3c3c;\n  display: inline; }\n  .marketer__link::after {\n    content: '\\2192';\n    margin-left: 5px; }\n\n.marketer__image {\n  padding-top: 4em;\n  height: 240px;\n  width: 240px;\n  background-color: #F2F2F2;\n  background-size: cover;\n  background-position: 50% 50%;\n  border-radius: 50%;\n  margin: auto; }\n\n.marketer__image-wrapper {\n  padding: 1em; }\n\n.marketer__icon {\n  font-size: 10em;\n  border: 1px solid #809b29;\n  border-radius: 50%;\n  text-align: center;\n  color: #809b29;\n  width: 1.5em;\n  height: 1.5em;\n  margin: 0 auto; }\n\n.marketer__wrapper:hover .marketer__icon {\n  color: #FEFEFE;\n  background: #809b29; }\n\n.marketer__wrapper:hover .marketer__info {\n  background: #809b29;\n  display: block; }\n\n.cause {\n  border-bottom: 1px solid #F2F2F2;\n  padding: 1em 0; }\n  .cause__wrapper {\n    position: relative;\n    display: block; }\n  .cause__title {\n    text-align: left;\n    margin: 0;\n    color: #441144;\n    padding: 10px 0; }\n  .cause__text {\n    color: #441144;\n    text-align: left;\n    margin-top: 0; }\n  .cause__info {\n    background: #FEFEFE; }\n  .cause__image {\n    background-color: #FEFEFE;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    margin: auto;\n    width: 100%;\n    max-height: 100%; }\n  .cause__image-wrapper {\n    display: flex;\n    align-content: center; }\n  .cause__icon {\n    font-size: 10em;\n    border: 1px solid #809b29;\n    border-radius: 50%;\n    text-align: center;\n    color: #809b29;\n    width: 1.5em;\n    height: 1.5em;\n    margin: 0 auto; }\n\n.adverts {\n  background: #E1E0E7; }\n\n.advert__skills ul {\n  padding: 0; }\n\n.advert__skills li {\n  list-style: none; }\n\n.advert__deadline select {\n  width: 25%;\n  margin-right: 5px; }\n\n.filters {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: flex-end; }\n  .filters__item {\n    flex: 1 0 25%; }\n\n.social {\n  display: inline;\n  padding: 0;\n  margin: 0; }\n  .social__item {\n    list-style: none;\n    margin-right: 5px;\n    display: inline-block; }\n  .social__link--large {\n    font-size: 30px; }\n  .social__icon {\n    color: #FEFEFE; }\n\n.fa-twitter-square {\n  color: #4099FF; }\n\n.fa-linkedin-square {\n  color: #0077b5; }\n\n.fa-facebook-square {\n  color: #3b5998; }\n\n.pnl, .pnl-causes, .pnl-marketing, .pnl-hero, .pnl-signup, .pnl-contact-us, .pnl-summary {\n  position: relative;\n  padding-bottom: 6em; }\n  .pnl__title {\n    padding: 3rem 1rem 1rem;\n    font-weight: 100;\n    font-size: 3em;\n    text-align: center;\n    color: #FEFEFE;\n    line-height: 1.3em;\n    margin: 0; }\n    @media only screen and (min-width: 550px) {\n      .pnl__title {\n        padding: 4rem 2rem 2rem; } }\n\n.pnl--light-txt > h1, .pnl-causes > h1, .pnl-marketing > h1, .pnl-hero > h1, .pnl-signup > h1, .pnl-contact-us > h1,\n.pnl--light-txt p, .pnl-causes p, .pnl-marketing p, .pnl-hero p, .pnl-signup p, .pnl-contact-us p {\n  color: #FEFEFE; }\n\n.pnl--dark-txt > h1, .pnl-contact-us .pnl__title > h1, .pnl-summary .pnl__title > h1, [class^=\"page\"] > h1, .page-team > h1 {\n  color: #441144; }\n\n.pnl-hero {\n  background-color: #DC0E54;\n  padding-bottom: 0; }\n  .pnl-hero__container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center; }\n    @media (min-width: 640px) {\n      .pnl-hero__container {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center; } }\n  @media (min-width: 780px) {\n    .pnl-hero__cubes, .pnl-hero__text {\n      flex: 1;\n      margin-top: 0; } }\n  .pnl-hero__cubes {\n    padding: 0; }\n    @media (max-width: 640px) {\n      .pnl-hero__cubes {\n        margin-top: 2em; } }\n\n.pnl-marketing {\n  background-color: #441144;\n  z-index: 20; }\n  .pnl-marketing p {\n    font-size: 1.125rem;\n    text-align: center; }\n  .pnl-marketing:before {\n    width: 0;\n    height: 0;\n    border-left: 2.375rem solid transparent;\n    border-right: 2.375rem solid transparent;\n    border-bottom: 2.375rem solid #441144;\n    top: -2.3125rem;\n    left: 50%;\n    transform: translateX(-50%);\n    position: absolute;\n    z-index: 20;\n    content: \" \"; }\n\n.pnl-causes {\n  background-color: #d7be01; }\n  .pnl-causes:before {\n    width: 0;\n    height: 0;\n    border-left: 2.375rem solid transparent;\n    border-right: 2.375rem solid transparent;\n    border-bottom: 2.375rem solid #d7be01;\n    top: -2.3125rem;\n    left: 50%;\n    transform: translateX(-50%);\n    position: absolute;\n    z-index: 20;\n    content: \" \"; }\n\n.pnl-marketers {\n  background-color: #809b29; }\n  .pnl-marketers:before {\n    width: 0;\n    height: 0;\n    border-left: 2.375rem solid transparent;\n    border-right: 2.375rem solid transparent;\n    border-bottom: 2.375rem solid #809b29;\n    top: -2.3125rem;\n    left: 50%;\n    transform: translateX(-50%);\n    position: absolute;\n    z-index: 20;\n    content: \" \"; }\n\n.pnl-contact-us {\n  background-color: #E1E0E7; }\n  .pnl-contact-us:before {\n    width: 0;\n    height: 0;\n    border-left: 2.375rem solid transparent;\n    border-right: 2.375rem solid transparent;\n    border-bottom: 2.375rem solid #E1E0E7;\n    top: -2.3125rem;\n    left: 50%;\n    transform: translateX(-50%);\n    position: absolute;\n    z-index: 20;\n    content: \" \"; }\n\n.pnl-signup {\n  background-color: #DC0E54; }\n  .pnl-signup:before {\n    width: 0;\n    height: 0;\n    border-left: 2.375rem solid transparent;\n    border-right: 2.375rem solid transparent;\n    border-bottom: 2.375rem solid #DC0E54;\n    top: -2.3125rem;\n    left: 50%;\n    transform: translateX(-50%);\n    position: absolute;\n    z-index: 20;\n    content: \" \"; }\n  .pnl-signup .button {\n    background: #441144; }\n\n.btn-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 3.25rem;\n  margin: .5em 0;\n  padding: 0 .5em; }\n\n.pnl-talkabout {\n  background-color: #441144; }\n  .pnl-talkabout:before {\n    width: 0;\n    height: 0;\n    border-left: 2.375rem solid transparent;\n    border-right: 2.375rem solid transparent;\n    border-bottom: 2.375rem solid #441144;\n    top: -2.3125rem;\n    left: 50%;\n    transform: translateX(-50%);\n    position: absolute;\n    z-index: 20;\n    content: \" \"; }\n\n.pnl-summary {\n  background-color: #FEFEFE; }\n  .pnl-summary:before {\n    width: 0;\n    height: 0;\n    border-left: 2.375rem solid transparent;\n    border-right: 2.375rem solid transparent;\n    border-bottom: 2.375rem solid #FEFEFE;\n    top: -2.3125rem;\n    left: 50%;\n    transform: translateX(-50%);\n    position: absolute;\n    z-index: 20;\n    content: \" \"; }\n\n.read-more {\n  font-size: 1.125rem;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: normal;\n  color: #DC0E54; }\n\n.summary-boxes li {\n  position: relative;\n  padding: 0 0.625rem;\n  overflow: hidden;\n  margin-bottom: 0.625rem; }\n  .summary-boxes li .summary-title, .summary-boxes li .summary-info {\n    position: absolute;\n    width: calc(100% - 1.25rem);\n    left: 0.625rem;\n    text-align: center;\n    background-color: #f2f4f5;\n    vertical-align: middle;\n    text-size: 1.25rem; }\n  .summary-boxes li .summary-title {\n    bottom: -0.0625rem;\n    height: 3.125rem;\n    line-height: 3.125rem;\n    z-index: 20;\n    transition: background-color .5s, color .5s; }\n    .summary-boxes li .summary-title:before {\n      width: 0;\n      height: 0;\n      border-left: 0.75rem solid transparent;\n      border-right: 0.75rem solid transparent;\n      border-bottom: 0.75rem solid #f2f4f5;\n      top: -0.6875rem;\n      left: 50%;\n      transform: translateX(-50%);\n      position: absolute;\n      z-index: 20;\n      content: \" \";\n      transition: border-bottom-color .5s; }\n    .summary-boxes li .summary-title:hover + .summary-info, .summary-boxes li .summary-title.click-event + .summary-info {\n      transform: translateY(0); }\n  .summary-boxes li .summary-info {\n    bottom: 0;\n    padding: 0.625rem;\n    padding-bottom: 3.75rem;\n    opacity: 0.9;\n    z-index: 10;\n    transform: translateY(100%);\n    transition: transform .5s; }\n    .summary-boxes li .summary-info:hover, .summary-boxes li .summary-info.click-event {\n      transform: translateY(0); }\n    .summary-boxes li .summary-info .read-more {\n      font-size: 1.125rem;\n      font-family: \"Open Sans\", sans-serif;\n      font-weight: normal;\n      color: #DC0E54; }\n\n.summary-title:hover,\n.summary-title.click-event {\n  color: #f2f4f5; }\n  .summary-pink .summary-title:hover, .summary-pink\n  .summary-title.click-event {\n    background-color: #DC0E54; }\n    .summary-pink .summary-title:hover:before, .summary-pink\n    .summary-title.click-event:before {\n      border-bottom-color: #DC0E54; }\n  .summary-purple .summary-title:hover, .summary-purple\n  .summary-title.click-event {\n    background-color: #441144; }\n    .summary-purple .summary-title:hover:before, .summary-purple\n    .summary-title.click-event:before {\n      border-bottom-color: #441144; }\n  .summary-green .summary-title:hover, .summary-green\n  .summary-title.click-event {\n    background-color: #809b29; }\n    .summary-green .summary-title:hover:before, .summary-green\n    .summary-title.click-event:before {\n      border-bottom-color: #809b29; }\n  .summary-mustard .summary-title:hover, .summary-mustard\n  .summary-title.click-event {\n    background-color: #d7be01; }\n    .summary-mustard .summary-title:hover:before, .summary-mustard\n    .summary-title.click-event:before {\n      border-bottom-color: #d7be01; }\n\n.type-option {\n  margin-bottom: 1.75em; }\n\n/* =================================\n   PAGES / CONTACT\n   ================================= */\n[class^=\"page\"] {\n  background-color: #FEFEFE;\n  padding-bottom: 6em; }\n  [class^=\"page\"] .pnl__title {\n    color: #441144; }\n\n.icon--super {\n  font-size: 12em; }\n\n.pnl--primary {\n  background: #DC0E54; }\n\n.pnl--secondary {\n  background: #441144; }\n\n.pnl--primary *, .pnl--secondary * {\n  color: #FEFEFE; }\n\n/* =================================\n   PAGES / MEET THE TEAM\n   ================================= */\n.page-team {\n  background-color: #DC0E54;\n  padding-bottom: 6em; }\n  .page-team .pnl__title {\n    color: #441144; }\n\n.team {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 7500px;\n  width: 100%; }\n  .team__individual-wrapper {\n    margin-top: 75px;\n    margin: 70px 0 0; }\n  .team__individual {\n    box-shadow: 0 1px 1px rgba(66, 57, 57, 0.26);\n    background-color: #F2F2F2; }\n  .team__individual-role {\n    font-style: italic; }\n  .team__individual-image {\n    display: block;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    width: 15em;\n    height: 15em;\n    margin: 0 auto; }\n\n/* =================================\n   PAGES / Profile\n   ================================= */\n.profile__img {\n  max-width: 100%;\n  max-height: 100%; }\n\n.profile__img-wrapper {\n  max-width: 300px;\n  max-height: 300px; }\n\n.profile__social {\n  list-style: none;\n  display: inline;\n  margin: 0;\n  padding: 0; }\n  .profile__social-item {\n    display: inline-block;\n    margin: 0 5px 0; }\n  .profile__social-icon {\n    font-size: 25px;\n    color: #809b29; }\n\n.partners__title, .partners__description {\n  text-align: center; }\n  @media (min-width: 640px) {\n    .partners__title, .partners__description {\n      text-align: left; } }\n\n.partners__list {\n  margin: 0;\n  padding: 4em 2em;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center; }\n\n.partners__item {\n  list-style: none;\n  flex: 1 0 auto;\n  max-width: 50%; }\n  @media (min-width: 640px) {\n    .partners__item {\n      max-width: 25%; } }\n\n.partners__logo {\n  list-style: none;\n  max-height: 100%;\n  padding: 1.5em; }\n\n.partners__title--right, .partners__description--right {\n  text-align: center; }\n  @media (min-width: 640px) {\n    .partners__title--right, .partners__description--right {\n      text-align: right; } }\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 100; }\n\na {\n  text-decoration: none;\n  font-weight: 100; }\n\n.content-wrap {\n  max-width: 60em;\n  margin: 0 auto; }\n\n.row {\n  max-width: 100%; }\n\n.profile-img {\n  width: 100%;\n  height: auto; }\n\n.file-link {\n  display: none;\n  visibility: hidden;\n  height: 0;\n  padding: 0;\n  margin: 0; }\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);
//# sourceMappingURL=main-be50361acb46dcec362b.js.map