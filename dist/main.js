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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(\"app\")\r\n\r\n//input form reactive \r\nlet angalware_data_store = {},\r\n//input reactive check\r\nelement_checked = false,\r\n//input reactive setup\r\n  element_name = '',\r\n\tobj_check_list = [],\r\n\tready_check_list = {};\r\n\r\n\r\n//iframe init\r\nlet iframeWindow;\r\nlet components=[\r\n{\r\ntype:'text',\r\nvalue:'something'\r\n\r\n\r\n},\r\n{\r\n  type:'canvas',\r\n  value:'something'\r\n    \r\n    }\r\n\r\n]\r\n\r\niframe.onload = function() {\r\n    // we can get the reference to the inner window\r\n \r\n    try {\r\n\r\n      iframeWindow = iframe.contentDocument || iframe.contentWindow.document;\r\n     \r\n    } catch(e) {\r\n      alert(e); // Security Error (another origin)\r\n    }\r\n   \r\n\r\ncomponents.forEach(element => {\r\n    \r\n    // if(element.type==\"text\")\r\n         create_element(\"div\",element.value,[\r\n             {\r\n               attr:'class',value:'move'\r\n             },\r\n             {\r\n              attr:'style',value:'cursor:move;padding:inherit'\r\n            }\r\n\r\n         ],\r\n         iframeWindow.getElementById(\"components\")\r\n         \r\n         )\r\n});\r\n\r\n//data watch\r\nrstate((state,data)=>{\r\n  if(state){\r\n//console.log(default state)\r\n  }\r\n  \r\n  console.log(JSON.stringify(data));\r\n  console.log(iframeWindow)\r\ncss(iframeWindow.getElementById(\"style_editor\"),data)\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n    iframe.onload = null; // clear the handler, not to run it after the location change\r\n  };\r\n\r\n  document.getElementById(\"print\").onclick=function(){\r\n\r\n    var iframe = document.getElementById(\"iframe\");\r\n    iframe.contentWindow.editor_call(\"print\");\r\n  \r\n  }\r\n\r\n  // component create\r\nfunction create_element(element,inner=\"\",attribute_array,append){\r\n\r\n    var textfield = document.createElement(element);\r\n   \r\n    attribute_array.forEach(element => {\r\n// alert(element.attr)        \r\n    textfield.setAttribute(element.attr,element.value);\r\n\r\n    });\r\n    // if(inner!=\"\")\r\n      textfield.innerHTML=inner;\r\n    if(append)\r\n    append.appendChild(textfield);\r\n else\r\n alert(\"create append dom\")   \r\n   \r\n}\r\n\r\n\r\n\r\n\r\n// defautl_value()\r\n\r\n// function defautl_value(){\r\n\r\n// // console.log(document.querySelectorAll('*[angalware]'))\r\n\r\n// let myNode=document.querySelectorAll('*[angalware]');\r\n\r\n// myNode.forEach(element => {\r\n//   // console.log(element.getAttribute(\"angalware\"))\r\n\r\n//   data[element.getAttribute(\"angalware\")]=element.value;\r\n\r\n// });\r\n\r\n\r\n// document.getElementById(\"result\").innerText= JSON.stringify(data);  \r\n// console.log(data)\r\n// }\r\n\r\n\r\n\r\n// input_changes();\r\n// function input_changes(){\r\n\r\n\r\n// document.addEventListener('input',(e)=>{\r\n\r\n// // console.log(e.target.value)\r\n\r\n// data[e.target.getAttribute('angalware')]=e.target.value;\r\n// document.getElementById(\"result\").innerText= JSON.stringify(data);\r\n// console.log(data)\r\n//   })\r\n\r\n\r\n// }\r\n\r\n\r\n\r\n\r\n\r\n\r\n// function rstate(fn){\r\n\r\n\r\n\r\n// let myNode=document.querySelectorAll('*[angalware]');\r\n\r\n\r\n\r\n\r\n// myNode.forEach(element => {\r\n \r\n\r\n//  if(element.type!=\"radio\"&&element.type!=\"checkbox\")\r\n//     angalware_data_store[element.getAttribute(\"angalware\")]=element.value,\r\n//     watching(angalware_data_store,element.getAttribute(\"angalware\"),()=>{    },(obj,set_val)=>{   data_bind(obj,set_val) });\r\n//  else\r\n//    if(element.checked)\r\n//    element_checked=true,\r\n//    element_name=element.getAttribute(\"angalware\"),\r\n//    angalware_data_store[element.getAttribute(\"angalware\")]=element.value,\r\n//    watching(angalware_data_store,element.getAttribute(\"angalware\"),()=>{    },(obj,set_val)=>{   data_bind(obj,set_val) });\r\n\r\n//    else\r\n//     if(!element_checked&&element_name!=element.getAttribute(\"angalware\"))\r\n//     angalware_data_store[element.getAttribute(\"angalware\")]=\"\",\r\n//     watching(angalware_data_store,element.getAttribute(\"angalware\"),()=>{    },(obj,set_val)=>{   data_bind(obj,set_val) });\r\n//     else\r\n//        element_name=\"\",\r\n//        element_checked=false;\r\n\r\n      \r\n\r\n//       });//end loop\r\n\r\n//       angalware_data_store.paper_size=\"letter\";\r\n//       // angalware_data_store.paper_height=937;\r\n//       console.log(angalware_data_store.paper_width);\r\n//       console.log(\"changed data\")\r\n\r\n\r\n// fn(angalware_data_store);\r\n// document.addEventListener('input',(e)=>{\r\n\r\n    \r\n//     angalware_data_store[e.target.getAttribute('angalware')]=e.target.value;\r\n//     fn(angalware_data_store)\r\n\r\n\r\n//     // if(angalware_data_store[]==\"\")\r\n\r\n//   })\r\n    \r\n    \r\n\r\n\r\n// }\r\n\r\nfunction rstate(fn) {\r\n\tlet myNode = document.querySelectorAll('*[angalware]');\r\n\r\n\t//set default value\r\n\tmyNode.forEach(element => {\r\n\r\n\t\tlet custom_attribute = element.getAttribute(\"angalware\");\r\n\t\tobj_check_list.push(custom_attribute);\r\n\t\tobj_check_list.forEach(x => ready_check_list[x] = (ready_check_list[x] || 0) + 1);\r\n\t\t// console.log(ready_check_list)\r\n\t\tif (ready_check_list[custom_attribute] == 1)\r\n\t\t\twatching(angalware_data_store, element.getAttribute(\"angalware\"), element.value, (obj, set_val) => {\r\n\t\t\t\tdata_bind(obj, set_val);\r\n\t\t\t});\r\n\r\n\t\tif (element.type != \"radio\" && element.type != \"checkbox\")\r\n\t\t\tangalware_data_store[element.getAttribute(\"angalware\")] = element.value;\r\n\t\telse\r\n\t\tif (element.checked) {\r\n\t\t\telement_checked = true;\r\n\t\t\telement_name = element.getAttribute(\"angalware\");\r\n\t\t\tangalware_data_store[element.getAttribute(\"angalware\")] = element.value;\r\n\t\t} else\r\n\t\tif (!element_checked && element_name != element.getAttribute(\"angalware\"))\r\n\t\t\tif (ready_check_list[custom_attribute] == 1)\r\n\t\t\t\tangalware_data_store[element.getAttribute(\"angalware\")] = \"\";\r\n\t\t\telse\r\n\t\t\t\telement_name = \"\",\r\n\t\t\t\telement_checked = false;\r\n\t}); //end loop\r\n\r\n\tfn(true, angalware_data_store);\r\n\r\n\tdocument.addEventListener('input', (e) => {\r\n\t\tfn(false, angalware_data_store)\r\n\t\tangalware_data_store[e.target.getAttribute('angalware')] = e.target.value;\r\n\r\n\r\n\t})\r\n}\r\n//data bind to input by watchin while set the value\r\nfunction data_bind(angalware, value) {\r\n\t\r\n\tvalidation();\r\n\r\n\tlet options = [];\r\n\tlet myNode = document.querySelectorAll('*[angalware]');\r\n\tmyNode.forEach(element => {\r\n\t\tif (element.getAttribute(\"angalware\") == angalware) {\r\n\t\t\tif (element.getAttribute(\"type\") != \"radio\" && element.getAttribute(\"type\") != \"checkbox\" && element.tagName != \"SELECT\")\r\n\t\t\t\telement.value = value;\r\n\t\t\tif (element.getAttribute(\"type\") == \"radio\" && element.getAttribute(\"value\") == value)\r\n\t\t\t\telement.checked = true;\r\n\t\t\tif (element.getAttribute(\"type\") == \"checkbox\" && element.getAttribute(\"value\") == value)\r\n\t\t\t\telement.checked = true;\r\n\t\t\tif (element.tagName == \"SELECT\")\r\n\t\t\t\toptions = element.childNodes,\r\n\t\t\t\toptions.forEach(el => {\r\n\t\t\t\t\tif (el.value == value)\r\n\t\t\t\t\t\tel.selected = true;\r\n\r\n\t\t\t\t});\r\n\t\t}\r\n\r\n\t})\r\n\t\r\n}\r\n\r\n\r\n//data bind to input by watchin while set the value\r\nfunction data_bind(angalware,value){\r\nlet options=[];\r\n  let myNode=document.querySelectorAll('*[angalware]');\r\nconsole.log(myNode)\r\n  myNode.forEach(element => {\r\n\r\n\r\n    if(element.getAttribute(\"angalware\")==angalware){\r\n// console.log(element.tagName)\r\n      if(element.getAttribute(\"type\")==\"input\")\r\n      element.value=value;\r\n       if(element.getAttribute(\"type\")==\"radio\"&&element.getAttribute(\"value\")==value) \r\n       element.checked=true;\r\n       if(element.getAttribute(\"type\")==\"checkbox\"&&element.getAttribute(\"value\")==value)\r\n       element.checked=true; \r\n       if(element.tagName==\"SELECT\")\r\n       options=element.childNodes,\r\n       console.log(options),    \r\n       options.forEach(el => {\r\n            if(el.value==value)\r\n              el.selected=true;\r\n\r\n          });\r\n    }\r\n\r\n\r\n\r\n\r\n  })\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n//watch data changes\r\nfunction watching(obj_parent, inside_obj, arg, watcher_set) {\r\n\r\n\tObject.defineProperty(obj_parent, inside_obj, {\r\n\t\tget: function () {\r\n\r\n\r\n\t\t\treturn arg;\r\n\t\t},\r\n\r\n\t\tset: function (val) {\r\n\t\t\targ = val;\r\n\t\t\twatcher_set(inside_obj, val)\r\n\r\n\r\n\t\t}\r\n\t})\r\n\r\n\r\n}\r\n\r\n\r\nfunction css(iframe,data){\r\n\r\n\r\n  let css_paper_width_and_height=\" .sheet{ background: white;position: relative;  } .sheet.padding {box-sizing: border-box; margin:\"+parseFloat(data.paper_margin_top||0)+\"mm;   padding-top: \"+parseFloat(data.paper_padding_top||0)+\"mm;padding-right: \"+parseFloat(data.paper_padding_right||0)+\"mm;padding-bottom: \"+parseFloat(data.paper_padding_bottom||0)+\"mm;padding-left: \"+parseFloat(data.paper_padding_left||0)+\"mm  }  @page { size: \"+parseFloat(data.paper_width||0)+\"mm \"+parseFloat(data.paper_height||0)+\"mm } /* output size */ body.receipt .sheet { width: \"+parseFloat(data.paper_width||0)+\"mm; height: \"+parseFloat(data.paper_height||0)+\"mm } /* sheet size */ @media print { body.receipt { width: \"+parseFloat(data.paper_width||0)+\"mm } body.receipt .sheet{ width:auto;height: auto;} } /* fix for Chrome */\",\r\n   css_margin=\"\",\r\n   css_padding=\"\";\r\n\r\n   console.log(css_paper_width_and_height)\r\n  //  console.log(css_paper_width_and_height)\r\n\r\n\r\n  iframe.innerHTML=css_paper_width_and_height;\r\n  // for (var i=0; i<sheetRef.sheet.cssRules.length; i++){\r\n  \r\n  \r\n  // var sheet = sheetRef.sheet ? sheetRef.sheet : sheetRef.styleSheet;\r\n  \r\n  \r\n  // if (sheet.cssRules.length > 0) {\r\n  // //console.log(sheet.cssRules[i]);\r\n  //   console.log(sheet.cssRules[i].selectorText);\r\n  //   console.log(sheet.cssRules[i].cssText);\r\n  \r\n  //                 }}\r\n\r\n//applying width and height\r\n\r\n\r\n//paddings\r\n\r\n\r\n\r\n//margins\r\n\r\n\r\n\r\n\r\n\r\n//append\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://printer_setup/./src/app.js?");

/***/ })

/******/ })["default"];
});