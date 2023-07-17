import { Component, OnInit } from '@angular/core';
import { AutenticazioneService } from 'src/app/core/service/autenticazione.service';

@Component({
  selector: 'app-homepage-component',
  templateUrl: './homepage-component.component.html',
  styleUrls: ['./homepage-component.component.scss']
})
export class HomepageComponentComponent implements OnInit {

  username:string = '';
  token:string = '';

  constructor(private autenticazioneService:AutenticazioneService) { }

  ngOnInit(): void {
    // recupero le credenziali
    const credenziali = this.autenticazioneService.recuperaCredentiali();
    // se le credenziali sono presenti
    if (credenziali.token && credenziali.username) {
      // le assegno alle variabili
      this.token = credenziali.token;
      this.username = credenziali.username;
    }
  }

}
