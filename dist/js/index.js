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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _test = __webpack_require__(2);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {

  $(window).scroll(function () {
    if ($("body,html").scrollTop() > 100) {
      $(".scrollToTopButton").fadeIn();
    } else {
      $(".scrollToTopButton").fadeOut();
    }
  });

  $(".scrollToTopButton").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 700);
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \r\n  background: $color__1;\r\n             ^\r\n      Undefined variable: \"$color--1\".\r\n      in D:\\учебные проекты\\uber__eats\\uber__eats\\src\\style\\main.scss (line 12, column 15)\n    at runLoaders (D:\\учебные проекты\\uber__eats\\uber__eats\\node_modules\\webpack\\lib\\NormalModule.js:195:19)\n    at D:\\учебные проекты\\uber__eats\\uber__eats\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at D:\\учебные проекты\\uber__eats\\uber__eats\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (D:\\учебные проекты\\uber__eats\\uber__eats\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (D:\\учебные проекты\\uber__eats\\uber__eats\\node_modules\\sass-loader\\lib\\loader.js:55:13)\n    at Object.done [as callback] (D:\\учебные проекты\\uber__eats\\uber__eats\\node_modules\\neo-async\\async.js:8067:18)\n    at options.error (D:\\учебные проекты\\uber__eats\\uber__eats\\node_modules\\node-sass\\lib\\index.js:294:32)");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (callback) {
  console.log("");
  document.write("");

  callback();
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWUyMGJhZTFiNjVhNjdkMzc3NmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy90ZXN0LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwid2luZG93Iiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiZmFkZUluIiwiZmFkZU91dCIsImNsaWNrIiwiYW5pbWF0ZSIsImNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsIndyaXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7Ozs7QUM3REE7O0FBQ0E7Ozs7OztBQUVBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVzs7QUFFM0JGLElBQUVHLE1BQUYsRUFBVUMsTUFBVixDQUFpQixZQUFXO0FBQzFCLFFBQUlKLEVBQUUsV0FBRixFQUFlSyxTQUFmLEtBQTZCLEdBQWpDLEVBQXNDO0FBQ3BDTCxRQUFFLG9CQUFGLEVBQXdCTSxNQUF4QjtBQUNELEtBRkQsTUFFTztBQUNMTixRQUFFLG9CQUFGLEVBQXdCTyxPQUF4QjtBQUNEO0FBQ0YsR0FORDs7QUFRQVAsSUFBRSxvQkFBRixFQUF3QlEsS0FBeEIsQ0FBOEIsWUFBVztBQUN2Q1IsTUFBRSxXQUFGLEVBQWVTLE9BQWYsQ0FBdUIsRUFBQ0osV0FBVyxDQUFaLEVBQXZCLEVBQXVDLEdBQXZDO0FBQ0QsR0FGRDtBQUdELENBYkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNIZSxVQUFVSyxRQUFWLEVBQW9CO0FBQ2pDQyxVQUFRQyxHQUFSLENBQVksRUFBWjtBQUNBWCxXQUFTWSxLQUFULENBQWUsRUFBZjs7QUFFQUg7QUFDRCxDIiwiZmlsZSI6ImpzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZTIwYmFlMWI2NWE2N2QzNzc2YSIsImltcG9ydCAnLi4vc3R5bGUvbWFpbi5zY3NzJztcclxuaW1wb3J0IFRlc3N0IGZyb20gJy4vdGVzdCc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgIGlmICgkKFwiYm9keSxodG1sXCIpLnNjcm9sbFRvcCgpID4gMTAwKSB7XHJcbiAgICAgICQoXCIuc2Nyb2xsVG9Ub3BCdXR0b25cIikuZmFkZUluKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuc2Nyb2xsVG9Ub3BCdXR0b25cIikuZmFkZU91dCgpXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuc2Nyb2xsVG9Ub3BCdXR0b25cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiYm9keSxodG1sXCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sIDcwMClcclxuICB9KVxyXG59KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICBjb25zb2xlLmxvZyhcIlwiKTtcclxuICBkb2N1bWVudC53cml0ZShcIlwiKVxyXG5cclxuICBjYWxsYmFjaygpXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3Rlc3QuanMiXSwic291cmNlUm9vdCI6IiJ9