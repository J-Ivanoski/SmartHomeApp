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
import { FormBuilder, Validators } from '@angular/forms';
//import { Camera } from '@ionic-native/camera';
import { NavController, ViewController } from 'ionic-angular';
var ItemCreatePage = (function () {
    function ItemCreatePage(navCtrl, viewCtrl, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.form = formBuilder.group({
            //profilePic: [''],
            DeviceName: ['', Validators.required],
            about: [''],
            status: false
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
        ViewChild('fileInput'),
        __metadata("design:type", Object)
    ], ItemCreatePage.prototype, "fileInput", void 0);
    ItemCreatePage = __decorate([
        Component({
            selector: 'page-item-create',template:/*ion-inline-start:"/home/jovica/Ionic/SmartHomeApp/src/pages/item-create/item-create.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'Add a new device\'}}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <span color="primary" showWhen="ios">\n          {{ \'CANCEL_BUTTON\'}}\n        </span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n        <span color="primary" showWhen="ios">\n          {{ \'DONE_BUTTON\'}}\n        </span>\n        <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n    <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n    <!-- <div class="profile-image-wrapper" (click)="getPicture()">\n      <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n        <ion-icon name="add"></ion-icon>\n        <div>\n          {{ \'ITEM_CREATE_CHOOSE_IMAGE\'}}\n        </div>\n      </div>\n      <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n    </div> If we need a picture for the device -->\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Enter a device name\' }}" formControlName="DeviceName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" placeholder="{{ \'Description for the device\'}}" formControlName="about"></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/home/jovica/Ionic/SmartHomeApp/src/pages/item-create/item-create.html"*/
        }),
        __metadata("design:paramtypes", [NavController, ViewController, FormBuilder])
    ], ItemCreatePage);
    return ItemCreatePage;
}());
export { ItemCreatePage };
//# sourceMappingURL=item-create.js.map