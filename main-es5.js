(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            var routes = [
                {
                    path: '',
                    component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            /***/ 
        }),
        /***/ "./src/app/app.component.ngfactory.js": 
        /*!********************************************!*\
          !*** ./src/app/app.component.ngfactory.js ***!
          \********************************************/
        /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () { return RenderType_AppComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () { return View_AppComponent_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () { return View_AppComponent_Host_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () { return AppComponentNgFactory; });
            /* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component.ngfactory */ "./src/app/components/header/header.component.ngfactory.js");
            /* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
            /* harmony import */ var _core_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/order.service */ "./src/app/core/services/order.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
            var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });
            function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-header", [], null, null, null, _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _components_header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 4, 0); }, null); }
            function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], [], null, null)], null, null); }
            var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss.shim.ngstyle.js": 
        /*!****************************************************!*\
          !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
          \****************************************************/
        /*! exports provided: styles */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function () { return styles; });
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'henri-potier-angular';
                }
                return AppComponent;
            }());
            /***/ 
        }),
        /***/ "./src/app/app.module.ngfactory.js": 
        /*!*****************************************!*\
          !*** ./src/app/app.module.ngfactory.js ***!
          \*****************************************/
        /*! exports provided: AppModuleNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () { return AppModuleNgFactory; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
            /* harmony import */ var _components_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component.ngfactory */ "./src/app/components/home/home.component.ngfactory.js");
            /* harmony import */ var _order_components_cart_cart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order/components/cart/cart.component.ngfactory */ "./src/app/order/components/cart/cart.component.ngfactory.js");
            /* harmony import */ var _products_components_product_list_product_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/components/product-list/product-list.component.ngfactory */ "./src/app/products/components/product-list/product-list.component.ngfactory.js");
            /* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm2015/browser.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _core_services_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/services/product.service */ "./src/app/core/services/product.service.ts");
            /* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/services/storage.service */ "./src/app/core/services/storage.service.ts");
            /* harmony import */ var _core_services_order_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/services/order.service */ "./src/app/core/services/order.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _order_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./order/components/cart/cart.component */ "./src/app/order/components/cart/cart.component.ts");
            /* harmony import */ var _products_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./products/components/product-list/product-list.component */ "./src/app/products/components/product-list/product-list.component.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
            /* harmony import */ var _order_order_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./order/order-routing.module */ "./src/app/order/order-routing.module.ts");
            /* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./order/order.module */ "./src/app/order/order.module.ts");
            /* harmony import */ var _products_products_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./products/products-routing.module */ "./src/app/products/products-routing.module.ts");
            /* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./products/products.module */ "./src/app/products/products.module.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _components_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["HomeComponentNgFactory"], _order_components_cart_cart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["CartComponentNgFactory"], _products_components_product_list_product_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ProductListComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_10__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0, p2_0) { return [p0_0, p1_0, p2_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_services_product_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"], _core_services_product_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_services_storage_service__WEBPACK_IMPORTED_MODULE_15__["StorageService"], _core_services_storage_service__WEBPACK_IMPORTED_MODULE_15__["StorageService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_services_order_service__WEBPACK_IMPORTED_MODULE_16__["OrderService"], _core_services_order_service__WEBPACK_IMPORTED_MODULE_16__["OrderService"], [_core_services_product_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"], _core_services_storage_service__WEBPACK_IMPORTED_MODULE_15__["StorageService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_18__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_b"](), _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_b"](), _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p3_0, p4_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_i"](p1_0), _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_i"](p2_0), _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_i"](p3_0), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_platform_browser_platform_browser_j"](p4_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () { return [[{ path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"] }], [{ path: "cart", component: _order_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_20__["CartComponent"] }], [{ path: "products", component: _products_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_21__["ProductListComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_23__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_23__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _order_order_routing_module__WEBPACK_IMPORTED_MODULE_24__["OrderRoutingModule"], _order_order_routing_module__WEBPACK_IMPORTED_MODULE_24__["OrderRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _order_order_module__WEBPACK_IMPORTED_MODULE_25__["OrderModule"], _order_order_module__WEBPACK_IMPORTED_MODULE_25__["OrderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _products_products_routing_module__WEBPACK_IMPORTED_MODULE_26__["ProductsRoutingModule"], _products_products_routing_module__WEBPACK_IMPORTED_MODULE_26__["ProductsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _products_products_module__WEBPACK_IMPORTED_MODULE_27__["ProductsModule"], _products_products_module__WEBPACK_IMPORTED_MODULE_27__["ProductsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]); });
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.ngfactory.js": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/header/header.component.ngfactory.js ***!
          \*****************************************************************/
        /*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function () { return RenderType_HeaderComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function () { return View_HeaderComponent_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function () { return View_HeaderComponent_Host_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function () { return HeaderComponentNgFactory; });
            /* harmony import */ var _header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.scss.shim.ngstyle */ "./src/app/components/header/header.component.scss.shim.ngstyle.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.component */ "./src/app/components/header/header.component.ts");
            /* harmony import */ var _core_services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/order.service */ "./src/app/core/services/order.service.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_HeaderComponent = [_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
            var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });
            function View_HeaderComponent_0(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 22, "nav", [["aria-label", "main navigation"], ["class", "navbar is-primary"], ["role", "navigation"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "navbar-brand"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "a", [["class", "navbar-item"], ["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
                        var ad = true;
                        if (("click" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" HENRI POTIER "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "a", [["aria-expanded", "false"], ["aria-label", "menu"], ["class", "navbar-burger burger"], ["data-target", "navbarBasicExample"], ["role", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 13, "div", [["class", "navbar-menu"], ["id", "navbarBasicExample"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "div", [["class", "navbar-start"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "a", [["class", "navbar-item"], ["routerLink", "/products"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
                        var ad = true;
                        if (("click" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Products "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 8, "div", [["class", "navbar-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 7, "div", [["class", "navbar-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 6, "div", [["class", "buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "a", [["class", "button is-info badge has-badge-rounded has-badge-danger"], ["routerLink", "/cart"]], [[1, "data-badge", 0], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
                        var ad = true;
                        if (("click" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "span", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 0, "i", [["class", "fas fa-shopping-cart"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["View Order"]))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 4, 0, currVal_2); var currVal_5 = "/products"; _ck(_v, 13, 0, currVal_5); var currVal_9 = "/cart"; _ck(_v, 19, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).href; _ck(_v, 12, 0, currVal_3, currVal_4); var currVal_6 = _co.order.count; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).target; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).href; _ck(_v, 18, 0, currVal_6, currVal_7, currVal_8); });
            }
            function View_HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], [_core_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]], null, null)], null, null); }
            var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.scss.shim.ngstyle.js": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/header/header.component.scss.shim.ngstyle.js ***!
          \*************************************************************************/
        /*! exports provided: styles */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function () { return styles; });
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"];
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/header/header.component.ts ***!
          \*******************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(orderService) {
                    var _this = this;
                    this.orderService = orderService;
                    this.orderService.order.subscribe(function (o) { return (_this.order = o); });
                }
                return HeaderComponent;
            }());
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ngfactory.js": 
        /*!*************************************************************!*\
          !*** ./src/app/components/home/home.component.ngfactory.js ***!
          \*************************************************************/
        /*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function () { return RenderType_HomeComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function () { return View_HomeComponent_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function () { return View_HomeComponent_Host_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function () { return HomeComponentNgFactory; });
            /* harmony import */ var _home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.scss.shim.ngstyle */ "./src/app/components/home/home.component.scss.shim.ngstyle.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/components/home/home.component.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_HomeComponent = [_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
            var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HomeComponent, data: {} });
            function View_HomeComponent_0(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "section", [["class", "section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h1", [["class", "title is-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Welcome to Henri Potier E-shop!"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "a", [["class", "button is-primary"], ["routerLink", "/products"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
                        var ad = true;
                        if (("click" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" View our products "]))], function (_ck, _v) { var currVal_2 = "/products"; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); });
            }
            function View_HomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.scss.shim.ngstyle.js": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/home/home.component.scss.shim.ngstyle.js ***!
          \*********************************************************************/
        /*! exports provided: styles */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function () { return styles; });
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"];
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            /***/ 
        }),
        /***/ "./src/app/core/core.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/core/core.module.ts ***!
          \*************************************/
        /*! exports provided: CoreModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function () { return CoreModule; });
            var CoreModule = /** @class */ (function () {
                function CoreModule() {
                }
                return CoreModule;
            }());
            /***/ 
        }),
        /***/ "./src/app/core/services/order.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/core/services/order.service.ts ***!
          \************************************************/
        /*! exports provided: OrderService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function () { return OrderService; });
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var OrderService = /** @class */ (function () {
                function OrderService(productService, storage) {
                    var _this = this;
                    this.productService = productService;
                    this.storage = storage;
                    this.order = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({
                        count: 0,
                        total: 0,
                        items: []
                    });
                    if (this.storage.get('order')) {
                        this.order.next(this.storage.get('order'));
                    }
                    this.order.subscribe(function (order) {
                        _this.storage.set('order', order);
                    });
                }
                OrderService.prototype.getReduction = function () {
                    var _this = this;
                    return this.order.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (order) { return order.count > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(function (prevOrder, order) { return prevOrder.count === order.count; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(function (order) {
                        return _this.productService
                            .getCommercialOffers(order.items.map(function (orderItem) { return orderItem.product.isbn; }))
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (offers) { return ({ order: order, offers: offers }); }));
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
                        var order = _a.order, offers = _a.offers;
                        return _this.calculateBestReduction(order, offers);
                    }));
                };
                OrderService.prototype.addProductToOrder = function (product, quantity) {
                    var currentOrder = this.order.getValue();
                    var productInOrder = currentOrder.items.find(function (orderItem) { return orderItem.product.isbn === product.isbn; });
                    if (productInOrder) {
                        productInOrder.quantity++;
                    }
                    else {
                        currentOrder.items.push({
                            id: product.isbn,
                            product: product,
                            quantity: quantity
                        });
                    }
                    this.order.next(this.calculateOrder(currentOrder));
                };
                OrderService.prototype.deleteOrderItem = function (orderItem) {
                    var currentOrder = this.order.getValue();
                    currentOrder.items = currentOrder.items.filter(function (oi) { return oi.id !== orderItem.id; });
                    this.order.next(this.calculateOrder(currentOrder));
                };
                OrderService.prototype.changeQuantityOrderItem = function (orderItem, quantity) {
                    var currentOrder = this.order.getValue();
                    var orderItemInOrder = currentOrder.items.find(function (oi) { return oi.id === orderItem.id; });
                    if (orderItemInOrder) {
                        orderItemInOrder.quantity += quantity;
                        if (orderItemInOrder.quantity <= 0) {
                            currentOrder.items = currentOrder.items.filter(function (oi) { return oi.id !== orderItem.id; });
                        }
                    }
                    this.order.next(this.calculateOrder(currentOrder));
                };
                OrderService.prototype.calculateOrder = function (order) {
                    return Object.assign({}, order, { count: order.items.reduce(function (value, item) { return value + item.quantity; }, 0), total: order.items.reduce(function (value, item) { return value + item.quantity * item.product.price; }, 0) });
                };
                OrderService.prototype.calculateReductionForOffer = function (order, offer) {
                    switch (offer.type) {
                        case 'percentage': {
                            return order.total * (offer.value / 100);
                        }
                        case 'minus': {
                            return offer.value;
                        }
                        case 'slice': {
                            var nbSlice = Math.floor(order.total / offer.sliceValue);
                            return nbSlice * offer.value;
                        }
                    }
                };
                OrderService.prototype.calculateBestReduction = function (order, offers) {
                    var _this = this;
                    return offers
                        .map(function (offer) { return ({ offer: offer, amount: _this.calculateReductionForOffer(order, offer) }); })
                        .sort(function (a, b) { return (a.amount < b.amount ? 1 : -1); })[0];
                };
                return OrderService;
            }());
            /***/ 
        }),
        /***/ "./src/app/core/services/product.service.ts": 
        /*!**************************************************!*\
          !*** ./src/app/core/services/product.service.ts ***!
          \**************************************************/
        /*! exports provided: ProductService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function () { return ProductService; });
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var ProductService = /** @class */ (function () {
                function ProductService(http) {
                    this.http = http;
                    this.apiURL = 'https://henri-potier-proxy.herokuapp.com';
                }
                ProductService.prototype.getProducts = function () {
                    var route = '/books';
                    return this.http.get(this.apiURL + route);
                };
                ProductService.prototype.getCommercialOffers = function (productsIds) {
                    var route = "/books/" + productsIds.join(',') + "/commercialOffers";
                    return this.http.get(this.apiURL + route).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (response) {
                        return response.offers;
                    }));
                };
                return ProductService;
            }());
            /***/ 
        }),
        /***/ "./src/app/core/services/storage.service.ts": 
        /*!**************************************************!*\
          !*** ./src/app/core/services/storage.service.ts ***!
          \**************************************************/
        /*! exports provided: StorageService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function () { return StorageService; });
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var StorageService = /** @class */ (function () {
                function StorageService(platformId) {
                    this.platformId = platformId;
                }
                StorageService.prototype.set = function (key, value) {
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
                        localStorage.setItem(key, JSON.stringify(value));
                    }
                };
                StorageService.prototype.get = function (key) {
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
                        return JSON.parse(localStorage.getItem(key));
                    }
                    else {
                        return null;
                    }
                };
                StorageService.prototype.unset = function (key) {
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
                        localStorage.removeItem(key);
                    }
                };
                StorageService.prototype.clearAll = function () {
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
                        localStorage.clear();
                    }
                };
                return StorageService;
            }());
            /***/ 
        }),
        /***/ "./src/app/order/components/cart/cart.component.ngfactory.js": 
        /*!*******************************************************************!*\
          !*** ./src/app/order/components/cart/cart.component.ngfactory.js ***!
          \*******************************************************************/
        /*! exports provided: RenderType_CartComponent, View_CartComponent_0, View_CartComponent_Host_0, CartComponentNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CartComponent", function () { return RenderType_CartComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CartComponent_0", function () { return View_CartComponent_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CartComponent_Host_0", function () { return View_CartComponent_Host_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponentNgFactory", function () { return CartComponentNgFactory; });
            /* harmony import */ var _cart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.component.scss.shim.ngstyle */ "./src/app/order/components/cart/cart.component.scss.shim.ngstyle.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.component */ "./src/app/order/components/cart/cart.component.ts");
            /* harmony import */ var _core_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/order.service */ "./src/app/core/services/order.service.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_CartComponent = [_cart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
            var RenderType_CartComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CartComponent, data: {} });
            function View_CartComponent_2(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 9, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 8, "div", [["class", "buttons has-addons is-centered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "button", [["class", "button"]], null, [[null, "click"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("click" === en)) {
                            var pd_0 = (_co.changeQuantity(_v.context.$implicit, (0 - 1)) !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [["class", "icon is-small"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "i", [["class", "fas fa-minus-square"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [["class", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "button", [["class", "button"]], null, [[null, "click"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("click" === en)) {
                            var pd_0 = (_co.changeQuantity(_v.context.$implicit, 1) !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [["class", "icon is-small"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "i", [["class", "fas fa-plus-square"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "td", [["class", "has-text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", " \u20AC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "td", [["class", "has-text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", " \u20AC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "td", [["class", "has-text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "button", [["class", "button is-danger"]], null, [[null, "click"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("click" === en)) {
                            var pd_0 = (_co.deleteItem(_v.context.$implicit) !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "span", [["class", "icon is-small"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "i", [["class", "fas fa-trash-alt"]], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.product.title; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.quantity; _ck(_v, 9, 0, currVal_1); var currVal_2 = _v.context.$implicit.product.price.toFixed(2); _ck(_v, 14, 0, currVal_2); var currVal_3 = (_v.context.$implicit.product.price * _v.context.$implicit.quantity).toFixed(2); _ck(_v, 16, 0, currVal_3); });
            }
            function View_CartComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 44, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 43, "table", [["class", "table is-hoverable is-fullwidth"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 14, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "abbr", [["title", "Product"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Product"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "th", [["class", "has-text-centered"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "abbr", [["title", "Quantity"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Quantity"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "th", [["class", "has-text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "abbr", [["title", "Price"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Unit Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "th", [["class", "has-text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "abbr", [["title", "Total Price"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Total Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 24, "tfoot", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "th", [["class", "has-text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Total before reduction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "th", [["class", "has-text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](24, null, ["", " \u20AC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "th", [["class", "has-text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](30, null, [" Reduction ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "th", [["class", "has-text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, null, [" ", " \u20AC "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 7, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "th", [["class", "has-text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Total"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "th", [["class", "has-text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](40, null, [" ", " \u20AC "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CartComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.order.items; _ck(_v, 44, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.order.total.toFixed(2); _ck(_v, 24, 0, currVal_0); var currVal_1 = ((_co.reduction == null) ? null : ((_co.reduction.offer == null) ? null : _co.reduction.offer.type)); _ck(_v, 30, 0, currVal_1); var currVal_2 = (_co.reduction ? _co.reduction.amount : 0).toFixed(2); _ck(_v, 32, 0, currVal_2); var currVal_3 = (_co.order.total - (_co.reduction ? _co.reduction.amount : 0)).toFixed(2); _ck(_v, 40, 0, currVal_3); }); }
            function View_CartComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Your cart is empty."]))], null, null); }
            function View_CartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "section", [["class", "section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h1", [["class", "title is-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Your cart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CartComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CartComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.order == null) ? null : _co.order.count); _ck(_v, 4, 0, currVal_0); var currVal_1 = (_co.order.count === 0); _ck(_v, 6, 0, currVal_1); }, null); }
            function View_CartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-cart", [], null, null, null, View_CartComponent_0, RenderType_CartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"], [_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]], null, null)], null, null); }
            var CartComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-cart", _cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"], View_CartComponent_Host_0, {}, {}, []);
            /***/ 
        }),
        /***/ "./src/app/order/components/cart/cart.component.scss.shim.ngstyle.js": 
        /*!***************************************************************************!*\
          !*** ./src/app/order/components/cart/cart.component.scss.shim.ngstyle.js ***!
          \***************************************************************************/
        /*! exports provided: styles */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function () { return styles; });
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"];
            /***/ 
        }),
        /***/ "./src/app/order/components/cart/cart.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/order/components/cart/cart.component.ts ***!
          \*********************************************************/
        /*! exports provided: CartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function () { return CartComponent; });
            var CartComponent = /** @class */ (function () {
                function CartComponent(orderService) {
                    var _this = this;
                    this.orderService = orderService;
                    this.orderService.order.subscribe(function (order) { return (_this.order = order); });
                    this.orderService.getReduction().subscribe(function (reduction) { return (_this.reduction = reduction); });
                }
                CartComponent.prototype.changeQuantity = function (orderItem, quantity) {
                    this.orderService.changeQuantityOrderItem(orderItem, quantity);
                };
                CartComponent.prototype.deleteItem = function (orderItem) {
                    this.orderService.deleteOrderItem(orderItem);
                };
                return CartComponent;
            }());
            /***/ 
        }),
        /***/ "./src/app/order/order-routing.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/order/order-routing.module.ts ***!
          \***********************************************/
        /*! exports provided: OrderRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function () { return OrderRoutingModule; });
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/order/components/cart/cart.component.ts");
            var routes = [
                {
                    path: 'cart',
                    component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"]
                }
            ];
            var OrderRoutingModule = /** @class */ (function () {
                function OrderRoutingModule() {
                }
                return OrderRoutingModule;
            }());
            /***/ 
        }),
        /***/ "./src/app/order/order.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/order/order.module.ts ***!
          \***************************************/
        /*! exports provided: OrderModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function () { return OrderModule; });
            var OrderModule = /** @class */ (function () {
                function OrderModule() {
                }
                return OrderModule;
            }());
            /***/ 
        }),
        /***/ "./src/app/products/components/product-list/product-list.component.ngfactory.js": 
        /*!**************************************************************************************!*\
          !*** ./src/app/products/components/product-list/product-list.component.ngfactory.js ***!
          \**************************************************************************************/
        /*! exports provided: RenderType_ProductListComponent, View_ProductListComponent_0, View_ProductListComponent_Host_0, ProductListComponentNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProductListComponent", function () { return RenderType_ProductListComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductListComponent_0", function () { return View_ProductListComponent_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductListComponent_Host_0", function () { return View_ProductListComponent_Host_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponentNgFactory", function () { return ProductListComponentNgFactory; });
            /* harmony import */ var _product_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list.component.scss.shim.ngstyle */ "./src/app/products/components/product-list/product-list.component.scss.shim.ngstyle.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _product_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/product.component.ngfactory */ "./src/app/products/components/product/product.component.ngfactory.js");
            /* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/product.component */ "./src/app/products/components/product/product.component.ts");
            /* harmony import */ var _core_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/order.service */ "./src/app/core/services/order.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-list.component */ "./src/app/products/components/product-list/product-list.component.ts");
            /* harmony import */ var _core_services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/product.service */ "./src/app/core/services/product.service.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_ProductListComponent = [_product_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
            var RenderType_ProductListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ProductListComponent, data: { "animation": [{ type: 7, name: "fadeInOut", definitions: [{ type: 1, expr: "* <=> *", animation: [{ type: 11, selector: ":enter", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }, { type: 12, timings: "100ms", animation: { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: "550ms ease-out" } }], options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "200ms" }, options: { optional: true } }], options: null }], options: {} }] } });
            function View_ProductListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-product", [["class", "column is-one-quarter"]], null, null, null, _product_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ProductComponent_0"], _product_product_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ProductComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"], [_core_services_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]], { product: [0, "product"] }, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }, null); }
            function View_ProductListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "columns is-multiline"]], [[24, "@fadeInOut", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProductListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.filteredProducts; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.filteredProducts.length; _ck(_v, 1, 0, currVal_0); }); }
            function View_ProductListComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Chargement en cours..."]))], null, null); }
            function View_ProductListComponent_0(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "section", [["class", "section"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 18, "div", [["class", "columns"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h1", [["class", "title is-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Products"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 14, "form", [["class", "column"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
                        var ad = true;
                        if (("submit" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onSubmit($event) !== false);
                            ad = (pd_0 && ad);
                        }
                        if (("reset" === en)) {
                            var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onReset() !== false);
                            ad = (pd_1 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 9, "div", [["class", "field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 8, "p", [["class", "control has-icons-left has-icons-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 5, "input", [["class", "input"], ["formControlName", "text"], ["placeholder", "Search"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
                        var ad = true;
                        if (("input" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._handleInput($event.target.value) !== false);
                            ad = (pd_0 && ad);
                        }
                        if (("blur" === en)) {
                            var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onTouched() !== false);
                            ad = (pd_1 && ad);
                        }
                        if (("compositionstart" === en)) {
                            var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionStart() !== false);
                            ad = (pd_2 && ad);
                        }
                        if (("compositionend" === en)) {
                            var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionEnd($event.target.value) !== false);
                            ad = (pd_3 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_q"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "span", [["class", "icon is-small is-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, "i", [["class", "fas fa-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProductListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ProductListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.searchForm; _ck(_v, 7, 0, currVal_7); var currVal_15 = "text"; _ck(_v, 15, 0, currVal_15); var currVal_16 = !_co.loading; _ck(_v, 21, 0, currVal_16); var currVal_17 = _co.loading; _ck(_v, 23, 0, currVal_17); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 5, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPending; _ck(_v, 12, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); });
            }
            function View_ProductListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-product-list", [], null, null, null, View_ProductListComponent_0, RenderType_ProductListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"], [_core_services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]], null, null)], null, null); }
            var ProductListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-product-list", _product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"], View_ProductListComponent_Host_0, {}, {}, []);
            /***/ 
        }),
        /***/ "./src/app/products/components/product-list/product-list.component.scss.shim.ngstyle.js": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/products/components/product-list/product-list.component.scss.shim.ngstyle.js ***!
          \**********************************************************************************************/
        /*! exports provided: styles */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function () { return styles; });
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"];
            /***/ 
        }),
        /***/ "./src/app/products/components/product-list/product-list.component.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/products/components/product-list/product-list.component.ts ***!
          \****************************************************************************/
        /*! exports provided: ProductListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () { return ProductListComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var ProductListComponent = /** @class */ (function () {
                function ProductListComponent(productService, formBuilder) {
                    var _this = this;
                    this.productService = productService;
                    this.formBuilder = formBuilder;
                    this.loading = true;
                    this.searchForm = this.formBuilder.group({
                        text: ''
                    });
                    var searchText$ = this.searchForm.get('text').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
                    var products$ = this.productService.getProducts();
                    this.productsSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(searchText$, products$)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return (_this.loading = true); }))
                        .subscribe(function (_a) {
                        var searchText = _a[0], response = _a[1];
                        _this.filteredProducts = searchText ? response.filter(function (product) { return product.title.includes(searchText); }) : response;
                        _this.loading = false;
                    });
                    this.searchForm.get('text').setValue('');
                }
                ProductListComponent.prototype.ngOnDestroy = function () {
                    if (this.productsSubscription) {
                        this.productsSubscription.unsubscribe();
                    }
                };
                return ProductListComponent;
            }());
            /***/ 
        }),
        /***/ "./src/app/products/components/product/product.component.ngfactory.js": 
        /*!****************************************************************************!*\
          !*** ./src/app/products/components/product/product.component.ngfactory.js ***!
          \****************************************************************************/
        /*! exports provided: RenderType_ProductComponent, View_ProductComponent_0, View_ProductComponent_Host_0, ProductComponentNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ProductComponent", function () { return RenderType_ProductComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductComponent_0", function () { return View_ProductComponent_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ProductComponent_Host_0", function () { return View_ProductComponent_Host_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponentNgFactory", function () { return ProductComponentNgFactory; });
            /* harmony import */ var _product_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.component.scss.shim.ngstyle */ "./src/app/products/components/product/product.component.scss.shim.ngstyle.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "./src/app/products/components/product/product.component.ts");
            /* harmony import */ var _core_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/order.service */ "./src/app/core/services/order.service.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_ProductComponent = [_product_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
            var RenderType_ProductComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ProductComponent, data: {} });
            function View_ProductComponent_0(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "card-image"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "figure", [["class", "image is-3by4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 11, "div", [["class", "card-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "div", [["class", "media"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 9, "div", [["class", "media-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "p", [["class", "title is-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "p", [["class", "subtitle is-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " \u20AC "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "button", [["class", "button is-info is-pulled-right"]], null, [[null, "click"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("click" === en)) {
                            var pd_0 = (_co.addToOrder() !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "span", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "i", [["class", "fas fa-cart-arrow-down"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add to cart"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.product.cover; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.product.title, ""); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _co.product.title; _ck(_v, 8, 0, currVal_2); var currVal_3 = _co.product.price.toFixed(2); _ck(_v, 10, 0, currVal_3); });
            }
            function View_ProductComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-product", [], null, null, null, View_ProductComponent_0, RenderType_ProductComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"], [_core_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]], null, null)], null, null); }
            var ProductComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-product", _product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"], View_ProductComponent_Host_0, { product: "product" }, {}, []);
            /***/ 
        }),
        /***/ "./src/app/products/components/product/product.component.scss.shim.ngstyle.js": 
        /*!************************************************************************************!*\
          !*** ./src/app/products/components/product/product.component.scss.shim.ngstyle.js ***!
          \************************************************************************************/
        /*! exports provided: styles */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function () { return styles; });
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"];
            /***/ 
        }),
        /***/ "./src/app/products/components/product/product.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/products/components/product/product.component.ts ***!
          \******************************************************************/
        /*! exports provided: ProductComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function () { return ProductComponent; });
            var ProductComponent = /** @class */ (function () {
                function ProductComponent(orderService) {
                    this.orderService = orderService;
                }
                ProductComponent.prototype.addToOrder = function () {
                    this.orderService.addProductToOrder(this.product, 1);
                };
                return ProductComponent;
            }());
            /***/ 
        }),
        /***/ "./src/app/products/products-routing.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/products/products-routing.module.ts ***!
          \*****************************************************/
        /*! exports provided: ProductsRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () { return ProductsRoutingModule; });
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-list/product-list.component */ "./src/app/products/components/product-list/product-list.component.ts");
            var routes = [
                {
                    path: 'products',
                    component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"]
                }
            ];
            var ProductsRoutingModule = /** @class */ (function () {
                function ProductsRoutingModule() {
                }
                return ProductsRoutingModule;
            }());
            /***/ 
        }),
        /***/ "./src/app/products/products.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/products/products.module.ts ***!
          \*********************************************/
        /*! exports provided: ProductsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function () { return ProductsModule; });
            var ProductsModule = /** @class */ (function () {
                function ProductsModule() {
                }
                return ProductsModule;
            }());
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
            }
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/maxgravo/work/henri-potier-angular/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map