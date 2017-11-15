import {Component, ViewChild} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {SettingsPage} from "../pages/settings/settings";
import {LoginPage} from "../pages/login/login";
import {FavoritesPage} from "../pages/favorites/favorites";
import {UserService} from "../services/UserService";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild('mainMenu') nav: NavController
  isLogged: boolean = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private userService: UserService) {
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

  handleLog(logged: boolean): void {
    this.isLogged = logged;
    console.log(this.isLogged);
    this.nav.pop();
  }
}

