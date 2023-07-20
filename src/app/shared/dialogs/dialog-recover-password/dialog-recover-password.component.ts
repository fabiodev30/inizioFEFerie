import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PianoFerieUpdate } from 'src/app/core/models/pianoFerie/PianoFerieUpdate';
import { AutenticazioneService } from 'src/app/core/service/autenticazione.service';
import { MessageService } from 'src/app/core/service/message.service';

@Component({
  selector: 'app-dialog-recover-password',
  templateUrl: './dialog-recover-password.component.html',
  styleUrls: ['./dialog-recover-password.component.scss'],
})
export class DialogRecoverPasswordComponent {
  username: string = '';
  isLoading: boolean = false;
  constructor(
    private autenticazioneService: AutenticazioneService,
    private messageService: MessageService,
    private dialogRef: MatDialogRef<DialogRecoverPasswordComponent>
  ) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    this.autenticazioneService.recoverPassword(this.username).subscribe((_) => {
      this.isLoading = false;
      this.messageService.openSnackBar(
        'Password inviata con successo',
        'X'
      );
      this.dialogRef.close();
    });
  }
}
