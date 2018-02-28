import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimilarProfilePage } from './similar-profile';

@NgModule({
  declarations: [
    SimilarProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SimilarProfilePage),
  ],
})
export class SimilarProfilePageModule {}
