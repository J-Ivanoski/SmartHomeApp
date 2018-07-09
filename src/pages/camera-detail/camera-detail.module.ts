import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraDetailPage } from './camera-detail';

@NgModule({
  declarations: [
    CameraDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraDetailPage),
  ],
})
export class CameraDetailPageModule {}
