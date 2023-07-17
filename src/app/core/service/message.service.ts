import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private snackbar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    let configSnackBar: MatSnackBarConfig = new MatSnackBarConfig();
    configSnackBar.duration = 3000;
    configSnackBar.horizontalPosition = 'end';
    configSnackBar.verticalPosition = 'bottom';
    configSnackBar.panelClass = ['my-custom-class'];
    this.snackbar.open(message, action, configSnackBar);
  }
}
