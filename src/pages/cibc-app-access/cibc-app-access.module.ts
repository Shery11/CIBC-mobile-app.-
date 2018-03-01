import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CibcAppAccessPage } from './cibc-app-access';

@NgModule({
  declarations: [
    CibcAppAccessPage,
  ],
  imports: [
    IonicPageModule.forChild(CibcAppAccessPage),
  ],
})
export class CibcAppAccessPageModule {}
