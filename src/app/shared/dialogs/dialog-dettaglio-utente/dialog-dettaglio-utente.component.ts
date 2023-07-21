import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PianoFerieDTO } from 'src/app/core/models/pianoFerie/PianoFerieDTO';
import { UtenteDto } from 'src/app/core/models/utente/utente.model';
import { MessageService } from 'src/app/core/service/message.service';
import { UtenteService } from 'src/app/core/service/utente.service';

export interface DialogDataDettaglioUtente {
  idUtente: number;
  tipologiaOperazione: string;
}

@Component({
  selector: 'app-dialog-dettaglio-utente',
  templateUrl: './dialog-dettaglio-utente.component.html',
  styleUrls: ['./dialog-dettaglio-utente.component.scss'],
})
export class DialogDettaglioUtenteComponent implements OnInit {
  constructor(
    private utenteService: UtenteService,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataDettaglioUtente,
    private router: Router,
    private messageService: MessageService
  ) {}
  utente!: UtenteDto;
  pianiFerieList!: PianoFerieDTO[];

  ngOnInit(): void {
    if (
      this.data.idUtente == null &&
      this.data.idUtente == 0 &&
      this.data.tipologiaOperazione == null &&
      this.data.tipologiaOperazione != ''
    ) {
      this.messageService.openSnackBar('Errore nel caricamento dei dati', 'X');
      this.router.navigate(['/home']);
    }
    if (this.data.tipologiaOperazione == 'D') {
      this.utenteService
        .getDipendenteById(this.data.idUtente)
        .subscribe((response) => {
          this.utente = response.utenteDTO;
        });
    }
    if (this.data.tipologiaOperazione == 'FU') {
      this.utenteService
        .getListPianoFerieDipendenti(this.data.idUtente)
        .subscribe((response) => {
          this.pianiFerieList = response.pianoFerieDTOList;
        });
    }
  }
}
