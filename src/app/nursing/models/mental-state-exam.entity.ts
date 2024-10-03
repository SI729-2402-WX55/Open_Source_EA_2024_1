/**
 * Mental State Exam Entity
 * @class MentalStateExam
 * @description
 * This class is used to create a Mental State Exam entity
 * @property id: number - The exam's id
 * @property patientId: number - The patient's id
 * @property examinerId: number - The examiner's id
 * @property examDate: string - The exam's date
 * @property orientationScore: number - The exam's orientation score
 * @property registrationScore: number - The exam's registration score
 * @property attentionAndCalculationScore: number - The exam's attention and calculation score
 * @property recallScore: number - The exam's recall score
 * @property languageScore: number - The exam's language score
 * @property totalScore: number - The exam's total score
 * @author Johan Principe Godoy
 * @version 1.0
 */
export class MentalStateExam {
  id: number;
  patientId: number;
  examinerId: number;
  examDate: string;
  orientationScore: number;
  registrationScore: number;
  attentionAndCalculationScore: number;
  recallScore: number;
  languageScore: number;
  totalScore?: number;

  constructor(exam: {
    id?: number,
    patientId?: number,
    examinerId?: number,
    examDate?: string,
    orientationScore?: number,
    registrationScore?: number,
    attentionAndCalculationScore?: number,
    recallScore?: number,
    languageScore?: number,
    totalScore?: number
  }) {
    this.id = Number(exam.id) || 0;
    this.patientId = Number(exam.patientId) || 0;
    this.examinerId = Number(exam.examinerId) || 0;
    this.examDate = exam.examDate || '';
    this.orientationScore = Number(exam.orientationScore) || 0;
    this.registrationScore = Number(exam.registrationScore) || 0;
    this.attentionAndCalculationScore = Number(exam.attentionAndCalculationScore) || 0;
    this.recallScore = Number(exam.recallScore) || 0;
    this.languageScore = Number(exam.languageScore) || 0;
    this.totalScore = Number(exam.totalScore) || 0;
  }
}
