import { Component, ViewChild } from '@angular/core';

import { AlertController, App, List, ModalController, NavController, ToastController, LoadingController, /*Refresher */} from 'ionic-angular';
/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';

import { UserData } from '../../providers/user-data';
import { Devices } from '../../providers/devices';//data


@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
    // the list is a child of the schedule page
    // @ViewChild('scheduleList') gets a reference to the list
    // with the variable #scheduleList, `read: List` tells it to return
    // the List and not a reference to the element
    @ViewChild('scheduleList', {read: List}) scheduleList: List;

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
        public devices: Devices,
    ) {
    }

    disarm() {
        this.devices.query("disarm");
        // console.log(this.devices.query());
        // console.log(this.devices.securitySystem.getSecuritySystemStatus());
    }

    arm() {
        this.devices.query("arm");
        // console.log(this.devices.query());
        // console.log(this.devices.securitySystem.getSecuritySystemStatus());
    }

    openGarageDoors() {
        this.devices.garageDoors("open");
    }

    closeGarageDoors() {
        this.devices.garageDoors("close");
    }
}
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