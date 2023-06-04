import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const createQRSchema = yup.object().shape({
  owner: yup.string()
    .typeError('Введите имя владельца')
    .required('Обязательно для заполнения'),

  namePet: yup.string()
    .typeError('Введите имя животного')
    .required('Обязательно для заполнения'),

  address: yup.string()
    .typeError('Введите адрес проживания')
    .required('Обязательно для заполнения'),

  ownerPhone: yup.string()
    .matches(phoneRegExp, 'Не валидный номер телефона')
    .required('Обязательно для заполнения'),

  description: yup.string()
    .typeError('Введите описание')
    .required('Обязательно для заполнения'),
});

export default createQRSchema;
