import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelToolsPage } from './travel-tools';

@NgModule({
  declarations: [
    TravelToolsPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelToolsPage),
  ],
})
export class TravelToolsPageModule {}
