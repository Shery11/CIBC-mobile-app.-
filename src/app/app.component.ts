import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CibcAppsandSitesPage } from '../pages/cibc-appsand-sites/cibc-appsand-sites';
import { FindUsPage } from '../pages/find-us/find-us';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { RegisterPage } from '../pages/register/register';
import { SigninPage } from '../pages/signin/signin';
import { TravelToolsPage } from '../pages/travel-tools/travel-tools';
import { ProductsPage } from '../pages/products/products';
import { OpenAnAccountPage } from '../pages/open-an-account/open-an-account';
import { InvestmentProfilePage } from '../pages/investment-profile/investment-profile';
import { SimilarProfilePage } from '../pages/similar-profile/similar-profile';
import { NotificationsPage } from '../pages/notifications/notifications';
import { AppAccessPage } from '../pages/app-access/app-access';
import { SettingUpProfilePage } from '../pages/setting-up-profile/setting-up-profile';
import { CibcAppAccessPage } from '../pages/cibc-app-access/cibc-app-access';
import { AbcDivisionGrowthFunPage } from '../pages/abc-division-growth-fun/abc-division-growth-fun';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AbcDivisionGrowthFunPage;

  pages: Array<{title: string, component: any,icon:any}>;
  accounts: Array<{title: string, component: any,icon:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Open An Account', component: OpenAnAccountPage,icon:"add-circle"},
      { title: 'Explore Products', component: ProductsPage,icon:"cart" },
      { title: 'CIBC Apps and Sites', component: CibcAppsandSitesPage,icon:"apps" },
      { title: 'Find Us', component: FindUsPage,icon:"pin" },
      { title: 'Travel Tools', component: TravelToolsPage,icon:"logo-usd" },
      
      
    ];

    this.accounts = [
      { title: 'Sign In', component: SigninPage,icon:"person" },
      { title: 'Register', component: RegisterPage ,icon:""},
      { title: 'Forgot Password', component: ForgotPasswordPage,icon:"" },
     
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
