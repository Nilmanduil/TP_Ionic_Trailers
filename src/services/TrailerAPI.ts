import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

const API_BASE_URL = 'http://localhost:8080/';
const API_TRAILERS = 'trailers/';

@Injectable()
export class TrailerAPI {

  constructor(private http: HttpClient) {  }

  getTrailers(): Observable<Array<Object>> {
    return this.http.get(`${API_BASE_URL}${API_TRAILERS}`);
  }

}
