import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {

  constructor(private http:Http) { }

  //TODO:  need host
  private api = '';
  error:Error;

  submitString(string:String) {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    //TODO: Need endpoint
    let url = `${this.api}/`;

    return this.http
      .post(url, JSON.stringify(string), options)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.error = error);
  }

}
