import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRecoverPasswordComponent } from './dialog-recover-password.component';

describe('DialogRecoverPasswordComponent', () => {
  let component: DialogRecoverPasswordComponent;
  let fixture: ComponentFixture<DialogRecoverPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogRecoverPasswordComponent]
    });
    fixture = TestBed.createComponent(DialogRecoverPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
