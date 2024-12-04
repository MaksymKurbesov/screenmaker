/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n#example {\r\n  display: none;\r\n}\r\n\r\n#preview {\r\n  display: block;\r\n}\r\n\r\n\r\n#toggle-canvas {\r\n  position: relative;\r\n  height: 30px;\r\n  padding: 0 20px;\r\n  top: 50px;\r\n  left: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: 600;\r\n  background: linear-gradient(90deg, #7957ff, #a824e6);\r\n  border-radius: 6px;\r\n  box-shadow: 1px 1px 1px rgba(0,0,0,0.5);\r\n  color: white;\r\n  overflow: hidden;\r\n  text-decoration: none;\r\n  transition: all 200ms ease-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.wrapper {\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 50px;\r\n  gap: 15px;\r\n}\r\n\r\n.inputs {\r\n  max-width: 500px;\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  /*padding: 50px;*/\r\n}\r\n\r\n.input {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input input, .input select {\r\n  padding: 8px;\r\n}\r\n\r\n.commission {\r\n  display: none;\r\n}\r\n\r\n#get-screen, #download-screen {\r\n  padding: 10px 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-weight: 600;\r\n  background: linear-gradient(90deg, #29f19c, #02a1f9);\r\n  border-radius: 6px;\r\n  box-shadow: 1px 1px 1px rgba(0,0,0,0.5);\r\n  color: white;\r\n  overflow: hidden;\r\n  position: relative;\r\n  text-decoration: none;\r\n  transition: all 200ms ease-out;\r\n  cursor: pointer;\r\n}\r\n\r\n#get-screen {\r\n  background: linear-gradient(90deg, #ffeb38, #d1f1a1);\r\n  color: black;\r\n  box-shadow: none;\r\n  border: none;\r\n}\r\n\r\n#get-screen img, #download-screen img {\r\n  margin-left: 10px;\r\n\r\n}\r\n\r\n#download-screen img {\r\n  filter: invert(1);\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .wrapper {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 50px 10px;\r\n  }\r\n\r\n  .inputs {\r\n    width: 100%;\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://screenmaker2/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://screenmaker2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://screenmaker2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://screenmaker2/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://screenmaker2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://screenmaker2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://screenmaker2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://screenmaker2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://screenmaker2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://screenmaker2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/TEMPLATE_OPTIONS.js":
/*!*********************************!*\
  !*** ./src/TEMPLATE_OPTIONS.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TEMPLATE_OPTIONS: () => (/* binding */ TEMPLATE_OPTIONS)\n/* harmony export */ });\nconst TEMPLATE_OPTIONS = {\r\n  bybit: {\r\n    deposit: {\r\n      iphone: {\r\n        mobileTime: {\r\n          font: \"22px SF Pro Display\",\r\n          color: \"white\",\r\n          position: [39, 41],\r\n        },\r\n        battery: {\r\n          font: \"17px SF Pro Display Bold\",\r\n          color: \"black\",\r\n          position: [515, 40],\r\n        },\r\n        amount: {\r\n          font: \"30px IBM Bold\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [null, 237],\r\n        },\r\n        time: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [551, 479],\r\n        },\r\n        wallet: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [529, 530, 556],\r\n        },\r\n        transaction_id: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [529, 606, 632, 658, 684],\r\n        },\r\n      },\r\n      android: {\r\n        mobileTime: {\r\n          font: \"18px Montserrat\",\r\n          color: \"white\",\r\n          position: [24, 33],\r\n        },\r\n        battery: {\r\n          font: \"10px Montserrat\",\r\n          color: \"white\",\r\n          position: [524, 29],\r\n        },\r\n        amount: {\r\n          font: \"30px IBM Bold\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [null, 237],\r\n        },\r\n        time: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [551, 479],\r\n        },\r\n        wallet: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [529, 530, 556],\r\n        },\r\n        transaction_id: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [529, 606, 632, 658, 684],\r\n        },\r\n      },\r\n    },\r\n    withdrawn: {\r\n      iphone: {\r\n        mobileTime: {\r\n          font: \"22px SF Pro Display\",\r\n          color: \"white\",\r\n          position: [39, 41],\r\n        },\r\n        battery: {\r\n          font: \"17px SF Pro Display Bold\",\r\n          color: \"black\",\r\n          position: [516, 40],\r\n        },\r\n        amount: {\r\n          font: \"30px IBM Bold\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [null, 237],\r\n        },\r\n        commission: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [551, 430],\r\n        },\r\n        time: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [551, 530],\r\n        },\r\n        wallet: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [529, 579, 606],\r\n        },\r\n        transaction_id: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [529, 655, 682, 709, 736],\r\n        },\r\n      },\r\n      android: {\r\n        mobileTime: {\r\n          font: \"18px Montserrat\",\r\n          color: \"white\",\r\n          position: [24, 33],\r\n        },\r\n        battery: {\r\n          font: \"10px Montserrat\",\r\n          color: \"white\",\r\n          position: [524, 29],\r\n        },\r\n        amount: {\r\n          font: \"30px IBM Bold\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [null, 237],\r\n        },\r\n        commission: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [551, 430],\r\n        },\r\n        time: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [551, 530],\r\n        },\r\n        wallet: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [529, 579, 606],\r\n        },\r\n        transaction_id: {\r\n          font: \"21px IBM Medium\",\r\n          color: \"rgba(255, 255, 255, 0.93)\",\r\n          position: [529, 655, 682, 709, 736],\r\n        },\r\n      },\r\n    },\r\n  },\r\n  bingx: {\r\n    deposit: {\r\n      iphone: {\r\n        mobileTime: {\r\n          font: \"23px SF Pro Display Semibold\",\r\n          color: \"black\",\r\n          position: [67, 48],\r\n        },\r\n        battery: {\r\n          font: \"17px SF Pro Display Bold\",\r\n          color: \"black\",\r\n          position: [516, 40],\r\n        },\r\n        amount: {\r\n          font: \"50px Rubik\",\r\n          color: \"black\",\r\n          position: [null, 285],\r\n        },\r\n        time: {\r\n          font: \"20px Rubik\",\r\n          color: \"black\",\r\n          position: [547, 693],\r\n        },\r\n        wallet: {\r\n          font: \"20px Rubik\",\r\n          color: \"black\",\r\n          position: [547, 465, 488, 511],\r\n        },\r\n        transaction_id: {\r\n          font: \"20px Rubik\",\r\n          color: \"black\",\r\n          position: [515, 556, 578, 600],\r\n        },\r\n        order_number: {\r\n          font: \"20px Rubik\",\r\n          color: \"black\",\r\n          position: [515, 650],\r\n        },\r\n      },\r\n      android: {},\r\n    },\r\n    withdrawn: {\r\n      iphone: {\r\n        mobileTime: {\r\n          font: \"23px SF Pro Display Semibold\",\r\n          color: \"black\",\r\n          position: [67, 48],\r\n        },\r\n        battery: {\r\n          font: \"17px SF Pro Display Bold\",\r\n          color: \"black\",\r\n          position: [516, 40],\r\n        },\r\n        amount: {\r\n          font: \"50px Rubik\",\r\n          color: \"black\",\r\n          position: [null, 285],\r\n        },\r\n        commission: {\r\n          font: \"20px Rubik\",\r\n          color: \"black\",\r\n          position: [547, 465],\r\n        },\r\n        time: {\r\n          font: \"20px Rubik\",\r\n          color: \"black\",\r\n          position: [547, 759],\r\n        },\r\n        wallet: {\r\n          font: \"20px Rubik\",\r\n          color: \"black\",\r\n          position: [515, 510, 530, 531],\r\n        },\r\n        transaction_id: {\r\n          font: \"20px Rubik\",\r\n          color: \"black\",\r\n          position: [515, 624, 646, 668],\r\n        },\r\n        order_number: {\r\n          font: \"20px Rubik\",\r\n          color: \"black\",\r\n          position: [515, 716],\r\n        },\r\n      },\r\n      android: {},\r\n    },\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://screenmaker2/./src/TEMPLATE_OPTIONS.js?");

/***/ }),

/***/ "./src/canvasDraw.js":
/*!***************************!*\
  !*** ./src/canvasDraw.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawAmount: () => (/* binding */ drawAmount),\n/* harmony export */   drawBattery: () => (/* binding */ drawBattery),\n/* harmony export */   drawBingxHashTransaction: () => (/* binding */ drawBingxHashTransaction),\n/* harmony export */   drawBingxWallet: () => (/* binding */ drawBingxWallet),\n/* harmony export */   drawBybitHashTransaction: () => (/* binding */ drawBybitHashTransaction),\n/* harmony export */   drawBybitWallet: () => (/* binding */ drawBybitWallet),\n/* harmony export */   drawCommission: () => (/* binding */ drawCommission),\n/* harmony export */   drawHashTransaction: () => (/* binding */ drawHashTransaction),\n/* harmony export */   drawMobileBar: () => (/* binding */ drawMobileBar),\n/* harmony export */   drawRoundedRect: () => (/* binding */ drawRoundedRect),\n/* harmony export */   drawRoundedRectangle: () => (/* binding */ drawRoundedRectangle),\n/* harmony export */   drawTime: () => (/* binding */ drawTime),\n/* harmony export */   drawWallet: () => (/* binding */ drawWallet)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _generateMobileBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateMobileBar */ \"./src/generateMobileBar.js\");\n\r\n\r\n\r\nconst canvas = document.getElementById(\"example\");\r\n\r\nconst drawBattery = (ctx, battery) => {\r\n  const batteryValue = (battery / 100) * 33;\r\n  ctx.fillStyle = \"black\";\r\n\r\n  drawRoundedRect(ctx, 500, 32, batteryValue, 14.1, 5);\r\n};\r\n\r\nconst drawMobileBar = async (\r\n  ctx,\r\n  options,\r\n  mobileOS,\r\n  platform,\r\n  mobileTime\r\n) => {\r\n  ctx.textAlign = \"start\";\r\n\r\n  if (mobileOS === \"iphone\") await (0,_generateMobileBar__WEBPACK_IMPORTED_MODULE_1__.generateIphoneMobileBar)(ctx, platform);\r\n\r\n  if (mobileOS === \"android\") await (0,_generateMobileBar__WEBPACK_IMPORTED_MODULE_1__.generateAndroidMobileBar)(ctx);\r\n\r\n  ctx.fillStyle = options.mobileTime.color;\r\n  ctx.font = options.mobileTime.font;\r\n  ctx.fillText(\r\n    mobileTime,\r\n    options.mobileTime.position[0],\r\n    options.mobileTime.position[1]\r\n  );\r\n};\r\n\r\nconst drawCommission = (ctx, options, commission) => {\r\n  ctx.fillStyle = options.commission.color;\r\n  ctx.font = options.commission.font;\r\n\r\n  ctx.fillText(\r\n    commission,\r\n    options.commission.position[0],\r\n    options.commission.position[1]\r\n  );\r\n};\r\n\r\nconst drawAmount = (ctx, platform, options, amount) => {\r\n  const amountWithCurrency = platform === \"bybit\" ? `${amount} USDT` : amount;\r\n\r\n  ctx.font = options.amount.font;\r\n  ctx.fillStyle = options.amount.color;\r\n\r\n  const textWidth = ctx.measureText(amountWithCurrency).width;\r\n  const textPosition = {\r\n    x: canvas.width / 2 - textWidth / 2,\r\n    y: options.amount.position[1],\r\n  };\r\n\r\n  ctx.fillText(amountWithCurrency, textPosition.x, textPosition.y);\r\n};\r\n\r\nconst drawTime = (ctx, options, time) => {\r\n  ctx.font = options.time.font;\r\n  ctx.fillText(time, options.time.position[0], options.time.position[1]);\r\n};\r\n\r\nconst drawRoundedRect = (ctx, x, y, width, height, radius, color) => {\r\n  ctx.beginPath();\r\n  ctx.moveTo(x + radius, y);\r\n  ctx.lineTo(x + width - radius, y);\r\n  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);\r\n  ctx.lineTo(x + width, y + height - radius);\r\n  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);\r\n  ctx.lineTo(x + radius, y + height);\r\n  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);\r\n  ctx.lineTo(x, y + radius);\r\n  ctx.quadraticCurveTo(x, y, x + radius, y);\r\n  ctx.closePath();\r\n  ctx.fill();\r\n};\r\n\r\nconst drawRoundedRectangle = (\r\n  ctx,\r\n  x,\r\n  y,\r\n  width,\r\n  height,\r\n  borderRadius\r\n) => {\r\n  ctx.beginPath();\r\n  ctx.fillStyle = \"white\";\r\n  ctx.moveTo(x + borderRadius, y); // Начало с верхнего левого скругленного угла\r\n  ctx.lineTo(x + width, y); // Линия к верхнему правому углу\r\n  ctx.lineTo(x + width, y + height); // Линия к нижнему правому углу\r\n  ctx.lineTo(x + borderRadius, y + height); // Линия к нижнему левому скругленному углу\r\n  ctx.quadraticCurveTo(x, y + height, x, y + height - borderRadius); // Скругление нижнего левого угла\r\n  ctx.lineTo(x, y + borderRadius); // Линия к верхнему левому углу\r\n  ctx.quadraticCurveTo(x, y, x + borderRadius, y); // Скругление верхнего левого угла\r\n  ctx.closePath();\r\n  ctx.fill();\r\n};\r\n\r\nconst drawBybitHashTransaction = (ctx, options) => {\r\n  const position = options.transaction_id.position;\r\n\r\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), position[0], position[1]);\r\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), position[0], position[2]);\r\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(18), position[0], position[3]);\r\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.generateRandomString)(10), position[0], position[4]);\r\n};\r\n\r\nconst drawBingxHashTransaction = (ctx, options) => {\r\n  const TXID = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCustomString)();\r\n  const position = options.transaction_id.position;\r\n\r\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText3Chunks)(TXID)[0], position[0], position[1]);\r\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText3Chunks)(TXID)[1], position[0], position[2]);\r\n  ctx.fillText((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText3Chunks)(TXID)[2], position[0], position[3]);\r\n};\r\n\r\nconst drawHashTransaction = (ctx, options, platform) => {\r\n  if (platform === \"bybit\") {\r\n    drawBybitHashTransaction(ctx, options);\r\n  }\r\n\r\n  if (platform === \"bingx\") {\r\n    drawBingxHashTransaction(ctx, options);\r\n  }\r\n};\r\n\r\nconst drawBybitWallet = (ctx, options, wallet) => {\r\n  const walletChunks = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText2Chunks)(wallet, 18);\r\n\r\n  ctx.fillText(\r\n    walletChunks[0],\r\n    options.wallet.position[0],\r\n    options.wallet.position[1]\r\n  );\r\n  ctx.fillText(\r\n    walletChunks[1],\r\n    options.wallet.position[0],\r\n    options.wallet.position[2]\r\n  );\r\n};\r\n\r\nconst drawBingxWallet = (ctx, options, wallet) => {\r\n  ctx.fillText(\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText3Chunks)(wallet)[0],\r\n    options.wallet.position[0],\r\n    options.wallet.position[1]\r\n  );\r\n  ctx.fillText(\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText3Chunks)(wallet)[1],\r\n    options.wallet.position[0],\r\n    options.wallet.position[2]\r\n  );\r\n  ctx.fillText(\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.splitText3Chunks)(wallet)[2],\r\n    options.wallet.position[0],\r\n    options.wallet.position[3]\r\n  );\r\n};\r\n\r\nconst drawWallet = (ctx, platform, options, wallet) => {\r\n  if (platform === \"bybit\") {\r\n    drawBybitWallet(ctx, options, wallet);\r\n  }\r\n\r\n  if (platform === \"bingx\") {\r\n    drawBingxWallet(ctx, options, wallet);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://screenmaker2/./src/canvasDraw.js?");

/***/ }),

/***/ "./src/fonts.js":
/*!**********************!*\
  !*** ./src/fonts.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FONTS: () => (/* binding */ FONTS)\n/* harmony export */ });\nconst IBMMedium = new FontFace(\"IBM Medium\", \"url(IBMPlexSans-Medium.ttf)\");\r\n\r\nconst IBMBold = new FontFace(\"IBM Bold\", \"url(IBMPlexSans-Bold.ttf)\");\r\n\r\nconst SFProDisplayMed = new FontFace(\r\n  \"SF Pro Display\",\r\n  \"url(SF-Pro-Display-Medium.otf)\"\r\n);\r\n\r\nconst SFProDisplaySemibold = new FontFace(\r\n  \"SF Pro DisplaySemibold\",\r\n  \"url(SF-Pro-Display-Semibold.otf)\"\r\n);\r\n\r\nconst SFProDisplayBold = new FontFace(\r\n  \"SF Pro Display Bold\",\r\n  \"url(SF-Pro-Display-Bold.otf)\"\r\n);\r\n\r\nconst Rubik = new FontFace(\"Rubik\", \"url(Rubik-Regular.ttf)\");\r\nconst Montserrat = new FontFace(\"Montserrat\", \"url(Montserrat-Medium.ttf)\");\r\n\r\nconst FONTS = [\r\n  IBMMedium,\r\n  IBMBold,\r\n  SFProDisplayMed,\r\n  SFProDisplaySemibold,\r\n  SFProDisplayBold,\r\n  Rubik,\r\n  Montserrat,\r\n];\r\n\n\n//# sourceURL=webpack://screenmaker2/./src/fonts.js?");

/***/ }),

/***/ "./src/generateMobileBar.js":
/*!**********************************!*\
  !*** ./src/generateMobileBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawBattery: () => (/* binding */ drawBattery),\n/* harmony export */   generateAndroidMobileBar: () => (/* binding */ generateAndroidMobileBar),\n/* harmony export */   generateIphoneMobileBar: () => (/* binding */ generateIphoneMobileBar)\n/* harmony export */ });\n/* harmony import */ var _canvasDraw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasDraw */ \"./src/canvasDraw.js\");\n\r\n\r\nconst canvas = document.getElementById(\"example\");\r\nconst ctx = canvas.getContext(\"2d\");\r\n\r\nconst generateRandomNumber = (min, max) => {\r\n  if (min > max) {\r\n    // Обмен значениями, если min больше max\r\n    let temp = min;\r\n    min = max;\r\n    max = temp;\r\n  }\r\n\r\n  return Math.floor(Math.random() * (max - min + 1)) + min;\r\n};\r\n\r\nconst IPHONE_ICONS = [\r\n  {\r\n    src: `mobile_bar/Wifi_${generateRandomNumber(1, 3)}.png`,\r\n    cb: (img) => ctx.drawImage(img, 479, 25, 24, 17),\r\n  },\r\n  {\r\n    src: `mobile_bar/gps_${generateRandomNumber(1, 4)}.png`,\r\n    cb: (img) => ctx.drawImage(img, 449, 25, 24, 17),\r\n  },\r\n];\r\n\r\nconst APP_ICONS = [\r\n  \"binance\",\r\n  \"bybit\",\r\n  \"disk space\",\r\n  \"facebook\",\r\n  \"fb msg\",\r\n  \"inst\",\r\n  \"telegram\",\r\n  \"tiktok\",\r\n  \"twitter\",\r\n  \"viber\",\r\n  \"warning\",\r\n  \"yt\",\r\n];\r\n\r\nconst shuffleArray = (array) => {\r\n  for (let i = array.length - 1; i > 0; i--) {\r\n    const j = Math.floor(Math.random() * (i + 1));\r\n    [array[i], array[j]] = [array[j], array[i]]; // обмен элементами\r\n  }\r\n};\r\n\r\nconst getRandomElements = (array, count) => {\r\n  shuffleArray(array);\r\n  return array.slice(0, count);\r\n};\r\n\r\nconst loadAllIcons = async (icons) => {\r\n  const promiseArray = [];\r\n\r\n  icons.forEach((icon) => {\r\n    promiseArray.push(\r\n      new Promise((resolve) => {\r\n        const img = new Image();\r\n\r\n        img.src = icon.src;\r\n        img.onload = function () {\r\n          icon.cb(img);\r\n          resolve();\r\n        };\r\n      })\r\n    );\r\n  });\r\n\r\n  await Promise.all(promiseArray);\r\n};\r\n\r\nconst generateApps = (ctx) => {\r\n  const appsCount = generateRandomNumber(0, 5);\r\n  const apps = getRandomElements(APP_ICONS, appsCount);\r\n  const modifiedApps = [];\r\n  let xPos = 85;\r\n\r\n  for (let i = 0; i < appsCount; i++) {\r\n    modifiedApps.push({\r\n      src: `mobile_bar/apps/${apps[i]}.png`,\r\n      cb: (img) => {\r\n        ctx.drawImage(img, xPos, 18, img.width, img.height);\r\n        xPos += img.width + 10;\r\n      },\r\n    });\r\n  }\r\n\r\n  modifiedApps.push({\r\n    src: `mobile_bar/gps_android_${generateRandomNumber(1, 5)}.png`,\r\n    cb: (signalLevel) => ctx.drawImage(signalLevel, 451, 18, 23, 16),\r\n  });\r\n\r\n  modifiedApps.push({\r\n    src: `mobile_bar/wifi_android_${generateRandomNumber(1, 4)}.png`,\r\n    cb: (wifi) => ctx.drawImage(wifi, 480, 15, 27, 20),\r\n  });\r\n\r\n  if (Math.random() >= 0.5) {\r\n    modifiedApps.push({\r\n      src: `mobile_bar/android-alarm-clock.png`,\r\n      cb: (alarmClock) => ctx.drawImage(alarmClock, 420, 15, 20, 20),\r\n    });\r\n  }\r\n\r\n  return modifiedApps;\r\n};\r\n\r\nconst drawBattery = (ctx, battery) => {\r\n  const batteryValue = (battery / 100) * 33;\r\n  ctx.fillStyle = \"black\";\r\n\r\n  (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawRoundedRect)(ctx, 500, 32, batteryValue, 14.1, 5);\r\n};\r\n\r\nconst generateIphoneMobileBar = async (ctx, platform) => {\r\n  const batteryValue = `${Math.floor(Math.random() * 61) + 20}`;\r\n\r\n  if (platform === \"bybit\") {\r\n    (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawRoundedRectangle)(ctx, 509, 24.2, batteryValue / 3.2, 19, 6);\r\n    await loadAllIcons(IPHONE_ICONS);\r\n\r\n    ctx.fillStyle = \"black\";\r\n    ctx.font = \"17px SF Pro Display Bold\";\r\n    ctx.fillText(batteryValue, 515, 40);\r\n  } else {\r\n    drawBattery(ctx, batteryValue);\r\n  }\r\n};\r\n\r\nconst generateAndroidMobileBar = async (ctx) => {\r\n  const batteryValue = `${Math.floor(Math.random() * 20) + 52}`;\r\n\r\n  const apps = generateApps(ctx);\r\n  await loadAllIcons(apps);\r\n\r\n  ctx.fillStyle = \"white\";\r\n  ctx.font = \"10px Montserrat\";\r\n  ctx.fillText(batteryValue, 524, 29);\r\n};\r\n\n\n//# sourceURL=webpack://screenmaker2/./src/generateMobileBar.js?");

/***/ }),

/***/ "./src/getTemplateByType.js":
/*!**********************************!*\
  !*** ./src/getTemplateByType.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTemplateByType: () => (/* binding */ getTemplateByType)\n/* harmony export */ });\n/* harmony import */ var _canvasDraw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasDraw */ \"./src/canvasDraw.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\r\n\r\n\r\n\r\nconst canvas = document.getElementById(\"example\");\r\nconst previewCanvas = document.getElementById(\"preview\");\r\nconst ctx = canvas.getContext(\"2d\");\r\nconst previewCTX = previewCanvas.getContext(\"2d\");\r\nconst timeInput = document.getElementById(\"time\");\r\nconst mobileTimeInput = document.getElementById(\"mobile-time\");\r\nconst walletInput = document.getElementById(\"wallet\");\r\n\r\nconst getTemplateByType = (type, data) => {\r\n  const { amount, time, mobileTime, wallet, commission } = data;\r\n  const templateOptions = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getTemplateOptions)(type);\r\n  const img = new Image();\r\n  const platform = type.split(\"-\")[0];\r\n  const mobileOS = type.split(\"-\")[2];\r\n\r\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n  ctx.textAlign = \"start\";\r\n\r\n  img.src = `${type}-template.png`;\r\n\r\n  img.onload = async () => {\r\n    ctx.drawImage(img, 0, 0, canvas.width, 1280);\r\n\r\n    mobileTimeInput.value = mobileTime;\r\n    timeInput.value = time;\r\n    walletInput.value = wallet;\r\n\r\n    console.log(\"before draw mobile bar\");\r\n    await (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawMobileBar)(ctx, templateOptions, mobileOS, platform, mobileTime);\r\n    console.log(\"after draw mobile bar\");\r\n\r\n    (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawAmount)(ctx, platform, templateOptions, amount);\r\n\r\n    ctx.textAlign = \"right\";\r\n\r\n    if (type.split(\"-\")[1] === \"withdrawn\") {\r\n      (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawCommission)(ctx, templateOptions, commission);\r\n    }\r\n\r\n    (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawTime)(ctx, templateOptions, time);\r\n    (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawWallet)(ctx, platform, templateOptions, wallet);\r\n    (0,_canvasDraw__WEBPACK_IMPORTED_MODULE_0__.drawHashTransaction)(ctx, templateOptions, platform);\r\n\r\n    if (type.split(\"-\")[0] === \"bingx\") {\r\n      ctx.fillText(\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.generateRandomSevenDigitNumber)(),\r\n        templateOptions.order_number.position[0],\r\n        templateOptions.order_number.position[1]\r\n      );\r\n    }\r\n\r\n    previewCTX.drawImage(canvas, 0, 0, canvas.width / 1.5, 1280 / 1.5);\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack://screenmaker2/./src/getTemplateByType.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFontsToDocument: () => (/* binding */ addFontsToDocument),\n/* harmony export */   createCustomString: () => (/* binding */ createCustomString),\n/* harmony export */   generateBingXTXID: () => (/* binding */ generateBingXTXID),\n/* harmony export */   generateRandomSevenDigitNumber: () => (/* binding */ generateRandomSevenDigitNumber),\n/* harmony export */   generateRandomString: () => (/* binding */ generateRandomString),\n/* harmony export */   getCurrentDateTime: () => (/* binding */ getCurrentDateTime),\n/* harmony export */   getDataFromUser: () => (/* binding */ getDataFromUser),\n/* harmony export */   getTemplateOptions: () => (/* binding */ getTemplateOptions),\n/* harmony export */   splitText2Chunks: () => (/* binding */ splitText2Chunks),\n/* harmony export */   splitText3Chunks: () => (/* binding */ splitText3Chunks),\n/* harmony export */   toggleInput: () => (/* binding */ toggleInput)\n/* harmony export */ });\n/* harmony import */ var _TEMPLATE_OPTIONS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TEMPLATE_OPTIONS */ \"./src/TEMPLATE_OPTIONS.js\");\n\r\n\r\nconst addFontsToDocument = async (fonts) => {\r\n  fonts.forEach((font) => {\r\n    font.load().then((loadedFont) => {\r\n      document.fonts.add(loadedFont);\r\n    });\r\n  });\r\n};\r\n\r\nconst generateRandomString = (length) => {\r\n  let result = \"\";\r\n  const characters = \"0123456789abcdef\";\r\n  const charactersLength = characters.length;\r\n  for (let i = 0; i < length; i++) {\r\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\r\n  }\r\n  return result;\r\n};\r\n\r\nconst createCustomString = () => {\r\n  const prefix = \"0x00\";\r\n  // Учитываем длину префикса (4 символа), вычитаем их из общей длины строки\r\n  const restOfTheString = generateRandomString(64 - prefix.length);\r\n  return prefix + restOfTheString;\r\n};\r\n\r\nconst generateBingXTXID = (length) => {\r\n  let result = \"0x00\";\r\n  const characters = \"abcdefghijklmnopqrstuvwxyz0123456789\";\r\n  const charactersLength = characters.length;\r\n  for (let i = 0; i < length; i++) {\r\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\r\n  }\r\n  return result;\r\n};\r\n\r\nconst splitText2Chunks = (text, count) => {\r\n  const part1 = text.substring(0, count);\r\n  const part2 = text.substring(count);\r\n\r\n  return [part1, part2];\r\n};\r\n\r\nconst splitText3Chunks = (text) => {\r\n  const part1 = text.substring(0, 27);\r\n  const part2 = text.substring(27, 54);\r\n  const part3 = text.substring(54);\r\n\r\n  return [part1, part2, part3];\r\n};\r\n\r\nconst generateRandomSevenDigitNumber = () => {\r\n  let result = \"\";\r\n  const digits = \"0123456789\";\r\n\r\n  for (let i = 0; i < 7; i++) {\r\n    result += digits.charAt(Math.floor(Math.random() * digits.length));\r\n  }\r\n\r\n  return result;\r\n};\r\n\r\nconst getDataFromUser = () => {\r\n  const amountInput = document.getElementById(\"amount\");\r\n  const timeInput = document.getElementById(\"time\");\r\n  const walletInput = document.getElementById(\"wallet\");\r\n  const mobileTimeInput = document.getElementById(\"mobile-time\");\r\n  const commissionInput = document.getElementById(\"commission\");\r\n\r\n  return {\r\n    amount: amountInput.value,\r\n    time: timeInput.value,\r\n    wallet: walletInput.value,\r\n    mobileTime: mobileTimeInput.value,\r\n    commission: commissionInput.value,\r\n  };\r\n};\r\n\r\nconst getTemplateOptions = (type) => {\r\n  const platform = type.split(\"-\")[0];\r\n  const action = type.split(\"-\")[1];\r\n  const mobileOS = type.split(\"-\")[2];\r\n  return _TEMPLATE_OPTIONS__WEBPACK_IMPORTED_MODULE_0__.TEMPLATE_OPTIONS[platform][action][mobileOS];\r\n};\r\n\r\nconst getCurrentDateTime = (isFullTime) => {\r\n  const now = new Date();\r\n  const year = now.getFullYear();\r\n  const month = String(now.getMonth() + 1).padStart(2, \"0\"); // Месяцы начинаются с 0\r\n  const day = String(now.getDate()).padStart(2, \"0\");\r\n  const hours = String(now.getHours()).padStart(2, \"0\");\r\n  const minutes = String(now.getMinutes()).padStart(2, \"0\");\r\n  const seconds = String(now.getSeconds()).padStart(2, \"0\");\r\n\r\n  if (isFullTime) {\r\n    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;\r\n  }\r\n\r\n  return `${hours}:${minutes}`;\r\n};\r\n\r\nconst toggleInput = (input, status) => {\r\n  if (status) {\r\n    input.style.display = \"flex\";\r\n  } else {\r\n    input.style.display = \"none\";\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://screenmaker2/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _getTemplateByType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTemplateByType */ \"./src/getTemplateByType.js\");\n/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts */ \"./src/fonts.js\");\n\r\n\r\n\r\n\r\n\r\nconst getScreenButton = document.getElementById(\"get-screen\");\r\nconst downloadScreenButton = document.getElementById(\"download-screen\");\r\nconst templateInput = document.getElementById(\"template\");\r\nconst commissionInput = document.querySelector(\".commission\");\r\n\r\n// const toggleCanvasButton = document.getElementById(\"toggle-canvas\");\r\n// const canvas = document.getElementById(\"example\");\r\n\r\nawait (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.addFontsToDocument)(_fonts__WEBPACK_IMPORTED_MODULE_3__.FONTS);\r\n\r\n// let CANVAS_VIEW_STATUS = true;\r\n\r\ndocument.fonts.ready.then(() => {\r\n  (0,_getTemplateByType__WEBPACK_IMPORTED_MODULE_2__.getTemplateByType)(templateInput.value, {\r\n    amount: \"\",\r\n    time: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getCurrentDateTime)(true),\r\n    wallet: \"TFtHEwUSYvaepwhiSRAaTqBZf7BwSUqXYw\",\r\n    mobileTime: (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getCurrentDateTime)(),\r\n    commission: \"1\",\r\n  });\r\n});\r\n\r\ntemplateInput.addEventListener(\"change\", (e) => {\r\n  const action = e.target.value.split(\"-\")[1];\r\n  const isWithdrawn = action === \"withdrawn\";\r\n\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.toggleInput)(commissionInput, isWithdrawn);\r\n\r\n  (0,_getTemplateByType__WEBPACK_IMPORTED_MODULE_2__.getTemplateByType)(e.target.value, (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getDataFromUser)());\r\n});\r\n\r\ngetScreenButton.addEventListener(\"click\", () => {\r\n  (0,_getTemplateByType__WEBPACK_IMPORTED_MODULE_2__.getTemplateByType)(templateInput.value, (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getDataFromUser)());\r\n});\r\n\r\n// toggleCanvasButton.addEventListener(\"click\", () => {\r\n//   if (CANVAS_VIEW_STATUS) {\r\n//     canvas.style.display = \"none\";\r\n//   } else {\r\n//     canvas.style.display = \"block\";\r\n//   }\r\n//\r\n//   CANVAS_VIEW_STATUS = !CANVAS_VIEW_STATUS;\r\n// });\r\n\r\ndownloadScreenButton.addEventListener(\"click\", () => {\r\n  const canvas = document.getElementById(\"example\");\r\n  const data = canvas.toDataURL(\"image/png\");\r\n  const downloadLink = document.createElement(\"a\");\r\n\r\n  downloadLink.href = data;\r\n  downloadLink.download = \"screenshot.png\";\r\n\r\n  document.body.appendChild(downloadLink);\r\n  downloadLink.click();\r\n  document.body.removeChild(downloadLink);\r\n});\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://screenmaker2/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;