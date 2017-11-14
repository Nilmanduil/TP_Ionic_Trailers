import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TrailerPage} from "../trailer/trailer";
import {FavoritesPage} from "../favorites/favorites";
import {LoginPage} from "../login/login";
import {SettingsPage} from "../settings/settings";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
