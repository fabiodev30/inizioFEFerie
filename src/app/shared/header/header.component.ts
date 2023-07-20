import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { checkCredenziali, logoutWithRouter } from 'src/app/core/utils/credenziali/credenziali';
import { DialogRecoverPasswordComponent } from '../dialogs/dialog-recover-password/dialog-recover-password.component';
import { MatDialog } from '@angular/material/dialog';
import { AutenticazioneService } from 'src/app/core/service/autenticazione.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router:Router,private dialog:MatDialog,private autenticazioneService:AutenticazioneService) { }
  ngOnInit(): void {
    // devo verificare se le credenziali sono presenti
    // se sono presenti allora mostro il logout
    // altrimenti mostro il login
  }

  checkAccesso() {
    return checkCredenziali();
  }

  logout() {
    logoutWithRouter(this.router);
  }

  login() {
    this.router.navigate(['/login']);
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
