import { Injectable } from '@angular/core';

import { Device } from '../models/device';

@Injectable()
export class Devices {
  items: Device[] = [];

  defaultItem: any = {
    "DeviceName": "Burt Bear",
    //"profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  constructor() {
    let items = [
      {
        "DeviceName": "Burt Bear",
        //"profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear.",
      },
      {
        "DeviceName": "Charlie Cheetah",
        //"profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "DeviceName": "Donald Duck",
        //"profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "DeviceName": "Eva Eagle",
        //"profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "DeviceName": "Ellie Elephant",
        //"profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "DeviceName": "Molly Mouse",
        //"profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "DeviceName": "Paul Puppy",
        //"profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      }
    ];

    for (let item of items) {
      this.items.push(new Device(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Device) {
    this.items.push(item);
  }

  delete(item: Device) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
