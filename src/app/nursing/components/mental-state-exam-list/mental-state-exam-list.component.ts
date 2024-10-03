import {Component, Input, OnInit} from '@angular/core';
import {MentalStateExam} from '../../models/mental-state-exam.entity';
import {MatNavList} from '@angular/material/list';
import {MentalStateExamCardComponent} from '../mental-state-exam-card/mental-state-exam-card.component';

@Component({
  selector: 'app-mental-state-exam-list',
  standalone: true,
  imports: [
    MatNavList,
    MentalStateExamCardComponent
  ],
  templateUrl: './mental-state-exam-list.component.html',
  styleUrl: './mental-state-exam-list.component.css'
})
export class MentalStateExamListComponent {
  @Input() mentalStateExams: Array<MentalStateExam> = [];

}
