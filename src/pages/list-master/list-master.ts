import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Device, categories } from '../../models/device';
import { Devices } from '../../providers/devices';
import { ItemCreatePage } from '../../pages/item-create/item-create';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Device[];
  Categories : string[] = [];

  constructor(public navCtrl: NavController, public items: Devices, public modalCtrl: ModalController) {
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

    this.createLists("Other Devices");
    // console.log(this.currentItems);
    console.log(this.Categories);
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
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Device) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
