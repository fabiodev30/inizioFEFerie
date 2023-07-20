import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_AUTENTICAZIONE, API_TOKEN } from '../constants/urls';
import { JwtResponse } from '../models/autenticazione/jwt_response.model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AutenticazioneService {

  constructor(private http:HttpClient) { }

  login(username:string, password:string) {
    return this.http.post<JwtResponse>(API_AUTENTICAZIONE, {username, password});
  }

  recuperaCredentiali() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return {token, username};
  }

  // verifico che il token sia presente e non sia scaduto, se è scaduto lo rimuovo e 
  verificaCredenziali(): boolean {
    // se il token e l'username sono diversi da stringa vuota e da null 
    if (localStorage.getItem('token') && localStorage.getItem('token') !== 'null' && localStorage.getItem('username') && localStorage.getItem('username') !== 'null') {
      return true;
    }
    return false;
}

  

  isTokenExpired(token:string): Observable<boolean> {
    const params = new HttpParams().set('token', token);
    return this.http.get<boolean>(API_TOKEN, { params });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

}