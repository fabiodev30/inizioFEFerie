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
}
