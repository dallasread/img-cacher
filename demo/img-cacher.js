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

	var Generator = __webpack_require__(2);

	var ImgCacher = Generator.generate(function ImgCacher(options) {
	    var _ = this;

	    _.defineProperties({
	        prefix: options.prefix || 'img-'
	    });
	});

	ImgCacher.definePrototype({
	    base64Img: __webpack_require__(3),
	    getData: __webpack_require__(4),
	    isValid: __webpack_require__(5),
	    onload: __webpack_require__(6),
	    reset: __webpack_require__(7),
	    save: __webpack_require__(8),
	    src: __webpack_require__(9),
	    srcFromCache: __webpack_require__(10),
	    buildSrc: __webpack_require__(11),
	});

	if (typeof window !== 'undefined') {
	    window.ImgCacher = ImgCacher;
	}

	module.exports = ImgCacher;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @name generate.js
	 * @author Michaelangelo Jong
	 */

	(function GeneratorScope() {
	    /**
	     * Assert Error function.
	     * @param  {Boolean} condition Whether or not to throw error.
	     * @param  {String} message    Error message.
	     */
	    function assertError(condition, message) {
	        if (!condition) {
	            throw new Error(message);
	        }
	    }

	    /**
	     * Assert TypeError function.
	     * @param  {Boolean} condition Whether or not to throw error.
	     * @param  {String} message    Error message.
	     */
	    function assertTypeError(test, type) {
	        if (typeof test !== type) {
	            throw new TypeError('Expected \'' + type +
	                '\' but instead found \'' +
	                typeof test + '\'');
	        }
	    }

	    /**
	     * Returns the name of function 'func'.
	     * @param  {Function} func Any function.
	     * @return {String}        Name of 'func'.
	     */
	    function getFunctionName(func) {
	        if (func.name !== void(0)) {
	            return func.name;
	        }
	        // Else use IE Shim
	        var funcNameMatch = func.toString()
	            .match(/function\s*([^\s]*)\s*\(/);
	        func.name = (funcNameMatch && funcNameMatch[1]) || '';
	        return func.name;
	    }

	    /**
	     * Returns true if 'obj' is an object containing only get and set functions, false otherwise.
	     * @param  {Any} obj Value to be tested.
	     * @return {Boolean} true or false.
	     */
	    function isGetSet(obj) {
	        var keys, length;
	        if (obj && typeof obj === 'object') {
	            keys = Object.getOwnPropertyNames(obj)
	                .sort();
	            length = keys.length;

	            if ((length === 1 && (keys[0] === 'get' && typeof obj.get ===
	                    'function' ||
	                    keys[0] === 'set' && typeof obj.set === 'function'
	                )) ||
	                (length === 2 && (keys[0] === 'get' && typeof obj.get ===
	                    'function' &&
	                    keys[1] === 'set' && typeof obj.set === 'function'
	                ))) {
	                return true;
	            }
	        }
	        return false;
	    }

	    /**
	     * Defines properties on 'obj'.
	     * @param  {Object} obj        An object that 'properties' will be attached to.
	     * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties on 'properties'.
	     * @param  {Object} properties An object who's properties will be attached to 'obj'.
	     * @return {Generator}         'obj'.
	     */
	    function defineObjectProperties(obj, descriptor, properties) {
	        var setProperties = {},
	            i,
	            keys,
	            length,

	            p = properties || descriptor,
	            d = properties && descriptor;

	        properties = (p && typeof p === 'object') ? p : {};
	        descriptor = (d && typeof d === 'object') ? d : {};

	        keys = Object.getOwnPropertyNames(properties);
	        length = keys.length;

	        for (i = 0; i < length; i++) {
	            if (isGetSet(properties[keys[i]])) {
	                setProperties[keys[i]] = {
	                    configurable: !!descriptor.configurable,
	                    enumerable: !!descriptor.enumerable,
	                    get: properties[keys[i]].get,
	                    set: properties[keys[i]].set
	                };
	            } else {
	                setProperties[keys[i]] = {
	                    configurable: !!descriptor.configurable,
	                    enumerable: !!descriptor.enumerable,
	                    writable: !!descriptor.writable,
	                    value: properties[keys[i]]
	                };
	            }
	        }
	        Object.defineProperties(obj, setProperties);
	        return obj;
	    }



	    var Creation = {
	        /**
	         * Defines properties on this object.
	         * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties.
	         * @param  {Object} properties An object who's properties will be attached to this object.
	         * @return {Object}            This object.
	         */
	        defineProperties: function defineProperties(descriptor,
	            properties) {
	            defineObjectProperties(this, descriptor,
	                properties);
	            return this;
	        },

	        /**
	         * returns the prototype of `this` Creation.
	         * @return {Object} Prototype of `this` Creation.
	         */
	        getProto: function getProto() {
	            return Object.getPrototypeOf(this);
	        },

	        /**
	         * returns the prototype of `this` super Creation.
	         * @return {Object} Prototype of `this` super Creation.
	         */
	        getSuper: function getSuper() {
	            return Object.getPrototypeOf(this.constructor.prototype);
	        }
	    };

	    var Generation = {
	        /**
	         * Returns true if 'generator' was generated by this Generator.
	         * @param  {Generator} generator A Generator.
	         * @return {Boolean}             true or false.
	         */
	        isGeneration: function isGeneration(generator) {
	            assertTypeError(generator, 'function');

	            var _ = this;

	            return _.prototype.isPrototypeOf(generator.prototype);
	        },

	        /**
	         * Returns true if 'object' was created by this Generator.
	         * @param  {Object} object An Object.
	         * @return {Boolean}       true or false.
	         */
	        isCreation: function isCreation(object) {
	            var _ = this;
	            return object instanceof _;
	        },
	        /**
	         * Generates a new generator that inherits from `this` generator.
	         * @param {Generator} ParentGenerator Generator to inherit from.
	         * @param {Function} create           Create method that gets called when creating a new instance of new generator.
	         * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
	         */
	        generate: function generate(construct) {
	            assertTypeError(construct, 'function');

	            var _ = this;

	            defineObjectProperties(
	                construct, {
	                    configurable: false,
	                    enumerable: false,
	                    writable: false
	                }, {
	                    prototype: Object.create(_.prototype)
	                }
	            );

	            defineObjectProperties(
	                construct, {
	                    configurable: false,
	                    enumerable: false,
	                    writable: false
	                },
	                Generation
	            );

	            defineObjectProperties(
	                construct.prototype, {
	                    configurable: false,
	                    enumerable: false,
	                    writable: false
	                }, {
	                    constructor: construct,
	                    generator: construct,
	                }
	            );

	            return construct;
	        },

	        /**
	         * Defines shared properties for all objects created by this generator.
	         * @param  {Object} descriptor Optional object descriptor that will be applied to all attaching properties.
	         * @param  {Object} properties An object who's properties will be attached to this generator's prototype.
	         * @return {Generator}         This generator.
	         */
	        definePrototype: function definePrototype(descriptor,
	            properties) {
	            defineObjectProperties(this.prototype,
	                descriptor,
	                properties);
	            return this;
	        }
	    };

	    function Generator() {}

	    defineObjectProperties(
	        Generator, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        }, {
	            prototype: Generator.prototype
	        }
	    );

	    defineObjectProperties(
	        Generator.prototype, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        },
	        Creation
	    );

	    defineObjectProperties(
	        Generator, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        },
	        Generation
	    );

	    defineObjectProperties(
	        Generator, {
	            configurable: false,
	            enumerable: false,
	            writable: false
	        }, {
	            /**
	             * Returns true if 'generator' was generated by this Generator.
	             * @param  {Generator} generator A Generator.
	             * @return {Boolean}             true or false.
	             */
	            isGenerator: function isGenerator(generator) {
	                return this.isGeneration(generator);
	            },

	            /**
	             * Generates a new generator that inherits from `this` generator.
	             * @param {Generator} extendFrom      Constructor to inherit from.
	             * @param {Function} create           Create method that gets called when creating a new instance of new generator.
	             * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
	             */
	            toGenerator: function toGenerator(extendFrom, create) {
	                console.warn(
	                    'Generator.toGenerator is depreciated please use Generator.generateFrom'
	                );
	                return this.generateFrom(extendFrom, create);
	            },

	            /**
	             * Generates a new generator that inherits from `this` generator.
	             * @param {Constructor} extendFrom    Constructor to inherit from.
	             * @param {Function} create           Create method that gets called when creating a new instance of new generator.
	             * @return {Generator}                New Generator that inherits from 'ParentGenerator'.
	             */
	            generateFrom: function generateFrom(extendFrom, create) {
	                assertTypeError(extendFrom, 'function');
	                assertTypeError(create, 'function');

	                defineObjectProperties(
	                    create, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    }, {
	                        prototype: Object.create(extendFrom.prototype),
	                    }
	                );

	                defineObjectProperties(
	                    create, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    },
	                    Generation
	                );

	                defineObjectProperties(
	                    create.prototype, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    }, {
	                        constructor: create,
	                        generator: create,
	                    }
	                );

	                defineObjectProperties(
	                    create.prototype, {
	                        configurable: false,
	                        enumerable: false,
	                        writable: false
	                    },
	                    Creation
	                );

	                return create;
	            }
	        }
	    );

	    Object.freeze(Generator);
	    Object.freeze(Generator.prototype);

	    // Exports
	    if (true) {
	        // AMD
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return Generator;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === 'object' && typeof exports === 'object') {
	        // Node/CommonJS
	        module.exports = Generator;
	    } else {
	        // Browser global
	        window.Generator = Generator;
	    }

	}());


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function base64Img(img, options, done) {
	    if (typeof options === 'function') {
	        done = options;
	        options = {};
	    }

	    var canvas = document.createElement('canvas'),
	        ratio = 1;

	    if (options.maxWidth || options.maxHeight) {
	        if (options.maxWidth && options.maxHeight) {
	            ratio = Math.min(options.maxWidth / img.width, options.maxHeight / img.height);
	        } else if (options.maxWidth) {
	            ratio = options.maxWidth / img.width;
	        } else if (options.maxHeight) {
	            ratio = options.maxHeight / img.height;
	        }

	        canvas.height = img.height * ratio;
	        canvas.width = img.width * ratio;
	    } else if (options.width || options.height) {
	        if (options.width && options.height) {
	            canvas.width = options.width;
	            canvas.height = options.height;
	        } else if (options.width) {
	            ratio = options.width / img.width;
	            canvas.width = options.width;
	            canvas.height = img.height * ratio;
	        } else if (options.height) {
	            ratio = options.height / img.height;
	            canvas.width = img.width * ratio;
	            canvas.height = options.height;
	        }
	    }

	    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);

	    done( undefined, canvas.toDataURL() );
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function getData(src, options, done) {
	    if (typeof options === 'function') {
	        done = options;
	        options = {};
	    }

	    if (!this.isValid(src)) return done(new Error('Invalid src.'));

	    var _ = this,
	        img = window.document.createElement('img');

	    img.onload = function() {
	        _.base64Img(img, options, done);
	    };

	    img.onerror = function onError(err) {
	        done(err);
	    };

	    img.crossOrigin = 'anonymous';
	    img.src = src;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function isValid(src) {
	    var xhr = window.ActiveXObject ? new window.ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest('Microsoft.XMLHTTP');

	    xhr.open( 'HEAD', src, false );

	    try {
	        xhr.send();
	        return xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304);
	    } catch (e) {
	        return false;
	    }
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function onload(img, done) {
	    var canvas = document.createElement('canvas');

	    canvas.height = img.height;
	    canvas.width = img.width;

	    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);

	    done( undefined, canvas.toDataURL() );
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	var localStorage = window.localStorage;

	module.exports = function reset() {
	    var _ = this,
	        key;

	    for (var i = 0; i < localStorage.length; i++)   {
	        key = localStorage.key(i);

	        if (key.indexOf(_.prefix) === 0) {
	            localStorage.removeItem(localStorage.key(i));
	        }
	    }
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function saveSrc(src, options, data) {
	    var _ = this;

	    if (!data) {
	        data = options;
	        options = {};
	    }

	    window.localStorage.setItem(
	        _.buildSrc(src, options),
	        data
	    );
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function getSrc(src, options, done) {
	    var _ = this;

	    _.srcFromCache(src, options, function(err, data) {
	        if (err) {
	            return _.getData(src, options, function(err, data) {
	                if (data) {
	                    _.save(src, options, data);
	                    done(undefined, data);
	                } else {
	                    done(err);
	                }
	            });
	        }

	        done(undefined, data, true);
	    });
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = function cacheFromSrc(src, options, done) {
	    var _ = this;

	    if (typeof options === 'function') {
	        done = options;
	        options = {};
	    }

	    if (src.slice(0, 5) === 'data:') {
	        done(undefined, src);
	    } else {
	        var exists = window.localStorage.getItem( _.buildSrc(src, options) );
	        done(exists ? undefined : new Error('Image does not exist.'), exists);
	    }
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function buildSrc(src, options) {
	    var _ = this;
	    options = typeof options === 'object' ? options : {};
	    return _.prefix + src + '-' + JSON.stringify(options);
	};


/***/ }
/******/ ]);