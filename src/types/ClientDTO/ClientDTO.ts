import { PetType } from 'types/PetsDTO/PetsDTO';

export interface Pet {
  id: number,
  name: string,
  avatar: string,
  birthDay: string,
  petType?: PetType,
}

export interface IClient {
  firstname: string,
  lastname: string,
  avatar: string,
  email: string,
  pets: Pet[]
}

export interface IPetFoundClientDto {
  id: number,
  latitude: string,
  longitude: string,
  message: string,
  foundDate: string,
}

export interface ILocalTime {
  hour: number,
  minute: number,
  second: number,
  nano: number,
}
export interface IAppointmentDayElementDto {
  time: ILocalTime,
  available: boolean
}
export interface IAppointmentCalendarElementDto {
  date: string,
  appointments: IAppointmentDayElementDto[]
}
export interface IAppointmentCallendarDto {
  days: IAppointmentCalendarElementDto[]
}

export interface ReproductionDto {
  id: number;
  estrusStart: string;
  mating: string;
  dueDate: string;
  childCount: number
}

export interface GetReproductionByIdDto {
  petId: number;
  repId: number
}

export interface AddReproductionRequestDto {
  petId: number;
  body: ReproductionDto
}

export interface EditReproductionRequestDto extends GetReproductionByIdDto {
  body: {
    estrusStart: string;
    mating: string;
    dueDate: string;
    childCount: number
  }
}
