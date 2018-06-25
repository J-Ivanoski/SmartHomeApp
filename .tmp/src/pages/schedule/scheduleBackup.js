/*
import { Component, ViewChild } from '@angular/core';

import { AlertController, App, FabContainer, ItemSliding, List, ModalController, NavController, ToastController, LoadingController, Refresher } from 'ionic-angular';

/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';
/*

@Component({
  selector: 'page-schedule',template:/*ion-inline-start:"/home/jovica/IonicProjects/SmartHomeApp/src/pages/schedule/schedule.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Security</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n          <ion-list>\n              <ion-item-sliding #item>\n                  <ion-item-options side="left">\n                      <button class="fit-left" ion-button color="danger" (click)="disarm()">Disarm <ion-icon name="unlock"></ion-icon></button>\n                    </ion-item-options>\n                  <ion-item>\n        \n                    <ion-grid>\n                      <ion-row>\n                        <ion-col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3>\n                          <ion-icon class="float-left" name="arrow-back"></ion-icon>\n                        </ion-col>\n        \n                        <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n                            <div class="check text-center">\n                                <img *ngIf="this.devices.securitySystem.getSecuritySystemStatus();" class="cls" src="assets/img/check.png" alt="arm icon" />\n                                <img *ngIf="!this.devices.securitySystem.getSecuritySystemStatus();" class="cls" src="assets/img/uncheck.png" alt="disarm icon" />\n                            </div>\n                        </ion-col>\n        \n                        <ion-col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3>\n                            <ion-icon class="float-right" name="arrow-forward"></ion-icon>\n                        </ion-col>\n        \n                        </ion-row>\n                      </ion-grid>\n        \n                  </ion-item>\n                  <ion-item-options side="right">\n                    <button class="fit-right" ion-button color="success" (click)="arm()">Arm <ion-icon name="key"></ion-icon></button>\n                  </ion-item-options>\n                </ion-item-sliding>\n        \n              <ion-grid>\n                  <ion-row class="no-margin-top" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12>\n                    <ion-col class="text-center">\n                      <h3 ion-text><strong>{{this.devices.securitySystem.getSecuritySystemStatusHummanReadable()}}</strong></h3>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n                      <div class="text-center">\n                        <p ion-text>All Doors</p>\n                        <button *ngIf="this.devices.securitySystem.getSecuritySystemStatus();" ion-button round><ion-icon class="clui" name="lock"></ion-icon> Locked</button>\n                        <button *ngIf="!this.devices.securitySystem.getSecuritySystemStatus();" ion-button round color="danger"><ion-icon class="clui" name="unlock"></ion-icon> Unlocked</button>\n                      </div>\n                    </ion-col>\n                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n                      <div class="text-center">\n                        <p ion-text>Garage Doors</p>\n                        <button *ngIf="this.devices.securitySystem.getGarageDoorsStatus()" ion-button round (click)="closeGarageDoors()">{{this.devices.securitySystem.getGarageDoorsStatusHummanReadable()}} <ion-icon class="clui" name="home"></ion-icon></button>\n                        <button *ngIf="!this.devices.securitySystem.getGarageDoorsStatus()" ion-button round (click)="openGarageDoors()" color="danger" >{{this.devices.securitySystem.getGarageDoorsStatusHummanReadable()}} <ion-icon class="clui" name="home"></ion-icon></button>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n            \n          </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/jovica/IonicProjects/SmartHomeApp/src/pages/schedule/schedule.html"*/
})
export class SchedulePage {
  // the list is a child of the schedule page
  // @ViewChild('scheduleList') gets a reference to the list
  // with the variable #scheduleList, `read: List` tells it to return
  // the List and not a reference to the element
  @ViewChild('scheduleList', { read: List }) scheduleList: List;

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public user: UserData,
  ) {}

  disarm(item:any){
    console.log(item);
  }

  arm(item:any){
    console.log(item);
  }

  ionViewDidLoad() {
    this.app.setTitle('Schedule');
    this.updateSchedule();
  }
/*
  updateSchedule() {
    // Close any open sliding items when the schedule updates
    this.scheduleList && this.scheduleList.closeSlidingItems();

    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }*/
/*
  presentFilter() {
    let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
    modal.present();

    modal.onWillDismiss((data: any[]) => {
      if (data) {
        this.excludeTracks = data;
        this.updateSchedule();
      }
    });

  }

  goToSessionDetail(sessionData: any) {
    // go to the session detail page
    // and pass in the session data

    this.navCtrl.push(SessionDetailPage, { sessionId: sessionData.id, name: sessionData.name });
  }

  addFavorite(slidingItem: ItemSliding, sessionData: any) {

    if (this.user.hasFavorite(sessionData.name)) {
      // woops, they already favorited it! What shall we do!?
      // prompt them to remove it
      this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
    } else {
      // remember this session as a user favorite
      this.user.addFavorite(sessionData.name);

      // create an alert instance
      let alert = this.alertCtrl.create({
        title: 'Favorite Added',
        buttons: [{
          text: 'OK',
          handler: () => {
            // close the sliding item
            slidingItem.close();
          }
        }]
      });
      // now present the alert on top of all other content
      alert.present();
    }

  }

  removeFavorite(slidingItem: ItemSliding, sessionData: any, title: string) {
    let alert = this.alertCtrl.create({
      title: title,
      message: 'Would you like to remove this session from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.name);
            this.updateSchedule();

            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }
      ]
    });
    // now present the alert on top of all other content
    alert.present();
  }

  openSocial(network: string, fab: FabContainer) {
    let loading = this.loadingCtrl.create({
      content: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    loading.onWillDismiss(() => {
      fab.close();
    });
    loading.present();
  }

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
//# sourceMappingURL=scheduleBackup.js.map