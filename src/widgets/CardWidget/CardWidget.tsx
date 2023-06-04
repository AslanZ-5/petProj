import { ReactNode } from 'react';
import classes from './cardWidget.module.scss';

type PropsType = {
  children: ReactNode;
};

function CardWidget({ children }: PropsType): JSX.Element {
  return (
    <div className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.cardDecorativeLine} />
        {children}
      </div>
    </div>
  );
}

export default CardWidget;
