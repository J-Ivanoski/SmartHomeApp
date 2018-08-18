import { Injectable } from '@angular/core';

import { Device, categories, SecuritySystem } from '../models/device';

@Injectable()
export class Devices {

  securitySystem: SecuritySystem = new SecuritySystem();
  items: Device[] = [];

  defaultItem: any = {
    "DeviceName": "outdoor_light",
    //"profilePic": "assets/img/speakers/bear.jpg", //namesto sliki mozeme ikoni za sekoja kategorija ili tip na senzor
    "about": "a light at the tree house",
    "status": "false",
    "category": categories.SecurityDevices.toString(),

  };


  constructor() {

    let items = [
      {
        "DeviceName": "outdoor_light",
        //"profilePic": "assets/img/speakers/bear.jpg",
        "about": "a light at the tree house",
        "status": "true",
        "category": categories.OtherDevices.toString()
      },
      {
        "DeviceName": "Home Alarm",
        //"profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Alarm sensors in the house",
        "status": "true",
        "category": categories.SecurityDevices.toString()
      },
      {
        "DeviceName": "Outdoor Alarm",
        //"profilePic": "assets/img/speakers/duck.jpg",
        "about": "Alarm sensor at front door",
        "status": "true",
        "category": categories.SecurityDevices.toString()
      },
      {
        "DeviceName": "Living Room Camera",
        "about": "A camera to monitor the living room.",
        "status": "false",
        "category": categories.CamerasDevices.toString(),
        "index": "1"

      },
      {
        "DeviceName": "Hallway Camera",
        //"profilePic": "assets/img/speakers/elephant.jpg",
        "about": "A camera to monitor the hallway.",
        "status": "false",
        "category": categories.CamerasDevices.toString(),
        "index": "2"

      },
      {
        "DeviceName": "Main Air Conditioner",
        //"profilePic": "assets/img/speakers/mouse.jpg",
        "about": "The main Air Conditioner.",
        "status": "true",
        "category": categories.ThermostatsDevices.toString(),
        "index" : 20

      },
      {
        "DeviceName": "Garage Conditioner",
        //"profilePic": "assets/img/speakers/mouse.jpg",
        "about": "The Garage Conditioner.",
        "status": "false",
        "category": categories.ThermostatsDevices.toString(),
        "index" : 25

      },
      {
        "DeviceName": "Living Room Lights",
        //"profilePic": "assets/img/speakers/puppy.jpg",
        "about": "The lights in the Living Room.",
        "status": "true",
        "category": categories.OtherDevices.toString()

      }
    ];

    for (let item of items) {
      this.items.push(new Device(item));
    }
  }

  public query(securityStatus?: string) {
    if (!securityStatus) {
      return this.items;
    }else if(securityStatus.match("disarm")){//disarming security sytem devices
      this.items.forEach(item => {
        if(item.category.match("Security Devices")){
          item.status = "false";
        }
      });
      this.securitySystem.DisarmTheSecuritySystem(false); //set status to false
      return this.items;
    }
      else if(securityStatus.match("arm")){//turning on the security system devices
        this.items.forEach(item => {
          if(item.category.match("Security Devices")){
            item.status = "true";
          }
        });
        this.securitySystem.ArmTheSecuritySystem(true);
        return this.items;
      }
      else{
        //error handling
        return null;
      }
    }

    public garageDoors(garageDoors?: string){
      if(!garageDoors){
        return this.securitySystem.getGarageDoorsStatus();
      }else if(garageDoors.match("open")){
        //change status for that category
        // this.items.forEach(item => {
        //   if(item.category == 1){
        //     item.status = "false";
        //   }
        // });
        this.securitySystem.OpenCloseGarageDoors(true);
        return this.securitySystem.getGarageDoorsStatusHumanReadable();
      }
      else if(garageDoors.match("close")){
         //change status for that category
        // this.items.forEach(item => {
        //   if(item.category == 1){
        //     item.status = "false";
        //   }
        // });
        this.securitySystem.OpenCloseGarageDoors(false);
        return this.securitySystem.getGarageDoorsStatusHumanReadable();
      }
      else{
        //error handling
        return null;
      }
    }

  add(item: Device) {
    this.items.push(item);
  }

  delete(item: Device) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
