import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Patient} from '../models/patient.entity';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends BaseService<Patient>{

  constructor() {
    super();
    this.resourceEndpoint = '/patients';
  }
}
