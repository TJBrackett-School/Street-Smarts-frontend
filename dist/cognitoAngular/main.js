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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");








var routes = [
    { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'library', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'cognitoAngular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_user_library_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/user-library/add-book/add-book.component */ "./src/app/profile/user-library/add-book/add-book.component.ts");
/* harmony import */ var _profile_user_library_book_item_book_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/user-library/book-item/book-item.component */ "./src/app/profile/user-library/book-item/book-item.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _map_find_book_find_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map/find-book/find-book.component */ "./src/app/map/find-book/find-book.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _profile_user_library_book_services_books_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/user-library/book-services/books.service */ "./src/app/profile/user-library/book-services/books.service.ts");
/* harmony import */ var _profile_user_services_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile/user-services/user.service */ "./src/app/profile/user-services/user.service.ts");
/* harmony import */ var _map_map_services_map_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./map/map-services/map.service */ "./src/app/map/map-services/map.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _test_book_item_test_book_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./test-book-item/test-book-item.component */ "./src/app/test-book-item/test-book-item.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");

//Components






//Modules









//Services



//Misc




axios__WEBPACK_IMPORTED_MODULE_20___default.a.defaults.baseURL = 'https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/';
axios__WEBPACK_IMPORTED_MODULE_20___default.a.defaults.headers.common['Authorization'] = "bearer " + localStorage.getItem('bToken');
axios__WEBPACK_IMPORTED_MODULE_20___default.a.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                _profile_user_library_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_5__["AddBookComponent"],
                _profile_user_library_book_item_book_item_component__WEBPACK_IMPORTED_MODULE_6__["BookItemComponent"],
                _map_find_book_find_book_component__WEBPACK_IMPORTED_MODULE_14__["FindBookComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _test_book_item_test_book_item_component__WEBPACK_IMPORTED_MODULE_21__["TestBookItemComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_22__["HomePageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].GOOGLE_MAPS_API_KEY
                })
            ],
            exports: [
                _profile_user_library_book_item_book_item_component__WEBPACK_IMPORTED_MODULE_6__["BookItemComponent"]
            ],
            providers: [
                _profile_user_library_book_services_books_service__WEBPACK_IMPORTED_MODULE_16__["BookService"],
                _profile_user_services_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"],
                _map_map_services_map_service__WEBPACK_IMPORTED_MODULE_18__["MapService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-dark\">\r\n    <a class=\"navbar-brand mx-5 text-white\" routerLink=\"/\"><h4><b>Street Smarts</b></h4></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse mx-5\" id=\"navbarNavDropdown\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link text-white\" routerLink=\"/map\"> Find a Book </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link text-white\" routerLink=\"/library\"> My Library </a>\r\n        </li>\r\n        <li class=\"nav-item rightButtons\">\r\n          <a class=\"nav-link text-white\" routerLink=\"/register\"> Register </a>\r\n        </li>\r\n        <li class=\"nav-item rightButtons\">\r\n          <a class=\"nav-link text-white\" routerLink=\"/login\"> Login </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item {\n  border: 2px solid #575757;\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcYnJhY2tcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxcU3RyZWV0LVNtYXJ0cy1mcm9udGVuZC9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBaUM7RUFDakMsWUFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbXtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig4NywgODcsIDg3KTtcclxuICAgIHBhZGRpbmc6IDVweFxyXG59Il19 */"

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
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"bg\">\r\n  <app-header></app-header>\r\n<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n      <h1 class=\"display-4 text-center text-white\">Street Smarts</h1>\r\n      <p class=\"h4 text-center text-white\"><strong>A new adventure just down the street.</strong></p>\r\n    </div>\r\n</div>\r\n<section class=\"hero mt-5\">\r\n  <div class=\"container\">\r\n    <!--Start Grid row-->\r\n    <div class=\"row\">\r\n      <!--Grid column 1-->\r\n      <div class=\"col-lg-6 col-md-12 mb-4\">\r\n        <div class=\"card shadow-lg\">\r\n          <a href=\"https://littlefreelibrary.org/\"><img class=\"card-img-top img-liquid\" src=\"../../assets/images/littleLib.png\" alt=\"Scenery\"></a>\r\n          <div class=\"card-body\">\r\n              <h4 class=\"card-title\"><a>Inspiration</a></h4>\r\n              <p class=\"card-text\">A great way to share books with your community.</p>\r\n          </div>\r\n        </div>\r\n        <!-- Card -->\r\n      </div>\r\n      <!--Grid column 1-->\r\n\r\n      <!--Grid column 2-->\r\n      <div class=\"col-lg-6 col-md-6 mb-4\">\r\n        <div class=\"card shadow-lg\">\r\n          <a href=\"https://docs.google.com/presentation/d/1h9Kx_cs0d4rlxFPZhO4oW-9Kbw51dZAMVm4yaPg4dl4/edit?usp=sharing\"><img class=\"card-img-top img-liquid\" src=\"../../assets/images/pp.png\" alt=\"Scenery\"></a>\r\n          <div class=\"card-body\">\r\n              <h4 class=\"card-title\"><a>Presentation</a></h4>\r\n              <p class=\"card-text\">Our lessons learned.</p>\r\n          </div>\r\n        </div>\r\n        <!-- Card -->\r\n      </div>\r\n      <!--Grid column 2-->\r\n    </div>\r\n      \r\n      <!-- <div class=\"bg\">\r\n        <div class=\"jumbotron jumbotron-fluid\">\r\n          <div class=\"container\">\r\n            <h1 class=\"display-4 text-center text-white\">Street Smarts</h1>\r\n            <p class=\"h4 text-center text-white\"><strong>A new adventure just down the street.</strong></p>\r\n          </div>\r\n        </div>\r\n        <section id=\"\">\r\n            <div class=\"container\">\r\n            \r\n              <div class=\"row\">\r\n                \r\n                <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                  <div class=\"card shadow-lg\">\r\n                    <a href=\"https://littlefreelibrary.org/\" ><img class=\"card-img-top img-liquid\" src=\"../../assets/images/littleLib.png\" alt=\"Little Library\"></a>\r\n                      <h4 class=\"card-title\"><a>Inspiration</a></h4>\r\n                      <p class=\"card-text\">A great way to share books with your community.</p>\r\n                    </div>\r\n                  </div>\r\n                  \r\n                </div>\r\n             \r\n          \r\n                \r\n                <div class=\"col-lg-4 col-md-6 col-sm-6\">\r\n                  <div class=\"card shadow-lg\">\r\n                    <a href=\"https://docs.google.com/presentation/d/1h9Kx_cs0d4rlxFPZhO4oW-9Kbw51dZAMVm4yaPg4dl4/edit?usp=sharing\"><img class=\"card-img-top img-liquid\" src=\"../../assets/images/pp.png\" alt=\"Power Point\"></a>\r\n                    <div class=\"card-body\">\r\n                      <h4 class=\"card-title\"><a>Presentation</a></h4>\r\n                      <p class=\"card-text\">Our lessons learned.</p>\r\n                    </div>\r\n               \r\n                </div>\r\n        \r\n            </div>\r\n      \r\n          </div>\r\n        </section> -->\r\n  "

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: rgba(0, 0, 0, 0.514); }\n\n.bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  min-height: 100%;\n  background: url('home.png') no-repeat center;\n  background-size: 100% 100%;\n  background-position: top center; }\n\n.hero {\n  margin-bottom: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcYnJhY2tcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxcU3RyZWV0LVNtYXJ0cy1mcm9udGVuZC9zcmNcXGFwcFxcaG9tZS1wYWdlXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQ0FBc0MsRUFBQTs7QUFFMUM7RUFDSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDRDQUE4RDtFQUM5RCwwQkFBMEI7RUFDMUIsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTE0KTtcclxufVxyXG4uYmd7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgdG9wOiAwOyBcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgfVxyXG4gIC5oZXJve1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () { };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bg\">\r\n<app-header></app-header>\r\n<body section class=\"body\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n          <div class=\"card card-signin my-5\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title text-center mt-4 text-white\">Sign In</h5>\r\n              <form class=\"form-signin\">\r\n                <div class=\"form-label-group\">\r\n                  <input name=\"\" class=\"form-control\" placeholder=\"Username/Email\" type=\"text\" (change)=\"onEmailChange($event)\" required autofocus>\r\n                  <label class=\"text-white\" for=\"inputEmail\">Email address</label>\r\n                </div>\r\n  \r\n                <div class=\"form-label-group\">\r\n                  <input class=\"form-control\" placeholder=\"******\" type=\"password\" (change)=\"onUserPasswordChange($event)\" required>\r\n                  <label class=\"text-white\" for=\"inputPassword\">Password</label>\r\n                  <a class=\"float-right\" href=\"#\">Forgot?</a>\r\n                </div>\r\n  \r\n                <div class=\"custom-control custom-checkbox mb-3\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                  <label class=\"custom-control-label text-white\" for=\"customCheck1\">Remember password</label>\r\n                </div>\r\n                <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" (click)=\"loginUser()\">Sign in</button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</section>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  min-height: 100%;\n  background: url('login.jpg') no-repeat center;\n  background-size: 100% 100%;\n  background-position: top center; }\n\n.container {\n  background-color: #00000000;\n  margin-top: 200px; }\n\n.body {\n  background-color: #00000000; }\n\n.card {\n  background-color: #000000a2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxicmFja1xcT25lRHJpdmVcXERvY3VtZW50c1xcR2l0SHViXFxTdHJlZXQtU21hcnRzLWZyb250ZW5kL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDZDQUErRDtFQUMvRCwwQkFBMEI7RUFDMUIsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0ksMkJBQTRCO0VBQzVCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNFLDJCQUE0QixFQUFBOztBQUVoQztFQUNJLDJCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgdG9wOiAwOyBcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4uanBnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzAwMDAwMDAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICB9XHJcbiAgLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzAwMDAwMDAwO1xyXG59XHJcbi5jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMwMDAwMDBhMjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_profile_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/profile/user-services/user.service */ "./src/app/profile/user-services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amazon_cognito_identity_js_dist_amazon_cognito_identity_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amazon-cognito-identity-js/dist/amazon-cognito-identity.min */ "./node_modules/amazon-cognito-identity-js/dist/amazon-cognito-identity.min.js");
/* harmony import */ var amazon_cognito_identity_js_dist_amazon_cognito_identity_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(amazon_cognito_identity_js_dist_amazon_cognito_identity_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_models_poolData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/poolData */ "./src/models/poolData.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, UserService) {
        this.router = router;
        this.UserService = UserService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onEmailChange = function (event) {
        this.email = event.target.value;
    };
    LoginComponent.prototype.onUserPasswordChange = function (event) {
        this.userPassword = event.target.value;
    };
    LoginComponent.prototype.loginUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var authenticationData, authenticationDetails, userPool, userData, cognitoUser;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                authenticationData = {
                    Username: this.email,
                    Password: this.userPassword
                };
                authenticationDetails = new amazon_cognito_identity_js_dist_amazon_cognito_identity_min__WEBPACK_IMPORTED_MODULE_3__["AuthenticationDetails"](authenticationData);
                userPool = new amazon_cognito_identity_js_dist_amazon_cognito_identity_min__WEBPACK_IMPORTED_MODULE_3__["CognitoUserPool"](src_models_poolData__WEBPACK_IMPORTED_MODULE_4__["poolData"]);
                userData = {
                    Username: this.email,
                    Pool: userPool
                };
                console.log(authenticationDetails);
                cognitoUser = new amazon_cognito_identity_js_dist_amazon_cognito_identity_min__WEBPACK_IMPORTED_MODULE_3__["CognitoUser"](userData);
                cognitoUser.authenticateUser(authenticationDetails, {
                    onSuccess: function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var res, locationObject, e_1;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.accessToken = result.getAccessToken().getJwtToken();
                                    this.idToken = result.idToken.jwtToken;
                                    localStorage.setItem('bToken', this.idToken);
                                    console.log(cognitoUser.getUsername());
                                    console.log(this.idToken);
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 4, , 5]);
                                    return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('user/register', {})];
                                case 2:
                                    res = _a.sent();
                                    locationObject = JSON.parse(localStorage.getItem('locationData'));
                                    return [4 /*yield*/, this.UserService.addUserAddress(locationObject)
                                        //   await Axios.post('user/address',
                                        //     JSON.parse(localStorage.getItem('locationData'))).then( //try to put config back
                                        //     (result) => {
                                        //       console.log(result);
                                        //     });
                                        //   console.log(res);
                                        // } catch (e) {
                                        //   console.log(e);
                                        // }
                                    ];
                                case 3:
                                    _a.sent();
                                    return [3 /*break*/, 5];
                                case 4:
                                    e_1 = _a.sent();
                                    console.log(e_1);
                                    return [3 /*break*/, 5];
                                case 5:
                                    // cognitoUser.getUserAttributes(function (err, res) {
                                    //   if (err) {
                                    //     alert(err);
                                    //     return;
                                    //   }
                                    //   for (let i = 0; i < res.length; i++) {
                                    //     if(res[i].getName() == 'address') {
                                    //       try {
                                    //       } catch (e) {
                                    //         console.log(e)
                                    //       }
                                    //     }
                                    //     }
                                    //   }
                                    // );
                                    this.router.navigate(['/library']);
                                    return [2 /*return*/];
                            }
                        });
                    }); },
                    onFailure: function (err) {
                        alert('authentication error');
                        console.log(err);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_profile_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/map/find-book/find-book.component.html":
/*!********************************************************!*\
  !*** ./src/app/map/find-book/find-book.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<form class=\"form\" (ngSubmit)=\"getUsers()\">\r\n    <select name=\"searchOptions\" [(ngModel)]=\"searchOptions\" size=\"1\">\r\n        <option value=\"title\">Title</option>\r\n        <option value=\"author\">Author</option>\r\n    </select>\r\n    <input type=\"text\" name=\"userSearch\" [(ngModel)]=\"userSearch\" placeholder=\"Search\">\r\n    <br>\r\n    <label for=\"radius\"></label>\r\n    <input type=\"text\" name=\"radius\" [(ngModel)]=\"radius\" placeholder=\"Radius\">\r\n    <input type=\"submit\" value=\"Search\" class=\"btn\" (click)=\"getUsers()\">\r\n</form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/map/find-book/find-book.component.scss":
/*!********************************************************!*\
  !*** ./src/app/map/find-book/find-book.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcC9maW5kLWJvb2svZmluZC1ib29rLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/map/find-book/find-book.component.ts":
/*!******************************************************!*\
  !*** ./src/app/map/find-book/find-book.component.ts ***!
  \******************************************************/
/*! exports provided: userLocation, FindBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLocation", function() { return userLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindBookComponent", function() { return FindBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map-services/map.service */ "./src/app/map/map-services/map.service.ts");
/* harmony import */ var src_app_profile_user_library_book_services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/profile/user-library/book-services/books.service */ "./src/app/profile/user-library/book-services/books.service.ts");
/* harmony import */ var src_app_profile_user_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/profile/user-services/user.service */ "./src/app/profile/user-services/user.service.ts");





var userLocation;
var FindBookComponent = /** @class */ (function () {
    function FindBookComponent(bookService, mapService, userService) {
        this.bookService = bookService;
        this.mapService = mapService;
        this.userService = userService;
        this.searchResults = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.book = {
            title: '',
            authorName: ''
        };
    }
    FindBookComponent.prototype.ngOnInit = function () {
    };
    // Returns book info, use id to find users
    FindBookComponent.prototype.getBook = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var books;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.searchOptions === 'title') {
                            this.book.title = this.userSearch;
                            this.book.authorName = '';
                        }
                        else {
                            this.book.authorName = this.userSearch;
                            this.book.title = '';
                        }
                        return [4 /*yield*/, this.bookService.searchLibrary(this.book)];
                    case 1:
                        books = _a.sent();
                        return [2 /*return*/, books];
                }
            });
        });
    };
    FindBookComponent.prototype.getUsers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userIDs, results;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getLocations()];
                    case 1:
                        userIDs = _a.sent();
                        results = [];
                        console.log(userIDs);
                        userIDs.forEach(function (user) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var userLocation, isInResult, locationObject;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.mapService.getUserLocation(user.ownedby)];
                                    case 1:
                                        userLocation = _a.sent();
                                        isInResult = false;
                                        locationObject = {
                                            lat: userLocation.data.lat,
                                            lng: userLocation.data.lng
                                        };
                                        if (results.length > 0) {
                                            results.forEach(function (result) {
                                                console.log(result);
                                                if (locationObject.lat == result.lat && locationObject.lng == result.lng) {
                                                    isInResult = true;
                                                }
                                            });
                                        }
                                        if (!isInResult) {
                                            console.log("!isInResult", results);
                                            results.push({
                                                lat: userLocation.data.lat,
                                                lng: userLocation.data.lng,
                                                alpha: 1
                                            });
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        console.log('results', results);
                        userLocation = results;
                        return [2 /*return*/];
                }
            });
        });
    };
    FindBookComponent.prototype.getLocations = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bookResults, users;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBook()];
                    case 1:
                        bookResults = _a.sent();
                        this.userBooks = bookResults.data;
                        return [4 /*yield*/, this.mapService.searchMapForBook(this.radius, this.userBooks)];
                    case 2:
                        users = _a.sent();
                        return [2 /*return*/, users.data.users[0]];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FindBookComponent.prototype, "parentData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FindBookComponent.prototype, "searchResults", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FindBookComponent.prototype, "userLocation", void 0);
    FindBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-find-book',
            template: __webpack_require__(/*! ./find-book.component.html */ "./src/app/map/find-book/find-book.component.html"),
            styles: [__webpack_require__(/*! ./find-book.component.scss */ "./src/app/map/find-book/find-book.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_profile_user_library_book_services_books_service__WEBPACK_IMPORTED_MODULE_3__["BookService"],
            _map_services_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"],
            src_app_profile_user_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], FindBookComponent);
    return FindBookComponent;
}());



/***/ }),

/***/ "./src/app/map/map-services/map.service.ts":
/*!*************************************************!*\
  !*** ./src/app/map/map-services/map.service.ts ***!
  \*************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var MapService = /** @class */ (function () {
    function MapService() {
        // GET
        // /user/location
        //   - return signed in users location
        // /user/location/{userID}
        //   - returns user location by user ID
        this.userLocationUrl = 'user/location';
        // Map search for users nearby that have a certain book
        // POST
        // /book/searchSB
        // - send {radius: num, bookData: {book}}
        // - getback {users: [list of users]}
        this.searchUrl = 'book/searchSB';
    }
    // Find user's nearby that have book
    MapService.prototype.searchMapForBook = function (radius, book) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var results;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.searchUrl, {
                            radius: radius,
                            bookData: { book: book }
                        })];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, results];
                }
            });
        });
    };
    MapService.prototype.getUserLocation = function (userID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var results;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.userLocationUrl + "/" + userID)];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, results];
                }
            });
        });
    };
    MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<app-find-book [parentData]=\"name\" ></app-find-book>\r\n<agm-map\r\n\r\n    (onSearch)=\"location\"\r\n    [latitude]=\"lat\"\r\n    [longitude]=\"lng\"\r\n    [zoom]=\"18\"\r\n\r\n>\r\n\r\n    <agm-marker\r\n        *ngFor=\"let marker of markers\"\r\n        [latitude]=\"marker.lat\"\r\n        [longitude]=\"marker.lng\"\r\n        (markerClick)=\"selectMarker($event)\"\r\n    >\r\n\r\n<!--<agm-rectangle\r\n        [north]=\"max('lat')\"\r\n        [east]=\"max('lng')\"\r\n        [south]=\"min('lat')\"\r\n        [west]=\"min('lng')\"\r\n    >\r\n  </agm-rectangle> -->\r\n\r\n  </agm-marker>\r\n</agm-map>\r\n\r\n<p *ngIf=\"selectedMarker\">\r\n    Lat: {{ selectedMarker.lat }} Lng: {{ selectedMarker.lng }}\r\n\r\n</p>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 600px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL0M6XFxVc2Vyc1xcYnJhY2tcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxcU3RyZWV0LVNtYXJ0cy1mcm9udGVuZC9zcmNcXGFwcFxcbWFwXFxtYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _find_book_find_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find-book/find-book.component */ "./src/app/map/find-book/find-book.component.ts");



var MapComponent = /** @class */ (function () {
    // trackMarkers(index: number, location: any) {
    //   return location ? location.lat : null
    // }
    function MapComponent() {
        this.markers = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        var locationData = JSON.parse(localStorage.getItem('locationData'));
        this.lat = locationData.lat;
        this.lng = locationData.lng;
        this.addMarker(this.lat, this.lng);
    };
    MapComponent.prototype.addMarker = function (lat, lng) {
        this.markers.push({
            lat: lat,
            lng: lng,
            alpha: 1
        });
    };
    // Related to the rectangle property in the html
    // max(coordType: 'lat' | 'lng'): number {
    //   return Math.max(...this.markers.map(marker => marker[coordType]));
    // }
    // min(coordType: 'lat' | 'lng'): number {
    //   return Math.min(...this.markers.map(marker => marker[coordType]));
    // }
    MapComponent.prototype.selectMarker = function (event) {
        this.selectedMarker = {
            lat: event.latitude,
            lng: event.longitude
        };
        console.log(this.markers);
        this.markers = [];
        this.addMarker(_find_book_find_book_component__WEBPACK_IMPORTED_MODULE_2__["userLocation"][0].lat, _find_book_find_book_component__WEBPACK_IMPORTED_MODULE_2__["userLocation"][0].lng);
        console.log(this.markers);
        // console.log(userLocation[0].lat)
        // console.log(userLocation[0].lng)
    };
    MapComponent.prototype.populateMap = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.location = _find_book_find_book_component__WEBPACK_IMPORTED_MODULE_2__["userLocation"];
                return [2 /*return*/];
            });
        });
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bg\">\r\n<app-add-book ></app-add-book>\r\n<section>\r\n        <section class=\"container\">\r\n                <div class=\"row no-gutters\">\r\n                  <div class=\"col-lg-11 col-md-12 mb-4\">\r\n<app-book-item\r\n*ngFor=\"let book of userBooks\"\r\n[book]=\"book\"\r\n(deleteBook)=\"deleteBook($event)\"\r\n>\r\n</app-book-item>\r\n</div>\r\n</div>\r\n        </section>\r\n</section>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: -webkit-linear-gradient(left, #3931af, #00c6ff); }\n\n.bg {\n  width: 100%;\n  height: 100%;\n  background: url('userLib.jpg') no-repeat center;\n  background-size: 100% 100%;\n  background-position: top center; }\n\n.container {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 675px;\n  background-color: rgba(51, 51, 51, 0.815); }\n\n.emp-profile {\n  padding: 3%;\n  margin-top: 3%;\n  margin-bottom: 3%;\n  border-radius: 0.5rem;\n  background: #fff; }\n\n.profile-img {\n  text-align: center; }\n\n.profile-img img {\n  width: 70%;\n  height: 100%; }\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  margin-top: -20%;\n  width: 70%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background: #212529b8; }\n\n.profile-img .file input {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n  top: 0; }\n\n.profile-head h5 {\n  color: #333; }\n\n.profile-head h6 {\n  color: #0062cc; }\n\n.profile-edit-btn {\n  border: none;\n  border-radius: 1.5rem;\n  width: 70%;\n  padding: 2%;\n  font-weight: 600;\n  color: #6c757d;\n  cursor: pointer; }\n\n.proile-rating {\n  font-size: 12px;\n  color: #818182;\n  margin-top: 5%; }\n\n.proile-rating span {\n  color: #495057;\n  font-size: 15px;\n  font-weight: 600; }\n\n.profile-head .nav-tabs {\n  margin-bottom: 5%; }\n\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none; }\n\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #0062cc; }\n\n.profile-work {\n  padding: 14%;\n  margin-top: -15%; }\n\n.profile-work p {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin-top: 10%; }\n\n.profile-work a {\n  text-decoration: none;\n  color: #495057;\n  font-weight: 600;\n  font-size: 14px; }\n\n.profile-work ul {\n  list-style: none; }\n\n.profile-tab label {\n  font-weight: 600; }\n\n.profile-tab p {\n  font-weight: 600;\n  color: #0062cc; }\n\n/* width */\n\n::-webkit-scrollbar {\n  width: 10px; }\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  background: #464545; }\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #888; }\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #555; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXGJyYWNrXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxHaXRIdWJcXFN0cmVldC1TbWFydHMtZnJvbnRlbmQvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyREFBMkQsRUFBQTs7QUFFL0Q7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLCtDQUFpRTtFQUNqRSwwQkFBMEI7RUFDMUIsK0JBQStCLEVBQUE7O0FBRW5DO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUNBQXlDLEVBQUE7O0FBRTdDO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLE1BQU0sRUFBQTs7QUFFVjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZTtFQUNmLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxZQUFZO0VBQ1osZ0NBQStCLEVBQUE7O0FBRW5DO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFFbEIsVUFBQTs7QUFDQTtFQUNJLFdBQVcsRUFBQTs7QUFHYixVQUFBOztBQUNBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCLFdBQUE7O0FBQ0E7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEIsb0JBQUE7O0FBQ0E7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzkzMWFmLCAjMDBjNmZmKTtcclxufVxyXG4uYmd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3VzZXJMaWIuanBnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gIH1cclxuLmNvbnRhaW5lcntcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGhlaWdodDogNjc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuODE1KVxyXG59XHJcbi5lbXAtcHJvZmlsZXtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLnByb2ZpbGUtaW1ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wcm9maWxlLWltZyBpbWd7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5wcm9maWxlLWltZyAuZmlsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogIzIxMjUyOWI4O1xyXG59XHJcbi5wcm9maWxlLWltZyAuZmlsZSBpbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuLnByb2ZpbGUtaGVhZCBoNXtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbi5wcm9maWxlLWhlYWQgaDZ7XHJcbiAgICBjb2xvcjogIzAwNjJjYztcclxufVxyXG4ucHJvZmlsZS1lZGl0LWJ0bntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJvaWxlLXJhdGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjODE4MTgyO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLnByb2lsZS1yYXRpbmcgc3BhbntcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucHJvZmlsZS1oZWFkIC5uYXYtdGFic3tcclxuICAgIG1hcmdpbi1ib3R0b206NSU7XHJcbn1cclxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnMgLm5hdi1saW5re1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjMDA2MmNjO1xyXG59XHJcbi5wcm9maWxlLXdvcmt7XHJcbiAgICBwYWRkaW5nOiAxNCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTUlO1xyXG59XHJcbi5wcm9maWxlLXdvcmsgcHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjODE4MTgyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4ucHJvZmlsZS13b3JrIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnByb2ZpbGUtd29yayB1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnByb2ZpbGUtdGFiIGxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucHJvZmlsZS10YWIgcHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwNjJjYztcclxufVxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUcmFjayAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogIzQ2NDU0NTsgXHJcbiAgfVxyXG4gICBcclxuICAvKiBIYW5kbGUgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7IFxyXG4gIH1cclxuICBcclxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7IFxyXG4gIH1cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _user_library_book_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-library/book-services/books.service */ "./src/app/profile/user-library/book-services/books.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(bookService) {
        this.bookService = bookService;
        this.newBook = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bookService.getUserLibrary()];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        this.userBooks = res.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bookService.getUserLibrary()];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        this.userBooks = res.data;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.deleteBook = function (book) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(book.id);
                        return [4 /*yield*/, this.bookService.deleteBook(book)];
                    case 1:
                        _a.sent();
                        this.userBooks = this.userBooks.filter(function (b) { return b.id !== book.id; });
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ProfileComponent.prototype, "newBook", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_library_book_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/user-library/add-book/add-book.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/profile/user-library/add-book/add-book.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container {\r\n    /* width: 100%; */\r\n    margin-left: 365px;\r\n}\r\n.card{\r\n\r\n    background-color: #2e2e2ece;\r\n    width: 100%;\r\n}\r\n.card-body {\r\n    color: darkgrey;\r\n    width: 100%;\r\n}\r\n.row {\r\n    color: darkgrey;\r\n    width: 100%;\r\n}\r\n.form-group {\r\n    color: darkgrey;\r\n\r\n    width: 100%;\r\n}\r\nbutton{\r\n    width: 100%;\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS91c2VyLWxpYnJhcnkvYWRkLWJvb2svYWRkLWJvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTs7SUFFZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3VzZXItbGlicmFyeS9hZGQtYm9vay9hZGQtYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXIge1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogMzY1cHg7XHJcbn1cclxuLmNhcmR7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUyZWNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmQtYm9keSB7XHJcbiAgICBjb2xvcjogZGFya2dyZXk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucm93IHtcclxuICAgIGNvbG9yOiBkYXJrZ3JleTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIGNvbG9yOiBkYXJrZ3JleTtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/profile/user-library/add-book/add-book.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/profile/user-library/add-book/add-book.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form class=\"form\" (ngSubmit)=\"addBook()\">\r\n  <div>\r\n    <input type=\"text\" name=\"title\" [(ngModel)]=\"book.title\" placeholder=\"Add Book...\" (input)=getBook()>\r\n    <input type=\"text\" name=\"author\" [(ngModel)]=\"book.author\" placeholder=\"Add Author...\">\r\n  </div>\r\n  <div>\r\n    <input type=\"submit\" value=\"Submit\" class=\"btn\">\r\n  </div>\r\n</form> -->\r\n<div class=\"container\">\r\n    <!--row-->\r\n    <div class=\"row\">\r\n        <!--card-->\r\n        <div class=\"card mt-3 mb-3\">\r\n          <!--card body-->\r\n          <div class=\"card-body\"></div>\r\n            <!--card title-->\r\n            <form (ngSubmit)=\"addBook()\">\r\n              <!--Start form row-->\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-sm-6\">\r\n                  <label class=\"form-group col-sm-12 text-white text-center\" for=\"title\"><b>Title</b></label>\r\n                  <input class=\"form-control form-control-lg\" name=\"title\" [(ngModel)]=\"book.title\" placeholder=\"Title\">\r\n                </div>\r\n\r\n                <div class=\"form-group col-sm-6\">\r\n                  <label class=\"form-group col-sm-12 text-white text-center\" for=\"Author\"><b>Author</b></label>\r\n                  <input class=\"form-control form-control-lg\" name=\"authorName\" [(ngModel)]=\"book.authorName\" placeholder=\"Author\">\r\n\r\n                </div>\r\n                <div class=\"form-group col-sm-3\">\r\n                <button type=\"submit\" class=\"btn btn-primary mt-3\"><h5>Search</h5></button>\r\n                </div>\r\n"

/***/ }),

/***/ "./src/app/profile/user-library/add-book/add-book.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/profile/user-library/add-book/add-book.component.ts ***!
  \*********************************************************************/
/*! exports provided: userBooks, AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userBooks", function() { return userBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book-services/books.service */ "./src/app/profile/user-library/book-services/books.service.ts");



var userBooks;
var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(bookService) {
        this.bookService = bookService;
        this.newBook = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.book = {
            title: '',
            authorName: ''
        };
    }
    AddBookComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bookService.getUserLibrary()];
                    case 1:
                        res = _a.sent();
                        userBooks = res.data;
                        localStorage.setItem('userBooks', JSON.stringify(userBooks));
                        return [2 /*return*/];
                }
            });
        });
    };
    AddBookComponent.prototype.getBook = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bookService.searchOL(this.book)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    AddBookComponent.prototype.addBook = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, addBook, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.getBook()];
                    case 1:
                        result = _a.sent();
                        this.bookFound = result.data;
                        return [4 /*yield*/, this.bookService.addBookToLibrary(this.bookFound)];
                    case 2:
                        addBook = _a.sent();
                        userBooks = addBook.data;
                        console.log("addBook.data", addBook.data);
                        localStorage.setItem('userBooks', userBooks.join(','));
                        alert(this.bookFound.title + " was added to your library!");
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddBookComponent.prototype, "newBook", void 0);
    AddBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-book',
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/profile/user-library/add-book/add-book.component.html"),
            styles: [__webpack_require__(/*! ./add-book.component.css */ "./src/app/profile/user-library/add-book/add-book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_book_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "./src/app/profile/user-library/book-item/book-item.component.css":
/*!************************************************************************!*\
  !*** ./src/app/profile/user-library/book-item/book-item.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvdXNlci1saWJyYXJ5L2Jvb2staXRlbS9ib29rLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/user-library/book-item/book-item.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/profile/user-library/book-item/book-item.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"cards\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 col-md-12 mb-4\">\r\n            <div class=\"card mt-4 ml-4\">\r\n              <img class=\"card-img-top\" src=\"{{ book.coverLinkMedium }}\" alt=\"Cover\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">{{ book.title }}</h5>\r\n              <p class=\"card-text\">{{ book.authorName }}</p>\r\n              <button (click)=\"onDelete(book)\" class=\"btn btn-primary\">Delete</button>\r\n            </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/profile/user-library/book-item/book-item.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/profile/user-library/book-item/book-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: BookItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookItemComponent", function() { return BookItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_models_BookInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../book-models/BookInfo */ "./src/app/profile/user-library/book-models/BookInfo.ts");
/* harmony import */ var _book_services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../book-services/books.service */ "./src/app/profile/user-library/book-services/books.service.ts");




var BookItemComponent = /** @class */ (function () {
    function BookItemComponent(bookService) {
        this.bookService = bookService;
        this.deleteBook = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BookItemComponent.prototype.ngOnInit = function () {
    };
    BookItemComponent.prototype.onDelete = function (book) {
        this.deleteBook.emit(book);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _book_models_BookInfo__WEBPACK_IMPORTED_MODULE_2__["BookInfo"])
    ], BookItemComponent.prototype, "book", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BookItemComponent.prototype, "deleteBook", void 0);
    BookItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-item',
            template: __webpack_require__(/*! ./book-item.component.html */ "./src/app/profile/user-library/book-item/book-item.component.html"),
            styles: [__webpack_require__(/*! ./book-item.component.css */ "./src/app/profile/user-library/book-item/book-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_book_services_books_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]])
    ], BookItemComponent);
    return BookItemComponent;
}());



/***/ }),

/***/ "./src/app/profile/user-library/book-models/BookInfo.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile/user-library/book-models/BookInfo.ts ***!
  \**************************************************************/
/*! exports provided: BookInfo, BookSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookInfo", function() { return BookInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookSearch", function() { return BookSearch; });
var BookInfo = /** @class */ (function () {
    function BookInfo() {
    }
    return BookInfo;
}());

var BookSearch = /** @class */ (function () {
    function BookSearch() {
    }
    return BookSearch;
}());



/***/ }),

/***/ "./src/app/profile/user-library/book-services/books.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/profile/user-library/book-services/books.service.ts ***!
  \*********************************************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var BookService = /** @class */ (function () {
    function BookService() {
        // OpenLibrary API
        // POST
        // /book/searchapi
        //   - send {title?: "", author?: "", ISBN}
        //   - get book
        this.openLibraryUrl = 'book/searchapi';
        // Search all books in our API
        // POST
        // /book/search
        //   - send {title?: "", author?: "", ISBN}
        //   - get book
        this.bookSearchUrl = 'book/search';
        // GET
        // /user/book
        // - returns signed in users books
        // /user/book/{userID}
        // -returns signed in users books by userID
        // DEL
        // /user/book/{bookID}
        //   - deletes user books & returns list of users books after deletion
        this.userBookUrl = 'user/book';
    }
    // Searches OpenLibrary for a book
    BookService.prototype.searchOL = function (book) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.openLibraryUrl, {
                            title: book.title,
                            authorName: book.authorName
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // Add book to user's library
    BookService.prototype.addBookToLibrary = function (book) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.userBookUrl, book)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // Search our API library for a book
    BookService.prototype.searchLibrary = function (book) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!book.title) return [3 /*break*/, 2];
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.bookSearchUrl, {
                                title: book.title
                            })];
                    case 1:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(this.bookSearchUrl, {
                            authorName: book.authorName
                        })];
                    case 3:
                        result = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, result];
                }
            });
        });
    };
    // Pull all books in user's library
    BookService.prototype.getUserLibrary = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.userBookUrl)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // Remove book from library
    BookService.prototype.deleteBook = function (book) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(this.userBookUrl + "/" + book.id)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/profile/user-services/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/profile/user-services/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = 'https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/user/profile';
        this.addressUrl = 'https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/user/address';
        this.locationUrl = 'https://afu8lhb2z7.execute-api.us-east-1.amazonaws.com/dev/user/location';
        // GET
        // /user/profile
        //   - return Signed it user
        // /user/profile/{userID}
        //   - returns user by userid
        this.userProfileUrl = 'user/profile';
        // POST
        // /user/checkout/{userID}
        //   - send {book}
        //   - get back message saying it completed
        this.userCheckoutUrl = 'user/checkout';
    }
    UserService.prototype.addUserAddress = function (locationObject) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //  const config = {
                    //   headers: {
                    //     'Authorization': 'bearer ' + await localStorage.getItem('bToken')
                    //   }
                    // };
                    return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(this.addressUrl, locationObject)];
                    case 1:
                        //  const config = {
                        //   headers: {
                        //     'Authorization': 'bearer ' + await localStorage.getItem('bToken')
                        //   }
                        // };
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.getUserAddress = function (locationObject) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.locationUrl)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    UserService.prototype.getUserProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var config, _a, _b, _c, _d, bodyParameters, response, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = {};
                        _b = {};
                        _c = 'Authorization';
                        _d = 'bearer ';
                        return [4 /*yield*/, localStorage.getItem('bToken')];
                    case 1:
                        config = (_a.headers = (_b[_c] = _d + (_e.sent()),
                            _b),
                            _a);
                        bodyParameters = {
                            key: 'value'
                        };
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.userUrl, config)];
                    case 3:
                        response = _e.sent();
                        console.log(response);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _e.sent();
                        console.log(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());

// async getUserByID (userID: number) {
// }
// //Check out a user's book to another user.
// async checkoutBook() {
// }
// //Return a book that was checked out
// async returnCheckoutBook() {
//   //TODO
// }
// }


/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bg\">\r\n<app-header></app-header>\r\n<div class=\"container\">\r\n\r\n  <div class=\"card mt-5\">\r\n    <article class=\"card-body mx-auto\" style=\"max-width: 400px;\">\r\n      <h4 class=\"card-title mt-3 text-center text-white\">Create Account</h4>\r\n      <p class=\"text-center text-white\">Get started with your free account</p>\r\n      <form>\r\n        <div class=\"form-group input-group\">\r\n          <input name=\"\" class=\"form-control\" placeholder=\"User Name\" type=\"text\" (change)=\"onUserNameChange($event)\">\r\n        </div> <!-- form-group// -->\r\n        <div class=\"form-group input-group\">\r\n          <input name=\"\" class=\"form-control\" placeholder=\"Email address\" type=\"email\" (change)=\"onEmailChange($event)\">\r\n        </div> <!-- form-group// -->\r\n        <div class=\"form-group input-group\">\r\n          <input name=\"\" class=\"form-control\" placeholder=\"Address\" type=\"text\" (change)=\"onAddressChange($event)\">\r\n        </div> <!-- form-group// -->\r\n        <div class=\"form-group input-group\">\r\n          <input name=\"\" class=\"form-control\" placeholder=\"City\" type=\"text\" (change)=\"onCityChange($event)\">\r\n        </div> <!-- form-group// -->\r\n        <div class=\"form-group input-group state-list\">\r\n          <label class=\"state-label text-white mt-2\" for=\"state\"><h5>State</h5></label>\r\n        <select name=\"state\" size=\"1\" (change)=\"onStateChange($event)\">\r\n          <option value=\"AK\">AK</option>\r\n          <option value=\"AL\">AL</option>\r\n          <option value=\"AR\">AR</option>\r\n          <option value=\"AZ\">AZ</option>\r\n          <option value=\"CA\">CA</option>\r\n          <option value=\"CO\">CO</option>\r\n          <option value=\"CT\">CT</option>\r\n          <option value=\"DC\">DC</option>\r\n          <option value=\"DE\">DE</option>\r\n          <option value=\"FL\">FL</option>\r\n          <option value=\"GA\">GA</option>\r\n          <option value=\"HI\">HI</option>\r\n          <option value=\"IA\">IA</option>\r\n          <option value=\"ID\">ID</option>\r\n          <option value=\"IL\">IL</option>\r\n          <option value=\"IN\">IN</option>\r\n          <option value=\"KS\">KS</option>\r\n          <option value=\"KY\">KY</option>\r\n          <option value=\"LA\">LA</option>\r\n          <option value=\"MA\">MA</option>\r\n          <option value=\"MD\">MD</option>\r\n          <option value=\"ME\">ME</option>\r\n          <option value=\"MI\">MI</option>\r\n          <option value=\"MN\">MN</option>\r\n          <option value=\"MO\">MO</option>\r\n          <option value=\"MS\">MS</option>\r\n          <option value=\"MT\">MT</option>\r\n          <option value=\"NC\">NC</option>\r\n          <option value=\"ND\">ND</option>\r\n          <option value=\"NE\">NE</option>\r\n          <option value=\"NH\">NH</option>\r\n          <option value=\"NJ\">NJ</option>\r\n          <option value=\"NM\">NM</option>\r\n          <option value=\"NV\">NV</option>\r\n          <option value=\"NY\">NY</option>\r\n          <option value=\"OH\">OH</option>\r\n          <option value=\"OK\">OK</option>\r\n          <option value=\"OR\">OR</option>\r\n          <option value=\"PA\">PA</option>\r\n          <option value=\"RI\">RI</option>\r\n          <option value=\"SC\">SC</option>\r\n          <option value=\"SD\">SD</option>\r\n          <option value=\"TN\">TN</option>\r\n          <option value=\"TX\">TX</option>\r\n          <option value=\"UT\">UT</option>\r\n          <option value=\"VA\">VA</option>\r\n          <option value=\"VT\">VT</option>\r\n          <option value=\"WA\">WA</option>\r\n          <option value=\"WI\">WI</option>\r\n          <option value=\"WV\">WV</option>\r\n          <option value=\"WY\">WY</option>\r\n        </select>\r\n        </div> <!-- form-group// -->\r\n        <h5 class=\"card-title mt-3 text-center text-white\">Birthday</h5>\r\n        <div class=\"form-group input-group\">\r\n          <input name=\"\" class=\"form-control\" placeholder=\"Birthday\" type=\"date\" (change)=\"onBirthdayChange($event)\">\r\n        </div> <!-- form-group// -->\r\n\r\n        <div class=\"form-group input-group\">\r\n\r\n          <input class=\"form-control\" placeholder=\"Create password\" type=\"password\" (change)=\"onPassChange($event)\">\r\n        </div> <!-- form-group// -->\r\n        <div class=\"form-group input-group\">\r\n          <input class=\"form-control\" placeholder=\"Repeat password\" type=\"password\" (change)=\"onRepeatPassChange($event)\">\r\n        </div> <!-- form-group// -->\r\n        <div class=\"form-group\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"registerUser()\"> Create Account </button>\r\n        </div> <!-- form-group// -->\r\n        <p class=\"text-center text-white\">Have an account? <a routerLink=\"/\">Log In</a> </p>\r\n      </form>\r\n    </article>\r\n  </div> <!-- card.// -->\r\n\r\n</div>\r\n<!--container end.//-->\r\n</section>"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  min-height: 100%;\n  background: url('register.jpg') no-repeat center;\n  background-size: 100% 100%;\n  background-position: top center; }\n\n.container {\n  background-color: #00000000; }\n\n.card {\n  background-color: #00000000; }\n\n.card-body {\n  background-color: #000000bd; }\n\n.state-list {\n  margin-left: 50px; }\n\n.state-label {\n  margin-right: 15px; }\n\n.divider-text {\n  position: relative;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.divider-text span {\n  padding: 7px;\n  font-size: 12px;\n  position: relative;\n  z-index: 2; }\n\n.divider-text:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  top: 55%;\n  left: 0;\n  z-index: 1; }\n\n.btn-facebook {\n  background-color: #405D9D;\n  color: #fff; }\n\n.btn-twitter {\n  background-color: #42AEEC;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxicmFja1xcT25lRHJpdmVcXERvY3VtZW50c1xcR2l0SHViXFxTdHJlZXQtU21hcnRzLWZyb250ZW5kL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdEQUFrRTtFQUNsRSwwQkFBMEI7RUFDMUIsK0JBQStCLEVBQUE7O0FBRWpDO0VBQ0UsMkJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsMkJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsMkJBQTRCLEVBQUE7O0FBRTlCO0VBQ0UsaUJBQ0YsRUFBQTs7QUFDQTtFQUNFLGtCQUNGLEVBQUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVLEVBQUE7O0FBR1o7RUFDRSx5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUViO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgdG9wOiAwOyBcclxuICBsZWZ0OiAwO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3JlZ2lzdGVyLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICMwMDAwMDAwMDtcclxufVxyXG4uY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzAwMDAwMDAwO1xyXG59XHJcbi5jYXJkLWJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICMwMDAwMDBiZDtcclxufVxyXG4uc3RhdGUtbGlzdHtcclxuICBtYXJnaW4tbGVmdDogNTBweFxyXG59XHJcbi5zdGF0ZS1sYWJlbHtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHhcclxufVxyXG5cclxuLmRpdmlkZXItdGV4dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmRpdmlkZXItdGV4dCBzcGFuIHtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5kaXZpZGVyLXRleHQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIHRvcDogNTUlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwNUQ5RDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuLXR3aXR0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MkFFRUM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../profile/user-services/user.service */ "./src/app/profile/user-services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amazon_cognito_identity_js_dist_amazon_cognito_identity_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amazon-cognito-identity-js/dist/amazon-cognito-identity.min */ "./node_modules/amazon-cognito-identity-js/dist/amazon-cognito-identity.min.js");
/* harmony import */ var amazon_cognito_identity_js_dist_amazon_cognito_identity_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(amazon_cognito_identity_js_dist_amazon_cognito_identity_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_models_poolData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/models/poolData */ "./src/models/poolData.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(UserService) {
        this.UserService = UserService;
        this.gMapsApi = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
        this.gMapsKey = '&key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].GOOGLE_MAPS_API_KEY;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onUserNameChange = function (event) {
        this.userName = event.target.value;
        // console.log(this.userName);
    };
    RegisterComponent.prototype.onAddressChange = function (event) {
        this.address = event.target.value;
    };
    RegisterComponent.prototype.onCityChange = function (event) {
        this.city = event.target.value;
    };
    RegisterComponent.prototype.onStateChange = function (event) {
        this.state = event.target.value;
    };
    RegisterComponent.prototype.onBirthdayChange = function (event) {
        this.birthday = event.target.value;
    };
    RegisterComponent.prototype.onEmailChange = function (event) {
        this.userEmail = event.target.value;
    };
    RegisterComponent.prototype.onPassChange = function (event) {
        this.userPassWord = event.target.value;
        // console.log(this.passWord);
    };
    RegisterComponent.prototype.onRepeatPassChange = function (event) {
        this.userRepeatPassWord = event.target.value;
    };
    RegisterComponent.prototype.registerUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userPool, attributeList, urlAddress, urlCity, gMapsUrl, gMapLocations, _a, lat, lng, locationObject, data, cognitoUser_1, _i, data_1, attribute, newAttribute;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.userPassWord === this.userRepeatPassWord)) return [3 /*break*/, 2];
                        userPool = new amazon_cognito_identity_js_dist_amazon_cognito_identity_min__WEBPACK_IMPORTED_MODULE_3__["CognitoUserPool"](src_models_poolData__WEBPACK_IMPORTED_MODULE_4__["poolData"]);
                        attributeList = [];
                        urlAddress = this.address.split(' ').join('+') + ',+';
                        urlCity = this.city.split(' ').join('+') + ',+';
                        gMapsUrl = this.gMapsApi + urlAddress + urlCity + this.state + this.gMapsKey;
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(gMapsUrl)];
                    case 1:
                        gMapLocations = _b.sent();
                        _a = gMapLocations.data.results[0].geometry.location, lat = _a.lat, lng = _a.lng;
                        this.latitude = lat;
                        this.longitude = lng;
                        locationObject = {
                            lat: lat,
                            lng: lng,
                            city: this.city,
                            state: this.state,
                            address: this.address
                        };
                        console.log('locationObject');
                        localStorage.setItem('locationData', JSON.stringify(locationObject));
                        data = [
                            {
                                Name: 'email',
                                Value: this.userEmail
                            },
                            {
                                Name: 'name',
                                Value: this.userName
                            },
                            {
                                Name: 'address',
                                Value: this.address
                            },
                            {
                                Name: 'birthdate',
                                Value: this.birthday
                            }
                        ];
                        for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                            attribute = data_1[_i];
                            newAttribute = new amazon_cognito_identity_js_dist_amazon_cognito_identity_min__WEBPACK_IMPORTED_MODULE_3__["CognitoUserAttribute"](attribute);
                            attributeList.push(newAttribute);
                        }
                        userPool.signUp(this.userEmail, this.userPassWord, attributeList, null, function (err, result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                if (err) {
                                    alert(err.message);
                                    console.log(err);
                                    console.log("error in Signup Process");
                                    return [2 /*return*/];
                                }
                                cognitoUser_1 = result.user;
                                console.log('user name is ' + cognitoUser_1.getUsername());
                                return [2 /*return*/];
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 2:
                        alert('Repeated password doesnt match');
                        console.log(this.userPassWord + ' : ' + this.userRepeatPassWord);
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_profile_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/test-book-item/test-book-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/test-book-item/test-book-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div>\r\n    {{ book.coverLinkLarge }}\r\n  </div>\r\n  <div>\r\n    {{ book.title }}\r\n  </div>\r\n  <div>\r\n    <button (click)=\"onDelete(book)\" class=\"del\">X</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/test-book-item/test-book-item.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/test-book-item/test-book-item.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtYm9vay1pdGVtL3Rlc3QtYm9vay1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/test-book-item/test-book-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/test-book-item/test-book-item.component.ts ***!
  \************************************************************/
/*! exports provided: TestBookItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestBookItemComponent", function() { return TestBookItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_user_library_book_models_BookInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/user-library/book-models/BookInfo */ "./src/app/profile/user-library/book-models/BookInfo.ts");
/* harmony import */ var _profile_user_library_book_services_books_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile/user-library/book-services/books.service */ "./src/app/profile/user-library/book-services/books.service.ts");




var TestBookItemComponent = /** @class */ (function () {
    function TestBookItemComponent(bookService) {
        this.bookService = bookService;
        this.deleteBook = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.library = JSON.parse(localStorage.getItem('userBooks'));
    }
    TestBookItemComponent.prototype.ngOnInit = function () {
        console.log(this.library);
        console.log("got here");
    };
    TestBookItemComponent.prototype.onDelete = function (book) {
        this.deleteBook.emit(book);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _profile_user_library_book_models_BookInfo__WEBPACK_IMPORTED_MODULE_2__["BookInfo"])
    ], TestBookItemComponent.prototype, "book", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TestBookItemComponent.prototype, "deleteBook", void 0);
    TestBookItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-book-item',
            template: __webpack_require__(/*! ./test-book-item.component.html */ "./src/app/test-book-item/test-book-item.component.html"),
            styles: [__webpack_require__(/*! ./test-book-item.component.scss */ "./src/app/test-book-item/test-book-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_profile_user_library_book_services_books_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]])
    ], TestBookItemComponent);
    return TestBookItemComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    GOOGLE_MAPS_API_KEY: "AIzaSyDdZdVODe2_y8XSH7H29CFaemn2_HaUlko&callback=initMap",
    production: false
};


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
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment.prod */ "./src/environments/environment.prod.ts");




if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"]) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/models/poolData.ts":
/*!********************************!*\
  !*** ./src/models/poolData.ts ***!
  \********************************/
/*! exports provided: poolData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "poolData", function() { return poolData; });
var poolData = {};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\brack\OneDrive\Documents\GitHub\Street-Smarts-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map