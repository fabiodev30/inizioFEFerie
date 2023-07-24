import { GruppoDTO } from "../gruppo/GruppoDTO";
import { RuoloDTO } from "../ruolo/ruoloDTO";

export interface UtenteDto {
    idUtente: number;
    nome: string;
    cognome: string;
    codiceFiscale: string;
    dataNascita: Date;
    genere: string;
    email: string;
    password: string;
    responsabile: UtenteDto;
    ruolo: RuoloDTO;
    gruppo: GruppoDTO;
}



