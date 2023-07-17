import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_AUTENTICAZIONE } from '../constants/urls';
import { JwtResponse } from '../models/jwt_response.model';

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
}