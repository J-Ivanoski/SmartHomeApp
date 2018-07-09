var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Platform, NavController } from 'ionic-angular';
import { categories } from '../../models/device';
import { Devices } from '../../providers/devices';
var MapPage = (function () {
    function MapPage(platform, items, modalCtrl, navCtrl) {
        this.platform = platform;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.Categories = [];
        this.currentItems = this.items.query();
        var CategoryList = [
            { "category": categories.SecurityDevices.toString() },
            { "category": categories.ThermostatsDevices.toString() },
            { "category": categories.CamerasDevices.toString() },
            { "category": categories.OtherDevices.toString() }
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
        Component({
            selector: 'page-map',template:/*ion-inline-start:"/home/jovica/Ionic/SmartHomeApp/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Video footages</ion-title>\n    <!-- Add new viedo camera  -->\n    <!-- <ion-buttons end>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <ion-grid >\n    <ion-row>\n        <ion-col *ngFor="let item of cameraItems; let i=index"  col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6>\n          <ion-card (click)="openItem(item)">\n            <img src="{{\'assets/camera/camera\' + (i + 1) + \'.jpg\'}}">\n            <div class="card-title"> <strong>{{item.DeviceName}}</strong> </div>\n          </ion-card>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/jovica/Ionic/SmartHomeApp/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [Platform, Devices, ModalController, NavController])
    ], MapPage);
    return MapPage;
}());
export { MapPage };
//# sourceMappingURL=map.js.map