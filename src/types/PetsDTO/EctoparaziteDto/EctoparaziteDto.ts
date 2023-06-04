export enum Ectoparazit {
  VACCINATION = 'VACCINATION',
  ECHINOCOCCUS = 'ECHINOCOCCUS',
  EXTERNAL_PARASITE = 'EXTERNAL_PARASITE'
}

export type EctoparaziteDto = {
  id: number,
  date: string,
  type: Ectoparazit,
  medicineId: number,
  medicineBatchNumber: string,
  isPeriodical: boolean,
  periodDays: number
};

// export type EctoparazitePetIdDto = {
//     id: number,
//     data: string,
//     type: Ectoparazit,
//     medicineId: number,
//     medicineBatchNumber: string,
//     isPeriodical: boolean,
//     periodDays: number,
//     petId: number
//   };
