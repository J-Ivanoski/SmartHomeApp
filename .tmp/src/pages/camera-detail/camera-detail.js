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
import { NavController, NavParams } from 'ionic-angular';
import { Devices } from '../../providers/devices';
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
        Component({
            selector: 'page-camera-detail',template:/*ion-inline-start:"/home/jovica/Ionic/SmartHomeApp/src/pages/camera-detail/camera-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{cameraItem.DeviceName}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card >\n        <!-- <div class="item-profile" text-center #profilePic [style.background-image]="\'url(\' + cameraItem.index + \')\'"> -->\n          <!-- </div> -->\n        <img src="{{\'assets/camera/camera\' + cameraItem.index + \'.jpg\'}}">\n        <!-- <div class="card-title"> <strong>{{item.DeviceName}}</strong> </div> -->\n        <div class="item-detail" padding>\n            <h2>{{cameraItem.about}}</h2>\n          </div>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/jovica/Ionic/SmartHomeApp/src/pages/camera-detail/camera-detail.html"*/,
        }),
        __metadata("design:paramtypes", [NavController, NavParams, Devices])
    ], CameraDetailPage);
    return CameraDetailPage;
}());
export { CameraDetailPage };
//# sourceMappingURL=camera-detail.js.map