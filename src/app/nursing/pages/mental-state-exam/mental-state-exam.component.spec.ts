import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalStateExamComponent } from './mental-state-exam.component';

describe('MentalStateExamComponent', () => {
  let component: MentalStateExamComponent;
  let fixture: ComponentFixture<MentalStateExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalStateExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentalStateExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
