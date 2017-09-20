webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmAccount_confirmAccount__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationPage = (function () {
    function RegistrationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RegistrationPage.prototype.sendOTP = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirmAccount_confirmAccount__["a" /* ConfirmAccountPage */]);
    };
    return RegistrationPage;
}());
RegistrationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'registration-home',template:/*ion-inline-start:"/home/jitendratnt/demoproject/madhopura/src/pages/registration/registration.html"*/'<ion-content padding  scroll-content="true" >\n  <ion-card class="cardClass">\n\n     <ion-card-content>\n       <ion-list no-line>\n         <form  >\n            <ion-item>\n              <ion-input type="text" placeholder="Mobile number"></ion-input>\n\n            </ion-item>\n\n             <!-- <control-messages [control]="form.controls.password"></control-messages> -->\n          </form>\n       </ion-list>\n       <button ion-button block color="positive" (click)="sendOTP()" >Send OTP</button>\n     </ion-card-content>\n  </ion-card>\n  <p>\n    An OTP will be sent to this number. please make sure entered correct number.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/jitendratnt/demoproject/madhopura/src/pages/registration/registration.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], RegistrationPage);

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmAccountPage = (function () {
    function ConfirmAccountPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.showOTPCard = true;
    }
    ConfirmAccountPage.prototype.sendOTP = function () {
        console.log('message');
        this.showOTPCard = false;
    };
    ConfirmAccountPage.prototype.setPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return ConfirmAccountPage;
}());
ConfirmAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'confirm-home',template:/*ion-inline-start:"/home/jitendratnt/demoproject/madhopura/src/pages/registration/confirmAccount/confirmAccount.html"*/'<ion-content padding  scroll-content="true" >\n  <ion-card class="cardClass" *ngIf="showOTPCard">\n\n     <ion-card-content>\n       <ion-list no-line>\n         <form  >\n            <ion-item>\n              <ion-input type="text" placeholder="Enter OTP here"></ion-input>\n\n            </ion-item>\n\n             <!-- <control-messages [control]="form.controls.password"></control-messages> -->\n          </form>\n       </ion-list>\n       <button ion-button block color="positive" (click)="sendOTP()" >Confirm</button>\n     </ion-card-content>\n  </ion-card>\n  <ion-card class="cardClass" *ngIf="!showOTPCard">\n\n     <ion-card-content>\n       <ion-list no-line>\n         <form  >\n            <ion-item>\n              <ion-input type="text" placeholder="Set password"></ion-input>\n\n            </ion-item>\n            <ion-item>\n              <ion-input type="text" placeholder="confirm password"></ion-input>\n\n            </ion-item>\n             <!-- <control-messages [control]="form.controls.password"></control-messages> -->\n          </form>\n       </ion-list>\n       <button ion-button block color="positive" (click)="setPassword()" >submit password</button>\n     </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/jitendratnt/demoproject/madhopura/src/pages/registration/confirmAccount/confirmAccount.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], ConfirmAccountPage);

//# sourceMappingURL=confirmAccount.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teamRegistration_register__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallary_gallary__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardPage = (function () {
    function DashboardPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DashboardPage.prototype.registerTeam = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__teamRegistration_register__["a" /* TeamRegistrationPage */]);
    };
    DashboardPage.prototype.goToGallary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__gallary_gallary__["a" /* GallaryPage */]);
    };
    return DashboardPage;
}());
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'dashboard-home',template:/*ion-inline-start:"/home/jitendratnt/demoproject/madhopura/src/pages/dashboard/dashboard.html"*/'<ion-header class="headerClass">\n  <ion-navbar header >\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <img alt="Madhopura yuva Mandal" height="40"   src="../../../assets/img/Yuva_Yuga_Icon.png" >\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding overflow-scroll="true">\n   <!-- <img alt="Welcome to yuvayuga" height="75px" width="100%"  src="../../../assets/img/Flag.png" /> -->\n  <div class="white center">\n     Madhopura yuva mandal Welcomes you!\n  </div>\n  <div class="spacers">\n  </div>\n  <div class="image">\n    <div class="dashboard darkGray" (click)="registerTeam()">\n        <div class="inner-dashboard">\n          <!-- <img src="../../../assets/img/MagSpon.png" height="50px" /> -->\n          <h4 class="label-font" style="margin-bottom:0px;padding-bottom:0px;">Register Your Team</h4>\n          <!-- <h5 class="white" style="margin-top:0px;padding-top:0px">To be able to add,modify and manage trainer</h5> -->\n          </div>\n    </div>\n    <div class="dashboard darkRed" (click)="goToGallary()" >\n        <div class="inner-dashboard">\n          <!-- <img src="../../../assets/img/LP-jobsV2.png" height="50px" /> -->\n          <h4 class="label-font" style="margin-bottom:0px;padding-bottom:0px;">Sports Gallary</h4>\n          <!-- <h5 class="white" style="margin-top:0px;padding-top:0px">To be able to add, modify and manage Batch </h5> -->\n        </div>\n      </div>\n    </div>\n    <div class="image">\n      <div class="dashboard saffron">\n        <div class="inner-dashboard">\n          <!-- <img src="../../../assets/img/2.png" height="50px" alt="Learn" /> -->\n          <h4 class="label-font" style="margin-bottom:0px;padding-bottom:0px;">About Yuva manndal</h4>\n          <!-- <h5 class="white" style="margin-top:0px;padding-top:0px">To be able to start a batch</h5> -->\n        </div>\n      </div>\n      <div class="dashboard lightGreen" >\n        <div class="inner-dashboard">\n          <!-- <img src="../../../assets/img/1.png" height="50px" alt="Learn" /> -->\n          <h4 class="label-font" style="margin-bottom:0px;padding-bottom:0px;">Contact us</h4>\n          <!-- <h5 class="white" style="margin-top:0px;padding-top:0px">To register New Student To a course</h5> -->\n        </div>\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/jitendratnt/demoproject/madhopura/src/pages/dashboard/dashboard.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamRegistrationPage = (function () {
    function TeamRegistrationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return TeamRegistrationPage;
}());
TeamRegistrationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'register-home',template:/*ion-inline-start:"/home/jitendratnt/demoproject/madhopura/src/pages/teamRegistration/register.html"*/'\n<ion-content padding  scroll-content="true" >\n  <ion-card class="cardClass">\n\n     <ion-card-content>\n       <ion-list>\n\n         <ion-item>\n           <ion-label floating>Team Name</ion-label>\n           <ion-input type="text"></ion-input>\n         </ion-item>\n\n         <ion-item>\n           <ion-label floating>Captain Name</ion-label>\n           <ion-input type="text"></ion-input>\n         </ion-item>\n         <ion-item>\n           <ion-label>Already participated ?</ion-label>\n              <ion-select [(ngModel)]="gaming">\n                <ion-option value="Yes">Yes</ion-option>\n                <ion-option value="No">No</ion-option>\n              </ion-select>\n\n         </ion-item>\n         <ion-item>\n           <ion-label floating>Address</ion-label>\n           <ion-input type="text"></ion-input>\n         </ion-item>\n         <ion-item>\n           <ion-label floating>Contact Number</ion-label>\n           <ion-input type="text"></ion-input>\n         </ion-item>\n\n\n       </ion-list>\n       <button ion-button block color="positive" (click)="register()" >Register</button>\n     </ion-card-content>\n  </ion-card>\n<p>\n  You will get notification when event organiser approved your team.\n</p>\n</ion-content>\n'/*ion-inline-end:"/home/jitendratnt/demoproject/madhopura/src/pages/teamRegistration/register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], TeamRegistrationPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GallaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GallaryPage = (function () {
    function GallaryPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.year = 2015;
    }
    return GallaryPage;
}());
GallaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'gallary-home',template:/*ion-inline-start:"/home/jitendratnt/demoproject/madhopura/src/pages/gallary/gallary.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>\n      Sports gallary\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="year">\n      <ion-segment-button value="2015">\n        2015\n      </ion-segment-button>\n      <ion-segment-button value="2016">\n        2106\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div [ngSwitch]="year">\n  <ion-list *ngSwitchCase="2015">\n  <ion-card>\n   <img src="../assets/img/download.jpg"/>\n   <ion-card-content>\n     <ion-card-title>\n       Nine Inch Nails Live\n       </ion-card-title>\n     <p>\n       The most popular industrial group ever, and largely\n       responsible for bringing the music to a mass audience.\n     </p>\n   </ion-card-content>\n </ion-card>\n <ion-card>\n  <img src="../assets/img/download.jpg"/>\n  <ion-card-content>\n    <ion-card-title>\n      Nine Inch Nails Live\n      </ion-card-title>\n    <p>\n      The most popular industrial group ever, and largely\n      responsible for bringing the music to a mass audience.\n    </p>\n  </ion-card-content>\n</ion-card>\n<ion-card>\n <img src="../assets/img/download.jpg"/>\n <ion-card-content>\n   <ion-card-title>\n     Nine Inch Nails Live\n     </ion-card-title>\n   <p>\n     The most popular industrial group ever, and largely\n     responsible for bringing the music to a mass audience.\n   </p>\n </ion-card-content>\n</ion-card>\n<ion-card>\n <img src="../assets/img/download.jpg"/>\n <ion-card-content>\n   <ion-card-title>\n     Nine Inch Nails Live\n     </ion-card-title>\n   <p>\n     The most popular industrial group ever, and largely\n     responsible for bringing the music to a mass audience.\n   </p>\n </ion-card-content>\n</ion-card>\n<ion-card>\n <img src="../assets/img/download.jpg"/>\n <ion-card-content>\n   <ion-card-title>\n     Nine Inch Nails Live\n     </ion-card-title>\n   <p>\n     The most popular industrial group ever, and largely\n     responsible for bringing the music to a mass audience.\n   </p>\n </ion-card-content>\n</ion-card>\n</ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/jitendratnt/demoproject/madhopura/src/pages/gallary/gallary.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], GallaryPage);

//# sourceMappingURL=gallary.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/jitendratnt/demoproject/madhopura/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/jitendratnt/demoproject/madhopura/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_registration_registration__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_registration_confirmAccount_confirmAccount__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_teamRegistration_register__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_gallary_gallary__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_registration_registration__["a" /* RegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_registration_confirmAccount_confirmAccount__["a" /* ConfirmAccountPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_teamRegistration_register__["a" /* TeamRegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_gallary_gallary__["a" /* GallaryPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_registration_registration__["a" /* RegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_registration_confirmAccount_confirmAccount__["a" /* ConfirmAccountPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_teamRegistration_register__["a" /* TeamRegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_gallary_gallary__["a" /* GallaryPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/jitendratnt/demoproject/madhopura/src/app/app.html"*/'<ion-menu id="appMenu" [content]="content">\n  <ion-header>\n    <ion-toolbar class="sideMenuHeader">\n      <ion-title>Madhopura</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content >\n    <ion-list>\n      <ion-item menuClose class="icon-item-left"   (click)="goToDashboard()"> <ion-icon padding-right ios="ios-home" md="md-home"></ion-icon>\n        Home\n      </ion-item>\n      <ion-item menuClose class="icon-item-left"   (click)="myProfile()"> <ion-icon padding-right ios="ios-contact" md="md-contact"></ion-icon>\n        My Profile\n      </ion-item>\n      <ion-item menuClose class="icon-item-left"  (click)="passwordReset()"><ion-icon padding-right ios="ios-lock" md="md-lock"></ion-icon>\n        Reset Password\n      </ion-item>\n      <ion-item menuClose class="icon-item-left"  (click)="logout()">  <ion-icon padding-right ios="ios-log-out" md="md-log-out"></ion-icon>\n        Logout\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/jitendratnt/demoproject/madhopura/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registration_registration__["a" /* RegistrationPage */]);
    };
    HomePage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/jitendratnt/demoproject/madhopura/src/pages/home/home.html"*/'<ion-content padding class="backgroundImage" scroll-content="true" >\n  <ion-card>\n     <ion-card-header>\n         Login\n     </ion-card-header>\n     <ion-card-content>\n       <ion-list no-line>\n         <form  >\n            <ion-item>\n              <ion-input type="text" placeholder="username"></ion-input>\n\n            </ion-item>\n            <!-- <control-messages [control]="form.controls.email"></control-messages> -->\n            <ion-item>\n              <ion-input type="password" placeholder="password"></ion-input>\n            </ion-item>\n             <!-- <control-messages [control]="form.controls.password"></control-messages> -->\n          </form>\n       </ion-list>\n       <p (click)="forgetPassword()">Forget password</p>\n       <button ion-button block color="positive" (click)="login()" >Login</button>\n     </ion-card-content>\n  </ion-card>\n  <button ion-button clear full color="light" (click)="createAccount()">Don\'t have account?,New Regstration </button>\n</ion-content>\n'/*ion-inline-end:"/home/jitendratnt/demoproject/madhopura/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map