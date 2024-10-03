import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalStateExamListComponent } from './mental-state-exam-list.component';

describe('MentalStateExamListComponent', () => {
  let component: MentalStateExamListComponent;
  let fixture: ComponentFixture<MentalStateExamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentalStateExamListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentalStateExamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
