import { UtenteDto } from "./utente.model";

export interface ResponseListaUtentiDTO {
    listaDipendenti: UtenteDto[];
    statusCode: number;
    descrizioneEsito: string;
  }
