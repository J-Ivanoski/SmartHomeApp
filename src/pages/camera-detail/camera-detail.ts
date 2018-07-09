import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Device } from '../../models/device';
import { Devices } from '../../providers/devices';

/**
 * Generated class for the CameraDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera-detail',
  templateUrl: 'camera-detail.html',
})
export class CameraDetailPage {

  cameraItem: Device;

  constructor(public navCtrl: NavController, public navParams: NavParams,public items: Devices) {
    // console.log(this.cameraItem);
    this.cameraItem = navParams.get('cameraItem') || items.defaultItem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraDetailPage');
  }

}
