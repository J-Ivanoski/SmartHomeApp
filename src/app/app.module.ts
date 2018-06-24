import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';

import { ListMasterPage } from '../pages/list-master/list-master';
import { ItemCreatePage } from '../pages/item-create/item-create';

import { UserData } from '../providers/user-data';
import { Devices } from '../providers/devices';


@NgModule({
  declarations: [
    ConferenceApp,
    AccountPage,
    LoginPage,
    MapPage,
    SchedulePage,
    SignupPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    ListMasterPage,
    ItemCreatePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: ListMasterPage, name: 'ListMaster', segment: 'list-master' },
        { component: ItemCreatePage, name: 'ItemCreate', segment: 'item-create' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AccountPage,
    LoginPage,
    MapPage,
    SchedulePage,
    SignupPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    ListMasterPage,
    ItemCreatePage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserData,
    InAppBrowser,
    SplashScreen,
    Devices
  ]
})
export class AppModule { }
