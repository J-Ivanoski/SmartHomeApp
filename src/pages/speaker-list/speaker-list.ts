//import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

import {
//  ActionSheet,
//  ActionSheetController,
//  ActionSheetOptions,
//  Config,
  Platform,
  NavController
} from 'ionic-angular';
import { Device, categories } from '../../models/device';
import { Devices } from '../../providers/devices';


@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html'
})
export class SpeakerListPage {
  // TODO: min and max temperature vars instead of hardcoded numbers (15 and 30)
  MIN_TEMP: Number;
  MAX_TEMP: Number;
  TEMPERATURE_FORMAT: any;
  currentItems: Device[];
  Categories : string[] = [];
  thermostatItems: Device[];
  temperatureFormat = [];
  selectedFormat: any;
  devices: Devices;
  constructor(public platform: Platform, public items: Devices,
    public modalCtrl: ModalController,public navCtrl: NavController) {
      this.currentItems = this.items.query();
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

      this.thermostatItems = this.createLists("Thermostat Devices");
      //console.log(this.thermostatItems);
      this.temperatureFormat=[{id: 0, value: "celsius"},{id: 1, value: "fahrenheit"}];
      this.TEMPERATURE_FORMAT = "c";
      this.MIN_TEMP = 10;
      this.MAX_TEMP = 30;
      //console.log(this.temperatureFormat);
    //  this.currentTemperature=randomized();
  }

  /** The view loaded, let's query our items for the list **/
  ionViewDidEnter() {
  // Will be executed every time the user selects this tab
    this.currentItems = this.items.query();
    this.thermostatItems = this.createLists("Thermostat Devices");
  }

  createLists(category: String){
      let categoryArray: Device[] = [];
      for(let item of this.currentItems){
          if (item.category == category){
            if((item.index=="") || (!(item.index)) || !Number(item.index)
              || (item.index < this.MIN_TEMP) || (item.index > this.MAX_TEMP)){
              item.index=Number(24);
            }
            categoryArray.push(item);
          }
      }
      // console.log(categoryArray);
      return categoryArray;
  }

  // TODO: functions for current and desired temperatures. Maybe c/f conversion
  increment(item: any){
    item.index = Number(item.index);
    console.log("MIN_TEMP:" + this.MIN_TEMP +", MAX_TEMP:" + this.MAX_TEMP);
    console.log("item.index:" + item.index);
    if (this.TEMPERATURE_FORMAT == "c"){
      if (item.index < this.MAX_TEMP)
        item.index = Math.floor(item.index + 1);
    }
    if(this.TEMPERATURE_FORMAT == "f"){
      let value = Number(this.convertTemperatureFormat(item.index, "f"));
      if (value < this.MAX_TEMP){
        value = Math.floor(value + 1);
        item.index = this.convertTemperatureFormat(value, "c");
      }
    }
  }

  decrement(item: any){
    item.index = Number(item.index);
    console.log("MIN_TEMP:" + this.MIN_TEMP +", MAX_TEMP:" + this.MAX_TEMP);
    console.log("item.index:" + item.index +
                "temperatureFormat: " + this.TEMPERATURE_FORMAT);
    if (this.TEMPERATURE_FORMAT == "c"){
      if (item.index > this.MIN_TEMP)
        item.index = Math.ceil(item.index - 1);
    }
    if(this.TEMPERATURE_FORMAT == "f"){
      let value = Number(this.convertTemperatureFormat(item.index, "f"));
      if (value > this.MIN_TEMP){
          value = Math.ceil(value - 1);
        item.index = (this.convertTemperatureFormat(value, "c"));
      }
    }
  }

//throws a weird error
  randomized(){
    let rand = Math.floor((Math.random() * 15) + 15);
    String(rand)
    console.log(rand);
    return rand;
  }

/*conversion functions*/
  convertTemperatureFormat(value: any, flag: any){
    Number(value);
    if(flag=="f"){
      return (value * 9 / 5 + 32)
    }
    if(flag=="c"){
      return ((value-32)*5 / 9)
    }
  }

  changeTemperatureFormat(value: any){
    if ((value=="fahrenheit") && (this.TEMPERATURE_FORMAT == "c")){
      this.MIN_TEMP = this.convertTemperatureFormat(this.MIN_TEMP,"f");
      this.MAX_TEMP = this.convertTemperatureFormat(this.MAX_TEMP,"f");
      this.TEMPERATURE_FORMAT = "f";
      console.log("TEMPERATURE_FORMAT:" + this.TEMPERATURE_FORMAT +
                  "MIN_TEMP:" + this.MIN_TEMP +", MAX_TEMP:" + this.MAX_TEMP);
    }
    else if((value=="celsius") && (this.TEMPERATURE_FORMAT == "f")){
      this.MIN_TEMP = this.convertTemperatureFormat(this.MIN_TEMP,"c");
      this.MAX_TEMP = this.convertTemperatureFormat(this.MAX_TEMP,"c");
      this.TEMPERATURE_FORMAT = "c";
      console.log("TEMPERATURE_FORMAT:" + this.TEMPERATURE_FORMAT +
                  "MIN_TEMP:" + this.MIN_TEMP +", MAX_TEMP:" + this.MAX_TEMP);

    }
  }

  getDesiredTemperature(value: any){
    value = (this.TEMPERATURE_FORMAT == "c") ? value : this.convertTemperatureFormat(value, "f");
    console.log("value:" + value);
    return value;
  }
}




/*

  actionSheet: ActionSheet;
  speakers: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public config: Config,
    public inAppBrowser: InAppBrowser
  ) {}




/*
  goToSpeakerTwitter(speaker: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${speaker.twitter}`,
      '_blank'
    );
  }

  openSpeakerShare(speaker: any) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share ' + speaker.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
            if ( (window as any)['cordova'] && (window as any)['cordova'].plugins.clipboard) {
              (window as any)['cordova'].plugins.clipboard.copy(
                'https://twitter.com/' + speaker.twitter
              );
            }
          }
        } as ActionSheetButton,
        {
          text: 'Share via ...'
        } as ActionSheetButton,
        {
          text: 'Cancel',
          role: 'cancel'
        } as ActionSheetButton
      ]
    } as ActionSheetOptions);

    actionSheet.present();
  }

  openContact(speaker: any) {
    let mode = this.config.get('mode');

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact ' + speaker.name,
      buttons: [
        {
          text: `Email ( ${speaker.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + speaker.email);
          }
        } as ActionSheetButton,
        {
          text: `Call ( ${speaker.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + speaker.phone);
          }
        } as ActionSheetButton
      ]
    } as ActionSheetOptions);

    actionSheet.present();
  }

}*/
