import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckimagecomponentComponent } from './truckimagecomponent.component';

describe('TruckimagecomponentComponent', () => {
  let component: TruckimagecomponentComponent;
  let fixture: ComponentFixture<TruckimagecomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TruckimagecomponentComponent]
    });
    fixture = TestBed.createComponent(TruckimagecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
