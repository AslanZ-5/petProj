import * as yup from 'yup';

const signInValidationSchema = yup.object().shape({
  email: yup.string().email('Пожалуйста, введите корректный адрес').required('Введите адрес электронной почты'),
  password: yup.string().required('Введите пароль'),
  checkbox: yup.boolean()
});

export default signInValidationSchema;
