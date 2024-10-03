/**
 * Patient entity
 * @class Patient
 * @description
 * This class is used to create a Patient entity
 * @property id: number - The patient's id
 * @property firstName: string - The patient's first name
 * @property lastName: string - The patient's last name
 * @property photoUrl: string - The patient's photo url
 * @property birthDate: string - The patient's birthDate
 * @author Johan Principe Godoy
 * @version 1.0
 */
export class Patient {
  id: number;
  firstName: string;
  lastName: string;
  photoUrl: string;
  birthDate: string;

  constructor(patient: {
    id?: number,
    firstName?: string,
    lastName?: string,
    photoUrl?: string,
    birthDate?: string
  }) {
    this.id = patient.id || 0;
    this.firstName = patient.firstName || '';
    this.lastName = patient.lastName || '';
    this.photoUrl = patient.photoUrl || '';
    this.birthDate = patient.birthDate || '';
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
