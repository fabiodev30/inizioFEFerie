import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPianoFerieComponent } from './dialog-piano-ferie.component';

describe('DialogPianoFerieComponent', () => {
  let component: DialogPianoFerieComponent;
  let fixture: ComponentFixture<DialogPianoFerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogPianoFerieComponent]
    });
    fixture = TestBed.createComponent(DialogPianoFerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
