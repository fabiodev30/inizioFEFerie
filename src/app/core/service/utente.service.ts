import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http:HttpClient) { }

  // metodo che recupera i dati dell'utente

  recuperaDatiUtente(){
    return this.http.get('http://localhost:8080/utente/recuperaDatiUtente');
  }
}
