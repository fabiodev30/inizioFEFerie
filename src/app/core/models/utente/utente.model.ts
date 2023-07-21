export interface UtenteDto {
    idUtente: number;
    nome: string;
    cognome: string;
    codiceFiscale: string;
    dataNascita: Date;
    genere: string;
    email: string;
    password: string;
    idResponsabile: number;
    fkRuolo: number;
    fkGruppo: number;
}



