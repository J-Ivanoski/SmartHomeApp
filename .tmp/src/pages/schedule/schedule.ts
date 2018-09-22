import { Component, ViewChild } from '@angular/core';

import { AlertController, App, List, ModalController, NavController, ToastController, LoadingController, /*Refresher */} from 'ionic-angular';
/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';

import { UserData } from '../../providers/user-data';
import { Devices } from '../../providers/devices';//data
import { Device, categories } from '../../models/device';



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
    currentItems: Device[];
    securityItems: Device[];
    SecurityDevices: Device[];
    Categories : string[] = [];

    constructor(
        public alertCtrl: AlertController,
        public app: App,
        public loadingCtrl: LoadingController,
        public modalCtrl: ModalController,
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public user: UserData,
        public devices: Devices) {
            this.currentItems = this.devices.query();
            console.log(this.currentItems);
            let CategoryList = [
              {"category":categories.SecurityDevices.toString()},
              {"category":categories.ThermostatsDevices.toString()},
              {"category":categories.CamerasDevices.toString()},
              {"category":categories.OtherDevices.toString()}
            ];

        for (let category of CategoryList) {
          this.Categories.push(category.category);
          //console.log(category);
        }

        this.securityItems = this.createLists("Security Devices");

        }

    ionViewDidEnter(){
      this.currentItems = this.devices.query();
      this.securityItems = this.createLists("Security Devices");
      let checkedDeviceStatus = this.checkDeviceStatus(this.securityItems);
      // console.log("status:" + checkedDeviceStatus);
      if(checkedDeviceStatus == 1){
        this.arm();
      }else if(checkedDeviceStatus == 0){
        this.disarm();
      }
      
    }

    createLists(category: String){
      let categoryArray: Device[] = [];
      for(let item of this.currentItems){
          if (item.category == category){
            categoryArray.push(item);
          }
      }
      // console.log(categoryArray);
      return categoryArray;
  }

  checkDeviceStatus(Items:any){
    
    let counterTrue = 0;
    let counterFalse = 0;
    // console.log(counter);
    for (let item of Items){
      if(item.status == "true"){
        
        counterTrue = counterTrue + 1;
        
      }else {
        counterFalse = counterFalse + 1;
  
      }
    }
    // console.log("counterTrue" + counterTrue); 
    // console.log("counterFalse:" + counterFalse);
    if(counterTrue == Items.length){
      return 1;
    }else if(counterFalse == Items.length){
      return 0;
    }else{
      return -1;
    }
  }


    disarm() {
        this.devices.query("disarm");
        //  console.log(this.devices.query());
        //  console.log(this.devices.securitySystem.getSecuritySystemStatus();
    }

    arm() {
        this.devices.query("arm");
        //  console.log(this.devices.query());
        //  console.log(this.devices.securitySystem.getSecuritySystemStatus());
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