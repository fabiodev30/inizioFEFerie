import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PianoFerieDTO } from '../models/pianoFerie/PianoFerieDTO';
import { API_PIANO_FERIE } from '../constants/urls';
import { PianoFerieListResponse } from '../models/pianoFerie/PianoFerieListResponse';
import { PianoFerieResponse } from '../models/pianoFerie/PianoFerieResponse';
import { PianoFerieUpdate } from '../models/pianoFerie/PianoFerieUpdate';

@Injectable({
  providedIn: 'root',
})
export class PianoferieService {
  constructor(private http: HttpClient) {}

  // postPianoferie
  createPianoFerie(pianoFerie: PianoFerieDTO) {
    return this.http.post<PianoFerieDTO>(API_PIANO_FERIE+"/insertPianoFerie/", pianoFerie);
  }

  // getAllPianoFerie
  getAllPianoFerie() {
    return this.http.get<PianoFerieListResponse>(API_PIANO_FERIE+"/getListPianoFerie");
  }

  // deletePianoferie
  deletePianoferie(id: number){
    return this.http.delete(API_PIANO_FERIE+"/deletePianoFerie/"+id);
  }

  // getOnePianoFerie
  getOnePianoFerie(id: number){
    return this.http.get<PianoFerieResponse>(API_PIANO_FERIE+"/getPianoFerie/"+id);
  }

  // updatePianoFerie
  updatePianoFerie(idPianoferie:number,pianoFerie: PianoFerieDTO){
    return this.http.put<PianoFerieUpdate>(API_PIANO_FERIE+"/updatePianoFerie"+"/"+idPianoferie, pianoFerie);
  }
}
