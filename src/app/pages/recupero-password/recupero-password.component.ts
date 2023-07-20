import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { AutenticazioneService } from 'src/app/core/service/autenticazione.service';
import { MessageService } from 'src/app/core/service/message.service';

@Component({
  selector: 'app-recupero-password',
  templateUrl: './recupero-password.component.html',
  styleUrls: ['./recupero-password.component.scss']
})
export class RecuperoPasswordComponent implements OnInit {
  username: string = '';
  password: string = '';
  confermaPassword: string = '';
  constructor(private route:ActivatedRoute,private router:Router,private autenticazioneService:AutenticazioneService,private messageService:MessageService) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      // se non è presente il parametro username, allora viene reindirizzato alla pagina di login
      if(this.username == null || this.username == undefined || this.username == '') {
        this.router.navigate(['/login']);
      }
    });
  }

  onSubmit() {
    this.autenticazioneService.creaNuovaPassword(this.username, this.password).subscribe(
      (_) => {
        this.messageService.openSnackBar('Password cambiata con successo', 'X');
        this.router.navigate(['/login']);
      }
    );
  }
  
  checkPassword() {
    // torna true se la due password sono differenti o se sono vuote o se sono nulle
    return this.password != this.confermaPassword || this.password == '' || this.confermaPassword == '' || this.password == null || this.confermaPassword == null ;
  }
}
