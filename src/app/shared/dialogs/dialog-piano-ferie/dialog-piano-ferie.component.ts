import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PianoFerieDTO } from 'src/app/core/models/pianoFerie/PianoFerieDTO';
import { PianoFerieResponse } from 'src/app/core/models/pianoFerie/PianoFerieResponse';
import { MessageService } from 'src/app/core/service/message.service';
import { PianoferieService } from 'src/app/core/service/pianoferie.service';

export interface DialogData {
  tipologia: string;
}

@Component({
  selector: 'app-dialog-piano-ferie',
  templateUrl: './dialog-piano-ferie.component.html',
  styleUrls: ['./dialog-piano-ferie.component.scss'],
})
export class DialogPianoFerieComponent implements OnInit {
  dataPartenza!: Date;
  dataRientro!: Date;
  descrizione!: string;
  pianoferie!: PianoFerieDTO[];

  constructor(
    private pianoferieService: PianoferieService,
    private messaggeService: MessageService,
    private dialogRef: MatDialogRef<DialogPianoFerieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}


  ngOnInit(): void {
    if (this.data.tipologia=='G') {
      this.pianoferieService.getAllPianoFerie().subscribe(
        (pianoferie: PianoFerieResponse) => {
          this.pianoferie = pianoferie.pianoFerieDTOList;
          console.log(pianoferie);
        }
      );
    }
  }



  onSubmit(form: NgForm) {
    // se non è presente la data di partenza o di rientro o la descrizione non faccio nulla
    if (!this.dataPartenza || !this.dataRientro || !this.descrizione) {
      return;
    }
    // se la data di partenza è maggiore della data di rientro non faccio nulla
    if (this.dataPartenza > this.dataRientro) {
      console.log(
        'La data di partenza non può essere maggiore della data di rientro'
      );
      return;
    }
    const pianoFerieDto: PianoFerieDTO = {
      dataInizio: this.dataPartenza!,
      dataFine: this.dataRientro!,
      descrizione: this.descrizione,
    };
    this.pianoferieService.createPianoFerie(pianoFerieDto).subscribe(
      (_) => {
        this.messaggeService.openSnackBar(
          'Piano ferie creato con successo',
          'Chiudi'
        );
        console.log('Piano ferie creato con successo');
        // se il piano ferie è stato creato con successo resetto i campi del form
        this.closeDialog();
      },
      (error) => {
        console.log(error);
        this.messaggeService.openSnackBar(
          'Errore nella creazione del piano ferie',
          'Chiudi'
        );
      }
    );
  }

  cambiaDataPartenza(data: MatDatepickerInputEvent<Date>) {
    if (data.value) {
      this.dataPartenza = data.value;
    }
  }
  cambiaDataFine(data: MatDatepickerInputEvent<Date>) {
    if (data.value) {
      this.dataRientro = data.value;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  deletePianoFerie(idPianoFerie: number){
    this.pianoferieService.deletePianoferie(idPianoFerie).subscribe(
      (_) => {
        // togliamo il piano ferie dalla lista
        this.pianoferie = this.pianoferie.filter(
          (pianoferie) => pianoferie.idPianoFerie !== idPianoFerie
        );
        this.messaggeService.openSnackBar(
          'Piano ferie eliminato con successo',
          'Chiudi'
        );
        console.log('Piano ferie eliminato con successo');
      }
    );
  }
}
