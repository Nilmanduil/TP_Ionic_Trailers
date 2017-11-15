import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TrailerAPI} from "../../services/TrailerAPI";
import {TrailerPage} from "../trailer/trailer";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies: Array<Object> = [];

  constructor(public navCtrl: NavController, private api: TrailerAPI) {
      api.getTrailers().subscribe(
        (trailers) => {
          this.movies = trailers;
        }
      );
  }

  goToDetails(trailer: Object): void {
    this.navCtrl.push(TrailerPage, trailer);
  }

}
