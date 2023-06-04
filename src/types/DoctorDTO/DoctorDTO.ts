export interface IClinicalExaminationRequestDtoPut {
  weight: number;
  isCanMove: boolean;
  text: string;
}

export interface IExceptionDto {
  message: string;
}

export interface IDiagnosisDto{
  id: number;
  petId: number;
  doctorId: number;
  description: string;
}

export interface IClinicalExaminationRequestDto {
  weight: number;
  isCanMove: boolean;
  text: string;
}

export interface IClinicalExaminationResponseDto{
  id: number;
  petId: number;
  weight: number;
  isCanMove: boolean;
  text: string;
}
