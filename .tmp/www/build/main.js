webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_device__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_devices__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_item_create_item_create__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListMasterPage = (function () {
    function ListMasterPage(navCtrl, items, modalCtrl) {
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.Categories = [];
        this.currentItems = this.items.query();
        var CategoryList = [
            { "category": __WEBPACK_IMPORTED_MODULE_2__models_device__["c" /* categories */].SecurityDevices.toString() },
            { "category": __WEBPACK_IMPORTED_MODULE_2__models_device__["c" /* categories */].DoorDevices.toString() },
            { "category": __WEBPACK_IMPORTED_MODULE_2__models_device__["c" /* categories */].ThermostatsDevices.toString() },
            { "category": __WEBPACK_IMPORTED_MODULE_2__models_device__["c" /* categories */].CamerasDevices.toString() },
            { "category": __WEBPACK_IMPORTED_MODULE_2__models_device__["c" /* categories */].OtherDevices.toString() }
        ];
        for (var _i = 0, CategoryList_1 = CategoryList; _i < CategoryList_1.length; _i++) {
            var category = CategoryList_1[_i];
            this.Categories.push(category.category);
        }
        // this.createLists("Other Devices");
        // console.log(this.currentItems);
        // console.log(this.Categories);
    }
    ListMasterPage.prototype.createLists = function (category) {
        var categoryArray = [];
        for (var _i = 0, _a = this.currentItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.category == category) {
                categoryArray.push(item);
            }
        }
        // console.log(categoryArray);
        return categoryArray;
    };
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListMasterPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_item_create_item_create__["a" /* ItemCreatePage */]);
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    /**
     * Delete an item from the list of items.
     */
    ListMasterPage.prototype.deleteItem = function (item) {
        this.items.delete(item);
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-master',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/list-master/list-master.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'All Devices\' }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor="let items of Categories">\n    <ion-item-divider color="light"> {{items}}</ion-item-divider>\n    <ion-list *ngFor="let item of createLists(items)">\n      <ion-item-sliding>\n        <ion-item>\n          <!-- <ion-avatar item-start>\n            <img [src]="item.profilePic" />\n          </ion-avatar> -->\n          <ion-label>\n            <h2>{{item.DeviceName}}</h2>\n            <p>{{item.about}}</p>\n          </ion-label>\n           <ion-toggle [(ngModel)]= "item.status"></ion-toggle>\n          <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n        </ion-item>\n\n        <ion-item-options>\n          <button ion-button color="danger" (click)="deleteItem(item)">\n            {{ \'DELETE_BUTTON\' }}\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n</ion-content>\n<!-- <ion-list >\n  <div>\n    <div>There are {{currentItems.length}} items in total.</div>\n  </div>\n  <ion-item-divider color="light"> {{item.category}}</ion-item-divider>\n  <ion-item-sliding>\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="item.profilePic" />\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.DeviceName}}</h2>\n        <p>{{item.about}}</p>\n        <p> {{item.category}} </p>\n      </ion-label>\n       <ion-toggle checked={{item.status}}></ion-toggle>\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n    </ion-item>\n\n    <ion-item-options>\n      <button ion-button color="danger" (click)="deleteItem(item)">\n        {{ \'DELETE_BUTTON\' }}\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list> -->\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/list-master/list-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_devices__["a" /* Devices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_device__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_devices__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = (function () {
    function MapPage(platform, items, modalCtrl, navCtrl) {
        this.platform = platform;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.Categories = [];
        this.currentItems = this.items.query();
        var CategoryList = [
            { "category": __WEBPACK_IMPORTED_MODULE_2__models_device__["c" /* categories */].SecurityDevices.toString() },
            { "category": __WEBPACK_IMPORTED_MODULE_2__models_device__["c" /* categories */].ThermostatsDevices.toString() },
            { "category": __WEBPACK_IMPORTED_MODULE_2__models_device__["c" /* categories */].CamerasDevices.toString() },
            { "category": __WEBPACK_IMPORTED_MODULE_2__models_device__["c" /* categories */].OtherDevices.toString() }
        ];
        for (var _i = 0, CategoryList_1 = CategoryList; _i < CategoryList_1.length; _i++) {
            var category = CategoryList_1[_i];
            this.Categories.push(category.category);
        }
        this.cameraItems = this.createLists("Camera Devices");
        // console.log(this.cameraItems);
    }
    /** The view loaded, let's query our items for the list **/
    MapPage.prototype.ionViewDidEnter = function () {
        // Will be executed every time the user selects this tab
        this.currentItems = this.items.query();
        this.cameraItems = this.createLists("Camera Devices");
    };
    MapPage.prototype.createLists = function (category) {
        var categoryArray = [];
        for (var _i = 0, _a = this.currentItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.category == category) {
                categoryArray.push(item);
            }
        }
        // console.log(categoryArray);
        return categoryArray;
    };
    /**
     * Navigate to the detail page for this item.
     */
    MapPage.prototype.openItem = function (cameraItem) {
        this.navCtrl.push('CameraDetailPage', {
            cameraItem: cameraItem
        });
    };
    MapPage.prototype.randomized = function () {
        var rand = Math.floor((Math.random() * 3) + 1);
        console.log(rand);
        return rand;
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Video footages</ion-title>\n    <!-- Add new viedo camera  -->\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <ion-grid >\n    <ion-row>\n        <ion-col *ngFor="let item of cameraItems; let i=index"  col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6>\n          <ion-card (click)="openItem(item)">\n            <img src="{{\'assets/camera/camera\' + (i + 1) + \'.jpg\'}}">\n            <div class="card-title"> <strong>{{item.DeviceName}}</strong> </div>\n          </ion-card>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_devices__["a" /* Devices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_devices__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_device__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';

 //data

var SchedulePage = (function () {
    function SchedulePage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, user, devices) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.devices = devices;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
        this.Categories = [];
        this.currentItems = this.devices.query();
        console.log(this.currentItems);
        var CategoryList = [
            { "category": __WEBPACK_IMPORTED_MODULE_4__models_device__["c" /* categories */].SecurityDevices.toString() },
            { "category": __WEBPACK_IMPORTED_MODULE_4__models_device__["c" /* categories */].ThermostatsDevices.toString() },
            { "category": __WEBPACK_IMPORTED_MODULE_4__models_device__["c" /* categories */].CamerasDevices.toString() },
            { "category": __WEBPACK_IMPORTED_MODULE_4__models_device__["c" /* categories */].OtherDevices.toString() }
        ];
        for (var _i = 0, CategoryList_1 = CategoryList; _i < CategoryList_1.length; _i++) {
            var category = CategoryList_1[_i];
            this.Categories.push(category.category);
            //console.log(category);
        }
        this.securityItems = this.createLists("Security Devices");
    }
    SchedulePage.prototype.ionViewDidEnter = function () {
        this.currentItems = this.devices.query();
        this.securityItems = this.createLists("Security Devices");
        var checkedDeviceStatus = this.checkDeviceStatus(this.securityItems);
        this.garageDoorsItems = this.getDoor("Door Devices");
        this.devices.securitySystem.setGarageDoorsStatus(this.garageDoorsItems.status);
        if (checkedDeviceStatus == 1) {
            this.arm();
        }
        else if (checkedDeviceStatus == 0) {
            this.disarm();
        }
    };
    SchedulePage.prototype.createLists = function (category) {
        var categoryArray = [];
        for (var _i = 0, _a = this.currentItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.category == category) {
                categoryArray.push(item);
            }
        }
        // console.log(categoryArray);
        return categoryArray;
    };
    //if there is more doors put in array and filter on the view with ngFor
    SchedulePage.prototype.getDoor = function (category) {
        var door;
        for (var _i = 0, _a = this.currentItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.category == category) {
                door = item;
            }
        }
        // console.log(categoryArray);
        return door;
    };
    SchedulePage.prototype.checkDeviceStatus = function (Items) {
        var counterTrue = 0;
        var counterFalse = 0;
        for (var _i = 0, Items_1 = Items; _i < Items_1.length; _i++) {
            var item = Items_1[_i];
            if (item.status == "true") {
                counterTrue = counterTrue + 1;
            }
            else {
                counterFalse = counterFalse + 1;
            }
        }
        if (counterTrue == Items.length) {
            return 1;
        }
        else if (counterFalse == Items.length) {
            return 0;
        }
        else {
            return -1;
        }
    };
    SchedulePage.prototype.disarm = function () {
        this.devices.query("disarm");
    };
    SchedulePage.prototype.arm = function () {
        this.devices.query("arm");
    };
    SchedulePage.prototype.openGarageDoors = function () {
        this.devices.garageDoors("open");
    };
    SchedulePage.prototype.closeGarageDoors = function () {
        this.devices.garageDoors("close");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scheduleList', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* List */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* List */])
    ], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/schedule/schedule.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Security</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n          <ion-list>\n              <ion-item-sliding #item>\n                  <ion-item-options side="left">\n                      <button class="fit-left" ion-button color="danger" (click)="disarm()">Disarm <ion-icon name="unlock"></ion-icon></button>\n                    </ion-item-options>\n                  <ion-item>\n\n                    <ion-grid>\n                      <ion-row>\n                        <ion-col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3>\n                          <ion-icon class="float-left" name="arrow-back"></ion-icon>\n                        </ion-col>\n\n                        <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n                            <div class="check text-center">\n                                <img *ngIf="this.devices.securitySystem.getSecuritySystemStatus();" class="cls" src="assets/img/check.png" alt="arm icon" />\n                                <img *ngIf="!this.devices.securitySystem.getSecuritySystemStatus();" class="cls" src="assets/img/uncheck.png" alt="disarm icon" />\n                            </div>\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3>\n                            <ion-icon class="float-right" name="arrow-forward"></ion-icon>\n                        </ion-col>\n\n                        </ion-row>\n                      </ion-grid>\n\n                  </ion-item>\n                  <ion-item-options side="right">\n                    <button class="fit-right" ion-button color="success" (click)="arm()">Arm <ion-icon name="key"></ion-icon></button>\n                  </ion-item-options>\n                </ion-item-sliding>\n\n              <ion-grid>\n                  <ion-row class="no-margin-top" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n                    <ion-col class="text-center">\n                      <h3 ion-text><strong>{{this.devices.securitySystem.getSecuritySystemStatusHumanReadable()}}</strong></h3>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n                      <div class="text-center status">\n                        \n                        \n                        <p ion-text>Security Devices</p>\n                        <span *ngIf="this.devices.securitySystem.getSecuritySystemStatus()"> <ion-icon class="clui" color="primary" name="lock"></ion-icon> Locked</span>\n                        <span *ngIf="!this.devices.securitySystem.getSecuritySystemStatus()"> <ion-icon class="clui" color="danger" name="unlock"></ion-icon> Unlocked</span>\n                      \n                      </div>\n                    </ion-col>\n                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n                      <div class="text-center">\n                        <p ion-text>Garage Door</p>\n                        <button *ngIf="this.devices.securitySystem.getGarageDoorsStatus()" ion-button round (click)="closeGarageDoors()"> {{this.devices.securitySystem.getGarageDoorsStatusHumanReadable()}} <ion-icon class="clui" name="home"></ion-icon></button>\n                        <button *ngIf="!this.devices.securitySystem.getGarageDoorsStatus()" ion-button round (click)="openGarageDoors()" color="danger" > {{this.devices.securitySystem.getGarageDoorsStatusHumanReadable()}} <ion-icon class="clui" name="home"></ion-icon></button>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n\n          </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_devices__["a" /* Devices */]])
    ], SchedulePage);
    return SchedulePage;
}());

/*
  doRefresh(refresher: Refresher) {
    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;

      // simulate a network request that would take longer
      // than just pulling from out local json file
      setTimeout(() => {
        refresher.complete();

        const toast = this.toastCtrl.create({
          message: 'Sessions have been updated.',
          duration: 3000
        });
        toast.present();
      }, 1000);
    });
  }
}
*/ 
//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_device__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_devices__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { InAppBrowser } from '@ionic-native/in-app-browser';





var SpeakerListPage = (function () {
    function SpeakerListPage(platform, items, modalCtrl, navCtrl) {
        this.platform = platform;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.Categories = [];
        this.temperatureFormat = [];
        this.currentItems = this.items.query();
        var CategoryList = [
            { "category": __WEBPACK_IMPORTED_MODULE_2__models_device__["c" /* categories */].SecurityDevices.toString() },
            { "category": __WEBPACK_IMPORTED_MODULE_2__models_device__["c" /* categories */].ThermostatsDevices.toString() },
            { "category": __WEBPACK_IMPORTED_MODULE_2__models_device__["c" /* categories */].CamerasDevices.toString() },
            { "category": __WEBPACK_IMPORTED_MODULE_2__models_device__["c" /* categories */].OtherDevices.toString() }
        ];
        for (var _i = 0, CategoryList_1 = CategoryList; _i < CategoryList_1.length; _i++) {
            var category = CategoryList_1[_i];
            this.Categories.push(category.category);
            //console.log(category);
        }
        this.thermostatItems = this.createLists("Thermostat Devices");
        //console.log(this.thermostatItems);
        this.temperatureFormat = [{ id: 0, value: "celsius" }, { id: 1, value: "fahrenheit" }];
        this.TEMPERATURE_FORMAT = "c";
        this.MIN_TEMP = 10;
        this.MAX_TEMP = 30;
        //this.devices.item.index_f = Number(this.convertTemperatureFormat(this.devices.item.index, "f"))
        //console.log(this.temperatureFormat);
        //  this.currentTemperature=randomized();
    }
    /** The view loaded, let's query our items for the list **/
    SpeakerListPage.prototype.ionViewDidEnter = function () {
        // Will be executed every time the user selects this tab
        this.currentItems = this.items.query();
        this.thermostatItems = this.createLists("Thermostat Devices");
    };
    SpeakerListPage.prototype.createLists = function (category) {
        var categoryArray = [];
        for (var _i = 0, _a = this.currentItems; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.category == category) {
                if ((item.index == "") || (!(item.index)) || !Number(item.index)
                    || (item.index < this.MIN_TEMP) || (item.index > this.MAX_TEMP)) {
                    item.index = Number(24);
                    item.index_f = Number(this.convertTemperatureFormat(item.index, "f"));
                }
                item.index_f = Number(this.convertTemperatureFormat(item.index, "f"));
                categoryArray.push(item);
            }
        }
        // console.log(categoryArray);
        return categoryArray;
    };
    SpeakerListPage.prototype.increment = function (item) {
        item.index = Number(item.index);
        item.index_f = Number(item.index_f);
        // console.log("MIN_TEMP:" + this.MIN_TEMP +", MAX_TEMP:" + this.MAX_TEMP);
        // console.log("item.index:" + item.index);
        if (this.TEMPERATURE_FORMAT == "c") {
            if (item.index < this.MAX_TEMP)
                item.index = Math.floor(item.index + 1);
            item.index_f = Number(this.convertTemperatureFormat(item.index, "f"));
        }
        if (this.TEMPERATURE_FORMAT == "f") {
            var value = Number(this.convertTemperatureFormat(item.index, "f"));
            if (value < this.MAX_TEMP) {
                value = Math.floor(value + 1);
                item.index_f = value;
                item.index = this.convertTemperatureFormat(value, "c");
            }
        }
    };
    SpeakerListPage.prototype.decrement = function (item) {
        item.index = Number(item.index);
        item.index_f = Number(item.index_f);
        // console.log("MIN_TEMP:" + this.MIN_TEMP +", MAX_TEMP:" + this.MAX_TEMP);
        //  console.log("item.index:" + item.index + "temperatureFormat: " + this.TEMPERATURE_FORMAT);
        if (this.TEMPERATURE_FORMAT == "c") {
            if (item.index > this.MIN_TEMP)
                item.index = Math.ceil(item.index - 1);
            item.index_f = Number(this.convertTemperatureFormat(item.index, "f"));
        }
        if (this.TEMPERATURE_FORMAT == "f") {
            var value = item.index_f;
            if (value > this.MIN_TEMP) {
                value = Math.ceil(value - 1);
                item.index_f = value;
                item.index = (this.convertTemperatureFormat(value, "c"));
            }
        }
    };
    //we are not using this function at the moment
    SpeakerListPage.prototype.randomized = function () {
        var rand = Math.floor((Math.random() * 15) + 15);
        String(rand);
        console.log(rand);
        return rand;
    };
    /*conversion functions*/
    SpeakerListPage.prototype.convertTemperatureFormat = function (value, flag) {
        Number(value);
        if (flag == "f") {
            return (value * 9 / 5 + 32);
        }
        if (flag == "c") {
            return ((value - 32) * 5 / 9);
        }
    };
    SpeakerListPage.prototype.changeTemperatureFormat = function (value) {
        if ((value == "fahrenheit") && (this.TEMPERATURE_FORMAT == "c")) {
            this.MIN_TEMP = this.convertTemperatureFormat(this.MIN_TEMP, "f");
            this.MAX_TEMP = this.convertTemperatureFormat(this.MAX_TEMP, "f");
            this.TEMPERATURE_FORMAT = "f";
            // console.log("value: " + value);
            //   console.log("TEMPERATURE_FORMAT:" + this.TEMPERATURE_FORMAT +
            //               "MIN_TEMP:" + this.MIN_TEMP +", MAX_TEMP:" + this.MAX_TEMP);
        }
        else if ((value == "celsius") && (this.TEMPERATURE_FORMAT == "f")) {
            this.MIN_TEMP = this.convertTemperatureFormat(this.MIN_TEMP, "c");
            this.MAX_TEMP = this.convertTemperatureFormat(this.MAX_TEMP, "c");
            this.TEMPERATURE_FORMAT = "c";
            //console.log("value: " + value);
            // console.log("TEMPERATURE_FORMAT:" + this.TEMPERATURE_FORMAT +
            //             "MIN_TEMP:" + this.MIN_TEMP +", MAX_TEMP:" + this.MAX_TEMP);
        }
    };
    SpeakerListPage.prototype.change = function (item, flag) {
        if (flag == 'c') {
            item.index_f = Number(this.convertTemperatureFormat(item.index, "f"));
            console.log("index_c:" + item.index + "index_f: " + item.index_f);
        }
        else if (flag == 'f') {
            item.index = Number(this.convertTemperatureFormat(item.index_f, "c"));
            console.log("index_c:" + item.index + "index_f: " + item.index_f);
        }
    };
    SpeakerListPage.prototype.getDesiredTemperature = function (value) {
        var val = (this.TEMPERATURE_FORMAT == "c") ? value.index : value.index_f;
        //console.log("value:" + val);
        return val;
    };
    SpeakerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-list',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/speaker-list/speaker-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Thermostats</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content speaker-list">\n  <ion-list radio-group>\n    <h3> Temperature Format </h3>\n    <ion-item *ngFor="let format of temperatureFormat; let i = index">\n      <ion-label>{{ format.value }}</ion-label>\n      <ion-radio name="radiogroup" [checked]="i===0" [value]="format.id"\n      (click)="changeTemperatureFormat(format.value)"> </ion-radio>\n    </ion-item>\n  </ion-list>\n  <ion-grid>\n        <ion-row *ngFor="let item of thermostatItems; let i=index">\n          <ion-col col-sm-10 col-md-11 col-lg-11 col-xl-11 >\n            <ion-item>\n\n                <ion-range *ngIf="TEMPERATURE_FORMAT==\'c\'" [(ngModel)]="item.index"  (ionChange)="change(item, \'c\')"\n                  min="{{ MIN_TEMP }}" max="{{ MAX_TEMP }}" step="1" pin="true"  color="danger">\n                  <ion-icon range-left  color="danger" name="thermometer"></ion-icon>\n                  <ion-icon range-right color="danger" name="thermometer"></ion-icon>\n                </ion-range>\n\n\n                <ion-range *ngIf="TEMPERATURE_FORMAT==\'f\'" [(ngModel)]="item.index_f" (ionChange)="change(item, \'f\')"\n                  min="{{ MIN_TEMP }}" max="{{ MAX_TEMP }}" step="1" pin="true"  color="danger">\n                  <ion-icon range-left  color="danger" name="thermometer"></ion-icon>\n                  <ion-icon range-right color="danger" name="thermometer"></ion-icon>\n                </ion-range>\n\n\n                <ion-label> <strong>{{ item.DeviceName }}</strong> </ion-label>\n                <ion-label> Desired temperature: {{ getDesiredTemperature(item) }} &deg;{{ TEMPERATURE_FORMAT.toUpperCase() }}</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-sm-2 col-md-1 col-lg-1 col-xl-1>\n            <button (click)="increment(item)"><ion-icon name="add-circle" ></ion-icon></button> <br>\n            <button (click)="decrement(item)"><ion-icon name="remove-circle" ></ion-icon></button>\n            <div><ion-toggle [(ngModel)]="item.status"></ion-toggle></div>\n\n            <!--<ion-label> Current temperature: {{ randomized() }} </ion-label>-->\n          </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/speaker-list/speaker-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_devices__["a" /* Devices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], SpeakerListPage);
    return SpeakerListPage;
}());

//# sourceMappingURL=speaker-list.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.signup = { username: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup.username);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]);
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Signup</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="login-page">\n\n	<div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n	</div>\n\n	<form #signupForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label floating color="primary">Username</ion-label>\n				<ion-input [(ngModel)]="signup.username" name="username" type="text" #username="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Username is required\n			</p>\n\n			<ion-item>\n				<ion-label floating color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n			<ion-item>\n				<ion-label floating color="primary">E-mail</ion-label>\n				<ion-input [(ngModel)]="signup.email" name="email" type="text" #email="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				E-mail is required\n			</p>\n		</ion-list>\n\n		<div padding>\n			<button ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button>\n		</div>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
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
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, userData) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userData = userData;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    AccountPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changeUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'username',
            value: this.username,
            placeholder: 'username'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.userData.setUsername(data.username);
                _this.getUsername();
            }
        });
        alert.present();
    };
    AccountPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
        });
    };
    AccountPage.prototype.changePassword = function () {
        console.log('Clicked to change password');
    };
    AccountPage.prototype.logout = function () {
        this.userData.logout();
        this.nav.setRoot('LoginPage');
    };
    AccountPage.prototype.support = function () {
        this.nav.push('SupportPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <div padding-top text-center *ngIf="username">\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n    <h2>{{username}}</h2>\n\n    <ion-list inset>\n      <button ion-item (click)="updatePicture()">Update Picture</button>\n      <button ion-item (click)="changeUsername()">Change Username</button>\n      <button ion-item (click)="changePassword()">Change Password</button>\n      <button ion-item (click)="support()">Support</button>\n      <button ion-item (click)="logout()">Logout</button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, menu, userData) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.userData = userData;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/smartHome.jpg" alt="Ionic logo">\n	</div>\n\n	<form #loginForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label floating color="primary">Username</ion-label>\n				<ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Username is required\n			</p>\n\n			<ion-item>\n				<ion-label floating color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button (click)="onSignup()" color="light" block>Signup</button>\n			</ion-col>\n		</ion-row>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_device__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Camera } from '@ionic-native/camera';


var ItemCreatePage = (function () {
    function ItemCreatePage(navCtrl, viewCtrl, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.Categories = [];
        var CategoryList = [
            { "category": __WEBPACK_IMPORTED_MODULE_3__models_device__["c" /* categories */].SecurityDevices.toString(), "icon": "assets/img/icons/lock.svg" },
            { "category": __WEBPACK_IMPORTED_MODULE_3__models_device__["c" /* categories */].ThermostatsDevices.toString(), "icon": "assets/img/icons/therm.svg" },
            { "category": __WEBPACK_IMPORTED_MODULE_3__models_device__["c" /* categories */].CamerasDevices.toString(), "icon": "assets/img/icons/videocam.svg" },
            { "category": __WEBPACK_IMPORTED_MODULE_3__models_device__["c" /* categories */].OtherDevices.toString(), "icon": "assets/img/icons/git-commit.svg" }
        ];
        for (var _i = 0, CategoryList_1 = CategoryList; _i < CategoryList_1.length; _i++) {
            var category = CategoryList_1[_i];
            this.Categories.push(category);
        }
        //  console.log(this.Categories);
        this.form = formBuilder.group({
            //profilePic: [''],
            DeviceName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            about: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            status: false,
            category: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            index: ['']
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function () {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ItemCreatePage.prototype.ionViewDidLoad = function () {
    };
    // getPicture() {
    //   if (Camera['installed']()) {
    //     this.camera.getPicture({
    //       destinationType: this.camera.DestinationType.DATA_URL,
    //       targetWidth: 96,
    //       targetHeight: 96
    //     }).then((data) => {
    //       this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
    //     }, (err) => {
    //       alert('Unable to take photo');
    //     })
    //   } else {
    //     this.fileInput.nativeElement.click();
    //   }
    // }
    ItemCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    ItemCreatePage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    ItemCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * The user is done and wants to create the item, so return it
     * back to the presenter.
     */
    ItemCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], ItemCreatePage.prototype, "fileInput", void 0);
    ItemCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-create',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/item-create/item-create.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'Add a new device\' }}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n          {{ \'CANCEL_BUTTON\' }}\n        </span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n        <span color="primary" showWhen="ios">\n          {{ \'DONE_BUTTON\' }}\n        </span>\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n    <!-- <div class="profile-image-wrapper" (click)="getPicture()">\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n        <ion-icon name="add"></ion-icon>\n        <div>\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\'}}\n        </div>\n      </div>\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n    </div> If we need a picture for the device -->\n\n    <ion-list radio-group formControlName="category">\n        <ion-list-header><h1><strong>Select Category: </strong></h1></ion-list-header>\n        <ion-item *ngFor="let categoryObj of Categories">\n          <ion-label>\n              <ion-avatar id="pad">\n                  <img [src]="categoryObj.icon" />\n                </ion-avatar>\n            <h2 id="space">{{categoryObj.category}}</h2>\n          </ion-label>\n          <ion-radio value="{{categoryObj.category}}"></ion-radio>\n        </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Enter a device name\' }}" formControlName="DeviceName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Description for the device\'}}" formControlName="about"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'IP / temperature (C)\'}}" formControlName="index"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/item-create/item-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ItemCreatePage);
    return ItemCreatePage;
}());

//# sourceMappingURL=item-create.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true'),
                _this.storage.set('hasLoggedIn', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true, 'loggedInMenu');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n<ion-grid>\n  <ion-row>\n    <ion-col col-auto>\n      <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n        <ion-slide>\n          <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n          <h1 class="slide-title">\n            Welcome to <strong>Smart Home App</strong>\n          </h1> <br>\n          <h3>The app that will help you have a <strong>Safe Home, Always!</strong> </h3>\n          <p>\n            The tutorial will serve as a quick guide to the features and functionalities of the app.\n          </p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n          <h2 class="slide-title"><strong>The menu</strong></h2>\n          <p>After loging in, you will notice that this app consists of four tabs, which hold the main functionality of the app and an additional menu (either on the left or as a dropdown, depending on the device you are using).<br>\n            The menu consists of the four <em>tabs</em>, some settings regarding your <em>account</em>, and a possibility to return to this <em>tutorial</em> anytime in case something is not clear.\n          </p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n          <h2 class="slide-title"><strong>Security</strong></h2>\n            <p>The first and default tab is <strong>Secrurity</strong> tab. It allows you to <em>arm</em> and <em>disarm</em> the security of your home with ease in just a second.\n            </p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n          <h2 class="slide-title"><strong>Thermostats</strong></h2>\n          <p>Next is the <strong>Thermostats</strong> tab. Here you can follow the <em>temperature</em> and <em>humidity</em> in your home, and set the <em>desired temperature</em> in different parts of it.<br>\n          </p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n          <h2 class="slide-title"><strong>Cameras</strong></h2>\n          <p>Here, on the <strong>Cameras</strong> tab, you can see the <em>video footages</em> of the cameras installed in your home.<br>\n          </p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n          <h2 class="slide-title"> <strong>Devices</strong> </h2>\n          <p>The <strong>Devices</strong> tab is the tab where you can add new devices, and <em>enable</em> or <em>disable</em> each device sepparately. <br><br>\n            Now that everything is clear, the only thing left is to dive into the app and enjoy while keeping your home safe.\n          </p>\n          <button ion-button icon-end large clear (click)="startApp()">\n            Continue\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-slide>\n\n      </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'If there is any techincal problems here you can contact the support team.',
            duration: 3500
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Your ticket request has been sent.',
                duration: 3000
            });
            toast.present();
        }
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Leave this page?',
                message: 'Are you sure you want to leave this page? Your ticket message will not be submitted.'
            });
            alert.addButton({ text: 'Stay', handler: reject });
            alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/support/support.html"*/'<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Support</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="logo">\n		<!-- <img src="assets/img/appicon.svg" alt="Ionic Logo"> -->\n		<ion-icon color="primary" name="help"></ion-icon>\n		<p>Technical Issue<p>\n	</div>\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Describe your issue as message below</ion-label>\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n			</ion-item>\n		</ion-list>\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n			Support message is required\n		</p>\n\n		<div padding>\n			<button ion-button block type="submit">Open a ticket</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/support/support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_speaker_list_speaker_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_page_tabs_page__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tutorial_tutorial__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_support_support__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_list_master_list_master__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_item_create_item_create__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_camera_detail_camera_detail__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_user_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_devices__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_list_master_list_master__["a" /* ListMasterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_item_create_item_create__["a" /* ItemCreatePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_camera_detail_camera_detail__["a" /* CameraDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule__["a" /* SchedulePage */], name: 'Schedule', segment: 'schedule' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], name: 'SpeakerList', segment: 'speakerList' },
                        { component: __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */], name: 'Map', segment: 'map' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_list_master_list_master__["a" /* ListMasterPage */], name: 'ListMaster', segment: 'list-master' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_item_create_item_create__["a" /* ItemCreatePage */], name: 'ItemCreate', segment: 'item-create' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_support_support__["a" /* SupportPage */], name: 'SupportPage', segment: 'support' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */], name: 'AccountPage', segment: 'account' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_camera_detail_camera_detail__["a" /* CameraDetailPage */], name: 'CameraDetailPage', segment: 'camera-detail' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_list_master_list_master__["a" /* ListMasterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_item_create_item_create__["a" /* ItemCreatePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_camera_detail_camera_detail__["a" /* CameraDetailPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_21__providers_devices__["a" /* Devices */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_account__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_speaker_list_speaker_list__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_support_support__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_user_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_list_master_list_master__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, storage, splashScreen) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.storage = storage;
        this.splashScreen = splashScreen;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'Security', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__["a" /* SchedulePage */], index: 0, icon: 'ios-lock' },
            { title: 'Thermostats', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_11__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], index: 1, icon: 'ios-thermometer' },
            { title: 'Cameras', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */], index: 2, icon: 'ios-videocam' },
            { title: 'Devices', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_14__pages_list_master_list_master__["a" /* ListMasterPage */], index: 3, icon: 'ios-git-commit' }
        ];
        this.loggedInPages = [
            { title: 'Account', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Logout', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Signup', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
    }
    ConferenceApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        // decide which menu items should be hidden by current login status stored in local storage
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
        }
    };
    ConferenceApp.prototype.openTutorial = function () {
        var _this = this;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */]).then(function () {
            _this.listenToLoginEvents();
        });
    };
    //All events for login and they are promise to menu
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    //Used events here if loged is show logendInMenu
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/app/app.template.html"*/'<ion-split-pane>\n\n  <!-- logged out menu -->\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Account\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Tutorial\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Show Tutorial\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navigate\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Account\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Tutorial\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Show Tutorial\n        </button>\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_13__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_devices__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CameraDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CameraDetailPage = (function () {
    function CameraDetailPage(navCtrl, navParams, items) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        // console.log(this.cameraItem);
        this.cameraItem = navParams.get('cameraItem') || items.defaultItem;
    }
    CameraDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CameraDetailPage');
    };
    CameraDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-camera-detail',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/camera-detail/camera-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{cameraItem.DeviceName}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card col-auto>\n        <!-- <div class="item-profile" text-center #profilePic [style.background-image]="\'url(\' + cameraItem.index + \')\'"> -->\n          <!-- </div> -->\n        <img id="da" src="{{\'assets/camera/camera\' + cameraItem.index + \'.jpg\'}}">\n        <!-- <div class="card-title"> <strong>{{item.DeviceName}}</strong> </div> -->\n        <ion-card-title padding><h2>{{cameraItem.about}}</h2></ion-card-title>\n        <!-- <div class="item-detail" padding>\n            <h2>{{cameraItem.about}}</h2>\n          </div> -->\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/camera-detail/camera-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_devices__["a" /* Devices */]])
    ], CameraDetailPage);
    return CameraDetailPage;
}());

//# sourceMappingURL=camera-detail.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Device; });
/* unused harmony export Core_Device */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SecuritySystem; });
/* unused harmony export categoriesWithIcons */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return categories; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Device = (function () {
    function Device(fields) {
        this.securitySystem = SecuritySystem;
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Device;
}());

/* Model if you are using database - the data structures with all properties ...*/
var Core_Device = (function () {
    function Core_Device(DeviceName, DeviceDescription, DeviceStatus, DeviceCategory) {
        this.DeviceName = DeviceName;
        this.DeviceDescription = DeviceDescription;
        this.DeviceStatus = DeviceStatus;
        this.DeviceCategory = DeviceCategory;
    }
    return Core_Device;
}());

var SecuritySystem = (function () {
    //default constructor
    function SecuritySystem() {
        this.SecuritySystemServices = true;
        this.GarageDoors = 'false';
    }
    SecuritySystem.prototype.getSecuritySystemStatus = function () {
        return this.SecuritySystemServices;
    };
    SecuritySystem.prototype.getSecuritySystemStatusHumanReadable = function () {
        var securitySystemStatusHumanReadable;
        if (this.getSecuritySystemStatus() == false) {
            securitySystemStatusHumanReadable = "Disarmed";
        }
        else {
            securitySystemStatusHumanReadable = "Armed";
        }
        return securitySystemStatusHumanReadable;
    };
    SecuritySystem.prototype.DisarmTheSecuritySystem = function (SecuritySystemServices) {
        this.SecuritySystemServices = SecuritySystemServices;
    };
    SecuritySystem.prototype.ArmTheSecuritySystem = function (SecuritySystemServices) {
        this.SecuritySystemServices = SecuritySystemServices;
    };
    SecuritySystem.prototype.getGarageDoorsStatus = function () {
        return this.GarageDoors;
    };
    SecuritySystem.prototype.setGarageDoorsStatus = function (doorStatus) {
        this.GarageDoors = doorStatus;
    };
    SecuritySystem.prototype.getGarageDoorsStatusHumanReadable = function () {
        var garageDoorsStatus;
        if (this.getGarageDoorsStatus() == false) {
            garageDoorsStatus = "Closed";
        }
        else {
            garageDoorsStatus = "Opened";
        }
        return garageDoorsStatus;
    };
    SecuritySystem.prototype.OpenCloseGarageDoors = function (GarageDoors) {
        this.GarageDoors = GarageDoors;
    };
    SecuritySystem = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SecuritySystem);
    return SecuritySystem;
}());

var categoriesWithIcons = (function () {
    function categoriesWithIcons() {
    }
    return categoriesWithIcons;
}());

var categories;
(function (categories) {
    categories["SecurityDevices"] = "Security Devices";
    categories["ThermostatsDevices"] = "Thermostat Devices";
    categories["CamerasDevices"] = "Camera Devices";
    categories["DoorDevices"] = "Door Devices";
    categories["OtherDevices"] = "Other Devices";
})(categories || (categories = {}));
//# sourceMappingURL=device.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Devices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_device__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Devices = (function () {
    function Devices() {
        this.securitySystem = new __WEBPACK_IMPORTED_MODULE_1__models_device__["b" /* SecuritySystem */]();
        this.items = [];
        this.defaultItem = {
            "DeviceName": "outdoor_light",
            //"profilePic": "assets/img/speakers/bear.jpg", //namesto sliki mozeme ikoni za sekoja kategorija ili tip na senzor
            "about": "a light at the tree house",
            "status": "false",
            "category": __WEBPACK_IMPORTED_MODULE_1__models_device__["c" /* categories */].SecurityDevices.toString(),
        };
        var items = [
            {
                "DeviceName": "outdoor_light",
                //"profilePic": "assets/img/speakers/bear.jpg",
                "about": "a light at the tree house",
                "status": "true",
                "category": __WEBPACK_IMPORTED_MODULE_1__models_device__["c" /* categories */].OtherDevices.toString()
            },
            {
                "DeviceName": "Home Alarm",
                //"profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Alarm sensors in the house",
                "status": "true",
                "category": __WEBPACK_IMPORTED_MODULE_1__models_device__["c" /* categories */].SecurityDevices.toString()
            },
            {
                "DeviceName": "Outdoor Alarm",
                //"profilePic": "assets/img/speakers/duck.jpg",
                "about": "Alarm sensor at front door",
                "status": "true",
                "category": __WEBPACK_IMPORTED_MODULE_1__models_device__["c" /* categories */].SecurityDevices.toString()
            },
            {
                "DeviceName": "Front Door",
                //"profilePic": "assets/img/speakers/duck.jpg",
                "about": "sensor for locking/unlocking at front door",
                "status": "true",
                "category": __WEBPACK_IMPORTED_MODULE_1__models_device__["c" /* categories */].SecurityDevices.toString()
            },
            {
                "DeviceName": "Garage door",
                //"profilePic": "assets/img/speakers/duck.jpg",
                "about": "garage door sensor",
                "status": false,
                "category": __WEBPACK_IMPORTED_MODULE_1__models_device__["c" /* categories */].DoorDevices.toString()
            },
            {
                "DeviceName": "Living Room Camera",
                "about": "A camera to monitor the living room.",
                "status": "false",
                "category": __WEBPACK_IMPORTED_MODULE_1__models_device__["c" /* categories */].CamerasDevices.toString(),
                "index": "1"
            },
            {
                "DeviceName": "Hallway Camera",
                //"profilePic": "assets/img/speakers/elephant.jpg",
                "about": "A camera to monitor the hallway.",
                "status": "false",
                "category": __WEBPACK_IMPORTED_MODULE_1__models_device__["c" /* categories */].CamerasDevices.toString(),
                "index": "2"
            },
            {
                "DeviceName": "Main Air Conditioner",
                //"profilePic": "assets/img/speakers/mouse.jpg",
                "about": "The main Air Conditioner.",
                "status": "true",
                "category": __WEBPACK_IMPORTED_MODULE_1__models_device__["c" /* categories */].ThermostatsDevices.toString(),
                "index": 20,
                "index_f": (20 * 9 / 5 + 32)
            },
            {
                "DeviceName": "Garage Conditioner",
                //"profilePic": "assets/img/speakers/mouse.jpg",
                "about": "The Garage Conditioner.",
                "status": "false",
                "category": __WEBPACK_IMPORTED_MODULE_1__models_device__["c" /* categories */].ThermostatsDevices.toString(),
                "index": 25,
                "index_f": (25 * 9 / 5 + 32)
            },
            {
                "DeviceName": "Living Room Lights",
                //"profilePic": "assets/img/speakers/puppy.jpg",
                "about": "The lights in the Living Room.",
                "status": "true",
                "category": __WEBPACK_IMPORTED_MODULE_1__models_device__["c" /* categories */].OtherDevices.toString()
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_device__["a" /* Device */](item));
        }
    }
    Devices.prototype.query = function (securityStatus) {
        if (!securityStatus) {
            return this.items;
        }
        else if (securityStatus.match("disarm")) {
            this.items.forEach(function (item) {
                if (item.category.match("Security Devices")) {
                    item.status = "false";
                }
            });
            this.securitySystem.DisarmTheSecuritySystem(false); //set status to false
            return this.items;
        }
        else if (securityStatus.match("arm")) {
            this.items.forEach(function (item) {
                if (item.category.match("Security Devices")) {
                    item.status = "true";
                }
            });
            this.securitySystem.ArmTheSecuritySystem(true);
            return this.items;
        }
        else {
            //error handling
            return null;
        }
    };
    Devices.prototype.garageDoors = function (garageDoors) {
        if (!garageDoors) {
            return this.securitySystem.getGarageDoorsStatus();
        }
        else if (garageDoors.match("open")) {
            //change status for that category
            this.items.forEach(function (item) {
                if (item.category.match("Door Devices")) {
                    item.status = true;
                }
            });
            this.securitySystem.OpenCloseGarageDoors(true);
            return this.securitySystem.getGarageDoorsStatusHumanReadable();
        }
        else if (garageDoors.match("close")) {
            //change status for that category
            this.items.forEach(function (item) {
                if (item.category.match("Door Devices")) {
                    item.status = false;
                }
            });
            this.securitySystem.OpenCloseGarageDoors(false);
            return this.securitySystem.getGarageDoorsStatusHumanReadable();
        }
        else {
            //error handling
            return null;
        }
    };
    Devices.prototype.add = function (item) {
        this.items.push(item);
    };
    Devices.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Devices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Devices);
    return Devices;
}());

//# sourceMappingURL=devices.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_master_list_master__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AboutPage } from '../about/about';




var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__["a" /* SchedulePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__["a" /* SpeakerListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__list_master_list_master__["a" /* ListMasterPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/tabs-page/tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n  <ion-tab [root]="tab1Root" tabTitle="Security" tabIcon="ios-lock" tabUrlPath="conference-schedule"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Thermostats" tabIcon="ios-thermometer"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Cameras" tabIcon="ios-videocam"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Devices" tabIcon="ios-git-commit"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/tabs-page/tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map