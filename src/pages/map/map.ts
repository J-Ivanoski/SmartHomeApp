import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';


import { Platform, NavController } from 'ionic-angular';
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

  constructor(public platform: Platform, public items: Devices, public modalCtrl: ModalController,public navCtrl: NavController) {
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
      // console.log(this.cameraItems);
  }

  /** The view loaded, let's query our items for the list **/
  ionViewDidEnter() {
  // Will be executed every time the user selects this tab
    this.currentItems = this.items.query();
    this.cameraItems = this.createLists("Camera Devices");
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

  /**
   * Navigate to the detail page for this item.
   */
  openItem(cameraItem: Device) {
    this.navCtrl.push('CameraDetailPage', {
      cameraItem: cameraItem
    });
  }

  randomized(){
    let rand = Math.floor((Math.random() * 3) + 1);
    console.log(rand);
    return rand;
  }
}
