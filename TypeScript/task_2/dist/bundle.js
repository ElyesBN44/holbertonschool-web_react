/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Director: () => (/* binding */ Director),
/* harmony export */   Teacher: () => (/* binding */ Teacher),
/* harmony export */   createEmployee: () => (/* binding */ createEmployee)
/* harmony export */ });
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());

var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());

function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNNQTtJQUFBO0lBWUEsQ0FBQztJQVhDLCtCQUFZLEdBQVo7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0UsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0UsT0FBTywyQkFBMkIsQ0FBQztJQUNyQyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7O0FBRUQ7SUFBQTtJQVlBLENBQUM7SUFYQyw4QkFBWSxHQUFaO1FBQ0UsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNFLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDOztBQUVNLFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQ3BELElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDOUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnV29ya2luZyBmcm9tIGhvbWUnO1xuICB9XG5cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgYSBjb2ZmZWUgYnJlYWsnO1xuICB9XG5cbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgdG8gZGlyZWN0b3IgdGFza3MnO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcbiAgfVxuXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcbiAgfVxuXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgdG8gd29yayc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyIHtcbiAgaWYgKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInICYmIHNhbGFyeSA8IDUwMCkge1xuICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xuICB9XG4gIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbn1cblxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKSk7XG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgxMDAwKSk7XG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgnJDUwMCcpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=