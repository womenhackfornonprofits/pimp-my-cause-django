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


const $ = __webpack_require__(0);
const rotatingCubes = __webpack_require__(3);
const hamburgerMenu = __webpack_require__(4);
const profileImagePreview = __webpack_require__(5);
const masonry = __webpack_require__(6);

const $html = $('html')[0];

$html.classList.add('js');

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* ROTATING HOMEPAGE CUBES */


const $ = __webpack_require__(0);
const cubesList = $('.cube');

setInterval(function () {
    cubesList.forEach(cube => {
        cube.classList.toggle("active");
    });
}, 2500);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* Hamburger Menu */

const $ = __webpack_require__(0);
const $navigation = $('.js-header-nav')[0];

$navigation.addEventListener('click', function (event) {
    const $srcElement = event.target;

    $srcElement.classList.contains('js-nav-toggle') ? $navigation.classList.toggle('navigation__menu--mobile') : $navigation.classList.remove('navigation__menu--mobile');
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* Profile Image preview */
const $ = __webpack_require__(0);
const $imageEl = $('.profile-img')[0];
const $s3DirectWidget = $('.s3direct')[0];

if ($s3DirectWidget) {
	$s3DirectWidget.addEventListener('change', event => {
		setTimeout(() => {
			const $uploadedImageLinkEl = $('.file-link')[0];
			$imageEl.src = $uploadedImageLinkEl.href;
		}, 500);
	});
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (11:8)\n\n\u001b[0m \u001b[90m  9 | \u001b[39m    onEnter\u001b[33m:\u001b[39m callback\u001b[33m,\u001b[39m\n \u001b[90m 10 | \u001b[39m    onLeave\u001b[33m:\u001b[39m () \u001b[33m=>\u001b[39m {}\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 11 | \u001b[39m        renderSingleColumn()\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 12 | \u001b[39m        console\u001b[33m.\u001b[39mlog(\u001b[32m'enter mobile'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 13 | \u001b[39m    }\u001b[33m,\u001b[39m\n \u001b[90m 14 | \u001b[39m    onEnter\u001b[33m:\u001b[39m \u001b[36mfunction\u001b[39m(){\u001b[0m\n");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main-124d60851807dd4c3e79.js.map