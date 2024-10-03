import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {MentalStateExam} from '../models/mental-state-exam.entity';

@Injectable({
  providedIn: 'root'
})
export class MentalStateExamService extends BaseService<MentalStateExam>{

  constructor() {
    super();
    this.resourceEndpoint = '/mental-state-exams';
  }
}
