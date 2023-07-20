import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioPianoFerieComponent } from './dettaglio-piano-ferie.component';

describe('DettaglioPianoFerieComponent', () => {
  let component: DettaglioPianoFerieComponent;
  let fixture: ComponentFixture<DettaglioPianoFerieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglioPianoFerieComponent]
    });
    fixture = TestBed.createComponent(DettaglioPianoFerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
