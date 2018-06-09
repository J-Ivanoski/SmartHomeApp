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
import { AlertController, App, List, ModalController, NavController, ToastController, LoadingController } from 'ionic-angular';
/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';
import { SessionDetailPage } from '../session-detail/session-detail';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
var SchedulePage = (function () {
    function SchedulePage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, confData, user) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.confData = confData;
        this.user = user;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Schedule');
        this.updateSchedule();
    };
    SchedulePage.prototype.updateSchedule = function () {
        var _this = this;
        // Close any open sliding items when the schedule updates
        this.scheduleList && this.scheduleList.closeSlidingItems();
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
        });
    };
    SchedulePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                _this.updateSchedule();
            }
        });
    };
    SchedulePage.prototype.goToSessionDetail = function (sessionData) {
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(SessionDetailPage, { sessionId: sessionData.id, name: sessionData.name });
    };
    SchedulePage.prototype.addFavorite = function (slidingItem, sessionData) {
        if (this.user.hasFavorite(sessionData.name)) {
            // woops, they already favorited it! What shall we do!?
            // prompt them to remove it
            this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
        }
        else {
            // remember this session as a user favorite
            this.user.addFavorite(sessionData.name);
            // create an alert instance
            var alert_1 = this.alertCtrl.create({
                title: 'Favorite Added',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            // close the sliding item
                            slidingItem.close();
                        }
                    }]
            });
            // now present the alert on top of all other content
            alert_1.present();
        }
    };
    SchedulePage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: 'Would you like to remove this session from your favorites?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        // they clicked the cancel button, do not remove the session
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                },
                {
                    text: 'Remove',
                    handler: function () {
                        // they want to remove this session from their favorites
                        _this.user.removeFavorite(sessionData.name);
                        _this.updateSchedule();
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                }
            ]
        });
        // now present the alert on top of all other content
        alert.present();
    };
    SchedulePage.prototype.openSocial = function (network, fab) {
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
    };
    SchedulePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this.shownSessions = data.shownSessions;
            _this.groups = data.groups;
            // simulate a network request that would take longer
            // than just pulling from out local json file
            setTimeout(function () {
                refresher.complete();
                var toast = _this.toastCtrl.create({
                    message: 'Sessions have been updated.',
                    duration: 3000
                });
                toast.present();
            }, 1000);
        });
    };
    __decorate([
        ViewChild('scheduleList', { read: List }),
        __metadata("design:type", List)
    ], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = __decorate([
        Component({
            selector: 'page-schedule',template:/*ion-inline-start:"/home/jovica/Ionic/SmartHomeApp/src/pages/schedule/schedule.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Security</ion-title>\n    <!-- <ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule()">\n      <ion-segment-button value="all">\n        All\n      </ion-segment-button>\n      <ion-segment-button value="favorites">\n        Favorites\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n  <!-- <ion-toolbar no-border-top>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="updateSchedule()"\n                   placeholder="Search">\n    </ion-searchbar>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n      <ion-item-sliding #item>\n          <ion-item-options side="left">\n              <button class="fit-left" ion-button color="danger" (click)="share(item)">Disarm</button>\n            </ion-item-options>\n          <ion-item>\n\n            <ion-grid>\n              <ion-row>\n                <ion-col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3>\n                  <ion-icon class="float-left" name="arrow-back"></ion-icon>\n                </ion-col>\n\n                <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n                    <div class="check text-center">\n                        <img class="cls" src="assets/img/check.png" alt="check icon"><!--no gray-->\n                        <!-- <ion-img class="cls" src="assets/img/check.png"></ion-img> -->\n                    </div>\n                </ion-col>\n\n                <ion-col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3>\n                    <ion-icon class="float-right" name="arrow-forward"></ion-icon>\n                </ion-col>\n\n                </ion-row>\n              </ion-grid>\n\n          </ion-item>\n          <ion-item-options side="right">\n            <button class="fit-right" ion-button color="success" (click)="unread(item)">Arm</button>\n          </ion-item-options>\n        </ion-item-sliding>\n\n      <ion-grid>\n          <ion-row class="no-margin-top" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n            <ion-col class="text-center">\n              <h3 ion-text><strong>Armed</strong></h3>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class="text-center">\n                <p ion-text>All Doors</p>\n                <button ion-button round><ion-icon class="clui" name="lock"></ion-icon> Locked</button>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div class="text-center">\n                <p ion-text>Garage Doors</p>\n                <button ion-button round>Closed <ion-icon class="clui" name="home"></ion-icon></button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    \n  </ion-list>\n  <!-- <ion-fab bottom right #fab>\n    <button ion-fab><ion-icon name="share"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="vimeo" (click)="openSocial(\'Vimeo\', fab)"><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab color="google" (click)="openSocial(\'Google+\', fab)"><ion-icon name="logo-googleplus"></ion-icon></button>\n      <button ion-fab color="twitter" (click)="openSocial(\'Twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab color="facebook" (click)="openSocial(\'Facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab> -->\n</ion-content>'/*ion-inline-end:"/home/jovica/Ionic/SmartHomeApp/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [AlertController,
            App,
            LoadingController,
            ModalController,
            NavController,
            ToastController,
            ConferenceData,
            UserData])
    ], SchedulePage);
    return SchedulePage;
}());
export { SchedulePage };
//# sourceMappingURL=schedule.js.map