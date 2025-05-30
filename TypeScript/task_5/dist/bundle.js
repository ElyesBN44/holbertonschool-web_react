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
/* harmony export */   createMajorCredits: () => (/* binding */ createMajorCredits),
/* harmony export */   createMinorCredits: () => (/* binding */ createMinorCredits),
/* harmony export */   sumMajorCredits: () => (/* binding */ sumMajorCredits),
/* harmony export */   sumMinorCredits: () => (/* binding */ sumMinorCredits)
/* harmony export */ });
// Factory functions to construct branded types
function createMajorCredits(credits) {
    return { credits: credits, __brand: 'MajorCredits' };
}
function createMinorCredits(credits) {
    return { credits: credits, __brand: 'MinorCredits' };
}
function sumMajorCredits(subject1, subject2) {
    return createMajorCredits(subject1.credits + subject2.credits);
}
function sumMinorCredits(subject1, subject2) {
    return createMinorCredits(subject1.credits + subject2.credits);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDSUEsK0NBQStDO0FBQ3hDLFNBQVMsa0JBQWtCLENBQUMsT0FBZTtJQUNoRCxPQUFPLEVBQUUsT0FBTyxXQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUM5QyxDQUFDO0FBRU0sU0FBUyxrQkFBa0IsQ0FBQyxPQUFlO0lBQ2hELE9BQU8sRUFBRSxPQUFPLFdBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDO0FBQzlDLENBQUM7QUFFTSxTQUFTLGVBQWUsQ0FDN0IsUUFBc0IsRUFDdEIsUUFBc0I7SUFFdEIsT0FBTyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBRU0sU0FBUyxlQUFlLENBQzdCLFFBQXNCLEVBQ3RCLFFBQXNCO0lBRXRCLE9BQU8sa0JBQWtCLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDakUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGludGVyZmFjZSBNYWpvckNyZWRpdHMge1xuICBjcmVkaXRzOiBudW1iZXI7XG4gIF9fYnJhbmQ6ICdNYWpvckNyZWRpdHMnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1pbm9yQ3JlZGl0cyB7XG4gIGNyZWRpdHM6IG51bWJlcjtcbiAgX19icmFuZDogJ01pbm9yQ3JlZGl0cyc7XG59XG5cbi8vIEZhY3RvcnkgZnVuY3Rpb25zIHRvIGNvbnN0cnVjdCBicmFuZGVkIHR5cGVzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFqb3JDcmVkaXRzKGNyZWRpdHM6IG51bWJlcik6IE1ham9yQ3JlZGl0cyB7XG4gIHJldHVybiB7IGNyZWRpdHMsIF9fYnJhbmQ6ICdNYWpvckNyZWRpdHMnIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNaW5vckNyZWRpdHMoY3JlZGl0czogbnVtYmVyKTogTWlub3JDcmVkaXRzIHtcbiAgcmV0dXJuIHsgY3JlZGl0cywgX19icmFuZDogJ01pbm9yQ3JlZGl0cycgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bU1ham9yQ3JlZGl0cyhcbiAgc3ViamVjdDE6IE1ham9yQ3JlZGl0cyxcbiAgc3ViamVjdDI6IE1ham9yQ3JlZGl0c1xuKTogTWFqb3JDcmVkaXRzIHtcbiAgcmV0dXJuIGNyZWF0ZU1ham9yQ3JlZGl0cyhzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1NaW5vckNyZWRpdHMoXG4gIHN1YmplY3QxOiBNaW5vckNyZWRpdHMsXG4gIHN1YmplY3QyOiBNaW5vckNyZWRpdHNcbik6IE1pbm9yQ3JlZGl0cyB7XG4gIHJldHVybiBjcmVhdGVNaW5vckNyZWRpdHMoc3ViamVjdDEuY3JlZGl0cyArIHN1YmplY3QyLmNyZWRpdHMpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9