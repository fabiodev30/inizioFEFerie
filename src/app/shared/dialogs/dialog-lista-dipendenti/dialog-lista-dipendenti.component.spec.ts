import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogListaDipendentiComponent } from './dialog-lista-dipendenti.component';

describe('DialogListaDipendentiComponent', () => {
  let component: DialogListaDipendentiComponent;
  let fixture: ComponentFixture<DialogListaDipendentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogListaDipendentiComponent]
    });
    fixture = TestBed.createComponent(DialogListaDipendentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
