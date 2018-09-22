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
import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { 
//  ActionSheet,
//  ActionSheetController,
//  ActionSheetOptions,
//  Config,
Platform, NavController } from 'ionic-angular';
import { categories } from '../../models/device';
import { Devices } from '../../providers/devices';
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
        Component({
            selector: 'page-speaker-list',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/speaker-list/speaker-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Thermostats</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content speaker-list">\n  <ion-list radio-group>\n    <h3> Temperature Format </h3>\n    <ion-item *ngFor="let format of temperatureFormat; let i = index">\n      <ion-label>{{ format.value }}</ion-label>\n      <ion-radio name="radiogroup" [checked]="i===0" [value]="format.id"\n      (click)="changeTemperatureFormat(format.value)"> </ion-radio>\n    </ion-item>\n  </ion-list>\n  <ion-grid>\n        <ion-row *ngFor="let item of thermostatItems; let i=index">\n          <ion-col col-sm-10 col-md-11 col-lg-11 col-xl-11 >\n            <ion-item>\n\n                <ion-range *ngIf="TEMPERATURE_FORMAT==\'c\'" [(ngModel)]="item.index"  (ionChange)="change(item, \'c\')"\n                  min="{{ MIN_TEMP }}" max="{{ MAX_TEMP }}" step="1" pin="true"  color="danger">\n                  <ion-icon range-left  color="danger" name="thermometer"></ion-icon>\n                  <ion-icon range-right color="danger" name="thermometer"></ion-icon>\n                </ion-range>\n\n\n                <ion-range *ngIf="TEMPERATURE_FORMAT==\'f\'" [(ngModel)]="item.index_f" (ionChange)="change(item, \'f\')"\n                  min="{{ MIN_TEMP }}" max="{{ MAX_TEMP }}" step="1" pin="true"  color="danger">\n                  <ion-icon range-left  color="danger" name="thermometer"></ion-icon>\n                  <ion-icon range-right color="danger" name="thermometer"></ion-icon>\n                </ion-range>\n\n\n                <ion-label> <strong>{{ item.DeviceName }}</strong> </ion-label>\n                <ion-label> Desired temperature: {{ getDesiredTemperature(item) }} &deg;{{ TEMPERATURE_FORMAT.toUpperCase() }}</ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col col-sm-2 col-md-1 col-lg-1 col-xl-1>\n            <button (click)="increment(item)"><ion-icon name="add-circle" ></ion-icon></button> <br>\n            <button (click)="decrement(item)"><ion-icon name="remove-circle" ></ion-icon></button>\n            <div><ion-toggle [(ngModel)]="item.status"></ion-toggle></div>\n\n            <!--<ion-label> Current temperature: {{ randomized() }} </ion-label>-->\n          </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/speaker-list/speaker-list.html"*/
        }),
        __metadata("design:paramtypes", [Platform, Devices,
            ModalController, NavController])
    ], SpeakerListPage);
    return SpeakerListPage;
}());
export { SpeakerListPage };
//# sourceMappingURL=speaker-list.js.map