import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ResponseListaUtentiDTO } from 'src/app/core/models/utente/responseListaUtenti';
import { UtenteDto } from 'src/app/core/models/utente/utente.model';
import { UtenteService } from 'src/app/core/service/utente.service';
import { DialogDettaglioUtenteComponent } from '../dialog-dettaglio-utente/dialog-dettaglio-utente.component';

export interface DialogDataListaDipendentiPROVA {
  email: string;
}

@Component({
  selector: 'app-dialog-lista-dipendenti',
  templateUrl: './dialog-lista-dipendenti.component.html',
  styleUrls: ['./dialog-lista-dipendenti.component.scss'],
})
export class DialogListaDipendentiComponent implements OnInit {
  listaUtenti: UtenteDto[] = [];

  constructor(
    private utenteService: UtenteService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataListaDipendentiPROVA
  ) {}

  ngOnInit(): void {
    this.utenteService
      .recuperaListaDipendenti()
      .subscribe((response: ResponseListaUtentiDTO) => {
        // filtra la lista degli utenti escludendo l'utente loggato
        this.listaUtenti = response.listaDipendenti.filter(
          (utente) => utente.email !== this.data.email
        );
      });
  }

  openDialog(idUtente: number, operazione: string) {
    switch (operazione) {
      case 'D':
        this.dialog.open(DialogDettaglioUtenteComponent, {
          data: {
            idUtente: idUtente,
            tipologiaOperazione: 'D',
          },
        });
        break;
      case 'FU':
        this.dialog.open(DialogDettaglioUtenteComponent, {
          data: {
            idUtente: idUtente,
            tipologiaOperazione: 'FU',
          },
          width: '25%',
        });
        break;
    }
  }
}
