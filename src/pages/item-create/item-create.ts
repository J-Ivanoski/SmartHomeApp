import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

import { categories, categoriesWithIcons } from '../../models/device';

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  Categories : categoriesWithIcons[] = [];


  form: FormGroup;


  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder){//, public camera: Camera) {
    let CategoryList = [
      {"category":categories.SecurityDevices.toString(),"icon":"assets/img/icons/lock.svg"},
      {"category":categories.ThermostatsDevices.toString(),"icon":"assets/img/icons/therm.svg"},
      {"category":categories.CamerasDevices.toString(),"icon":"assets/img/icons/videocam.svg"},
      {"category":categories.OtherDevices.toString(),"icon":"assets/img/icons/git-commit.svg"}
    ];

    for (let category of CategoryList) {
      this.Categories.push(category);
    }

    //  console.log(this.Categories);

    this.form = formBuilder.group({
      //profilePic: [''],
      DeviceName: ['', Validators.required],
      about: ['', Validators.required],
      status: false,
      category: ['', Validators.required],
      index: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe(() => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {

  }

  // getPicture() {
  //   if (Camera['installed']()) {
  //     this.camera.getPicture({
  //       destinationType: this.camera.DestinationType.DATA_URL,
  //       targetWidth: 96,
  //       targetHeight: 96
  //     }).then((data) => {
  //       this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
  //     }, (err) => {
  //       alert('Unable to take photo');
  //     })
  //   } else {
  //     this.fileInput.nativeElement.click();
  //   }
  // }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }
}
