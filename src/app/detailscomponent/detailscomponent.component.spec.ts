import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscomponentComponent } from './detailscomponent.component';

describe('DetailscomponentComponent', () => {
  let component: DetailscomponentComponent;
  let fixture: ComponentFixture<DetailscomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailscomponentComponent]
    });
    fixture = TestBed.createComponent(DetailscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
