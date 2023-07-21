import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AutenticazioneService } from 'src/app/core/service/autenticazione.service';
import { UtenteService } from 'src/app/core/service/utente.service';
import { checkCredenzialiWithRouter } from 'src/app/core/utils/credenziali/credenziali';
import { DialogListaDipendentiComponent } from 'src/app/shared/dialogs/dialog-lista-dipendenti/dialog-lista-dipendenti.component';
import { DialogPianoFerieComponent } from 'src/app/shared/dialogs/dialog-piano-ferie/dialog-piano-ferie.component';
@Component({
  selector: 'app-homepage-component',
  templateUrl: './homepage-component.component.html',
  styleUrls: ['./homepage-component.component.scss'],
})
export class HomepageComponentComponent implements OnInit {
  username: string = '';
  token: string = '';
  ruolo: string = '';

  constructor(
    private autenticazioneService: AutenticazioneService,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // recupero le credenziali
    const credenziali = this.autenticazioneService.recuperaCredentiali();
    // se le credenziali del nome e dello username sono null o sono strinag vuota allora non faccio nulla
    checkCredenzialiWithRouter(this.router);
    // altrimenti setto le variabili username e token
    this.username = credenziali.username!;
    this.token = credenziali.token!;
    this.ruolo = credenziali.ruolo!;
  }

  openModalDipendente(string: string) {
    switch (string) {
      case 'I':
        this.dialog.open(DialogPianoFerieComponent, {
          data: {
            tipologia: 'I',
          },
          width: '50%',
        });
        break;
      case 'G':
        this.dialog.open(DialogPianoFerieComponent, {
          data: {
            tipologia: 'G',
          },
          width: '80%',
        });
        break;
      default:
        break;
    }
  }

  openModalResponsabile(string: string) {
    switch (string) {
      case 'L':
        this.dialog.open(DialogListaDipendentiComponent, {
          width: '50%',
          data: {
            email:this.username,
          }
        });
        break;
      default:
        break;
    }
  }

}
