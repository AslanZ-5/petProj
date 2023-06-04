import { IUseInput } from 'hooks/useInput';
import classes from './Input.module.scss';
import searchIcon from './search-icon.svg';

interface IInput extends Omit<IUseInput, 'reset'> {
  icon?: boolean,
}

function Input({ value, onChange, icon = false } : IInput) {
  const viewIcon = icon ? <img className={classes.inputContainer__icon} src={searchIcon} alt="search icon" /> : null;

  return (
    <div className={classes.inputContainer}>
      {viewIcon}
      <input
        className={classes.inputContainer__input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
