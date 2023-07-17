import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observer } from 'rxjs';
import { JwtResponse } from 'src/app/core/models/jwt_response.model';
import { AutenticazioneService } from 'src/app/core/service/autenticazione.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user={
    username:'',
    password:''
  }
  constructor(private autenticazioneService:AutenticazioneService) { }

  onSubmit(form:NgForm) {
    const observer: Observer<JwtResponse> = {
      next: (response) => {
        console.log(response);
        form.reset();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Completato');
      }
    };
    this.autenticazioneService.login(this.user.username, this.user.password).subscribe(observer);
  }
}
