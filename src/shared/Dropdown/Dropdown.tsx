import { useState } from 'react';

import { valuesList } from '../../const/LandingObjects';

import classes from './Dropdown.module.scss';

const Dropdown = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(true);
  const [value, setValue] = useState<string>('');

  function handleChange(title: string) {
    setValue(title);
    setOpen(!open);
  }

  return (
    <div className={classes.dropdown}>
      <div role="presentation" className={classes.dropdown_contener} onClick={() => setOpen(!open)}>
        <span>{value}</span>
      </div>
      <div className={`${open ? classes.activ : classes.inactiv}`}>
        {valuesList.map((value) => (
          <div
            role="presentation"
            className={classes.dropdown_item}
            key={value.id}
            onClick={() => handleChange(value.title)}
          >
            {value.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
