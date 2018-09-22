var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { AlertController, App, List, ModalController, NavController, ToastController, LoadingController, } from 'ionic-angular';
/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';
import { UserData } from '../../providers/user-data';
import { Devices } from '../../providers/devices'; //data
import { categories } from '../../models/device';
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
            { "category": categories.SecurityDevices.toString() },
            { "category": categories.ThermostatsDevices.toString() },
            { "category": categories.CamerasDevices.toString() },
            { "category": categories.OtherDevices.toString() }
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
        // console.log("status:" + checkedDeviceStatus);
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
    SchedulePage.prototype.checkDeviceStatus = function (Items) {
        var counterTrue = 0;
        var counterFalse = 0;
        // console.log(counter);
        for (var _i = 0, Items_1 = Items; _i < Items_1.length; _i++) {
            var item = Items_1[_i];
            if (item.status == "true") {
                counterTrue = counterTrue + 1;
            }
            else {
                counterFalse = counterFalse + 1;
            }
        }
        // console.log("counterTrue" + counterTrue); 
        // console.log("counterFalse:" + counterFalse);
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
        //  console.log(this.devices.query());
        //  console.log(this.devices.securitySystem.getSecuritySystemStatus();
    };
    SchedulePage.prototype.arm = function () {
        this.devices.query("arm");
        //  console.log(this.devices.query());
        //  console.log(this.devices.securitySystem.getSecuritySystemStatus());
    };
    SchedulePage.prototype.openGarageDoors = function () {
        this.devices.garageDoors("open");
    };
    SchedulePage.prototype.closeGarageDoors = function () {
        this.devices.garageDoors("close");
    };
    __decorate([
        ViewChild('scheduleList', { read: List }),
        __metadata("design:type", List)
    ], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = __decorate([
        Component({
            selector: 'page-schedule',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/schedule/schedule.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Security</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n          <ion-list>\n              <ion-item-sliding #item>\n                  <ion-item-options side="left">\n                      <button class="fit-left" ion-button color="danger" (click)="disarm()">Disarm <ion-icon name="unlock"></ion-icon></button>\n                    </ion-item-options>\n                  <ion-item>\n\n                    <ion-grid>\n                      <ion-row>\n                        <ion-col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3>\n                          <ion-icon class="float-left" name="arrow-back"></ion-icon>\n                        </ion-col>\n\n                        <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n                            <div class="check text-center">\n                                <img *ngIf="this.devices.securitySystem.getSecuritySystemStatus();" class="cls" src="assets/img/check.png" alt="arm icon" />\n                                <img *ngIf="!this.devices.securitySystem.getSecuritySystemStatus();" class="cls" src="assets/img/uncheck.png" alt="disarm icon" />\n                            </div>\n                        </ion-col>\n\n                        <ion-col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3>\n                            <ion-icon class="float-right" name="arrow-forward"></ion-icon>\n                        </ion-col>\n\n                        </ion-row>\n                      </ion-grid>\n\n                  </ion-item>\n                  <ion-item-options side="right">\n                    <button class="fit-right" ion-button color="success" (click)="arm()">Arm <ion-icon name="key"></ion-icon></button>\n                  </ion-item-options>\n                </ion-item-sliding>\n\n              <ion-grid>\n                  <ion-row class="no-margin-top" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n                    <ion-col class="text-center">\n                      <h3 ion-text><strong>{{this.devices.securitySystem.getSecuritySystemStatusHumanReadable()}}</strong></h3>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n                      <div class="text-center" style="background-color:gray;">\n                        \n                        \n                        <p ion-text>Security Devices</p>\n                        <span *ngIf="this.devices.securitySystem.getSecuritySystemStatus()"> <ion-icon class="clui" name="lock"></ion-icon> Locked</span>\n                        <span *ngIf="!this.devices.securitySystem.getSecuritySystemStatus()"> <ion-icon class="clui" color="danger" name="unlock"></ion-icon> Unlocked</span>\n                      \n                      </div>\n                    </ion-col>\n                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n                      <div class="text-center">\n                        <p ion-text>Garage Doors</p>\n                        <button *ngIf="this.devices.securitySystem.getGarageDoorsStatus()" ion-button round (click)="closeGarageDoors()"> {{this.devices.securitySystem.getGarageDoorsStatusHumanReadable()}} <ion-icon class="clui" name="home"></ion-icon></button>\n                        <button *ngIf="!this.devices.securitySystem.getGarageDoorsStatus()" ion-button round (click)="openGarageDoors()" color="danger" > {{this.devices.securitySystem.getGarageDoorsStatusHumanReadable()}} <ion-icon class="clui" name="home"></ion-icon></button>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n\n          </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [AlertController,
            App,
            LoadingController,
            ModalController,
            NavController,
            ToastController,
            UserData,
            Devices])
    ], SchedulePage);
    return SchedulePage;
}());
export { SchedulePage };
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