export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export enum Size {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  BIG = 'BIG',
}

export enum PetType {
  CAT = 'CAT',
  DOG = 'DOG',
}

export interface IPets {
  name: string,
  avatar: string,
  birthDay: string,
  petType: PetType,
  breed: string,
  gender: Gender,
  color: string,
  size: Size,
  weight: number,
  description: string
}
export interface PetUpdateRequestBody{
  name: string,
  avatar: string,
  birthDay: string,
  breed: string,
  gender: Gender,
  color: string,
  size: Size,
  weight: number,
  description: string
}
export interface PetUpdateRequestDto {
  id:number;
  body:PetUpdateRequestBody
}
