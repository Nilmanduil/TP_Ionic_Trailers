import {Component, ViewChild} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {SettingsPage} from "../pages/settings/settings";
import {TrailerPage} from "../pages/trailer/trailer";
import {LoginPage} from "../pages/login/login";
import {FavoritesPage} from "../pages/favorites/favorites";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild('mainMenu') nav: NavController

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToFavorites(): void {
    this.nav.push(FavoritesPage);
  }

  goToLogin(): void {
    this.nav.push(LoginPage);
  }

  goToSettings(): void {
    this.nav.push(SettingsPage);
  }
}

