import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  API_DETTAGLIO_UTENTE,
  API_LISTA_DIPENDENTI,
  API_LISTA_UTENTE_FERIE,
} from '../constants/urls';
import { ResponseListaUtentiDTO } from '../models/utente/responseListaUtenti';
import { ResponseUtenteDTO } from '../models/utente/responseUtente';
import { PianoFerieListResponse } from 'src/app/core/models/pianoFerie/PianoFerieListResponse';

@Injectable({
  providedIn: 'root',
})
export class UtenteService {
  constructor(private http: HttpClient) {}

  // metodo che recupera i dati dell'utente

  recuperaDatiUtente() {
    return this.http.get('http://localhost:8080/utente/recuperaDatiUtente');
  }

  recuperaListaDipendenti() {
    return this.http.get<ResponseListaUtentiDTO>(API_LISTA_DIPENDENTI);
  }

  getDipendenteById(idUtente: number) {
    return this.http.get<ResponseUtenteDTO>(API_DETTAGLIO_UTENTE + idUtente);
  }

  getListPianoFerieDipendenti(idUtente: number) {
    return this.http.get<PianoFerieListResponse>(
      API_LISTA_UTENTE_FERIE + idUtente
    );
  }
}
