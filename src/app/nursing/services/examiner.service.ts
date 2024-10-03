import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Examiner} from '../models/examiner.entity';

@Injectable({
  providedIn: 'root'
})
export class ExaminerService extends BaseService<Examiner>{

  constructor() {
    super();
    this.resourceEndpoint = '/examiners';
  }
}
