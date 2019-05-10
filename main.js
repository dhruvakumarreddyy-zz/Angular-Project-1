(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _dashboard_main_dashboard_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-main/dashboard-main.component */ "./src/app/dashboard-main/dashboard-main.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    {
        path: ' dashboard', component: _dashboard_main_dashboard_main_component__WEBPACK_IMPORTED_MODULE_2__["DashboardMainComponent"]
    },
    {
        path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]
    },
    {
        path: '**', component: _dashboard_main_dashboard_main_component__WEBPACK_IMPORTED_MODULE_2__["DashboardMainComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngTraining1';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _dashboard_main_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-main/home/home.component */ "./src/app/dashboard-main/home/home.component.ts");
/* harmony import */ var _dashboard_main_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-main/tasks/tasks.component */ "./src/app/dashboard-main/tasks/tasks.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _dashboard_main_dashboard_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-main/dashboard-main.component */ "./src/app/dashboard-main/dashboard-main.component.ts");
/* harmony import */ var _dashboard_main_home_table1_table1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-main/home/table1/table1.component */ "./src/app/dashboard-main/home/table1/table1.component.ts");
/* harmony import */ var _profile_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/sidenav/sidenav.component */ "./src/app/profile/sidenav/sidenav.component.ts");
/* harmony import */ var _dashboard_main_home_table2_table2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard-main/home/table2/table2.component */ "./src/app/dashboard-main/home/table2/table2.component.ts");
/* harmony import */ var _profile_tasks2_tasks2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/tasks2/tasks2.component */ "./src/app/profile/tasks2/tasks2.component.ts");
/* harmony import */ var _profile_button_div2_button_div2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/button-div2/button-div2.component */ "./src/app/profile/button-div2/button-div2.component.ts");
/* harmony import */ var _profile_table3_table3_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/table3/table3.component */ "./src/app/profile/table3/table3.component.ts");
/* harmony import */ var _profile_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/pagination/pagination.component */ "./src/app/profile/pagination/pagination.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _dashboard_main_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _dashboard_main_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TasksComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _dashboard_main_dashboard_main_component__WEBPACK_IMPORTED_MODULE_9__["DashboardMainComponent"],
                _dashboard_main_home_table1_table1_component__WEBPACK_IMPORTED_MODULE_10__["Table1Component"],
                _profile_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__["SidenavComponent"],
                _dashboard_main_home_table2_table2_component__WEBPACK_IMPORTED_MODULE_12__["Table2Component"],
                _profile_tasks2_tasks2_component__WEBPACK_IMPORTED_MODULE_13__["Tasks2Component"],
                _profile_button_div2_button_div2_component__WEBPACK_IMPORTED_MODULE_14__["ButtonDiv2Component"],
                _profile_table3_table3_component__WEBPACK_IMPORTED_MODULE_15__["Table3Component"],
                _profile_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__["PaginationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard-main/dashboard-main.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-main/dashboard-main.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1tYWluL2Rhc2hib2FyZC1tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard-main/dashboard-main.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-main/dashboard-main.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-tasks></app-tasks>\n<app-home></app-home>\n"

/***/ }),

/***/ "./src/app/dashboard-main/dashboard-main.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard-main/dashboard-main.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMainComponent", function() { return DashboardMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardMainComponent = /** @class */ (function () {
    function DashboardMainComponent() {
    }
    DashboardMainComponent.prototype.ngOnInit = function () {
    };
    DashboardMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-main',
            template: __webpack_require__(/*! ./dashboard-main.component.html */ "./src/app/dashboard-main/dashboard-main.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-main.component.css */ "./src/app/dashboard-main/dashboard-main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardMainComponent);
    return DashboardMainComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-main/home/home.component.css":
/*!********************************************************!*\
  !*** ./src/app/dashboard-main/home/home.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homeDiv{\r\n  margin: 20px;;\r\n}\r\n.buttonDiv{\r\nheight: 35px;\r\n\r\n\r\nmargin: 10px 0px;\r\n}\r\n.buttonDiv2{\r\n\r\n  height: 35px;\r\n\r\n  margin: 10px 0px;\r\n}\r\nbutton{\r\n  height: 30px;\r\n  width: 105px;\r\n  padding:auto;\r\n  margin: auto;\r\n  border-radius: 5PX;\r\n  border: none;\r\n\r\n\r\n}\r\n.l{\r\n  float: left;\r\n  margin: 5px;\r\n}\r\n.r{\r\n  float: right;\r\n  margin: 5px;\r\n}\r\nselect{\r\n  background-color: #01023B;\r\n  color: white;\r\n  border-radius: 25px;\r\n  padding:2px 15px;\r\n\r\n}\r\n.selectDiv{\r\n  float: right;\r\n}\r\nbutton{\r\n  color: white;\r\n}\r\ninput[type='text'] {\r\n  background-image: url('search.png');\r\n  background-position: 180px 0px;\r\n  background-repeat: no-repeat;\r\n  background-size: 25px;\r\n  border-radius: 25px;\r\n  padding:0px 15px;\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkLW1haW4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtBQUNBLFlBQVk7OztBQUdaLGdCQUFnQjtBQUNoQjtBQUNBOztFQUVFLFlBQVk7O0VBRVosZ0JBQWdCO0FBQ2xCO0FBR0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7OztBQUdkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7O0FBRWxCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUNBQXdEO0VBQ3hELDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7OztBQUdsQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1tYWluL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVEaXZ7XHJcbiAgbWFyZ2luOiAyMHB4OztcclxufVxyXG4uYnV0dG9uRGl2e1xyXG5oZWlnaHQ6IDM1cHg7XHJcblxyXG5cclxubWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG4uYnV0dG9uRGl2MntcclxuXHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG5cclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcblxyXG5cclxuYnV0dG9ue1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMTA1cHg7XHJcbiAgcGFkZGluZzphdXRvO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA1UFg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxuXHJcbn1cclxuLmx7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLnJ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5cclxuc2VsZWN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAyM0I7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgcGFkZGluZzoycHggMTVweDtcclxuXHJcbn1cclxuLnNlbGVjdERpdntcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuYnV0dG9ue1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NlYXJjaC5wbmcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDE4MHB4IDBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHBhZGRpbmc6MHB4IDE1cHg7XHJcblxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard-main/home/home.component.html":
/*!*********************************************************!*\
  !*** ./src/app/dashboard-main/home/home.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"homeDiv\">\n  <div class=\"buttonDiv container-fluid\">\n    <p class=\"float-left m-1\"> <b>Pending Approvels</b> </p>\n    <div>\n      <button class=\" l \" style= \"background-color:#E3900C\">Increments</button>\n    </div>\n\n    <div>\n      <button class=\" l \" style= \"background-color:#079DFC\"> Pay-fixation</button>\n    </div>\n\n    <div>\n      <button class=\" l \" style= \"background-color:#7FB716\">Pramotions</button>\n    </div>\n\n\n    <div>\n      <button class=\"l \" style= \"background-color:#E53C29\">Transfer</button>\n    </div>\n\n    <div class=\"selectDiv  r\">\n      <select >\n          <option value=\"volvo\">1st Battalion</option>\n          <option value=\"saab\">1st Battalion</option>\n          <option value=\"opel\">1st Battalion</option>\n          <option value=\"audi\">1st Battalion</option>\n        </select>\n      </div>\n\n      <div  class=\"inputDiv r\">\n        <input type=\"text\" class=\"search-query mac-style\" placeholder=\"search \">\n    </div>\n\n   </div>\n\n<div class=\"table1Div container-fluid\">\n  <app-table1></app-table1>\n</div>\n\n<div class=\"buttonDiv2 container-fluid \">\n    <p class=\"float-left m-1\"><b>Employee List</b> </p>\n    <div class=\"selectDiv  r\">\n        <select >\n            <option value=\"volvo\">1st Battalion</option>\n            <option value=\"saab\">1st Battalion</option>\n            <option value=\"opel\">1st Battalion</option>\n            <option value=\"audi\">1st Battalion</option>\n          </select>\n        </div>\n\n        <div  class=\"inputDiv r\">\n          <input type=\"text\" class=\"search-query mac-style\" placeholder=\"search \">\n      </div>\n\n\n</div>\n<div class=\"table2Div container-fluid\">\n    <app-table2></app-table2>\n</div>\n\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard-main/home/home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard-main/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard-main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard-main/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-main/home/table1/table1.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-main/home/table1/table1.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nthead{\r\n  color: white;\r\n  width: 100%;\r\n  margin: 0px auto;\r\nposition: absolute;\r\ndisplay: table;\r\n\r\n\r\n}\r\ntbody{\r\n\r\nwidth: 100%;\r\n\r\n}\r\ntr:nth-child(even) {background-color: #f2f2f2;}\r\n.table1{\r\n  border-radius: 15px;\r\n  height: 250px;\r\n  box-shadow: 5px 5px 10px rgb(212, 212, 214);\r\n  width: 100%;\r\n }\r\ntable{\r\n   font-size: 12px;\r\n\r\n\r\n }\r\n.tableh{\r\n  width: 100%;\r\n  height: 10%;\r\n\r\n }\r\n.header{\r\n  border-top-left-radius: 15px;\r\n  border-top-right-radius: 15px;\r\n }\r\n.tableh th{\r\nheight: 35px;;\r\n   padding:5px;\r\n }\r\n.tableb{\r\nwidth: 100%;\r\nheight: 90%;\r\n }\r\na{\r\n   color: black;\r\n }\r\n.header{\r\nwidth: calc(100% - 70px);\r\noverflow: auto;\r\nmargin: auto;\r\n\r\n\r\n   background: black;\r\n   color: white;\r\nposition: absolute;\r\n\r\n }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkLW1haW4vaG9tZS90YWJsZTEvdGFibGUxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGNBQWM7OztBQUdkO0FBQ0E7O0FBRUEsV0FBVzs7QUFFWDtBQUlBLG9CQUFvQix5QkFBeUIsQ0FBQztBQUU5QztFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLFdBQVc7Q0FDWjtBQUNBO0dBQ0UsZUFBZTs7O0NBR2pCO0FBQ0E7RUFDQyxXQUFXO0VBQ1gsV0FBVzs7Q0FFWjtBQUNBO0VBQ0MsNEJBQTRCO0VBQzVCLDZCQUE2QjtDQUM5QjtBQUNBO0FBQ0QsWUFBWTtHQUNULFdBQVc7Q0FDYjtBQUNBO0FBQ0QsV0FBVztBQUNYLFdBQVc7Q0FDVjtBQUNBO0dBQ0UsWUFBWTtDQUNkO0FBR0E7QUFDRCx3QkFBd0I7QUFDeEIsY0FBYztBQUNkLFlBQVk7OztHQUdULGlCQUFpQjtHQUNqQixZQUFZO0FBQ2Ysa0JBQWtCOztDQUVqQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1tYWluL2hvbWUvdGFibGUxL3RhYmxlMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRoZWFke1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmRpc3BsYXk6IHRhYmxlO1xyXG5cclxuXHJcbn1cclxudGJvZHl7XHJcblxyXG53aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuXHJcbi50YWJsZTF7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMjEyLCAyMTIsIDIxNCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiB0YWJsZXtcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuXHJcbiB9XHJcbiAudGFibGVoe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAlO1xyXG5cclxuIH1cclxuIC5oZWFkZXJ7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuIH1cclxuIC50YWJsZWggdGh7XHJcbmhlaWdodDogMzVweDs7XHJcbiAgIHBhZGRpbmc6NXB4O1xyXG4gfVxyXG4gLnRhYmxlYntcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogOTAlO1xyXG4gfVxyXG4gYXtcclxuICAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG5cclxuXHJcbiAuaGVhZGVye1xyXG53aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XHJcbm92ZXJmbG93OiBhdXRvO1xyXG5tYXJnaW46IGF1dG87XHJcblxyXG5cclxuICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard-main/home/table1/table1.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-main/home/table1/table1.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"table-responsive table-hover table1 \">\n  <div class=\"tableh\">\n    <table class=\"header table-responsive \">\n        <tr>\n            <th width=\"63\">No</th>\n            <th width=\"90\">Name</th>\n            <th width=\"130\">Empcode</th>\n            <th width=\"180\">Rank</th>\n            <th width=\"180\">Battalion</th>\n            <th width=\"145\">Section</th>\n            <th width=\"170\">Created date</th>\n            <th  width=\"180\">Modified date</th>\n            <th>Status</th>\n          </tr>\n    </table>\n  </div>\n  <div class=\"tableb\">\n  <table class=\"table table-fixed fixed_headers tableb\">\n    <thead class=\"bg-dark \">\n\n    </thead>\n    <tbody>\n    <tr>\n        <th>1</th>\n        <th>abcd</th>\n        <a routerLink=\"/profile\"><th>1234</th> </a>\n        <th>commandabt</th>\n        <th>1st-battalion</th>\n        <th>increment</th>\n        <th>12- 12-2012</th>\n        <th>12-12-2012</th>\n        <th>pending</th>\n      </tr>\n\n      <tr>\n          <th>2</th>\n          <th>abcd</th>\n          <a routerLink=\"/profile\"><th>1234</th> </a>\n          <th>commandabt</th>\n          <th>1st-battalion</th>\n          <th>increment</th>\n          <th>12-12-2012</th>\n          <th>12-12-2012</th>\n          <th>pending</th>\n          </tr>\n\n          <tr>\n              <th>1</th>\n              <th>abcd</th>\n              <a routerLink=\"/profile\"><th>1234</th> </a>\n              <th>commandabt</th>\n              <th>1st-battalion</th>\n              <th>increment</th>\n              <th>12-12-2012</th>\n              <th>12-12-2012</th>\n              <th>pending</th>\n            </tr>\n              <tr>\n                  <th>1</th>\n                  <th>abcd</th>\n                  <a routerLink=\"/profile\"><th>1234</th> </a>\n                  <th>commandabt</th>\n                  <th>1st-battalion</th>\n                  <th>increment</th>\n                  <th>12-12-2012</th>\n                  <th>12-12-2012</th>\n                  <th>pending</th>\n                </tr>\n                  <tr>\n                      <th>1</th>\n                      <th>abcd</th>\n                      <th>1234</th>\n                      <th>commandabt</th>\n                      <th>1st-battalion</th>\n                      <th>increment</th>\n                      <th>12-12-2012</th>\n                      <th>12-12-2012</th>\n                      <th>pending</th>\n                      </tr>\n                      <tr>\n                        <th>1</th>\n                        <th>abcd</th>\n                        <th>1234</th>\n                        <th>commandabt</th>\n                        <th>1st-battalion</th>\n                        <th>increment</th>\n                        <th>12-12-2012</th>\n                        <th>12-12-2012</th>\n                        <th>pending</th>\n                        </tr>\n\n                    </tbody>\n\n  </table>\n</div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard-main/home/table1/table1.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard-main/home/table1/table1.component.ts ***!
  \****************************************************************/
/*! exports provided: Table1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table1Component", function() { return Table1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Table1Component = /** @class */ (function () {
    function Table1Component() {
    }
    Table1Component.prototype.ngOnInit = function () {
    };
    Table1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table1',
            template: __webpack_require__(/*! ./table1.component.html */ "./src/app/dashboard-main/home/table1/table1.component.html"),
            styles: [__webpack_require__(/*! ./table1.component.css */ "./src/app/dashboard-main/home/table1/table1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Table1Component);
    return Table1Component;
}());



/***/ }),

/***/ "./src/app/dashboard-main/home/table2/table2.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-main/home/table2/table2.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nthead{\r\n  color: white;\r\n}\r\ntr:nth-child(even) {background-color: #f2f2f2;}\r\nthead{\r\n  color: white;\r\n  width: 100%;\r\n  margin: 0px auto;\r\nposition: absolute;\r\ndisplay: table;\r\n\r\n\r\n}\r\ntbody{\r\n\r\nwidth: 100%;\r\n\r\n}\r\ntr:nth-child(even) {background-color: #f2f2f2;}\r\n.table1{\r\n  border-radius: 15px;\r\n  height: 250px;\r\n  box-shadow: 5px 5px 10px rgb(212, 212, 214);\r\n  width: 100%;\r\n }\r\ntable{\r\n   font-size: 12px;\r\n\r\n\r\n }\r\n.tableh{\r\n  width: 100%;\r\n  height: 10%;\r\n\r\n }\r\n.header{\r\n  border-top-left-radius: 15px;\r\n  border-top-right-radius: 15px;\r\n }\r\n.tableh th{\r\nheight: 35px;;\r\n   padding:5px;\r\n }\r\n.tableb{\r\nwidth: 100%;\r\nheight: 90%;\r\n }\r\na{\r\n   color: black;\r\n }\r\n.header{\r\nwidth: calc(100% - 70px);\r\noverflow: auto;\r\nmargin: auto;\r\n\r\n\r\n   background: black;\r\n   color: white;\r\nposition: absolute;\r\n\r\n }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkLW1haW4vaG9tZS90YWJsZTIvdGFibGUyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0Esb0JBQW9CLHlCQUF5QixDQUFDO0FBRTlDO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIsa0JBQWtCO0FBQ2xCLGNBQWM7OztBQUdkO0FBQ0E7O0FBRUEsV0FBVzs7QUFFWDtBQUlBLG9CQUFvQix5QkFBeUIsQ0FBQztBQUU5QztFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLFdBQVc7Q0FDWjtBQUNBO0dBQ0UsZUFBZTs7O0NBR2pCO0FBQ0E7RUFDQyxXQUFXO0VBQ1gsV0FBVzs7Q0FFWjtBQUNBO0VBQ0MsNEJBQTRCO0VBQzVCLDZCQUE2QjtDQUM5QjtBQUNBO0FBQ0QsWUFBWTtHQUNULFdBQVc7Q0FDYjtBQUNBO0FBQ0QsV0FBVztBQUNYLFdBQVc7Q0FDVjtBQUNBO0dBQ0UsWUFBWTtDQUNkO0FBR0E7QUFDRCx3QkFBd0I7QUFDeEIsY0FBYztBQUNkLFlBQVk7OztHQUdULGlCQUFpQjtHQUNqQixZQUFZO0FBQ2Ysa0JBQWtCOztDQUVqQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1tYWluL2hvbWUvdGFibGUyL3RhYmxlMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnRoZWFke1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG50cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG5cclxudGhlYWR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuZGlzcGxheTogdGFibGU7XHJcblxyXG5cclxufVxyXG50Ym9keXtcclxuXHJcbndpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG5cclxuLnRhYmxlMXtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigyMTIsIDIxMiwgMjE0KTtcclxuICB3aWR0aDogMTAwJTtcclxuIH1cclxuIHRhYmxle1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcblxyXG5cclxuIH1cclxuIC50YWJsZWh7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcblxyXG4gfVxyXG4gLmhlYWRlcntcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gfVxyXG4gLnRhYmxlaCB0aHtcclxuaGVpZ2h0OiAzNXB4OztcclxuICAgcGFkZGluZzo1cHg7XHJcbiB9XHJcbiAudGFibGVie1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiA5MCU7XHJcbiB9XHJcbiBhe1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcblxyXG5cclxuIC5oZWFkZXJ7XHJcbndpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcclxub3ZlcmZsb3c6IGF1dG87XHJcbm1hcmdpbjogYXV0bztcclxuXHJcblxyXG4gICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgY29sb3I6IHdoaXRlO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gfVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard-main/home/table2/table2.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-main/home/table2/table2.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive table-hover table1 \">\n    <div class=\"tableh\">\n      <table class=\"header table-responsive \">\n          <tr>\n              <th width=\"70\">No</th>\n              <th width=\"100\">Name</th>\n              <th width=\"150\">Empcode</th>\n              <th width=\"195\">Rank</th>\n              <th width=\"205\">Battalion</th>\n              <th width=\"165\">Section</th>\n              <th width=\"185\">Created date</th>\n              <th  >Modified date</th>\n\n            </tr>\n      </table>\n    </div>\n    <div class=\"tableb\">\n    <table class=\"table table-fixed fixed_headers tableb\">\n      <thead class=\"bg-dark \">\n\n      </thead>\n      <tbody>\n      <tr>\n          <th>1</th>\n          <th>abcd</th>\n          <a routerLink=\"/profile\"><th>1234</th> </a>\n          <th>commandabt</th>\n          <th>1st-battalion</th>\n          <th>increment</th>\n          <th>12-12-2012</th>\n          <th>12-12-2012</th>\n\n        </tr>\n\n        <tr>\n            <th>2</th>\n            <th>abcd</th>\n            <a routerLink=\"/profile\"><th>1234</th> </a>\n            <th>commandabt</th>\n            <th>1st-battalion</th>\n            <th>increment</th>\n            <th>12-12-2012</th>\n            <th>12-12-2012</th>\n\n            </tr>\n\n            <tr>\n                <th>1</th>\n                <th>abcd</th>\n                <a routerLink=\"/profile\"><th>1234</th> </a>\n                <th>commandabt</th>\n                <th>1st-battalion</th>\n                <th>increment</th>\n                <th>12-12-2012</th>\n                <th>12-12-2012</th>\n\n              </tr>\n                <tr>\n                    <th>1</th>\n                    <th>abcd</th>\n                    <a routerLink=\"/profile\"><th>1234</th> </a>\n                    <th>commandabt</th>\n                    <th>1st-battalion</th>\n                    <th>increment</th>\n                    <th>12-12-2012</th>\n                    <th>12-12-2012</th>\n\n                  </tr>\n                    <tr>\n                        <th>1</th>\n                        <th>abcd</th>\n                        <th>1234</th>\n                        <th>commandabt</th>\n                        <th>1st-battalion</th>\n                        <th>increment</th>\n                        <th>12-12-2012</th>\n                        <th>12-12-2012</th>\n\n                        </tr>\n                        <tr>\n                          <th>1</th>\n                          <th>abcd</th>\n                          <th>1234</th>\n                          <th>commandabt</th>\n                          <th>1st-battalion</th>\n                          <th>increment</th>\n                          <th>12-12-2012</th>\n                          <th>12-12-2012</th>\n\n                          </tr>\n\n                      </tbody>\n\n    </table>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/dashboard-main/home/table2/table2.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard-main/home/table2/table2.component.ts ***!
  \****************************************************************/
/*! exports provided: Table2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table2Component", function() { return Table2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Table2Component = /** @class */ (function () {
    function Table2Component() {
    }
    Table2Component.prototype.ngOnInit = function () {
    };
    Table2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table2',
            template: __webpack_require__(/*! ./table2.component.html */ "./src/app/dashboard-main/home/table2/table2.component.html"),
            styles: [__webpack_require__(/*! ./table2.component.css */ "./src/app/dashboard-main/home/table2/table2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Table2Component);
    return Table2Component;
}());



/***/ }),

/***/ "./src/app/dashboard-main/tasks/tasks.component.css":
/*!**********************************************************!*\
  !*** ./src/app/dashboard-main/tasks/tasks.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container1{\r\n  display: flex;\r\n  background-color: #E5E9EA;\r\n  height: 100px;\r\nbox-shadow: 5px 5px 10px rgb(212, 212, 214);\r\n\r\n\r\n}\r\n\r\nh4{\r\n  color: gray;\r\n  float: left;\r\n  margin-top: 25px;\r\n  padding:0px 20px;\r\n  font-size: 20px;\r\n\r\n}\r\n\r\nh3{\r\nposition: absolute;\r\nleft: 100px;\r\nfont-size: 25px;\r\n}\r\n\r\n.fancy-border {\r\n\r\n\r\n  text-align:center;\r\n  border-top: 5px solid;\r\n  -o-border-image:   linear-gradient(to right, #E3900C 25%, #079DFC 25%, #079DFC 50%,#7FB716 50%, #7FB716 75%, #E53C29 75%) 5;\r\n     border-image:   linear-gradient(to right, #E3900C 25%, #079DFC 25%, #079DFC 50%,#7FB716 50%, #7FB716 75%, #E53C29 75%) 5;\r\n}\r\n\r\n.main1{\r\n  display: grid;\r\n  grid-template-columns: 25% 25% 25% 25% ;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.main2{\r\n  display: flex;\r\n}\r\n\r\n.box1{\r\n  border-right: 1px solid gray;\r\n   height: 50px;\r\n\r\n  align-items: center;\r\n  justify-content: center;\r\nposition: relative;\r\n  margin-top: 15px;\r\n  box-sizing: border-box;\r\n\r\n}\r\n\r\n.task-img{\r\n  position: absolute;\r\n  left: 20px;\r\n}\r\n\r\n.box2{\r\n\r\n  height: 50px;\r\n\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n  margin-top: 15px;\r\n  box-sizing: border-box;\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkLW1haW4vdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtBQUNmLDJDQUEyQzs7O0FBRzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7O0FBRWpCOztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxlQUFlO0FBQ2Y7O0FBQ0E7OztFQUdFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsMkhBQXdIO0tBQXhILHdIQUF3SDtBQUMxSDs7QUFHQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDRCQUE0QjtHQUMzQixZQUFZOztFQUViLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekIsa0JBQWtCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7O0FBRXhCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxZQUFZOztFQUVaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7O0FBRXhCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkLW1haW4vdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIxe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTlFQTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG5ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiKDIxMiwgMjEyLCAyMTQpO1xyXG5cclxuXHJcbn1cclxuXHJcbmg0e1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgcGFkZGluZzowcHggMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcblxyXG59XHJcbmgze1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmxlZnQ6IDEwMHB4O1xyXG5mb250LXNpemU6IDI1cHg7XHJcbn1cclxuLmZhbmN5LWJvcmRlciB7XHJcblxyXG5cclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBib3JkZXItdG9wOiA1cHggc29saWQ7XHJcbiAgYm9yZGVyLWltYWdlOiAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0UzOTAwQyAyNSUsICMwNzlERkMgMjUlLCAjMDc5REZDIDUwJSwjN0ZCNzE2IDUwJSwgIzdGQjcxNiA3NSUsICNFNTNDMjkgNzUlKSA1O1xyXG59XHJcblxyXG5cclxuLm1haW4xe1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMjUlIDI1JSAyNSUgO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWFpbjJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJveDF7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcclxuICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxufVxyXG4udGFzay1pbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3gye1xyXG5cclxuICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard-main/tasks/tasks.component.html":
/*!***********************************************************!*\
  !*** ./src/app/dashboard-main/tasks/tasks.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container1 fancy-border\">\n  <div class=\"main1\">\n\n    <div class=\"box1\">\n<img src=\"../../assets/images/graph.jpg\"  width=\"50px\" height=\"50px\" alt=\"\" class=\"task-img\">\n<h3 class=\"float-right\">26 Pending</h3>\n<br>\n<h4 >Increments</h4>\n\n  </div>\n\n  <div class=\"box1\">\n      <img src=\"../../assets/images/bank.png\"  width=\"50px\" height=\"50px\" alt=\"\" class=\"task-img\">\n      <h3 class=\"float-right\">168 Pending</h3>\n      <br>\n      <h4 >Pay-fixations</h4>\n\n    </div>\n\n    <div class=\"box1\">\n        <img src=\"../../assets/images/bookmark.png\"  width=\"50px\" height=\"50px\" alt=\"\" class=\"task-img\">\n        <h3 class=\"float-right\">85 Overall</h3>\n        <br>\n        <h4 >Pramotions</h4>\n\n      </div>\n\n      <div class=\"box2\">\n          <img src=\"../../assets/images/people.png\"  width=\"50px\" height=\"50px\" alt=\"\" class=\"task-img\">\n          <h3 class=\"float-right\">49 Pending</h3>\n          <br>\n          <h4 >Transfers & Postings</h4>\n\n        </div>\n\n      </div>\n\n      </div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/dashboard-main/tasks/tasks.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard-main/tasks/tasks.component.ts ***!
  \*********************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/dashboard-main/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/dashboard-main/tasks/tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n  margin:0px 60px;\r\n}\r\n.dropdown-item{\r\n  padding: 5px;\r\n}\r\n.dropdown-menu{\r\n  min-width: 8rem !important ;\r\n}\r\n.navdiv{\r\n  background-color: white;\r\n}\r\n.b1{\r\n  border-right: 1px solid gray;\r\n  padding: 0px 25px\r\n}\r\n/* .b2{\r\n\r\n  padding: 0px 25px\r\n} */\r\n#abcd:hover{\r\n  border-bottom: 5px solid black;\r\n}\r\n.b1 img:hover{\r\n  border-bottom: none;\r\n}\r\n/*\r\n\r\n.b2:hover{\r\n  background-color: black;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCO0FBQ0Y7QUFDQTs7O0dBR0c7QUFFSDtFQUNFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7Ozs7R0FJRyIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgbWFyZ2luOjBweCA2MHB4O1xyXG59XHJcbi5kcm9wZG93bi1pdGVte1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uZHJvcGRvd24tbWVudXtcclxuICBtaW4td2lkdGg6IDhyZW0gIWltcG9ydGFudCA7XHJcbn1cclxuLm5hdmRpdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYjF7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcclxuICBwYWRkaW5nOiAwcHggMjVweFxyXG59XHJcbi8qIC5iMntcclxuXHJcbiAgcGFkZGluZzogMHB4IDI1cHhcclxufSAqL1xyXG5cclxuI2FiY2Q6aG92ZXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uYjEgaW1nOmhvdmVye1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbi8qXHJcblxyXG4uYjI6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn0gKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navdiv\">\n<nav class=\"navbar navbar-expand-lg navbar-light\"style=\"background-color:white;\">\n  <a class=\"navbar-brand\" routerLink=\"/dashboard\">\n    <img src=\"../../assets/images/logo.png\" width=\"70px\" height=\"75px\" class=\"d-inline-block align-top\" alt=\"\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active \">\n            <a class=\"nav-link\" href=\"#\"> <h3><i> e-</i> ServiceBook</h3> </a>\n          </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active  \">\n\n        <a class=\"nav-link\" id=\"abcd\" href=\"#\"><img src=\"../../assets/images/dashboard.png\" width=\"25\" height=\"25 alt=\" >  Dashboard </a>\n\n      </li>\n      <li class=\"nav-item \">\n        <a class=\"nav-link active\" href=\"#\"><img src=\"../../assets/images/lines.png\" width=\"25\" height=\"25 alt=\" > Profile</a>\n      </li>\n      <li class=\"nav-item dropdown b2\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <img src=\"../../assets/images/profile.jpg\" width=\"25\" height=\"25\" class=\"d-inline-block align-top rounded\" alt=\"\">\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n</div>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/profile/button-div2/button-div2.component.css":
/*!***************************************************************!*\
  !*** ./src/app/profile/button-div2/button-div2.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.buttonDiv{\r\nbackground-color: white;\r\nheight: 80px;\r\nbackground-color: #E8EEEE;\r\n}\r\n.btnmain{\r\n  padding: 20px;\r\n}\r\nbutton{\r\n\r\n  border-radius: 5PX;\r\n  border: none;\r\n  background-color: white;\r\n  height: 25px;\r\n  width: 100px;\r\n  font-size: 12px;\r\n  color:gray;\r\n}\r\n.btn1:hover\r\n{\r\nbackground-image:none;\r\nbackground-color:#01023B;\r\ncolor: white;\r\n}\r\n.btn2:hover\r\n{\r\nbackground-image:none;\r\nbackground-color:#01023B;\r\ncolor: white;\r\n}\r\n.btn1{\r\n  height: 30px;\r\n\r\n\r\n}\r\n.btn2{\r\n  height: 40px;\r\n  box-shadow: 5px -5px  10px  rgb(212, 212, 214);\r\n\r\n}\r\n.l{\r\n  float: left;\r\n  margin: 5px;\r\n}\r\n.r{\r\n  float: right;\r\n  margin: 5px;\r\n}\r\n.icn{\r\n  padding: 0px 10px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9idXR0b24tZGl2Mi9idXR0b24tZGl2Mi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFNQTs7QUFFQSxxQkFBcUI7QUFDckIsd0JBQXdCO0FBQ3hCLFlBQVk7QUFDWjtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQix3QkFBd0I7QUFDeEIsWUFBWTtBQUNaO0FBQ0E7RUFDRSxZQUFZOzs7QUFHZDtBQUdBO0VBQ0UsWUFBWTtFQUNaLDhDQUE4Qzs7QUFFaEQ7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvYnV0dG9uLWRpdjIvYnV0dG9uLWRpdjIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYnV0dG9uRGl2e1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuaGVpZ2h0OiA4MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRThFRUVFO1xyXG59XHJcbi5idG5tYWlue1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG5cclxuICBib3JkZXItcmFkaXVzOiA1UFg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOmdyYXk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uYnRuMTpob3ZlclxyXG57XHJcbmJhY2tncm91bmQtaW1hZ2U6bm9uZTtcclxuYmFja2dyb3VuZC1jb2xvcjojMDEwMjNCO1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0bjI6aG92ZXJcclxue1xyXG5iYWNrZ3JvdW5kLWltYWdlOm5vbmU7XHJcbmJhY2tncm91bmQtY29sb3I6IzAxMDIzQjtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcbi5idG4xe1xyXG4gIGhlaWdodDogMzBweDtcclxuXHJcblxyXG59XHJcblxyXG5cclxuLmJ0bjJ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IDVweCAtNXB4ICAxMHB4ICByZ2IoMjEyLCAyMTIsIDIxNCk7XHJcblxyXG59XHJcblxyXG4ubHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4ucntcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmljbntcclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/profile/button-div2/button-div2.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profile/button-div2/button-div2.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"buttonDiv container\">\n    <div class=\"btnmain\">\n    <div class=\" buttonDiv1\">\n    <div> <b><p class=\"float-left m-1\">General Entries</p></b> </div>\n\n    <div>\n      <button class=\" l btn1\" >Selection</button>\n    </div>\n\n    <div>\n      <button class=\" l btn1\" >Appointment</button>\n    </div>\n\n    <div>\n      <button class=\" l btn1\" >Provision</button>\n    </div>\n\n\n    <div>\n      <button class=\"l btn1\" >Corpus Fund</button>\n    </div>\n    <div class=\"buttonDiv2\">\n\n    <div class=\"r\">\n\n      <button class=\"btn2\" > <i class=\"fas fa-fax icn\"></i>Print</button>\n      </div>\n\n      <div  class=\" r\">\n\n        <button class=\"btn2\" > <i class=\"fas fa-plus icn\"></i>Add</button>\n    </div>\n  </div>\n</div>\n   </div>\n\n"

/***/ }),

/***/ "./src/app/profile/button-div2/button-div2.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/button-div2/button-div2.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonDiv2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonDiv2Component", function() { return ButtonDiv2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonDiv2Component = /** @class */ (function () {
    function ButtonDiv2Component() {
    }
    ButtonDiv2Component.prototype.ngOnInit = function () {
    };
    ButtonDiv2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button-div2',
            template: __webpack_require__(/*! ./button-div2.component.html */ "./src/app/profile/button-div2/button-div2.component.html"),
            styles: [__webpack_require__(/*! ./button-div2.component.css */ "./src/app/profile/button-div2/button-div2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonDiv2Component);
    return ButtonDiv2Component;
}());



/***/ }),

/***/ "./src/app/profile/pagination/pagination.component.css":
/*!*************************************************************!*\
  !*** ./src/app/profile/pagination/pagination.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination {\r\n  display: flex;\r\n\r\n}\r\n\r\n.pagination a {\r\n  color: white;\r\n  float: left;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  background-color: gray;\r\n  border-radius: 5px;\r\n  margin: 2px;\r\n\r\njustify-content: center;\r\nalign-items: center;\r\n\r\n}\r\n\r\n.icon{\r\n  background-color:none;\r\n}\r\n\r\n.pagination a:hover:not(.active) {background-color: #01023B;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXOztBQUViLHVCQUF1QjtBQUN2QixtQkFBbUI7O0FBRW5COztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUlBLGtDQUFrQyx5QkFBeUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcblxyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuLmljb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi5wYWdpbmF0aW9uIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwMjNCO31cclxuIl19 */"

/***/ }),

/***/ "./src/app/profile/pagination/pagination.component.html":
/*!**************************************************************!*\
  !*** ./src/app/profile/pagination/pagination.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pagination\">\n  <div><a href=\"#\" class=\"icon\">&laquo;</a></div>\n    <div> <a href=\"#\">1</a></div>\n   <div> <a class=\"active\" href=\"#\">2</a></div>\n   <div> <a href=\"#\">3</a></div>\n   <div>  <a href=\"#\">4</a></div>\n   <div>    <a href=\"#\">5</a></div>\n   <div>  <a href=\"#\">6</a></div>\n   <div><a href=\"#\" class=\"icon\">&raquo;</a></div>\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/profile/pagination/pagination.component.ts":
/*!************************************************************!*\
  !*** ./src/app/profile/pagination/pagination.component.ts ***!
  \************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/profile/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/profile/pagination/pagination.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-sidenav></app-sidenav>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/sidenav/sidenav.component.css":
/*!*******************************************************!*\
  !*** ./src/app/profile/sidenav/sidenav.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar-wrapper {\r\n  min-height: 100vh;\r\n  margin-left: -15rem;\r\n  transition: margin .25s ease-out;\r\n  background-color: #E8EEEE;\r\n}\r\n\r\n#sidebar-wrapper .sidebar-heading {\r\n  padding: 0.875rem 1.25rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#sidebar-wrapper .list-group {\r\n  width: 15rem;\r\n}\r\n\r\n#page-content-wrapper {\r\n  min-width: 100vw;\r\n  background-color:white;\r\n}\r\n\r\n#wrapper.toggled #sidebar-wrapper {\r\n  margin-left: 0;\r\n}\r\n\r\n.list-group-item{\r\n  color: white;\r\n}\r\n\r\n.sidebar-headingb a{\r\n  color: white !important;\r\n}\r\n\r\n.sidenavHead{\r\n  color: white;\r\n}\r\n\r\nthead{\r\n  color: white;\r\n}\r\n\r\ntr:nth-child(even) {background-color: #f2f2f2;}\r\n\r\n.table3{\r\n  border-radius: 15px;\r\n  background-color: #E8EEEE;\r\n  margin: 0px 20px;\r\n\r\n\r\n }\r\n\r\n.tdiv{\r\n  background-color: #E8EEEE;\r\n}\r\n\r\ntable{\r\n   font-size: 12px;\r\n\r\n }\r\n\r\n.head{\r\n   padding: 0px 15px;\r\n }\r\n\r\n.task2Div{\r\n\r\n   background-color: #E8EEEE;\r\n }\r\n\r\n.buttonDiv2{\r\n\r\nbackground-color: #E8EEEE;\r\n}\r\n\r\n.pageSelector{\r\n  float: right;\r\n}\r\n\r\n.icn{\r\n  padding: 5px;\r\n}\r\n\r\n.pageSelector{\r\n  margin: 10px;\r\n}\r\n\r\n.list-group-flush :hover{\r\n  border-right: 5px solid rgb(7, 157, 252);\r\n  border-left: 5px solid rgb(7, 157, 252);\r\n}\r\n\r\n.b1{\r\n  border-right: 1px solid gray;\r\n  padding: 0px 25px;\r\n}\r\n\r\n/* .b2{\r\n\r\n  padding: 0px 25px;\r\n} */\r\n\r\n.b1 :hover{\r\n  border-bottom: 5px solid black;\r\n}\r\n\r\n.b2 :hover{\r\n  background-color: black;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  #sidebar-wrapper {\r\n    margin-left: 0;\r\n  }\r\n\r\n  #page-content-wrapper {\r\n    min-width: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  #wrapper.toggled #sidebar-wrapper {\r\n    margin-left: -15rem;\r\n  }\r\n}\r\n\r\n#sidebar-wrapper {\r\n  min-height: 100vh;\r\n  margin-left: -15rem;\r\n  transition: margin .25s ease-out;\r\n}\r\n\r\n#sidebar-wrapper .sidebar-heading {\r\n  padding: 0.875rem 1.25rem;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#sidebar-wrapper .list-group {\r\n  width: 15rem;\r\n}\r\n\r\n#page-content-wrapper {\r\n  min-width: 100vw;\r\n}\r\n\r\n#wrapper.toggled #sidebar-wrapper {\r\n  margin-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  #sidebar-wrapper {\r\n    margin-left: 0;\r\n  }\r\n\r\n  #page-content-wrapper {\r\n    min-width: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  #wrapper.toggled #sidebar-wrapper {\r\n    margin-left: -15rem;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFJbkIsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQSxvQkFBb0IseUJBQXlCLENBQUM7O0FBRTlDO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7OztDQUdqQjs7QUFDRDtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQztHQUNFLGVBQWU7O0NBRWpCOztBQUNBO0dBQ0UsaUJBQWlCO0NBQ25COztBQUVBOztHQUVFLHlCQUF5QjtDQUMzQjs7QUFDQTs7QUFFRCx5QkFBeUI7QUFDekI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsdUNBQXVDO0FBQ3pDOztBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGlCQUFpQjtBQUNuQjs7QUFDQTs7O0dBR0c7O0FBRUg7RUFDRSw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBSW5CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlYmFyLXdyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEVFRUU7XHJcbn1cclxuXHJcbiNzaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGluZyB7XHJcbiAgcGFkZGluZzogMC44NzVyZW0gMS4yNXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCB7XHJcbiAgd2lkdGg6IDE1cmVtO1xyXG59XHJcblxyXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbXtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNpZGViYXItaGVhZGluZ2IgYXtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpZGVuYXZIZWFke1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudGhlYWR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbnRyOm50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcblxyXG4udGFibGUze1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RUVFRTtcclxuICBtYXJnaW46IDBweCAyMHB4O1xyXG5cclxuXHJcbiB9XHJcbi50ZGl2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEVFRUU7XHJcbn1cclxuIHRhYmxle1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gfVxyXG4gLmhlYWR7XHJcbiAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gfVxyXG5cclxuIC50YXNrMkRpdntcclxuXHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNFOEVFRUU7XHJcbiB9XHJcbiAuYnV0dG9uRGl2MntcclxuXHJcbmJhY2tncm91bmQtY29sb3I6ICNFOEVFRUU7XHJcbn1cclxuLnBhZ2VTZWxlY3RvcntcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5pY257XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5wYWdlU2VsZWN0b3J7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1mbHVzaCA6aG92ZXJ7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgcmdiKDcsIDE1NywgMjUyKTtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYig3LCAxNTcsIDI1Mik7XHJcbn1cclxuLmIxe1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgcGFkZGluZzogMHB4IDI1cHg7XHJcbn1cclxuLyogLmIye1xyXG5cclxuICBwYWRkaW5nOiAwcHggMjVweDtcclxufSAqL1xyXG5cclxuLmIxIDpob3ZlcntcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XHJcbn1cclxuLmIyIDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gIH1cclxufVxyXG4jc2lkZWJhci13cmFwcGVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxufVxyXG5cclxuI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcclxuICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4jc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIHtcclxuICB3aWR0aDogMTVyZW07XHJcbn1cclxuXHJcbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/profile/sidenav/sidenav.component.html":
/*!********************************************************!*\
  !*** ./src/app/profile/sidenav/sidenav.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\" id=\"wrapper\">\n\n    <!-- Sidebar -->\n    <div class=\"bg-dark border-right\" id=\"sidebar-wrapper\">\n      <div class=\"sidebar-heading\"> <a routerLink=\"/dasboard\" class=\"sidenavHead\"><i class=\"fas fa-long-arrow-alt-left\"></i> Employee Details</a> </div>\n\n      <div class=\"list-group list-group-flush \">\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fab fa-wpforms icn\"></i> Certificates</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fas fa-hand-paper icn\"></i> Oath</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fas fa-info-circle icn\"></i> Bio Data</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fas fa-edit icn\"></i>General Entries</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fas fa-chart-area icn\"></i>Increments</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fab fa-amazon-pay icn\"></i> Pay Fixation</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fas fa-hand-holding-usd icn\"></i>Pramotion</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fas fa-clock icn\"></i> Probation</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fas fa-users icn\"></i>Transfers & Postings</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fas fa-chart-pie icn\"></i>Deputation</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fas fa-male icn\"></i>Training</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"far fa-bookmark icn\"></i>Anual Verification</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fas fa-piggy-bank icn\"></i>Nominations</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fas fa-money-check-alt icn\"></i>Loans & Advances</a>\n        <a href=\"#\" class=\"list-group-item list-group-item-action bg-dark\"><i class=\"fas fa-dice-d6 icn\"></i>G.P.F Withdrawls</a>\n      </div>\n    </div>\n    <!-- /#sidebar-wrapper -->\n\n    <!-- Page Content -->\n    <div id=\"page-content-wrapper\">\n\n      <nav class=\"navbar navbar-expand-lg navbar-light bg-light border-bottom\">\n        <a routerLink=\"/dashboard\">\n            <img src=\"../../../assets/images/logo.png\" alt=\"\" width=\"75\" height=\"75\" class=\"d-inline-block align-top\" >\n          </a>\n            <h3 class=\"head\"><i>e</i>-SERVICEBOOK</h3>\n\n\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n            <li class=\"nav-item active b1\">\n                <a class=\"nav-link \" href=\"#\"><i class=\"fas fa-th-large\"></i>  Dashboard </a>\n            </li>\n            <li class=\"nav-item b1\">\n                <a class=\"nav-link active\" href=\"#\"><img src=\"../../../assets/images/lines.png\" width=\"25\" height=\"25 alt=\"> Profile</a>\n            </li>\n            <li class=\"nav-item b2\">\n                <a class=\"nav-link active\" href=\"#\"><img src=\"../../../assets/images/switch.png\" width=\"25\" height=\"25 alt=\"> </a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n\n    <!-- /#page-content-wrapper -->\n<div class=\"tdiv\">\n    <div class=\"task2Div\">\n      <app-tasks2></app-tasks2>\n    </div>\n\n\n\n    <div class=\"buttonDiv2\">\n<app-button-div2></app-button-div2>\n    </div>\n\n    <div class=\"table3\">\n       <app-table3></app-table3>\n            </div>\n\n\n<div class=\"pageSelector\">\n  <app-pagination></app-pagination>\n</div>\n</div>\n\n\n  </div>\n\n\n\n\n  <!-- <div class=\"buttonDiv \">\n      <p class=\"float-left m-1\">Pending Approvels</p>\n      <div>\n        <button class=\" l \" style= \"background-color:#E3900C\">Increments</button>\n      </div>\n\n      <div>\n        <button class=\" l \" style= \"background-color:#079DFC\"> Pay-fixation</button>\n      </div>\n\n      <div>\n        <button class=\" l \" style= \"background-color:#7FB716\">Pramotions</button>\n      </div>\n\n\n      <div>\n        <button class=\"l \" style= \"background-color:#E53C29\">Transfer</button>\n      </div>\n\n      <div class=\"selectDiv  r\">\n        <select >\n            <option value=\"volvo\">1st Battalion</option>\n            <option value=\"saab\">1st Battalion</option>\n            <option value=\"opel\">1st Battalion</option>\n            <option value=\"audi\">1st Battalion</option>\n          </select>\n        </div>\n\n        <div  class=\"inputDiv r\">\n          <input type=\"text\" class=\"search-query mac-style\" placeholder=\"search \">\n      </div>\n\n     </div> -->\n\n  <div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/profile/sidenav/sidenav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/sidenav/sidenav.component.ts ***!
  \******************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/profile/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/profile/sidenav/sidenav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/profile/table3/table3.component.css":
/*!*****************************************************!*\
  !*** ./src/app/profile/table3/table3.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "thead{\r\n  color: white;\r\n}\r\ntr:nth-child(even) {background-color: #f2f2f2;}\r\nthead{\r\n  color: white;\r\n  width: 100%;\r\n  margin: 0px auto;\r\nposition: absolute;\r\ndisplay: table;\r\n\r\n\r\n}\r\ntbody{\r\n\r\nwidth: 100%;\r\n\r\n}\r\ntr:nth-child(even) {background-color: #f2f2f2;}\r\n.table1{\r\n  border-radius: 15px;\r\n  height: 250px;\r\n  box-shadow: 5px 5px 10px rgb(212, 212, 214);\r\n  width: 100%;\r\n }\r\ntable{\r\n   font-size: 12px;\r\n\r\n\r\n }\r\n.tableh{\r\n  width: 100%;\r\n  height: 10%;\r\n\r\n }\r\n.header{\r\n  border-top-left-radius: 15px;\r\n  border-top-right-radius: 15px;\r\n }\r\n.tableh th{\r\nheight: 35px;;\r\n   padding:5px;\r\n }\r\n.tableb{\r\nwidth: 100%;\r\nheight: 90%;\r\n }\r\na{\r\n   color: black;\r\n }\r\n.header{\r\nwidth: calc(100% - 280px);\r\noverflow: auto;\r\nmargin: auto;\r\n\r\n\r\n   background: white;\r\n   color: black;\r\nposition: absolute;\r\n\r\n }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS90YWJsZTMvdGFibGUzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQSxvQkFBb0IseUJBQXlCLENBQUM7QUFFOUM7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQixrQkFBa0I7QUFDbEIsY0FBYzs7O0FBR2Q7QUFDQTs7QUFFQSxXQUFXOztBQUVYO0FBSUEsb0JBQW9CLHlCQUF5QixDQUFDO0FBRTlDO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsV0FBVztDQUNaO0FBQ0E7R0FDRSxlQUFlOzs7Q0FHakI7QUFDQTtFQUNDLFdBQVc7RUFDWCxXQUFXOztDQUVaO0FBQ0E7RUFDQyw0QkFBNEI7RUFDNUIsNkJBQTZCO0NBQzlCO0FBQ0E7QUFDRCxZQUFZO0dBQ1QsV0FBVztDQUNiO0FBQ0E7QUFDRCxXQUFXO0FBQ1gsV0FBVztDQUNWO0FBQ0E7R0FDRSxZQUFZO0NBQ2Q7QUFHQTtBQUNELHlCQUF5QjtBQUN6QixjQUFjO0FBQ2QsWUFBWTs7O0dBR1QsaUJBQWlCO0dBQ2pCLFlBQVk7QUFDZixrQkFBa0I7O0NBRWpCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS90YWJsZTMvdGFibGUzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aGVhZHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuXHJcbnRoZWFke1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbmRpc3BsYXk6IHRhYmxlO1xyXG5cclxuXHJcbn1cclxudGJvZHl7XHJcblxyXG53aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuXHJcbi50YWJsZTF7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMjEyLCAyMTIsIDIxNCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiB0YWJsZXtcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuXHJcbiB9XHJcbiAudGFibGVoe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAlO1xyXG5cclxuIH1cclxuIC5oZWFkZXJ7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuIH1cclxuIC50YWJsZWggdGh7XHJcbmhlaWdodDogMzVweDs7XHJcbiAgIHBhZGRpbmc6NXB4O1xyXG4gfVxyXG4gLnRhYmxlYntcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogOTAlO1xyXG4gfVxyXG4gYXtcclxuICAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG5cclxuXHJcbiAuaGVhZGVye1xyXG53aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xyXG5vdmVyZmxvdzogYXV0bztcclxubWFyZ2luOiBhdXRvO1xyXG5cclxuXHJcbiAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/profile/table3/table3.component.html":
/*!******************************************************!*\
  !*** ./src/app/profile/table3/table3.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive table-hover table1 \">\n\n\n<div class=\"tableh\">\n  <table class=\"header\">\n    <tr>\n        <th width=\"95\">S.No</th>\n        <th width=\"180\">Date</th>\n        <th width=\"150\">Do no</th>\n        <th width=\"185\">Do date</th>\n        <th width=\"115\">At no</th>\n        <th width=\"143\">Rc no</th>\n        <th width=\"85\">edit</th>\n        <th>view</th>\n\n      </tr>\n</table>\n</div>\n<div class=\"tableb\">\n\n    <table class=\"table \">\n      <thead class=\"bg-light\">\n\n      </thead>\n      <tbody>\n      <tr>\n          <th>1</th>\n          <th>12/12/12</th>\n          <th>456do</th>\n          <th>12/12/12</th>\n          <th>123</th>\n          <th>09876</th>\n          <th><i class=\"fas fa-pencil-alt\"></i></th>\n          <th><i class=\"fas fa-eye\"></i></th>\n\n        </tr>\n\n        <tr>\n            <th>1</th>\n            <th>12/12/12</th>\n            <th>456do</th>\n            <th>12/12/12</th>\n            <th>123</th>\n            <th>09876</th>\n            <th><i class=\"fas fa-pencil-alt\"></i></th>\n            <th><i class=\"fas fa-eye\"></i></th>\n\n          </tr>\n\n          <tr>\n              <th>1</th>\n              <th>12/12/12</th>\n              <th>456do</th>\n              <th>12/12/12</th>\n              <th>123</th>\n              <th>09876</th>\n              <th><i class=\"fas fa-pencil-alt\"></i></th>\n              <th><i class=\"fas fa-eye\"></i></th>\n\n            </tr>\n            <tr>\n                <th>1</th>\n                <th>12/12/12</th>\n                <th>456do</th>\n                <th>12/12/12</th>\n                <th>123</th>\n                <th>09876</th>\n                <th><i class=\"fas fa-pencil-alt\"></i></th>\n                <th><i class=\"fas fa-eye\"></i></th>\n\n              </tr>\n              <tr>\n                  <th>1</th>\n                  <th>12/12/12</th>\n                  <th>456do</th>\n                  <th>12/12/12</th>\n                  <th>123</th>\n                  <th>09876</th>\n                  <th><i class=\"fas fa-pencil-alt\"></i></th>\n                  <th><i class=\"fas fa-eye\"></i></th>\n\n                </tr>\n                <tr>\n                    <th>1</th>\n                    <th>12/12/12</th>\n                    <th>456do</th>\n                    <th>12/12/12</th>\n                    <th>123</th>\n                    <th>09876</th>\n                    <th><i class=\"fas fa-pencil-alt\"></i></th>\n                    <th><i class=\"fas fa-eye\"></i></th>\n\n                  </tr>\n\n                      </tbody>\n\n    </table>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/profile/table3/table3.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/table3/table3.component.ts ***!
  \****************************************************/
/*! exports provided: Table3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table3Component", function() { return Table3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Table3Component = /** @class */ (function () {
    function Table3Component() {
    }
    Table3Component.prototype.ngOnInit = function () {
    };
    Table3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table3',
            template: __webpack_require__(/*! ./table3.component.html */ "./src/app/profile/table3/table3.component.html"),
            styles: [__webpack_require__(/*! ./table3.component.css */ "./src/app/profile/table3/table3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Table3Component);
    return Table3Component;
}());



/***/ }),

/***/ "./src/app/profile/tasks2/tasks2.component.css":
/*!*****************************************************!*\
  !*** ./src/app/profile/tasks2/tasks2.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.profileView{\r\n  height: 130px;\r\n\r\n  background: linear-gradient(rgba(7, 157, 252, 0.7),rgba(7, 157, 252, 0.7)), url('marchpast.jpeg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n\r\n  z-index: 1;\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: 10% 30% 20% 20% 20% ;\r\n  grid-template-rows: 100%;\r\n  align-items: center;\r\n\r\n\r\n}\r\n.propic{\r\n  height: 95px;\r\n  width: 80px;\r\n  padding: 5px;\r\n  border-radius: 0.5rem !important;\r\n\r\n}\r\nbutton{\r\n  height: 30px;\r\n  width: 130px;\r\n\r\n  border-radius: 5PX;\r\n  border: none;\r\n  background-color: white;\r\n\r\ntop: 50%;\r\n\r\n\r\n}\r\n.buttonDiv{\r\n  float: right;\r\n\r\n}\r\n.l{\r\n  float: left;\r\n  margin: 5px;\r\n}\r\n.r{\r\n  float: right;\r\n  margin: 5px;\r\n}\r\n.icn{\r\n  padding: 0px 10px;\r\n}\r\nul{\r\n  list-style: none;\r\n}\r\nli{\r\n  color: white;\r\n  text-align: left;\r\n}\r\n.p{\r\n  padding: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS90YXNrczIvdGFza3MyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTs7RUFFYixpR0FBd0g7RUFDeEgsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7O0VBRXRCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDJDQUEyQztFQUMzQyx3QkFBd0I7RUFDeEIsbUJBQW1COzs7QUFHckI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFnQzs7QUFFbEM7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZOztFQUVaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCOztBQUV6QixRQUFROzs7QUFHUjtBQUNBO0VBQ0UsWUFBWTs7QUFFZDtBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvdGFza3MyL3Rhc2tzMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wcm9maWxlVmlld3tcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg3LCAxNTcsIDI1MiwgMC43KSxyZ2JhKDcsIDE1NywgMjUyLCAwLjcpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXJjaHBhc3QuanBlZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDMwJSAyMCUgMjAlIDIwJSA7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cclxufVxyXG4ucHJvcGlje1xyXG4gIGhlaWdodDogOTVweDtcclxuICB3aWR0aDogODBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbmJ1dHRvbntcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiA1UFg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxudG9wOiA1MCU7XHJcblxyXG5cclxufVxyXG4uYnV0dG9uRGl2e1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcbn1cclxuXHJcbi5se1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbi5ye1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4uaWNue1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG51bHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5saXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/profile/tasks2/tasks2.component.html":
/*!******************************************************!*\
  !*** ./src/app/profile/tasks2/tasks2.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\" profileView clearfix\">\n        <div  class=\" float-left p\">\n            <img src=\"../../../assets/images/download.jfif\" alt=\"...\" class=\"  float-left propic\">\n        </div>\n<div class=\"details float-left\">\n    <ul >\n        <li > <b>Name :</b>  Kumar</li>\n        <li > <b>Battalion :</b>  Tssp 1st Battalion</li>\n        <li > <b>Rank :</b>  Addl,Commandant</li>\n      </ul>\n\n</div>\n<div class=\"buttonDiv\">\n    <i class=\"fas fa-award icn\"></i>\n  <button > <b> 5 Rewards</b>  </button>\n</div>\n<div  class=\"buttonDiv\">\n    <i class=\"fas fa-money-bill-alt icn\"></i>\n    <button> <b>12000 Amount</b> </button>\n  </div>\n  <div  class=\"buttonDiv2\">\n      <i class=\"fas fa-medal icn\"></i>\n      <button> <b> 3 Medals </b></button>\n    </div>\n\n\n    </div>\n"

/***/ }),

/***/ "./src/app/profile/tasks2/tasks2.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/tasks2/tasks2.component.ts ***!
  \****************************************************/
/*! exports provided: Tasks2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tasks2Component", function() { return Tasks2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tasks2Component = /** @class */ (function () {
    function Tasks2Component() {
    }
    Tasks2Component.prototype.ngOnInit = function () {
    };
    Tasks2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks2',
            template: __webpack_require__(/*! ./tasks2.component.html */ "./src/app/profile/tasks2/tasks2.component.html"),
            styles: [__webpack_require__(/*! ./tasks2.component.css */ "./src/app/profile/tasks2/tasks2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tasks2Component);
    return Tasks2Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\angular\ngTraining1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map