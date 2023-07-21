import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDettaglioUtenteComponent } from './dialog-dettaglio-utente.component';

describe('DialogDettaglioUtenteComponent', () => {
  let component: DialogDettaglioUtenteComponent;
  let fixture: ComponentFixture<DialogDettaglioUtenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDettaglioUtenteComponent]
    });
    fixture = TestBed.createComponent(DialogDettaglioUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
