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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-root {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nsection {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: fixed;\r\n    bottom: 0;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\napp-pads {\r\n    width: 100%;\r\n}\r\n\r\napp-full-screen {\r\n    z-index: 1;\r\n}\r\n\r\n*:focus {\r\n    outline: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixTQUFTO0lBQ1QsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcm9vdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuYXBwLXBhZHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmFwcC1mdWxsLXNjcmVlbiB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4qOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section (keydown)=\"onKeyDown($event)\" (keyup)=\"onKeyUp($event)\" tabindex=\"0\">\n    <app-full-screen></app-full-screen>\n    <app-viewer></app-viewer>\n    <app-pads></app-pads>\n</section>\n"

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
/* harmony import */ var _joystick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./joystick */ "./src/app/joystick.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(socketService) {
        this.socketService = socketService;
        this.title = 'Rover Client';
        this.pads = {
            KeyW: {
                side: 'left',
                value: 1
            },
            KeyS: {
                side: 'left',
                value: -1
            },
            ArrowUp: {
                side: 'right',
                value: 1
            },
            ArrowDown: {
                side: 'right',
                value: -1
            }
        };
        this.keys = Object.keys(this.pads);
        this.joystick = new _joystick__WEBPACK_IMPORTED_MODULE_2__["Joystick"]();
    }
    AppComponent.prototype.onKeyUp = function (event) {
        var key = event.code;
        if (this.keys.indexOf(key) >= 0) {
            var side = this.pads[key].side;
            this.joystick[side] = 0;
            this.socketService.send(this.joystick);
        }
    };
    AppComponent.prototype.onKeyDown = function (event) {
        var key = event.code;
        if (this.keys.indexOf(key) >= 0) {
            var side = this.pads[key].side;
            var previous = this.joystick[side];
            var current = this.pads[key].value;
            if (previous !== current) {
                this.joystick[side] = current;
                this.socketService.send(this.joystick);
            }
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])
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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewer/viewer.component */ "./src/app/viewer/viewer.component.ts");
/* harmony import */ var _control_control_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control/control.component */ "./src/app/control/control.component.ts");
/* harmony import */ var _pads_pads_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pads/pads.component */ "./src/app/pads/pads.component.ts");
/* harmony import */ var _full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./full-screen/full-screen.component */ "./src/app/full-screen/full-screen.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ViewerComponent"],
                _control_control_component__WEBPACK_IMPORTED_MODULE_6__["ControlComponent"],
                _pads_pads_component__WEBPACK_IMPORTED_MODULE_7__["PadsComponent"],
                _full_screen_full_screen_component__WEBPACK_IMPORTED_MODULE_8__["FullScreenComponent"]
            ],
            imports: [
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/control/control.component.css":
/*!***********************************************!*\
  !*** ./src/app/control/control.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    border: 1px solid grey;\r\n    padding: 0.75em;\r\n    margin-top: 0.25em;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n    color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    font-size: xx-large;\r\n}\r\n\r\n.btn:active {\r\n    background-color: rgba(19, 52, 201, 0.13);\r\n}\r\n\r\n.btn::-moz-selection {\r\n    background: transparent;\r\n}\r\n\r\n.btn::selection {\r\n    background: transparent;\r\n}\r\n\r\n.btn::-moz-selection {\r\n    background: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbC9jb250cm9sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRkE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb250cm9sL2NvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIHBhZGRpbmc6IDAuNzVlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5idG46YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTksIDUyLCAyMDEsIDAuMTMpO1xyXG59XHJcblxyXG4uYnRuOjpzZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5idG46Oi1tb3otc2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/control/control.component.html":
/*!************************************************!*\
  !*** ./src/app/control/control.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div (mousedown)=\"onForward()\"\n         (touchstart)=\"onForward()\"\n         (touchend)=\"onRelease(0)\"\n         (mouseup)=\"onRelease(0)\"\n         class=\"btn\">\n        ▲\n    </div>\n    <div (mousedown)=\"onBackward()\"\n         (touchstart)=\"onBackward()\"\n         (touchend)=\"onRelease(1)\"\n         (mouseup)=\"onRelease(1)\"\n         class=\"btn\">\n        ▼\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/control/control.component.ts":
/*!**********************************************!*\
  !*** ./src/app/control/control.component.ts ***!
  \**********************************************/
/*! exports provided: ControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlComponent", function() { return ControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _joystick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../joystick */ "./src/app/joystick.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");




var ControlComponent = /** @class */ (function () {
    function ControlComponent(socketService) {
        this.socketService = socketService;
        this.pressed = [false, false];
    }
    ControlComponent.prototype.onForward = function () {
        this.pressed[0] = true;
        this.joystick[this.side] = 1;
        this.socketService.send(this.joystick);
    };
    ControlComponent.prototype.onBackward = function () {
        this.pressed[1] = true;
        this.joystick[this.side] = -1;
        this.socketService.send(this.joystick);
    };
    ControlComponent.prototype.onRelease = function (button) {
        this.pressed[button] = false;
        if (!this.pressed[0] && !this.pressed[1]) {
            this.joystick[this.side] = 0;
            this.socketService.send(this.joystick);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ControlComponent.prototype, "side", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _joystick__WEBPACK_IMPORTED_MODULE_2__["Joystick"])
    ], ControlComponent.prototype, "joystick", void 0);
    ControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-control',
            template: __webpack_require__(/*! ./control.component.html */ "./src/app/control/control.component.html"),
            styles: [__webpack_require__(/*! ./control.component.css */ "./src/app/control/control.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])
    ], ControlComponent);
    return ControlComponent;
}());



/***/ }),

/***/ "./src/app/full-screen/full-screen.component.css":
/*!*******************************************************!*\
  !*** ./src/app/full-screen/full-screen.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    padding: 0.5em;\r\n    border: 1px solid grey;\r\n    border-radius: 3px;\r\n    margin: 0.5em;\r\n    cursor: pointer;\r\n    color: white;\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVsbC1zY3JlZW4vZnVsbC1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLDBDQUEwQztBQUM5QyIsImZpbGUiOiJzcmMvYXBwL2Z1bGwtc2NyZWVuL2Z1bGwtc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/full-screen/full-screen.component.html":
/*!********************************************************!*\
  !*** ./src/app/full-screen/full-screen.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onFullScreen()\" *ngIf=\"isFullScreen\">\n  Full screen\n</div>\n"

/***/ }),

/***/ "./src/app/full-screen/full-screen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/full-screen/full-screen.component.ts ***!
  \******************************************************/
/*! exports provided: FullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function() { return FullScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FullScreenComponent = /** @class */ (function () {
    function FullScreenComponent() {
        this.isFullScreen = true;
    }
    FullScreenComponent.prototype.ngOnInit = function () {
    };
    FullScreenComponent.prototype.onFullScreen = function () {
        this.isFullScreen = false;
        var elem = document.documentElement;
        var methodToBeInvoked = elem.requestFullscreen ||
            elem['webkitRequestFullScreen'] ||
            elem['mozRequestFullscreen'] ||
            elem['msRequestFullscreen'];
        if (methodToBeInvoked) {
            methodToBeInvoked.call(elem);
        }
    };
    FullScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-full-screen',
            template: __webpack_require__(/*! ./full-screen.component.html */ "./src/app/full-screen/full-screen.component.html"),
            styles: [__webpack_require__(/*! ./full-screen.component.css */ "./src/app/full-screen/full-screen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FullScreenComponent);
    return FullScreenComponent;
}());



/***/ }),

/***/ "./src/app/joystick.ts":
/*!*****************************!*\
  !*** ./src/app/joystick.ts ***!
  \*****************************/
/*! exports provided: Joystick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Joystick", function() { return Joystick; });
var Joystick = /** @class */ (function () {
    function Joystick() {
        this.left = 0;
        this.right = 0;
    }
    return Joystick;
}());



/***/ }),

/***/ "./src/app/pads/pads.component.css":
/*!*****************************************!*\
  !*** ./src/app/pads/pads.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pads {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n\r\n    position: fixed;\r\n    right: 1em;\r\n    left: 1em;\r\n    bottom: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFkcy9wYWRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7SUFFOUIsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFkcy9wYWRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMWVtO1xyXG4gICAgbGVmdDogMWVtO1xyXG4gICAgYm90dG9tOiAxZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pads/pads.component.html":
/*!******************************************!*\
  !*** ./src/app/pads/pads.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"pads\">\n    <app-control [side]=\"pad\" [joystick]=\"joystick\" *ngFor=\"let pad of pads\"></app-control>\n</section>\n"

/***/ }),

/***/ "./src/app/pads/pads.component.ts":
/*!****************************************!*\
  !*** ./src/app/pads/pads.component.ts ***!
  \****************************************/
/*! exports provided: PadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PadsComponent", function() { return PadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _joystick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../joystick */ "./src/app/joystick.ts");



var PadsComponent = /** @class */ (function () {
    function PadsComponent() {
        this.pads = ['left', 'right'];
        this.joystick = new _joystick__WEBPACK_IMPORTED_MODULE_2__["Joystick"]();
    }
    PadsComponent.prototype.ngOnInit = function () {
    };
    PadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pads',
            template: __webpack_require__(/*! ./pads.component.html */ "./src/app/pads/pads.component.html"),
            styles: [__webpack_require__(/*! ./pads.component.css */ "./src/app/pads/pads.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PadsComponent);
    return PadsComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);




var SERVER_URL = "http://" + document.location.hostname + ":3000";
var SocketService = /** @class */ (function () {
    function SocketService() {
        this.initSocket();
    }
    SocketService.prototype.initSocket = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(SERVER_URL);
    };
    SocketService.prototype.send = function (message) {
        this.socket.emit('joystick', message);
    };
    SocketService.prototype.onMessage = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('joystick', function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.onEvent = function (event) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on(event, function () { return observer.next(); });
        });
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/viewer/viewer.component.css":
/*!*********************************************!*\
  !*** ./src/app/viewer/viewer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "video {\r\n    background-color: whitesmoke;\r\n    min-width: 640px;\r\n    height: 480px;\r\n    border: 1px solid grey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld2VyL3ZpZXdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvdmlld2VyL3ZpZXdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlkZW8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIG1pbi13aWR0aDogNjQwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/viewer/viewer.component.html":
/*!**********************************************!*\
  !*** ./src/app/viewer/viewer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"http://192.168.0.221:9876/?action=stream\" />\n"

/***/ }),

/***/ "./src/app/viewer/viewer.component.ts":
/*!********************************************!*\
  !*** ./src/app/viewer/viewer.component.ts ***!
  \********************************************/
/*! exports provided: ViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerComponent", function() { return ViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var ViewerComponent = /** @class */ (function () {
    function ViewerComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.uri = null;
        this.uri = this.sanitizer.bypassSecurityTrustResourceUrl("ws://" + document.location.hostname + ":3001");
    }
    ViewerComponent.prototype.ngOnInit = function () {
    };
    ViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewer',
            template: __webpack_require__(/*! ./viewer.component.html */ "./src/app/viewer/viewer.component.html"),
            styles: [__webpack_require__(/*! ./viewer.component.css */ "./src/app/viewer/viewer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], ViewerComponent);
    return ViewerComponent;
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

module.exports = __webpack_require__(/*! D:\js\rover-client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map