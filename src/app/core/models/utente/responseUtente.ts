import { UtenteDto } from "./utente.model";

export interface ResponseUtenteDTO {
    utenteDTO: UtenteDto;
    statusCode: number;
    descrizioneEsito: string;
  }
