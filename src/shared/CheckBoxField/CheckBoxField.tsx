import { memo } from 'react';
import { ICheckboxProps } from 'types/InputFormType/InputFormType';

import classes from './CheckBoxField.module.scss';

const CheckboxInner = (props: ICheckboxProps): JSX.Element => {
  const { label, error, touched, linkLabel, onChange } = props;

  const errorMsg =
     error && touched ? (
       <span className={classes.errorMessage}>{error}</span>
     ) : null;

  return (
    <div>
      <label className={classes.checkbox_label}>
        <input name="checkbox" type="checkbox" onChange={onChange} />
        <span>
          {label}
          {linkLabel}
        </span>
      </label>
      {errorMsg}
    </div>
  );
};

export const Checkbox = memo(CheckboxInner);
