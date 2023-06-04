import { useFormik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';

import { useGetTokenWithRoleMutation } from 'services/Auth/AuthAPI';
import image from 'assets/SignInForm/logo-middle.png';
import { EmailOrNameInput, PasswordInput } from 'shared/TextField/TextField';
import { Checkbox } from 'shared/CheckBoxField/CheckBoxField';
import { useEffect } from 'react';
import { useAuthSuccess } from 'hooks/useAuthSuccess';
import { pushAuth } from 'features/userSlice/userSlice';
import signInValidationSchema from './schema';
import classes from './SignInForm.module.scss';

function SignInForm(): JSX.Element {
  interface IValues {
    email: string;
    password: string;
    checkbox: boolean;
  }

  const [login, { data, isSuccess }] = useGetTokenWithRoleMutation();
  const initialValues: IValues = { email: '', password: '', checkbox: false };

  const { dispatchAuth, redirect } = useAuthSuccess();

  const onFormSubmit = (
    values: IValues,
    actions: FormikHelpers<IValues>
  ): void => {
    login({ username: values.email, password: values.password });
    actions.setSubmitting(false);
  };

  const {
    errors,
    touched,
    isValid,
    dirty,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validateOnBlur: true,
    validationSchema: signInValidationSchema,
  });

  useEffect(() => {
    if (isSuccess && data) {
      pushAuth(data);
      dispatchAuth(data);
      redirect(data);
    }
  }, [isSuccess, data, dispatchAuth, redirect]);

  return (
    <div className={classes.signInForm__container}>
      <img src={image} alt="Sweet pets" />
      <div className={classes.form__header}>
        <h3>Log in to your Account</h3>
        <span>Welcome back, please enter your details.</span>
      </div>
      <form
        className={classes.form}
        onReset={handleReset}
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
      >
        <EmailOrNameInput
          label="Email Address"
          name="email"
          type="email"
          error={errors?.email}
          touched={touched?.email}
          onChange={handleChange}
        />
        <PasswordInput
          label="Password"
          name="password"
          error={errors?.password}
          touched={touched?.password}
          onChange={handleChange}
        />
        <div className={classes.additionalActions}>
          <Checkbox label="Remember me" onChange={handleChange} />
          <a href="/#" className={classes.forgotPasswordLink}>
            <span>Forgot Password?</span>
          </a>
        </div>
        <button
          className={classes.btn_submit}
          type="submit"
          disabled={!isValid && !dirty}
        >
          <span>Log in</span>
        </button>
      </form>
      <div className={classes.form__footer}>
        <span>Don’t have an account?</span>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
}

export default SignInForm;
