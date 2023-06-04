export interface Pet {
  id: number;
}

export type VaccinationDto = {
  id: Pet;
  date: string;
  medicineI: number;
  medicineBatchNumber: string;
  isPeriodical: boolean;
  periodDays: number;
};
