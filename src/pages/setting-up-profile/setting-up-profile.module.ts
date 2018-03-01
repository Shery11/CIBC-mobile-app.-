import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingUpProfilePage } from './setting-up-profile';

@NgModule({
  declarations: [
    SettingUpProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SettingUpProfilePage),
  ],
})
export class SettingUpProfilePageModule {}
