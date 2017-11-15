import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TrailerAPI} from "../../services/TrailerAPI";

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



}
