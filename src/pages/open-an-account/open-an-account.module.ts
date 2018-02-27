import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenAnAccountPage } from './open-an-account';

@NgModule({
  declarations: [
    OpenAnAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenAnAccountPage),
  ],
})
export class OpenAnAccountPageModule {}
