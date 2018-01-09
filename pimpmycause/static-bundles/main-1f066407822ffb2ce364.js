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
module.exports = __webpack_require__(9);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(8);
__webpack_require__(13);

const $ = __webpack_require__(0);

const $html = $('html')[0];

$html.classList.add('js');

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* ROTATING HOMEPAGE CUBES */
const $ = __webpack_require__(0);

const cubesList = $('.cube');

setInterval(() => {
    cubesList.forEach(cube => {
        cube.classList.toggle('active');
    });
}, 2500);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* Hamburger Menu */
const $ = __webpack_require__(0);

const $navigation = $('.js-header-nav')[0];

$navigation.addEventListener('click', event => {
    const $srcElement = event.target;

    if ($srcElement.classList.contains('js-nav-toggle')) {
        $navigation.classList.add('navigation__menu--mobile');
    } else {
        $navigation.classList.remove('navigation__menu--mobile');
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* Profile Image preview */
const $ = __webpack_require__(0);

const $imageEl = $('.profile-img')[0];
const $s3DirectWidget = $('.js-image-update')[0];

function loadPreviewImage() {
    setTimeout(() => {
        const $uploadedImageLinkEl = $('.file-link')[0];
        $imageEl.src = $uploadedImageLinkEl.href;
    }, 4000);
}

if ($s3DirectWidget) {
    $s3DirectWidget.onchange = loadPreviewImage;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const $ = __webpack_require__(0);
const ssm = __webpack_require__(7);

const $teamWrapper = $('.js-team-wrapper')[0];

function expandTeamMemberData(teamMemberData) {
    if (!teamMemberData) {
        return {};
    }

    const expandedTeamMemberData = {
        name: teamMemberData[0],
        surname: teamMemberData[1],
        bio: teamMemberData[2],
        imageUrl: teamMemberData[3].length ? teamMemberData[3] : 'https://s3-eu-west-1.amazonaws.com/pimpmycause-images/uploads/imgs/marketer-default-image.png',
        position: teamMemberData[4],
        weight: teamMemberData[5]
    };

    return expandedTeamMemberData;
}

function compareWeight(itemA, itemB) {
    return parseInt(itemA.weight, 10) - parseInt(itemB.weight, 10);
}

function prepareTeamData() {
    if (!($teamWrapper && team_member_list_json && team_member_list_json.length && team_member_list_json.length > 0)) {
        return team_member_list_json;
    }
    const expandedTeamMemberList = team_member_list_json.map(teamMember => {
        return expandTeamMemberData(teamMember);
    });
    const sortedTeamMemberList = expandedTeamMemberList.sort(compareWeight);

    return sortedTeamMemberList;
}

function isItemIndexEven(index) {
    return index % 2 === 0;
}

function renderTeamMember(element, teamMemberData) {
    if (!teamMemberData) {
        return;
    }
    const teamMemberElement = document.createElement('div');
    const teamMemberTemplate = `
        <div class="team__individual-wrapper">
            <img alt="${teamMemberData.name} ${teamMemberData.surname} Image" class="team__individual-image" src="${teamMemberData.imageUrl}"/>

            <div class="team__individual">
                <h2 class="team__individual-name">${teamMemberData.name} ${teamMemberData.surname}</h2>
                <h3 class="team__individual-role">${teamMemberData.position}</h3>
                <div class="team__individual-bio">
                    ${teamMemberData.bio}
                </div>
            </div>
        </div>`;

    teamMemberElement.innerHTML = teamMemberTemplate;
    element.appendChild(teamMemberElement);
}

function removeAllChildNodes(item) {
    /* eslint-disable no-param-reassign */
    item.innerHTML = '';
}

function renderSingleColumn() {
    const sortedTeamMemberList = prepareTeamData();

    removeAllChildNodes($teamWrapper);
    sortedTeamMemberList.forEach(teamMember => renderTeamMember($teamWrapper, teamMember));
}

function createNewColumnElement(parentElement) {
    const element = document.createElement('div');
    element.classList.add('medium-6');
    element.classList.add('columns');
    parentElement.appendChild(element);

    return element;
}

function renderTwoColumn() {
    const sortedTeamMemberList = prepareTeamData();

    removeAllChildNodes($teamWrapper);

    const $teamWrapperColumnOne = createNewColumnElement($teamWrapper);
    const $teamWrapperColumnTwo = createNewColumnElement($teamWrapper);

    const evenTeamMemberList = sortedTeamMemberList.reduce((acc, item, index) => {
        if (isItemIndexEven(index)) {
            acc.push(item);
        }
        return acc;
    }, []);

    const oddTeamMemberList = sortedTeamMemberList.reduce((acc, item, index) => {
        if (!isItemIndexEven(index)) {
            acc.push(item);
        }
        return acc;
    }, []);

    evenTeamMemberList.forEach(teamMember => renderTeamMember($teamWrapperColumnOne, teamMember));
    oddTeamMemberList.forEach(teamMember => renderTeamMember($teamWrapperColumnTwo, teamMember));
}

ssm.addState({
    id: 'minWidth',
    query: '(min-width: 641px)',
    onLeave: () => {
        if ($teamWrapper && team_member_list_json && team_member_list_json.length && team_member_list_json.length > 0) {
            renderSingleColumn();
        }
    },
    onEnter: () => {
        if ($teamWrapper && team_member_list_json && team_member_list_json.length && team_member_list_json.length > 0) {
            renderTwoColumn();
        }
    }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global window document clearTimeout setTimeout */

(function (window, document, undefined, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return factory(window, document, undefined);
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  else if (typeof exports === 'object') {
    module.exports = factory;
  }
  else {
    window.ssm = factory(window, document, undefined);
  }
})(window, document, undefined, function (window, document, undefined) {
    'use strict';

    var resizeTimeout = 25;
    var stateChangeMethod = function(){};

    function Error(message) {
       this.message = message;
       this.name = "Error";
    }

    //
    // State Constructor
    // When the user uses addState state manager will create instances of a State
    //

    function State(options) {
        this.id = options.id || makeID();
        this.query = options.query || 'all';
        // These are exposed as part of the state, not options so delete before
        // we merge these into default options.
        delete options.id;
        delete options.query;

        var defaultOptions = {
            onEnter: [],
            onLeave: [],
            onResize: [],
            onFirstRun: []
        };

        //Merge options with defaults to make the state
        this.options = mergeOptions(defaultOptions, options);

        //Migrate methods into an array, this is to enable future functionality of adding extra methods to an existing state
        if(typeof this.options.onEnter === "function"){
            this.options.onEnter = [this.options.onEnter];
        }

        if(typeof this.options.onLeave === "function"){
            this.options.onLeave = [this.options.onLeave];
        }

        if(typeof this.options.onResize === "function"){
            this.options.onResize = [this.options.onResize];
        }

        if(typeof this.options.onFirstRun === "function"){
            this.options.onFirstRun = [this.options.onFirstRun];
        }

        //Test the one time tests first, if the test is invalid we wont create the config option
        if (this.testConfigOptions('once') === false) {
            this.valid = false;
            return false;
        }

        this.valid = true;
        this.active = false;
        this.init();
    }

    State.prototype = {
        init: function() {
            this.test = window.matchMedia(this.query);

            if (this.test.matches && this.testConfigOptions('match')) {
                this.enterState();
            }

            this.listener = function(test){
                var changed = false;

                if (test.matches) {
                    if (this.testConfigOptions('match')) {
                        this.enterState();
                        changed = true;
                    }
                }
                else {
                    this.leaveState();
                    changed = true;
                }

                if (changed) {
                    stateChangeMethod();
                }
            }.bind(this);
          
            this.test.addListener(this.listener);
        },
        
        //Handle entering a state
        enterState: function() {
            fireAllMethodsInArray(this.options.onFirstRun);
            fireAllMethodsInArray(this.options.onEnter);
            this.options.onFirstRun = [];
            this.active = true;
        },

        //Handle leaving a state
        leaveState: function() {
            fireAllMethodsInArray(this.options.onLeave);
            this.active = false;
        },

        //Handle the user resizing the browser
        resizeState: function() {
            if (this.testConfigOptions('resize')) {
                fireAllMethodsInArray(this.options.onResize);
            }
        },

        //When the StateManager removes a state we want to remove the event listener
        destroy: function() {
            this.test.removeListener(this.listener);
        },

        attachCallback: function(type, callback, runIfActive) {
            switch(type) {
                case 'enter':
                    this.options.onEnter.push(callback);
                    break;
                case 'leave':
                    this.options.onLeave.push(callback);
                    break;
                case 'resize':
                    this.options.onResize.push(callback);
                    break;
            }

            if (type === 'enter' && runIfActive && this.active) {
                callback();
            } 
        },

        testConfigOptions: function(when) {
            var totalConfigOptions = this.configOptions.length;

            for (var j = 0; j < totalConfigOptions; j++) {
                var configOption = this.configOptions[j];

                if (typeof this.options[configOption.name] !== "undefined") {
                    if (configOption.when === when && configOption.test.bind(this)() === false) {
                        return false;
                    }
                }
            }

            return true;
        },

        //An array of avaliable config options, this can be pushed to by the State Manager
        configOptions: []
    };  

    //State Manager Constructor

    function StateManager(options) {
        this.states = [];
        this.resizeTimer = null;
        this.configOptions = [];

        window.addEventListener("resize", debounce(this.resizeBrowser.bind(this), resizeTimeout), true);    
    }

    StateManager.prototype = {
        addState: function(options) {
            var newState = new State(options);
            
            if (newState.valid) {
                this.states.push(newState);
            }

            return newState;
        },

        addStates: function (statesArray) {
            for (var i = statesArray.length - 1; i >= 0; i--) {
                this.addState(statesArray[i]);
            }

            return this;
        },

        getState: function(id) {
            for (var i = this.states.length - 1; i >= 0; i--) {
                var state = this.states[i];

                if(state.id === id){
                    return state;
                }
            }
        },

        isActive: function(id) {
            var selectedState = this.getState(id) || {};

            return selectedState.active || false;
        },

        getStates: function(idArr) {
            var idCount = null, returnArr = [];

            if (typeof(idArr) === "undefined") {
                return this.states;
            }
            else {
                idCount = idArr.length;
                
                for (var i = 0; i < idCount; i++) {
                    returnArr.push(this.getState(idArr[i]));
                }

                return returnArr;
            }
        },

        removeState: function (id) {
            for (var i = this.states.length - 1; i >= 0; i--) {
                var state = this.states[i];

                if (state.id === id) {
                    state.destroy();
                    this.states.splice(i, 1);
                }
            }

            return this;
        },

        removeStates: function (idArray) {
            for (var i = idArray.length - 1; i >= 0; i--) {
                this.removeState(idArray[i]);
            }

            return this;
        },

        removeAllStates: function() {
            for (var i = this.states.length - 1; i >= 0; i--) {
                var state = this.states[i];
                state.destroy();
            }

            this.states = [];
        },


        addConfigOption: function(options){
            var defaultOptions = {
                name: '', // name, this is used to apply to a state
                test: null, //function which will perform the test
                when: 'resize' // resize or match (match will mean that resize will never fire either), or once (which will test once, then delete state if test doesnt pass)
            };

            //Merge options with defaults
            options = mergeOptions(defaultOptions, options);

            if(options.name !== '' && options.test !== null){
                State.prototype.configOptions.push(options);
            }
        },

        removeConfigOption: function(name){
            var configOptions = State.prototype.configOptions;

            for (var i = configOptions.length - 1; i >= 0; i--) {
                if (configOptions[i].name === name) {
                    configOptions.splice(i, 1);
                }
            }

            State.prototype.configOptions = configOptions;
        },

        getConfigOption: function(name){
            var configOptions = State.prototype.configOptions;

            if(typeof name === "string"){
                for (var i = configOptions.length - 1; i >= 0; i--) {
                    if(configOptions[i].name === name){
                        return configOptions[i];
                    }
                }
            }
            else{
                return configOptions;
            }
        },

        getConfigOptions: function(){
            return State.prototype.configOptions;
        },

        resizeBrowser: function() {
            var activeStates = filterStates(this.states, 'active', true);
            var len = activeStates.length;

            for (var i = 0; i < len; i++) {
                activeStates[i].resizeState();
            }
        },

        stateChange: function(func) {
            if (typeof func === "function") {
                stateChangeMethod = func;
            }
            else {
                throw new Error('Not a function');
            }
        }
    };

    //Utility functions

    function filterStates(states, key, value) {
        var len = states.length;
        var returnStates = [];

        for (var i = 0; i < len; i++) {
            var state = states[i];

            if (state[key] && state[key] === value) {
                returnStates.push(state);
            }
        }

        return returnStates;
    }

    function mergeOptions(obj1, obj2) {
        var obj3 = {};

        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }

        for (var attrname2 in obj2) {
            obj3[attrname2] = obj2[attrname2];
        }

        return obj3;
    }

    function makeID() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 10; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    function fireAllMethodsInArray(arr) {
        var arrLength = arr.length;

        for (var i = 0; i < arrLength; i++) {
            arr[i]();
        }
    }

    function funcToArray(func) {
        if (typeof func === 'function') {
            return [func];
        }
        else {
            return func;
        }
    }

    //
    // David Walsh's Debounce - http://davidwalsh.name/javascript-debounce-function
    //

    function debounce(func, wait, immediate) {
        var timeout;
        
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    return new StateManager();
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const $ = __webpack_require__(0);

const $tickBox = $('.js-terms-conditions')[0];
const $targetButton = $('.js-terms-conditions-target')[0];

function enableDisableTargetButton() {
    $targetButton.disabled = !this.checked;
}

if ($tickBox && $targetButton) {
    $tickBox.onchange = enableDisableTargetButton;
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* Registration validation: hides the Cause Name if usertype is Marketer */
const $ = __webpack_require__(0);

const $userTypeEl = $('#id_usertype')[0];
const $s3DirectWidget = $('.js-image-update')[0];

function loadPreviewImage() {
    setTimeout(() => {
        const $uploadedImageLinkEl = $('.file-link')[0];
        $imageEl.src = $uploadedImageLinkEl.href;
    }, 4000);
}

if ($s3DirectWidget) {
    $s3DirectWidget.onchange = loadPreviewImage;
}

/***/ })
/******/ ]);
//# sourceMappingURL=main-1f066407822ffb2ce364.js.map