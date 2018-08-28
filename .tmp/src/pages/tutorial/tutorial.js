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
import { MenuController, NavController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs-page/tabs-page';
var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.setRoot(TabsPage).then(function () {
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
        ViewChild('slides'),
        __metadata("design:type", Slides)
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Component({
            selector: 'page-tutorial',template:/*ion-inline-start:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n<ion-grid>\n  <ion-row>\n    <ion-col col-auto>\n      <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n        <ion-slide>\n          <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n          <h1 class="slide-title">\n            Welcome to <strong>Smart Home App</strong>\n          </h1> <br>\n          <h3>The app that will help you have a <strong>Safe Home, Always!</strong> </h3>\n          <p>\n            The tutorial will serve as a quick guide to the features and functionalities of the app.\n          </p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n          <h2 class="slide-title"><strong>The menu</strong></h2>\n          <p>After loging in, you will notice that this app consists of four tabs, which hold the main functionality of the app and an additional menu (either on the left or as a dropdown, depending on the device you are using).<br>\n            The menu consists of the four <em>tabs</em>, some settings regarding your <em>account</em>, and a possibility to return to this <em>tutorial</em> anytime in case something is not clear.\n          </p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n          <h2 class="slide-title"><strong>Security</strong></h2>\n            <p>The first and default tab is <strong>Secrurity</strong> tab. It allows you to <em>arm</em> and <em>disarm</em> the security of your home with ease in just a second.\n            </p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n          <h2 class="slide-title"><strong>Thermostats</strong></h2>\n          <p>Next is the <strong>Thermostats</strong> tab. Here you can follow the <em>temperature</em> and <em>humidity</em> in your home, and set the <em>desired temperature</em> in different parts of it.<br>\n          </p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n          <h2 class="slide-title"><strong>Cameras</strong></h2>\n          <p>Here, on the <strong>Cameras</strong> tab, you can see the <em>video footages</em> of the cameras installed in your home.<br>\n          </p>\n        </ion-slide>\n\n        <ion-slide>\n          <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n          <h2 class="slide-title"> <strong>Devices</strong> </h2>\n          <p>The <strong>Devices</strong> tab is the tab where you can add new devices, and <em>enable</em> or <em>disable</em> each device sepparately. <br><br>\n            Now that everything is clear, the only thing left is to dive into the app and enjoy while keeping your home safe.\n          </p>\n          <button ion-button icon-end large clear (click)="startApp()">\n            Continue\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-slide>\n\n      </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/jovica/projects/IonicProjects/SmartHomeApp/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [NavController,
            MenuController,
            Storage])
    ], TutorialPage);
    return TutorialPage;
}());
export { TutorialPage };
//# sourceMappingURL=tutorial.js.map