import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorReviewsComponent } from './doctor-reviews.component';

describe('DoctorReviewsComponent', () => {
  let component: DoctorReviewsComponent;
  let fixture: ComponentFixture<DoctorReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
