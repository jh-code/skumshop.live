(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-forum-forum-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/forum/forum.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/forum/forum.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>forum works!</p>\n");

/***/ }),

/***/ "./src/app/routes/forum/forum.component.scss":
/*!***************************************************!*\
  !*** ./src/app/routes/forum/forum.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9mb3J1bS9mb3J1bS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/routes/forum/forum.component.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/forum/forum.component.ts ***!
  \*************************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForumComponent = class ForumComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forum.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/forum/forum.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forum.component.scss */ "./src/app/routes/forum/forum.component.scss")).default]
    })
], ForumComponent);



/***/ }),

/***/ "./src/app/routes/forum/forum.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/forum/forum.module.ts ***!
  \**********************************************/
/*! exports provided: ForumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumModule", function() { return ForumModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _forum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forum.component */ "./src/app/routes/forum/forum.component.ts");
/* harmony import */ var _forum_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forum.routing */ "./src/app/routes/forum/forum.routing.ts");





let ForumModule = class ForumModule {
};
ForumModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_forum_component__WEBPACK_IMPORTED_MODULE_3__["ForumComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _forum_routing__WEBPACK_IMPORTED_MODULE_4__["ForumRoutingModule"]
        ]
    })
], ForumModule);



/***/ }),

/***/ "./src/app/routes/forum/forum.routing.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/forum/forum.routing.ts ***!
  \***********************************************/
/*! exports provided: ForumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumRoutingModule", function() { return ForumRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forum.component */ "./src/app/routes/forum/forum.component.ts");




const routes = [
    {
        path: '',
        component: _forum_component__WEBPACK_IMPORTED_MODULE_3__["ForumComponent"]
    }
];
let ForumRoutingModule = class ForumRoutingModule {
};
ForumRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ForumRoutingModule);



/***/ })

}]);
//# sourceMappingURL=routes-forum-forum-module-es2015.js.map