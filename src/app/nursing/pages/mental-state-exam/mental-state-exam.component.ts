import {Component, inject, OnInit} from '@angular/core';
import {MentalStateExamListComponent} from '../../components/mental-state-exam-list/mental-state-exam-list.component';
import {MentalStateExam} from '../../models/mental-state-exam.entity';
import {MentalStateExamService} from '../../services/mental-state-exam.service';

@Component({
  selector: 'app-mental-state-exam',
  standalone: true,
  imports: [
    MentalStateExamListComponent
  ],
  templateUrl: './mental-state-exam.component.html',
  styleUrl: './mental-state-exam.component.css'
})
export class MentalStateExamComponent implements OnInit{
  protected mentalStateExams: Array<MentalStateExam> = [];
  private mentalStateExamService: MentalStateExamService = inject(MentalStateExamService);

  ngOnInit(): void {
    this.getMentalStateExams();
  }

  getMentalStateExams() {
    this.mentalStateExamService.getAll().subscribe((response: any) => {
      response.forEach((response: any) => {
        let mentalStateExamData = new MentalStateExam({
          id: response.id,
          patientId: response.patientId,
          examinerId: response.examinerId,
          examDate: response.examDate,
          orientationScore: response.orientationScore,
          registrationScore: response.registrationScore,
          attentionAndCalculationScore: response.attentionAndCalculationScore,
          recallScore: response.recallScore,
          languageScore: response.languageScore,
        });
        this.mentalStateExams.push(mentalStateExamData);
      });
      console.log(this.mentalStateExams);
    });
  }

}
