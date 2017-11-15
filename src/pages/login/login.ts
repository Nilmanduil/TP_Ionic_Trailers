import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserService} from "../../services/UserService";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

const DEFAULT_PASSWORD = '1234';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: string = '';
  loginError: string = '';
  password: string = '';
  passwordError: string = '';
  remember: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin(): void {
    let result = this.userService.connect(this.login, this.password)
    if(result === true) {
      this.navCtrl.pop();
    } else {
      console.log(result);
    }
  }

  clickSubmit(): void {
    this.submitLogin()
  }
}
