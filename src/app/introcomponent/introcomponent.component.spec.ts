import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrocomponentComponent } from './introcomponent.component';

describe('IntrocomponentComponent', () => {
  let component: IntrocomponentComponent;
  let fixture: ComponentFixture<IntrocomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntrocomponentComponent]
    });
    fixture = TestBed.createComponent(IntrocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
