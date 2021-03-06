import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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
import { ServicesPage } from '../pages/services/services';
import { ChartsPage } from '../pages/charts/charts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CibcAppsandSitesPage,
    FindUsPage,
    ForgotPasswordPage,
    RegisterPage,
    SigninPage,
    TravelToolsPage,
    ProductsPage,
    OpenAnAccountPage,
    InvestmentProfilePage,
    SimilarProfilePage,
    NotificationsPage,
    AppAccessPage,
    SettingUpProfilePage,
    CibcAppAccessPage,
    AbcDivisionGrowthFunPage,
    ServicesPage,
    ChartsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CibcAppsandSitesPage,
    FindUsPage,
    ForgotPasswordPage,
    RegisterPage,
    SigninPage,
    TravelToolsPage,
    ProductsPage,
    OpenAnAccountPage,
    InvestmentProfilePage,
    SimilarProfilePage,
    NotificationsPage,
    AppAccessPage,
    SettingUpProfilePage,
    CibcAppAccessPage,
    AbcDivisionGrowthFunPage,
    ServicesPage,
    ChartsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
