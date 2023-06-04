import { useState } from 'react';
import CardWidget from 'widgets/CardWidget';
import PetSidebarWidget from 'widgets/PetSidebarWidget';
import { useGetAllPetClientQuery } from 'services/client/petClientApi';
import { useGetAllVaccinationQuery } from 'services/client/vaccinationApi';
import { useGetAllEctoparaziteQuery } from 'services/client/ectoparasiteApi';
import { useGetAllReproductionsQuery } from 'services/client/reproductionApi';
import { ReproductionDto } from 'types/ClientDTO/ClientDTO';
import { EctoparaziteDto } from 'types/PetsDTO/EctoparaziteDto/EctoparaziteDto';
import { VaccinationDto } from 'types/PetsDTO/VaccinationDto/VaccinationDto';
import {
  useGetDewormingByPetIdQuery,
  IDewormingDTO,
} from 'services/client/DewormingApi';
import classes from './ClientPage.module.scss';

const PetReproduction = ({ id }: { id: number }) => {
  const { data, isError } = useGetAllReproductionsQuery(id);

  if (isError) {
    return null;
  }
  let card;
  if (data) {
    if (!data.length) {
      return null;
    }
    card = data.map(
      (item: ReproductionDto): JSX.Element => (
        <div key={item.id}>
          {item.estrusStart}
          {item.dueDate}
        </div>
      )
    );
  }

  return (
    <CardWidget>
      <div>
        <h5 className={classes.cardTitle}>Записи о репродукции</h5>
        <div>{card}</div>
      </div>
    </CardWidget>
  );
};
const PetDeworming = ({ id }: { id: number }) => {
  const { data, isError } = useGetDewormingByPetIdQuery(id);

  if (isError) {
    return null;
  }
  let card;
  if (data) {
    if (!data.length) {
      return null;
    }
    card = data.map(
      (item: IDewormingDTO): JSX.Element => (
        <div key={item.id}>
          {item.medicineBatchNumber}
          {item.date}
        </div>
      )
    );
  }

  return (
    <CardWidget>
      <div>
        <h5 className={classes.cardTitle}>Дегельминтизация</h5>
        <div>{card}</div>
      </div>
    </CardWidget>
  );
};
const PetEctoparazite = ({ id }: { id: number }) => {
  const { data, isError } = useGetAllEctoparaziteQuery(id);

  if (isError) {
    return null;
  }
  let card;
  if (data) {
    if (!data.length) {
      return null;
    }
    card = data.map(
      (item: EctoparaziteDto): JSX.Element => (
        <div key={item.id}>
          {item.medicineBatchNumber}
          {item.date}
        </div>
      )
    );
  }

  return (
    <CardWidget>
      <div>
        <h5 className={classes.cardTitle}>Обработка от эктопаразитов</h5>
        <div>{card}</div>
      </div>
    </CardWidget>
  );
};
const PetVaccination = ({ id }: { id: number }) => {
  const { data, isError } = useGetAllVaccinationQuery({ id });

  if (isError) {
    return null;
  }
  let card;

  if (data) {
    if (!data.length) {
      return null;
    }
    card = data?.map(
      (item: VaccinationDto): JSX.Element => (
        <div key={item.id.id}>
          {item.medicineBatchNumber}
          {item.date}
        </div>
      )
    );
  }

  return (
    <CardWidget>
      <div>
        <h5 className={classes.cardTitle}>Другие вакцинации</h5>
        <div>{card}</div>
      </div>
    </CardWidget>
  );
};

function ClientPage() {
  const { data } = useGetAllPetClientQuery();
  const [petInfoId, setPetInfoId] = useState<number>(0);
  const handlePetInfoView = (petId: number): void => {
    setPetInfoId(petId);
  };

  const info =
    petInfoId > 0 ? (
      <>
        <PetDeworming id={petInfoId} />
        <PetVaccination id={petInfoId} />
        <PetEctoparazite id={petInfoId} />
        <PetReproduction id={petInfoId} />
      </>
    ) : (
      ''
    );

  return (
    <div className={classes.clientPage}>
      <div className={classes.sideBar}>
        <PetSidebarWidget
          petArrayDate={data || []}
          editPetInfo={(id) => console.log('edit pet', id)}
          addPet={() => console.log('add pet')}
          deletePet={(id) => console.log('delete pet', id)}
          infoPet={handlePetInfoView}
        />
      </div>
      <main className={classes.petInfo}>
        <h3 className={classes.header}>Подробная информация</h3>
        <div className={classes.info}>{info}</div>
      </main>
    </div>
  );
}

export default ClientPage;
