import { memo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IInputProps } from 'types/InputFormType/InputFormType';
import eye from 'assets/SignInForm/eye.svg';
import eye_disabled from 'assets/SignInForm/eye-disabled.svg';

import classes from './TextField.module.scss';

export const PasswordInputInner = (props: IInputProps): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const {
    label,
    error,
    touched,
    name,
    onChange,
  } = props;
  const fieldClasses =
    error && touched ? classes.errorInput : classes.input;
  const icon = visible ? eye_disabled : eye;
  const alt = visible ? 'hide password' : 'show password';
  const inputType = visible ? 'text' : 'password';
  const errorMsg =
    error && touched ? (
      <span className={classes.errorMessage}>{error}</span>
    ) : null;

  const changeVisibility = (): void => {
    setVisible((prev) => !prev);
  };
  const id = uuidv4();

  return (
    <div className={classes.passwordContainer}>
      <label className={classes.label} htmlFor={id}>
        <span>{label}</span>
      </label>

      <input
        className={fieldClasses}
        id={id}
        name={name}
        type={inputType}
        onChange={onChange}
      />
      <button
        type="button"
        className={classes.btn_toggleVisibility}
        onClick={changeVisibility}
      >
        <img src={icon} alt={alt} />
      </button>
      {errorMsg}
    </div>
  );
};

export const EmailOrNameInputInner = (props: IInputProps): JSX.Element => {
  const {
    label,
    error,
    name,
    type,
    touched,
    onChange,
    placeholder,
  } = props;
  const fieldClasses =
    error && touched ? classes.errorInput : classes.input;
  const errorMsg =
    error && touched ? (
      <span className={classes.errorMessage}>{error}</span>
    ) : null;
  const meaningPlaceholder = type === 'email' ? 'mail@mail.com' : 'Oleg Ivanov';
  const defaultPlaceholder = !placeholder ? meaningPlaceholder : placeholder;
  const id = uuidv4();

  return (
    <div className={classes.emailContainer}>
      <label className={classes.label} htmlFor={id}>
        <span>{label}</span>
      </label>
      <input
        className={fieldClasses}
        id={id}
        name={name}
        type={type}
        placeholder={defaultPlaceholder}
        onChange={onChange}
      />
      {errorMsg}
    </div>
  );
};

export const EmailOrNameInput = memo(EmailOrNameInputInner);

export const PasswordInput = memo(PasswordInputInner);
