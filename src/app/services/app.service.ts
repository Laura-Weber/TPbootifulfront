import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';
import {defaultIfEmpty, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly _backendURL: any;

  constructor(private _http: HttpClient) {

    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
  }

  /**
   * Return the value of the int to add on
   */
  get(): Observable<number> {
    console.log('bbbbbb');
    return this._http.get<number>(this._backendURL.current)
      .pipe(filter(_ => !!_), defaultIfEmpty(0));
  }

  addNum(num: number): Observable<number> {
    return this._http.get<number>(this._backendURL.addNum.replace(':num', num));
  }

}
