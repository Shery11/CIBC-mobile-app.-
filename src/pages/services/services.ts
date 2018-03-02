import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }

  openbox(){
    let alert = this.alertCtrl.create({
      title: 'You are about to exit CIBC Mobile Banking',
      message: 'Do you wish to continue to this page using your mobile web browser',
      buttons: [
        {
          text: 'Go Back',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Continue',
          handler: () => {
            console.log('Continue');
          }
        }
      ]
    });
    alert.present();
  }

}
