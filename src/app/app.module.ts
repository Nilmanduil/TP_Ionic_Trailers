import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TrailerPage} from "../pages/trailer/trailer";
import {LoginPage} from "../pages/login/login";
import {SettingsPage} from "../pages/settings/settings";
import {FavoritesPage} from "../pages/favorites/favorites";
import {TrailerAPI} from "../services/TrailerAPI";
import {UserService} from "../services/UserService";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrailerPage,
    LoginPage,
    FavoritesPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrailerPage,
    LoginPage,
    FavoritesPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TrailerAPI,
    UserService
  ]
})
export class AppModule {}
