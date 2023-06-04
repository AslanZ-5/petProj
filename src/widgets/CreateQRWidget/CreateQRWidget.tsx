import { useFormik } from 'formik';

import createQRSchema from './schema';
import classes from './CreateQRWidget.module.scss';
import CreateQRForm from './CreateQRForm';

export interface IValues {
  owner: string;
  namePet: string;
  address: string;
  ownerPhone: string;
  description: string;
}

interface CreateQRWidgetProps {
  onFormSubmit: (value: IValues) => void; // функция с значением формы
  closeSubmit: () => void; // кнопка закрытия формы
}

const initialValues: IValues = {
  owner: '',
  namePet: '',
  address: '',
  ownerPhone: '',
  description: '',
};

const CreateQRWidget = ({
  onFormSubmit,
  closeSubmit,
}: CreateQRWidgetProps): JSX.Element => {
  const { errors, touched, handleChange, handleSubmit, handleReset } =
    useFormik({
      initialValues,
      onSubmit: onFormSubmit,
      validateOnBlur: true,
      validationSchema: createQRSchema,
    });

  return (
    <section className={classes.createQR_container}>
      <div className={classes.createQR_header}>
        <h3>Создание QR-адресника</h3>
        <input
          onClick={closeSubmit}
          className={classes.closeCreateQR_container}
          type="submit"
          value=""
        />
      </div>
      <form
        className={classes.formCreateQR}
        onReset={handleReset}
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
      >
        <CreateQRForm errors={errors} touched={touched} handleChange={handleChange} />
      </form>
    </section>
  );
};

export default CreateQRWidget;
