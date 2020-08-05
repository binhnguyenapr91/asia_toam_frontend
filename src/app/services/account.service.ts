import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const API_URL = 'http://localhost:8080/api/test/';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getRenterDashBoard(): Observable<any> {
    return this.http.get(API_URL + 'renter', { responseType: 'text' });
  }

  getHostDashBoard(): Observable<any> {
    return this.http.get(API_URL + 'host', { responseType: 'text' });
  }

  getAdminDashBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
