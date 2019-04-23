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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = sum;\nexports.subtraction = subtraction;\nexports.multiplication = multiplication;\nexports.division = division;\n\n//uso o export para que eu possa importar essa funcao em outro arquivo\n//default - funcao padrao, pode ter somente uma por arquivo\nfunction sum(a, b) {\n  return a + b;\n}\n\nfunction subtraction(a, b) {\n  return a - b;\n}\n\nfunction multiplication(a, b) {\n  return a * b;\n}\n\nfunction division(a, b) {\n  return a / b;\n}\n\n//# sourceURL=webpack:///./functions.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar functions = _interopRequireWildcard(__webpack_require__(/*! ./functions.js */ \"./functions.js\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\n//ARRAY\n//vou declarar um array\n//const number = [ 1, 5, 6, 8, 9, 10 ];\n\n/*\r\n//o map analisa todos os elementos do array e aplica o codigo desejado\r\n//no caso, está sendo feita a multiplicacao de cada item por 10\r\nconst result = number.map(function(item, index)\r\n{\r\n    return item * 10;\r\n});\r\n\r\nconsole.log(result);\r\n*/\n\n/*\r\nconst filter = number.filter(function(item){\r\n    return item % 2 === 0;\r\n});\r\nconsole.log(filter);\r\n*/\n\n/*\r\nconst find = number.find(function(item){\r\n    return item === 8;\r\n});\r\nconsole.log(find);\r\n*/\n//ARROW FUNCTION\n\n/*\r\nconst result = number.map(function (item){\r\n    return item * 10;\r\n});\r\n\r\nconst result = number.map( item => item * 10);\r\nconsole.log(result);\r\n\r\n\r\n//se eu passar um parametro e nao definir um valor padrao, da erro\r\n//quando eu passo um parametro somente, o outro valor vai ser o default\r\n/*function soma (a = 3, b = 6){\r\n    return a + b;\r\n}\r\nconsole.log (soma(1));\r\n\r\nconst sum = (a = 3, b = 6) => a + b;\r\nconsole.log(sum());\r\n*/\n//DESESTRUTURACAO\n\n/*\r\n//criei um objeto com suas propriedades\r\nconst people = {\r\n    name: 'Juliana',\r\n    coffee: 'Yes',\r\n    adress: {\r\n        city: 'Santa Maria',\r\n        state: 'RS'\r\n    }\r\n};\r\nEXEMPLO NEGATIVO\r\nconst name = people.name;\r\nconsole.log(name);\r\n\r\nEXEMPLO POSITIVO\r\nconst {name, coffee, adress: {state}} = people;\r\nconsole.log(name);\r\nconsole.log(state);\r\n*/\n\n/*\r\n//TEMPLATE LITERALS\r\n//inclusao de variaveis dentro de strings\r\nconst name = 'Felipao da Massa';\r\nconst age = 28;\r\n\r\nconsole.log(\"My name is \" + name + \" and I have \" + age + \" years old\");\r\n\r\nconsole.log(`My name is ${name} and I have ${age} years old`);\r\n*/\n//REST\n\n/*\r\nconst people = {\r\n    name: 'Juliana',\r\n    coffee: 'Yes',\r\n    company: 'Meta'\r\n};\r\n\r\nconst {name, ... rest} = people;\r\nconsole.log(name);\r\nconsole.log(rest);\r\n\r\nfunction sum (...params){\r\n    return params.map(total => total * 10);\r\n}\r\nconsole.log(sum(1, 2, 4, 5, 6, 7));\r\n*/\n\n/*\r\n//SPREAD\r\nconst array1 = [1,2,3];\r\nconst array2 = [4,5,6];\r\n\r\nconst array3 = [...array1, ...array2];\r\nconsole.log(array3);\r\n*/\n//aqui no sum, por ser default, posso colocar qualquer nome\n//import sum, {subtraction} from './functions.js'\n//importo todas as funcoes para dentro de functions (qualquer nome)\nconsole.log(functions.division(1, 2));\nconsole.log(functions.subtraction(1, 2));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });