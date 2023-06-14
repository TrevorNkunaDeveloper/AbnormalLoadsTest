import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationcomponentComponent } from './registrationcomponent.component';

describe('RegistrationcomponentComponent', () => {
  let component: RegistrationcomponentComponent;
  let fixture: ComponentFixture<RegistrationcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationcomponentComponent]
    });
    fixture = TestBed.createComponent(RegistrationcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
