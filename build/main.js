require('source-map-support/register')
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_consola__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_consola___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_consola__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_bodyparser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_json__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_koa_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_koa_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_koa_generic_session__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_koa_generic_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_koa_generic_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routers_api__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_db__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_db___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__models_db__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    var nuxt, _nuxt$options$server, _nuxt$options$server$, host, _nuxt$options$server$2, port, builder, router;

    return __WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nuxt = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Nuxt"](config);
            _nuxt$options$server = nuxt.options.server, _nuxt$options$server$ = _nuxt$options$server.host, host = _nuxt$options$server$ === undefined ? process.env.HOST || '127.0.0.1' : _nuxt$options$server$, _nuxt$options$server$2 = _nuxt$options$server.port, port = _nuxt$options$server$2 === undefined ? process.env.PORT || 3000 : _nuxt$options$server$2;

            if (!config.dev) {
              _context.next = 8;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Builder"](nuxt);
            _context.next = 6;
            return builder.build();

          case 6:
            _context.next = 10;
            break;

          case 8:
            _context.next = 10;
            return nuxt.ready();

          case 10:
            app.keys = ['key', 'keykey'];
            app.proxy = true;
            app.use(__WEBPACK_IMPORTED_MODULE_8_koa_generic_session___default()({
              key: 'mt',
              prefix: 'mt:uid'
            }));
            app.use(__WEBPACK_IMPORTED_MODULE_6_koa_bodyparser___default()({
              enableTypes: ['json', 'form', 'text']
            }));
            app.use(__WEBPACK_IMPORTED_MODULE_7_koa_json___default()());
            __WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_10__models_db___default.a.dbs, {
              useNewUrlParser: true
            });
            router = new __WEBPACK_IMPORTED_MODULE_5_koa_router___default.a();

            router.use('', __WEBPACK_IMPORTED_MODULE_9__routers_api__["a" /* default */].routes());
            app.use(router.routes()).use(router.allowedMethods());
            app.use(function (ctx) {
              ctx.status = 200;
              ctx.respond = false;
              ctx.req.ctx = ctx;
              nuxt.render(ctx.req, ctx.res);
            });
            app.listen(port, host);
            __WEBPACK_IMPORTED_MODULE_2_consola___default.a.ready({
              message: 'Server listening on http://' + host + ':' + port,
              badge: true
            });

          case 22:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }












var app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
var config = __webpack_require__(15);
config.dev = !(app.env === 'production');

start();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("consola");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("koa-json");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("koa-generic-session");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller_test__ = __webpack_require__(12);


var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a({ prefix: '/api' });

/*插入文章接口*/
router.post('/user/getUser', __WEBPACK_IMPORTED_MODULE_1__controller_test__["b" /* getUsersList */]);
router.post('/user/addUser', __WEBPACK_IMPORTED_MODULE_1__controller_test__["a" /* addUser */]);
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(13);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


/**
 * private API
 * @method getUsersList
 * @param {object} 接收发布文章接口传递对象值
 * @return {object|null}  insert Front article
 */

var getUsersList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
    var userList;
    return __WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* default */].find({});

          case 3:
            userList = _context.sent;

            ctx.body = {
              userList: userList,
              error: 0,
              success: 'ok'
            };
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            ctx.body = {
              error: 1,
              info: _context.t0
            };

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 7]]);
  }));

  return function getUsersList(_x) {
    return _ref.apply(this, arguments);
  };
}();

var addUser = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
    var user;
    return __WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {
              user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* default */]({ username: 'fengsaikng22', password: 'yg0JJ7Fon9zsncNsXoseKQ==' });

              user.save();
              ctx.body = {
                error: 0,
                success: 'ok'
              };
            } catch (e) {
              ctx.body = {
                error: 1,
                info: e
              };
            }

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function addUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
var User = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('User', User));

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  dbs: 'mongodb://127.0.0.1:27017/dbs'
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/css/reset.scss', '@/assets/css/public.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui', "@/plugins/lazyload", "@/plugins/api", "@/plugins/utils"],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  env: {
    NODE_ENV: "development"
  },
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend: function extend(config, _ref) {
      var isDev = _ref.isDev,
          isClient = _ref.isClient;

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map