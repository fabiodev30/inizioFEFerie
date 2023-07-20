import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../dialog-piano-ferie/dialog-piano-ferie.component';
import { PianoferieService } from 'src/app/core/service/pianoferie.service';
import { PianoFerieDTO } from 'src/app/core/models/pianoFerie/PianoFerieDTO';
import { MessageService } from 'src/app/core/service/message.service';
import { PianoFerieUpdate } from 'src/app/core/models/pianoFerie/PianoFerieUpdate';

export interface DettaglioPianoFerieDialogData {
  id: number;
  operation: string;
}

@Component({
  selector: 'app-dettaglio-piano-ferie',
  templateUrl: './dettaglio-piano-ferie.component.html',
  styleUrls: ['./dettaglio-piano-ferie.component.scss'],
})
export class DettaglioPianoFerieComponent implements OnInit {
  isModifica: boolean = false;
  pianoferie!: PianoFerieDTO;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DettaglioPianoFerieDialogData,
    private pianboferieSevice: PianoferieService,
    private messageService: MessageService,
    private dialogRef: MatDialogRef<DettaglioPianoFerieComponent>
  ) {}

  ngOnInit(): void {
    this.checkDati();
    if (this.data.operation == 'M') {
      this.isModifica = true;
    }
    this.getPianoferieById(this.data.id);
  }

  checkDati() {
    if (
      this.data.operation == '' &&
      this.data.operation == null &&
      this.data.id == null &&
      this.data.id == 0
    ) {
      return;
    }
  }

  getPianoferieById(id: number) {
    this.pianboferieSevice.getOnePianoFerie(id).subscribe((response) => {
      this.pianoferie = response.pianoFerieDTO;
    });
  }

  onSubmit() {
    // se non è presente la data di partenza o di rientro o la descrizione non faccio nulla
    this.pianboferieSevice
      .updatePianoFerie(this.data.id, this.pianoferie)
      .subscribe((response:PianoFerieUpdate) => {
        console.log(response);
        if (response.statusCode != 200) {
          this.messageService.openSnackBar(response.descrizioneEsito, "X");
          return;
        }
        this.messageService.openSnackBar('Piano ferie modificato con successo', 'X');
        this.dialogRef.close();
      },
      (error) => {
        this.messageService.openSnackBar('Errore durante la modifica del piano ferie', error.error.message);
      });
  }
}
