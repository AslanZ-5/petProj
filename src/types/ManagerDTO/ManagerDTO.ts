export type IAppearence = string[];

export interface UserInfoDto {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
}

export interface MedicineRequestDto {
  manufactureName: string;
  name: string;
  iconUrl: string;
  description: string;
}

export interface ManagerNewsRequestDto {
  title: string;
  content: string;
  type: string;
  endTime: string;
  important: boolean;
  typeOfRequest: ENews;
}

export enum ENews {
  UPDATING = 'UPDATING',
  ADVERTISING_ACTIONS = 'ADVERTISING_ACTIONS',
  DISCOUNTS = 'DISCOUNTS',
  PROMOTION = 'PROMOTION',
}

export interface MedicineResponseDto {
  id: number;
  manufactureName: string;
  name: string;
  iconUrl: string;
  description: string;
  creationDateTime: string;
  lastUpdateDateTime: string;
  createAuthor: UserInfoDto;
  lastUpdateAuthor: UserInfoDto;
}

export interface ManagerNewsResponseDto {
  id: number;
  title: string;
  content: string;
  type: ENews;
  endTime: string;
  published: boolean;
  pictures: string;
  important: boolean;
}

export interface MedicineSearchParamsDto {
  manufactureName?: string;
  name?: string;
  searchText?: string;
}
export interface MedicineDosageResponseDto {
  id: number;
  dosageSize: number;
  dosageType: EDosage;
}

export interface MedicineDosageRequestBodyDto {
  dosageSize: number;
  dosageType: EDosage;
}
export interface MedicineDosageRequestDto {
  id: number;
  body: MedicineDosageRequestBodyDto;
}
export enum EDosage {
  DROPS = 'DROPS',
  PILLS = 'PILLS',
}
export interface MedicineEditDto {
  id: number;
  body: MedicineRequestDto;
}

export interface DosageDeleteParams {
  medicineId: number;
  dosageId: number;
}

export interface ManagerNewsEditDto {
  id: number;
  body: ManagerNewsRequestDto;
}
export type ManagerNewsAddPictureRequestBody = string[];

export interface ManagerNewsAddPictureRequest {
  id: number;
  pictures: ManagerNewsAddPictureRequestBody;
}
