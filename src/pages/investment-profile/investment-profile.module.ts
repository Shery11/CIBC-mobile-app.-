import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvestmentProfilePage } from './investment-profile';

@NgModule({
  declarations: [
    InvestmentProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(InvestmentProfilePage),
  ],
})
export class InvestmentProfilePageModule {}
