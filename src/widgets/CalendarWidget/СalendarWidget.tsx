import Calendar from 'react-calendar';
import { useState, useCallback, useEffect } from 'react';
import { format } from 'date-fns';

import classes from './СalendarWidget.module.scss';
import 'react-calendar/dist/Calendar.css';

type FormatFunc = (date: Date) => void;

interface IProps {
  noEntry?: string[];
  selectedDate: FormatFunc;
}

function СalendarWidget(props: IProps): JSX.Element {
  const [date, setDate] = useState(new Date());
  const [arrayNoEntry, setArrayNoEntry] = useState(['17/02/2023']);
  const { noEntry, selectedDate } = props;
  useEffect(() => {
    if (noEntry) {
      setArrayNoEntry([...noEntry]);
    }
  }, [noEntry]);

  const tileDisabled = useCallback((eve) => {
    const { view, date } = eve;
    if (view === 'month') return arrayNoEntry.includes(format(date, 'dd/MM/yyyy'));

    return false;
  }, [arrayNoEntry]);

  return (
    <div className={classes.calendarWidget_container}>
      <div className={classes.calendar_container}>
        <Calendar
          onChange={(nextValue: Date): void => {
            setDate(nextValue);
            selectedDate(nextValue);
          }}
          tileDisabled={tileDisabled}
          value={date}
          minDate={new Date()}
          next2Label={null}
          prev2Label={null}
        />
      </div>
      <p className={classes.text_center}>
        <span className={classes.bold}>Выбранная дата:</span>
        {' '}
        {format(date, 'dd/MM/yyyy')}
      </p>
    </div>
  );
}

export default СalendarWidget;
