export type PetId = number;

export enum PetType {
  CAT = 'CAT',
  DOG = 'DOG',
}

export type PetResponceDto = {
  name: string,
  avatar: string,
  birthDay: string,
  petType: PetType,
  id: PetId
};
