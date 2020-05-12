(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("printer_setup", [], factory);
	else if(typeof exports === 'object')
		exports["printer_setup"] = factory();
	else
		root["printer_setup"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//     document.getElementById(\"components\").addEventListener('mousedown',(e)=>{\n// if(e.target.getAttribute(\"angalware_sheet\")==null)\n//         dnd_listen(e.target);\n//         })\n// dnd \nfunction dnd_listen(dnd) {\n  // removeSelection();\n  dnd.onmousedown = function (event) {\n    pauseEvent(event);\n    dnd.style.position = 'absolute';\n    dnd.style.zIndex = 1000;\n    moveAt(event.pageX, event.pageY);\n\n    function moveAt(pageX, pageY) {\n      dnd.style.left = pageX - dnd.offsetWidth / 2 + 'px';\n      dnd.style.top = pageY - dnd.offsetHeight / 2 + 'px';\n    }\n\n    function onMouseMove(event) {\n      pauseEvent(event);\n      event.cancelBubble = true;\n      moveAt(event.pageX, event.pageY);\n    }\n\n    document.addEventListener('mousemove', onMouseMove);\n\n    dnd.onmouseup = function () {\n      document.removeEventListener('mousemove', onMouseMove);\n      dnd.onmouseup = null;\n    };\n  };\n}\n\nfunction pauseEvent(e) {\n  //  window.getSelection().removeAllRanges();\n  if (e.stopPropagation) e.stopPropagation();\n  if (e.preventDefault) e.preventDefault();\n  e.cancelBubble = true;\n  e.returnValue = false;\n  return false;\n}\n\nfunction startEvent(e) {\n  console.log(\"startevent\");\n  e.cancelBubble = false;\n  return true;\n}\n\nfunction removeSelection() {\n  if (window.getSelection) {\n    if (window.getSelection().empty) {\n      // Chrome\n      window.getSelection().empty();\n    } else if (window.getSelection().removeAllRanges) {\n      // Firefox\n      window.getSelection().removeAllRanges();\n    }\n  } else if (document.selection) {\n    // IE?\n    document.selection.empty();\n  }\n} // window.print();\n\n\nwindow.editor_call = function (arg) {\n  if (arg == \"print\") window.print(); // function click_button_inside_frame() {\n  //    document.getElementById('frame_button').click();\n};\n\n//# sourceURL=webpack://printer_setup/./src/index.js?");

/***/ })

/******/ })["default"];
});