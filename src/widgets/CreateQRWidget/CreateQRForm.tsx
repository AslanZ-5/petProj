import { FormikErrors, FormikTouched } from 'formik';

import { IValues } from 'widgets/CreateQRWidget/CreateQRWidget';
import { EmailOrNameInput } from '../../shared/TextField/TextField';

import classes from './CreateQRWidget.module.scss';

interface CreateQRFormProps {
  errors: FormikErrors<IValues>;
  touched: FormikTouched<IValues>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreateQRForm = ({ errors, touched, handleChange }: CreateQRFormProps) => (
  <>
    <EmailOrNameInput
      label="Владелец"
      name="owner"
      type="text"
      error={errors?.owner}
      touched={touched?.owner}
      onChange={handleChange}
      placeholder="Введите имя владельца"
    />
    <EmailOrNameInput
      label="Имя питомца"
      name="namePet"
      type="text"
      error={errors?.namePet}
      touched={touched?.namePet}
      onChange={handleChange}
      placeholder="Введите имя питомца"
    />
    <EmailOrNameInput
      label="Адрес проживания питомца"
      name="address"
      type="text"
      error={errors?.address}
      touched={touched?.address}
      onChange={handleChange}
      placeholder="Введите адрес проживания потомца"
    />
    <EmailOrNameInput
      label="Номер телефона владельца"
      name="ownerPhone"
      type="text"
      error={errors?.ownerPhone}
      touched={touched?.ownerPhone}
      onChange={handleChange}
      placeholder="Введите номер телефона владельца"
    />
    <EmailOrNameInput
      label="Описание"
      name="description"
      type="text"
      error={errors?.description}
      touched={touched?.description}
      onChange={handleChange}
      placeholder="Описание"
    />
    <input
      className={classes.create_submit}
      type="submit"
      value="Создать"
    />
  </>
);

export default CreateQRForm;
