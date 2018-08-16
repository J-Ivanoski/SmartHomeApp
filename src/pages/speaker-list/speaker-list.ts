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


// TODO remove
export interface ActionSheetButton {
  text?: string;
  role?: string;
  icon?: string;
  cssClass?: string;
  handler?: () => boolean|void;
};

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html'
})
export class SpeakerListPage {
  // TODO: min and max temperature vars instead of hardcoded numbers (15 and 30)
  currentItems: Device[];
  Categories : string[] = [];
  thermostatItems: Device[];
  //currentTemperature: number;
  //desiredTemperature: number;
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
        console.log(category);
      }

      this.thermostatItems = this.createLists("Thermostat Devices");
      console.log(this.thermostatItems);
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
              || (item.index < 15) || (item.index > 30) ){
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
    if (item.index < 30)
      item.index ++;
  }

  decrement(item: any){
    if (item.index > 15)
      item.index --;
  }

//throws a weird error
  randomized(){
    let rand = Math.floor((Math.random() * 15) + 15);
    console.log(rand);
    return rand;
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
