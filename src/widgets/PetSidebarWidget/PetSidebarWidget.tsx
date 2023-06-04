import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Pet } from '../../types/ClientDTO/ClientDTO';

import vectorBottom from '../../assets/img/PetSideBar/vectorBottom.svg';
import vectorRight from '../../assets/img/PetSideBar/vectorRight.svg';
import urn from '../../assets/img/PetSideBar/urn.svg';
import pen from '../../assets/img/PetSideBar/pen.svg';
import dog from '../../assets/img/PetSideBar/dog.svg';
import tiger from '../../assets/img/PetSideBar/tiger.svg';

import classes from './PetSidebarWidget.module.scss';

interface IPetArray {
  id: number,
  name: string,
  avatar: string,
  birthDay: string,
  openCard: boolean,
}

interface IPropsType {
  petArrayDate: Array<Pet>;
  editPetInfo: (x:number) => void;
  deletePet: (x:number) => void;
  addPet: () => void;
  infoPet: (x:number) => void;
}

function PetSidebarWidget({ petArrayDate, editPetInfo, deletePet, addPet, infoPet }: IPropsType): JSX.Element {
  const [sideBar, setSadeBar] = useState<boolean>(false);
  const [petArray, setPetArray] = useState<Array<IPetArray>>([]);

  useEffect(() => {
    const newArr = petArrayDate.map((el) => ({ ...el, openCard: false }));
    setPetArray(newArr);
  }, [petArrayDate]);

  const openSideBar = sideBar ? classes.sideBar_open : classes.sideBar_close;

  const petDetailedInfo = (id: number): void => {
    const newArr = petArray.map((el) => {
      const openCard = el.id === id ? el.openCard = !el.openCard : el.openCard = false;
      el.openCard = openCard;
      if (!el.openCard) infoPet(id);

      return el;
    });
    setPetArray(newArr);
  };

  const item = petArray.length ?
    petArray.map((el) => {
      const styleImgPet = el.openCard ? classes.imgPetBorder : classes.imgPet;
      const imgButton = el.openCard ? vectorBottom : vectorRight;
      const styleCard = el.openCard ? classes.petCardOpenInfo : classes.petCard;
      const imgPet = el.avatar ? el.avatar : tiger;

      return (
        <div key={el.id} className={styleCard}>
          <div className={classes.imgPetAndDetailedInfo_petCard}>
            <img className={styleImgPet} src={imgPet} alt='' />
            <button onClick={() => petDetailedInfo(el.id)} className={classes.detailedInfo}>
              <span>{el.name}</span>
              <img src={imgButton} alt='' />
            </button>
          </div>
          <div className={classes.editPetLink}>
            <Link onClick={() => editPetInfo(el.id)} className={classes.editPetInfo} to=''>
              <img src={pen} alt='.' />
              <span>Редактировать</span>
            </Link>
            <Link onClick={() => deletePet(el.id)} className={classes.deletePet} to=''>
              <img src={urn} alt='' />
              <span>Удалить</span>
            </Link>
          </div>
        </div>
      );
    }) : (
      <div className={classes.noPet}>
        <img src={dog} alt='' />
        <span>Добавьте первого питомца</span>
      </div>
    );

  return (
    <aside className={openSideBar}>
      <header className={classes.header_sideBar}>
        <Link to='' onClick={() => setSadeBar(!sideBar)} className={classes.link_sideBar} />
        <h3 className={classes.title}>Ваши питомцы</h3>
        <Link to='' onClick={addPet} className={classes.link_addPet} />
      </header>
      {item}
    </aside>
  );
}

export default PetSidebarWidget;
