import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegistrationPage } from '../pages/registration/registration';
import { ConfirmAccountPage } from '../pages/registration/confirmAccount/confirmAccount';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TeamRegistrationPage } from '../pages/teamRegistration/register';
import { GallaryPage } from '../pages/gallary/gallary';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegistrationPage,
    ConfirmAccountPage,
    DashboardPage,
    TeamRegistrationPage,
    GallaryPage
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
    RegistrationPage,
    ConfirmAccountPage,
    DashboardPage,
    TeamRegistrationPage,
    GallaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
