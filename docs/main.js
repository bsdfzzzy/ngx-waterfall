(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-waterfall/fesm5/ngx-waterfall.js":
/*!***************************************************!*\
  !*** ./dist/ngx-waterfall/fesm5/ngx-waterfall.js ***!
  \***************************************************/
/*! exports provided: NgxWaterfallService, NgxWaterfallComponent, NgxWaterfallModule, NgxWaterfallItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxWaterfallService", function() { return NgxWaterfallService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxWaterfallComponent", function() { return NgxWaterfallComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxWaterfallModule", function() { return NgxWaterfallModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxWaterfallItemDirective", function() { return NgxWaterfallItemDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxWaterfallService = /** @class */ (function () {
    function NgxWaterfallService() {
    }
    NgxWaterfallService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxWaterfallService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxWaterfallService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgxWaterfallService_Factory() { return new NgxWaterfallService(); }, token: NgxWaterfallService, providedIn: "root" });
    return NgxWaterfallService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxWaterfallItemDirective = /** @class */ (function () {
    function NgxWaterfallItemDirective(el) {
        this.el = el;
        this.itemClass = true;
    }
    /**
     * @return {?}
     */
    NgxWaterfallItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    NgxWaterfallItemDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngx-waterfall-item]'
                },] }
    ];
    /** @nocollapse */
    NgxWaterfallItemDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    NgxWaterfallItemDirective.propDecorators = {
        itemClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.ngx-waterfall-item',] }]
    };
    return NgxWaterfallItemDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxWaterfallComponent = /** @class */ (function () {
    function NgxWaterfallComponent(cd, renderer) {
        this.cd = cd;
        this.renderer = renderer;
        this.nextIndex = 0;
        this.offsetTopArray = [];
        this.offsetLeftArray = [];
        this.gap = 10;
    }
    Object.defineProperty(NgxWaterfallComponent.prototype, "itemWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._itemWidth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._itemWidth = value;
            if (this.offsetLeftArray.length > 0) {
                this.initialData();
                this.renderItem();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxWaterfallComponent.prototype, "largestTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this.offsetTopArray.reduce(function (a, b) {
                return a > b ? a : b;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxWaterfallComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.initialData();
        this.renderItem();
    };
    /**
     * @return {?}
     */
    NgxWaterfallComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.waterfallItemList.length !== this.prevItemLength) {
            /** @type {?} */
            var lastAddItemList = this.waterfallItemList.filter(function (item, i) {
                return i > _this.prevItemLength - 1;
            });
            this.renderItem(lastAddItemList);
            this.prevItemLength = this.waterfallItemList.length;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    NgxWaterfallComponent.prototype.initialData = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.itemWidth) {
            if (this.waterfallItemList.toArray()[0]) {
                this.itemWidth = this.waterfallItemList.toArray()[0].el.nativeElement.clientWidth;
            }
            else {
                console.warn('There is no waterfall item.');
                return;
            }
        }
        this.prevItemLength = this.waterfallItemList.length;
        this.colNum = Math.floor((this.waterfallContainerElement.nativeElement.clientWidth + this.gap) /
            (this.itemWidth + this.gap));
        this.offsetTopArray = Array(this.colNum).fill(0);
        this.offsetLeftArray = this.offsetTopArray.map(function (top, index) {
            return index * (_this.itemWidth + _this.gap);
        });
        console.log(this.offsetLeftArray);
    };
    /**
     * @protected
     * @param {?=} waterfallItemList
     * @return {?}
     */
    NgxWaterfallComponent.prototype.renderItem = /**
     * @protected
     * @param {?=} waterfallItemList
     * @return {?}
     */
    function (waterfallItemList) {
        var _this = this;
        if (waterfallItemList === void 0) { waterfallItemList = this.waterfallItemList; }
        waterfallItemList.forEach(function (item) {
            _this.renderer.setStyle(item.el.nativeElement, 'width', _this.itemWidth + 'px');
            _this.renderNextEle(item);
        });
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    NgxWaterfallComponent.prototype.renderNextEle = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.renderer.setStyle(item.el.nativeElement, 'top', this.offsetTopArray[this.nextIndex] + 'px');
        this.offsetTopArray[this.nextIndex] +=
            item.el.nativeElement.clientHeight + this.gap;
        this.renderer.setStyle(item.el.nativeElement, 'left', this.offsetLeftArray[this.nextIndex] + 'px');
        this.nextIndex = this.findLowestTopColIndex(this.offsetTopArray);
        this.cd.detectChanges();
    };
    /**
     * @private
     * @param {?} arr
     * @return {?}
     */
    NgxWaterfallComponent.prototype.findLowestTopColIndex = /**
     * @private
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        /** @type {?} */
        var lowestTop = arr.reduce(function (a, b) {
            return a > b ? b : a;
        });
        return arr.indexOf(lowestTop);
    };
    NgxWaterfallComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-waterfall',
                    template: "<div class=\"ngx-waterfall-container\" #container [style.height]=\"largestTop + 'px'\">\n  <ng-content></ng-content>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: [".ngx-waterfall-container{position:relative;width:100%;height:100%}.ngx-waterfall-item{position:absolute}"]
                }] }
    ];
    /** @nocollapse */
    NgxWaterfallComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    NgxWaterfallComponent.propDecorators = {
        waterfallItemList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NgxWaterfallItemDirective,] }],
        waterfallContainerElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container',] }],
        gap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        itemWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgxWaterfallComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxWaterfallModule = /** @class */ (function () {
    function NgxWaterfallModule() {
    }
    NgxWaterfallModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [NgxWaterfallComponent, NgxWaterfallItemDirective],
                    imports: [],
                    exports: [NgxWaterfallComponent, NgxWaterfallItemDirective]
                },] }
    ];
    return NgxWaterfallModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-waterfall.js.map

/***/ }),

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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-waterfall [gap]=\"20\" [itemWidth]=\"341\">\n  <div ngx-waterfall-item *ngFor=\"let num of waterfallNum\" class=\"item\" [style.height]=\"num * 10 + 'px'\">{{num}}</div>\n</ngx-waterfall>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\n  width: 200px;\n  background: blue;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96eXpoYW8vRG9jdW1lbnRzL3BlcnNvbmFsL29wZW4tc291cmNlL25neC13YXRlcmZhbGwvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLHNCQUFxQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4iXX0= */"

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
        this.waterfallNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.waterfallNum.push(12);
        }, 3000);
    };
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_waterfall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-waterfall */ "./dist/ngx-waterfall/fesm5/ngx-waterfall.js");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_waterfall__WEBPACK_IMPORTED_MODULE_4__["NgxWaterfallModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! /Users/zyzhao/Documents/personal/open-source/ngx-waterfall/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map