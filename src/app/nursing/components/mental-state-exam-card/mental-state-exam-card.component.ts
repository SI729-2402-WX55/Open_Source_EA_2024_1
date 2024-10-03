import {ChangeDetectionStrategy, Component, inject, Input, OnInit} from '@angular/core';
import {MentalStateExam} from '../../models/mental-state-exam.entity';
import {MatCardModule} from '@angular/material/card';
import {PatientService} from '../../services/patient.service';
import {Patient} from '../../models/patient.entity';
import {Examiner} from '../../models/examiner.entity';
import {ExaminerService} from '../../services/examiner.service';
import {NgOptimizedImage} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';


@Component({
  selector: 'app-mental-state-exam-card',
  standalone: true,
  imports: [MatCardModule, NgOptimizedImage, TranslateModule],
  templateUrl: './mental-state-exam-card.component.html',
  styleUrl: './mental-state-exam-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MentalStateExamCardComponent implements OnInit {
  @Input() mentalStateExam!: MentalStateExam;
  protected patient!: Patient;
  private patientService: PatientService = inject(PatientService);
  protected examiner!: Examiner;
  private examinerService: ExaminerService = inject(ExaminerService);

  ngOnInit(): void {
    this.getPatient();
    this.getExaminer();
    this.calculateTotalScore();
  }

  getPatient() {
    this.patientService.getById(this.mentalStateExam.patientId).subscribe((data) => {
      this.patient = new Patient({
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        photoUrl: data.photoUrl,
        birthDate: data.birthDate
      })
    });
  }

  getExaminer() {
    this.examinerService.getById(this.mentalStateExam.examinerId).subscribe((data) => {
      this.examiner = new Examiner({
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        nationalProviderIdentifier: data.nationalProviderIdentifier
      });
    });
  }

  calculateTotalScore() {
    this.mentalStateExam.totalScore = this.mentalStateExam.orientationScore +
      this.mentalStateExam.registrationScore +
      this.mentalStateExam.attentionAndCalculationScore +
      this.mentalStateExam.recallScore +
      this.mentalStateExam.languageScore;
  }

  onImageError(event: Event) {
    const element = event.target as HTMLImageElement;
    element.src = 'https://randomuser.me/api/portraits/med/men/75.jpg'; // URL de respaldo
  }


}
