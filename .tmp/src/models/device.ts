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

  GarageDoors: boolean;
  //default constructor
  constructor(){
    this.SecuritySystemServices = true;
    this.GarageDoors = false;
  }

  getSecuritySystemStatus(): boolean{
    return this.SecuritySystemServices;
  }

  getSecuritySystemStatusHummanReadable(): string{
    let securitySystemStatusHummanReadable:string;
    if(this.getSecuritySystemStatus()==false){
      securitySystemStatusHummanReadable = "Disarmed";
    } else{
      securitySystemStatusHummanReadable = "Armed";
    }
    return securitySystemStatusHummanReadable;
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

  getGarageDoorsStatusHummanReadable():string{
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

export enum categories{
  SecurityDevices = 1,
  ThermostatsDevices = 2,
  CamerasDevices = 3,
  OtherDevices = 4
}


export interface Device {
  [prop: string]: any;
}
