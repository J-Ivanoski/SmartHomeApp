import { Injectable } from '@angular/core';
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export class Device {
  securitySystem = SecuritySystem;
  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      // @ts-ignore
      this[f] = fields[f];
    }
  }

}
/* Model if you are using database - the data structures with all properties ...*/
export class Core_Device{
  DeviceName: string;
  DeviceDescription: string;
  DeviceStatus: boolean;
  DeviceCategory: categories;

  constructor(DeviceName: string, DeviceDescription: string, DeviceStatus: boolean, DeviceCategory: categories){
    this.DeviceName = DeviceName;
    this.DeviceDescription = DeviceDescription;
    this.DeviceStatus = DeviceStatus;
    this.DeviceCategory = DeviceCategory;
  }

}

@Injectable()
export class SecuritySystem{

  SecuritySystemServices: boolean;
  GarageDoors: any;
  
  //default constructor
  constructor(){
    this.SecuritySystemServices = true;
    this.GarageDoors = 'false';
  }

  getSecuritySystemStatus(): boolean{
    return this.SecuritySystemServices;
  }

  getSecuritySystemStatusHumanReadable(): string{
    let securitySystemStatusHumanReadable:string;
    if(this.getSecuritySystemStatus()==false){
      securitySystemStatusHumanReadable = "Disarmed";
    } else{
      securitySystemStatusHumanReadable = "Armed";
    }
    return securitySystemStatusHumanReadable;
  }

  DisarmTheSecuritySystem(SecuritySystemServices: boolean){
    this.SecuritySystemServices = SecuritySystemServices;
  }

  ArmTheSecuritySystem(SecuritySystemServices: boolean){
    this.SecuritySystemServices = SecuritySystemServices;
  }

  getGarageDoorsStatus():boolean{
    return this.GarageDoors;
  }

  setGarageDoorsStatus(doorStatus:any){
    
    this.GarageDoors = doorStatus;
  }

  getGarageDoorsStatusHumanReadable():string{
    let garageDoorsStatus:string;
    if(this.getGarageDoorsStatus()==false){
      garageDoorsStatus = "Closed";
    }else{
      garageDoorsStatus = "Opened";
    }
    return garageDoorsStatus;
  }

  OpenCloseGarageDoors(GarageDoors: boolean){
    this.GarageDoors = GarageDoors;
  }

}

export class categoriesWithIcons {
  category: any;
  icon: any;

  constructor(){

  }
}

export enum categories{
  SecurityDevices = "Security Devices",
  ThermostatsDevices = "Thermostat Devices",
  CamerasDevices = "Camera Devices",
  DoorDevices = "Door Devices",
  OtherDevices = "Other Devices"
}



export interface Device {
  [prop: string]: any;
}
