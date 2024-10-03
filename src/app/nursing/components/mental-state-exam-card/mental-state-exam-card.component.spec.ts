import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalStateExamCardComponent } from './mental-state-exam-card.component';

describe('MentalStateExamCardComponent', () => {
  let component: MentalStateExamCardComponent;
  let fixture: ComponentFixture<MentalStateExamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalStateExamCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentalStateExamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
