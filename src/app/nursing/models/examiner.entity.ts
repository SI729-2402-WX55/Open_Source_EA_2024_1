/**
 * Examiner Entity
 * @class Examiner
 * @description
 * This class is used to create an Examiner entity
 * @property id: number - The examiner's id
 * @property firstName: string - The examiner's first name
 * @property lastName: string - The examiner's last name
 * @property nationalProviderIdentifier: string - The examiner's national provider identifier
 * @author Johan Principe Godoy
 * @version 1.0
 */
export class Examiner {
  id: number;
  firstName: string;
  lastName: string;
  nationalProviderIdentifier: string;

  constructor(examiner: {
    id?: number,
    firstName?: string,
    lastName?: string,
    nationalProviderIdentifier?: string
  }) {
    this.id = examiner.id || 0;
    this.firstName = examiner.firstName || '';
    this.lastName = examiner.lastName || '';
    this.nationalProviderIdentifier = examiner.nationalProviderIdentifier || '';
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get npi(): string {
    return this.nationalProviderIdentifier;
  }
}
