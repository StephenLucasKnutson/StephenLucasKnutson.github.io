(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Valued Customer\IdeaProjects\flappy-bee\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "epSk");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fontfaceobserver */ "A0Lk");
/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fontfaceobserver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var detect_collisions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! detect-collisions */ "fD9/");
/* harmony import */ var detect_collisions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(detect_collisions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var State;
(function (State) {
    State[State["Initial"] = 0] = "Initial";
    State[State["Card"] = 1] = "Card";
    State[State["Running"] = 2] = "Running";
    State[State["After"] = 3] = "After";
})(State || (State = {}));
class AppComponent {
    constructor() {
        this.title = 'happy-birthday';
        this.state = State.Initial;
        this.flowers = [];
        this.heldDown = false;
        this.startTime = 0;
        this.lastSpawnTime = 0;
        this.wingTimer = 0;
        this.lastFrameTime = 0;
    }
    ngAfterViewInit() {
        const doneLoading = () => {
            numLoaded++;
            if (numLoaded === 8) {
                this.start();
            }
        };
        let numLoaded = 0;
        fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image.fromURL('assets/background.png', loadedImage => {
            this.background = loadedImage;
            this.setupObject(this.background);
            this.background.scaleX = 0.5;
            this.background.scaleY = 0.5;
            doneLoading();
        });
        fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image.fromURL('assets/bee.png', loadedImage => {
            this.bee = loadedImage;
            this.setupObject(this.bee);
            this.bee.scaleToWidth(100);
            doneLoading();
        });
        fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].util.loadImage('assets/flower.png', imageElement => {
            this.flowerImage = imageElement;
            doneLoading();
        });
        fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image.fromURL('assets/wing-down.png', loadedImage => {
            this.wingDown = loadedImage;
            this.setupObject(this.wingDown);
            this.wingDown.scaleToWidth(40);
            doneLoading();
        });
        fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image.fromURL('assets/wing-up.png', loadedImage => {
            this.wingUp = loadedImage;
            this.setupObject(this.wingUp);
            this.wingUp.scaleToWidth(46);
            doneLoading();
        });
        fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image.fromURL('assets/signature.png', loadedImage => {
            this.signature = loadedImage;
            this.setupObject(this.signature);
            this.signature.scaleToWidth(120);
            doneLoading();
        });
        ['Ballerina_Script', 'Octarine_Bold'].forEach(fontName => {
            const font = new fontfaceobserver__WEBPACK_IMPORTED_MODULE_1__(fontName);
            font.load().then(() => doneLoading());
        });
    }
    start() {
        this.canvas = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Canvas('the-canvas', { selection: false });
        const screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        const screenHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
        const widthRatio = screenWidth / AppComponent.BOUNDS.x;
        const heightRatio = screenHeight / AppComponent.BOUNDS.y;
        const aspectRatio = Math.min(widthRatio, heightRatio);
        this.canvas.setDimensions({ width: AppComponent.BOUNDS.x * aspectRatio, height: AppComponent.BOUNDS.y * aspectRatio });
        this.canvas.setZoom(aspectRatio);
        this.scoreObject = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Text('', {
            fontSize: 36,
            originX: 'right',
            originY: 'top',
            left: AppComponent.BOUNDS.x - 10,
            top: 10,
            fontFamily: 'Octarine_Bold',
            stroke: 'black',
            fill: '#FFB101',
        });
        this.setupObject(this.scoreObject);
        this.birthdayMessage = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Text('Happy Birthday Mom!', {
            fontSize: 72,
            originX: 'center',
            originY: 'center',
            left: AppComponent.BOUNDS.x / 2,
            top: AppComponent.BOUNDS.y / 2 - 100,
            fill: '#FFB101',
            width: AppComponent.BOUNDS.x,
            height: 500,
            textAlign: 'center',
            stroke: 'black',
            strokeWidth: 0.5,
            fontFamily: 'Ballerina_Script'
        });
        this.restartButton = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Rect({
            originX: 'center',
            originY: 'center',
            left: AppComponent.BOUNDS.x / 2,
            top: AppComponent.BOUNDS.y / 2,
            width: 400,
            height: 80,
            fill: 'white',
            stroke: 'black',
            strokeWidth: 2,
            hoverCursor: 'pointer',
            selectable: false,
            rx: 4,
            ry: 4
        });
        this.restartButton.on('mousedown', () => {
            this.switchState(State.Running);
        });
        this.restartButtonText = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Text('Try Again?', {
            fontSize: 36,
            originX: 'center',
            originY: 'center',
            left: AppComponent.BOUNDS.x / 2,
            top: AppComponent.BOUNDS.y / 2,
            fontFamily: 'Octarine_Bold',
            width: 400,
            height: 80,
            textAlign: 'center',
            borderColor: 'black'
        });
        this.wingDown.set('left', 14);
        this.wingDown.set('top', 6);
        this.wingUp.set('left', 8);
        this.wingUp.set('top', -30);
        this.beeGroup = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Group([this.bee, this.wingDown, this.wingUp]);
        this.setupObject(this.beeGroup);
        this.setupObject(this.restartButtonText);
        this.setupObject(this.birthdayMessage);
        this.canvas.add(this.background);
        this.canvas.add(this.beeGroup);
        this.canvas.add(...this.flowers);
        this.canvas.add(this.scoreObject);
        this.canvas.add(this.birthdayMessage);
        this.canvas.add(this.signature);
        this.canvas.add(this.restartButton);
        this.canvas.add(this.restartButtonText);
        this.startTime = performance.now();
        this.canvas.on('before:render', () => {
            const currentTime = performance.now();
            switch (this.state) {
                case State.Card:
                    break;
                case State.Running:
                    this.beeGroup.set('top', this.beeGroup.get('top') + (this.heldDown ? -5 : 5));
                    if (this.heldDown) {
                        this.wingTimer += currentTime - this.lastFrameTime;
                        const showDown = Math.round(this.wingTimer / 50) % 2 === 0;
                        this.wingDown.set('visible', showDown);
                        this.wingUp.set('visible', !showDown);
                    }
                    else {
                        this.wingDown.set('visible', true);
                        this.wingUp.set('visible', false);
                        this.wingTimer = 0;
                    }
                    const angle = this.beeGroup.angle;
                    if (this.heldDown) {
                        this.beeGroup.set('angle', Math.max(-15, angle - 2));
                    }
                    else {
                        this.beeGroup.set('angle', Math.min(15, angle + 2));
                    }
                    this.scoreObject.set('text', (Math.round((currentTime - this.startTime) / 100) * 100).toLocaleString(undefined));
                    if (Math.random() < 0.02 && currentTime - this.lastSpawnTime > 2000) {
                        this.lastSpawnTime = currentTime;
                        const flower = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image(this.flowerImage);
                        this.setupObject(flower);
                        flower.set('left', AppComponent.BOUNDS.x);
                        flower.scaleX = 0.2;
                        flower.scaleY = 0.4;
                        if (Math.random() < 0.5) {
                            flower.flipY = true;
                            flower.top = Math.random() * -250;
                        }
                        else {
                            flower.top = AppComponent.BOUNDS.y - flower.getScaledHeight() + Math.random() * 250;
                        }
                        this.flowers.push(flower);
                        this.canvas.add(flower);
                    }
                    this.flowers = this.flowers.filter(flower => {
                        const good = flower.left > -300;
                        if (!good) {
                            this.canvas.remove(flower);
                        }
                        return good;
                    });
                    this.beeGroup.setCoords();
                    const system = new detect_collisions__WEBPACK_IMPORTED_MODULE_2__["Collisions"]();
                    const bbBee = this.beeGroup.getBoundingRect(true);
                    const beeCenter = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Point(bbBee.left + bbBee.width / 2, bbBee.top + bbBee.height / 2);
                    const beeBB = system.createCircle(beeCenter.x, beeCenter.y + 14, 25);
                    this.flowers.forEach(flower => {
                        flower.set('left', flower.get('left') - 2);
                        flower.setCoords();
                        const bb = flower.getBoundingRect(true);
                        if (flower.flipY) {
                            system.createCircle(bb.left + bb.width / 2, bb.top + bb.height - 50, 40);
                            system.createPolygon(bb.left + bb.width / 2, bb.top + bb.height - 60, [[-10, 0], [10, 0], [10, -bb.height], [-10, -bb.height]]);
                        }
                        else {
                            system.createCircle(bb.left + bb.width / 2, bb.top + 55, 40);
                            system.createPolygon(bb.left + bb.width / 2, bb.top + 60, [[-10, 0], [10, 0], [10, bb.height], [-10, bb.height]]);
                        }
                    });
                    system.createPolygon(0, 0, [[0, 0], [AppComponent.BOUNDS.x, 0], [AppComponent.BOUNDS.x, 2], [0, 2]]);
                    system.createPolygon(0, AppComponent.BOUNDS.y, [[0, 0], [AppComponent.BOUNDS.x, 0], [AppComponent.BOUNDS.x, 2], [0, 2]]);
                    system.update();
                    if (AppComponent.COLLISION_DEBUG) {
                        const collisionCanvas = document.getElementById('collision-canvas');
                        collisionCanvas.width = this.canvas.getWidth();
                        collisionCanvas.height = this.canvas.getHeight();
                        const ctx = collisionCanvas.getContext('2d');
                        ctx.clearRect(0, 0, collisionCanvas.width, collisionCanvas.height);
                        ctx.save();
                        const t = this.canvas.viewportTransform;
                        ctx.transform(t[0], t[1], t[2], t[3], t[4], t[5]);
                        ctx.strokeStyle = '#FF0000';
                        ctx.beginPath();
                        system.draw(ctx);
                        ctx.stroke();
                        ctx.restore();
                    }
                    beeBB.potentials().forEach(potential => {
                        if (beeBB.collides(potential)) {
                            this.switchState(State.After);
                        }
                    });
                    this.scoreObject.bringToFront();
                    this.lastFrameTime = performance.now();
                    break;
                case State.After:
                    break;
            }
        });
        this.canvas.on('after:render', () => {
            this.canvas.requestRenderAll();
        });
        this.canvas.on('mouse:down', () => {
            this.heldDown = true;
            if (this.state === State.Card) {
                this.switchState(State.Running);
            }
        });
        this.canvas.on('mouse:up', () => {
            this.heldDown = false;
        });
        this.switchState(State.Card);
    }
    setupObject(object) {
        object.set('evented', false);
        object.set('selectable', false);
    }
    switchState(to) {
        switch (to) {
            case State.Card:
                this.beeGroup.set('left', AppComponent.BOUNDS.x / 2 - this.beeGroup.getScaledWidth() / 2);
                this.beeGroup.set('top', 320);
                this.signature.set('originX', 'right');
                this.signature.set('originY', 'bottom');
                this.signature.set('left', AppComponent.BOUNDS.x - 10);
                this.signature.set('top', AppComponent.BOUNDS.y - 10);
                this.restartButton.set('visible', false);
                this.restartButtonText.set('visible', false);
                this.wingDown.set('visible', true);
                this.wingUp.set('visible', false);
                break;
            case State.Running:
                this.canvas.remove(...this.flowers);
                this.flowers = [];
                this.beeGroup.set('left', 30);
                this.beeGroup.set('top', AppComponent.BOUNDS.y / 2);
                this.birthdayMessage.set('visible', false);
                this.scoreObject.set('visible', true);
                this.startTime = performance.now();
                this.restartButton.set('visible', false);
                this.restartButtonText.set('visible', false);
                this.lastFrameTime = performance.now();
                this.wingTimer = 0;
                break;
            case State.After:
                this.restartButton.bringToFront();
                this.restartButtonText.bringToFront();
                this.restartButton.set('visible', true);
                this.restartButtonText.set('visible', true);
                break;
        }
        this.state = to;
    }
}
AppComponent.COLLISION_DEBUG = true;
AppComponent.BOUNDS = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Point(800, 600);
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "the-canvas"], ["id", "collision-canvas", "width", "800", "height", "600"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "canvas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\r\n  font-family: 'Ballerina_Script';\r\n  src: url('Ballerina_Script.ttf') format('truetype');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Octarine_Bold';\r\n  src: url('Octarine-Bold.otf') format('opentype');\r\n}\r\n\r\ncanvas[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n}\r\n\r\n#collision-canvas[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLG1EQUE4RDtBQUNoRTs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixnREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07QUFDUjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQmFsbGVyaW5hX1NjcmlwdCc7XHJcbiAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvQmFsbGVyaW5hX1NjcmlwdC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnT2N0YXJpbmVfQm9sZCc7XHJcbiAgc3JjOiB1cmwoJ3NyYy9hc3NldHMvT2N0YXJpbmUtQm9sZC5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XHJcbn1cclxuXHJcbmNhbnZhcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4jY29sbGlzaW9uLWNhbnZhcyB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map