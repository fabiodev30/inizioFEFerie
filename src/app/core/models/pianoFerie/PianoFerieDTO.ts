export interface PianoFerieDTO {
  idPianoFerie?: number;
  dataInizio: Date;
  dataFine: Date;
  descrizione: string;
  oreTotali?: number;
  giorniLavorativiTotali?: number;
}
