import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';
import { JwtResponse } from 'src/app/core/models/autenticazione/jwt_response.model';
import { AutenticazioneService } from 'src/app/core/service/autenticazione.service';
import { MessageService } from 'src/app/core/service/message.service';
import { DialogRecoverPasswordComponent } from 'src/app/shared/dialogs/dialog-recover-password/dialog-recover-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: '',
  };
  constructor(
    private autenticazioneService: AutenticazioneService,
    private messageService: MessageService,
    private router:Router,
    private dialog:MatDialog
  ) {}

  ngOnInit(): void {
    if (this.autenticazioneService.verificaCredenziali()) {
      this.router.navigateByUrl('/homepage');
    }
  }
  onSubmit(form: NgForm) {
    const observer: Observer<JwtResponse> = {
      next: (response: JwtResponse) => {
        console.log(response);
        // write the token and username to localStorage
        localStorage.setItem('token', response.jwtResponse.jwttoken);
        localStorage.setItem('username', response.jwtResponse.username);
        localStorage.setItem('ruolo', response.jwtResponse.descrizioneRuolo);
        // message to the user
        this.messageService.openSnackBar(
          'Login effettuato con successo',
          'Chiudi'
        );
        this.router.navigateByUrl('/homepage');
        form.reset();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Completed');
      },
    };
    this.autenticazioneService
      .login(this.user.username, this.user.password)
      .subscribe(observer);
  }

  openDialogRecoverPassword() {
    const dialogRef = this.dialog.open(DialogRecoverPasswordComponent, {
      width: '500px',
      height: '300px',
    })
    dialogRef.afterClosed().subscribe((_) => {
      this.autenticazioneService.logout();
      this.router.navigate(['/login']);
    }
    );
  }
}
