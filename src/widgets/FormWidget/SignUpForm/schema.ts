import * as yup from 'yup';

const signUpValidationSchema = yup.object().shape({
  name: yup.string()
    .min(6, 'минимальная длинна имени 6 символов')
    .max(20, 'максимальная длинна 20 символов')
    .typeError('Введите имя')
    .required('Обязательно для заполнения'),

  email: yup.string()
    .email('Пожалуйста, введите корректный адрес')
    .required('Введите адрес электронной почты'),

  password: yup.string()
    .min(6, 'минимальная длинна пароля 6 символов')
    .typeError('Придумайте пароль')
    .required('Обязательно для заполнения'),

  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Обязательно для заполнения'),

  checkbox: yup.boolean()
    .oneOf([true], 'Необходимо принять условия!'),
});

export default signUpValidationSchema;
