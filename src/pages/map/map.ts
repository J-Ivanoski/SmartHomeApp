import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';


import { Platform } from 'ionic-angular';
import { Device, categories } from '../../models/device';
import { Devices } from '../../providers/devices';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  currentItems: Device[];
  Categories : string[] = [];
  cameraItems: Device[];

  constructor(public platform: Platform, public items: Devices, public modalCtrl: ModalController) {
      this.currentItems = this.items.query();
      let CategoryList = [
        {"category":categories.SecurityDevices.toString()},
        {"category":categories.ThermostatsDevices.toString()},
        {"category":categories.CamerasDevices.toString()},
        {"category":categories.OtherDevices.toString()}
      ];

      for (let category of CategoryList) {
        this.Categories.push(category.category);
      }
      this.cameraItems = this.createLists("Camera Devices");
      console.log(this.cameraItems);
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

  randomized(){
    let rand = Math.floor((Math.random() * 3) + 1);
    console.log(rand);
    return rand;
  }
}
