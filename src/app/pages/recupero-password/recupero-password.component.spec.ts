import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperoPasswordComponent } from './recupero-password.component';

describe('RecuperoPasswordComponent', () => {
  let component: RecuperoPasswordComponent;
  let fixture: ComponentFixture<RecuperoPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperoPasswordComponent]
    });
    fixture = TestBed.createComponent(RecuperoPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
