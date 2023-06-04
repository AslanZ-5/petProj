import { FormikHelpers, useFormik } from 'formik';
import { Link } from 'react-router-dom';

import image from 'assets/SignInForm/logo-middle.png';
import { Checkbox } from 'shared/CheckBoxField/CheckBoxField';
import { EmailOrNameInput, PasswordInput } from 'shared/TextField/TextField';

import signUpValidationSchema from './schema';
import classes from './SignUpForm.module.scss';

function SignUpForm(): JSX.Element {
  interface IValues {
    name?: string,
    email?: string,
    password?: string,
    confirmPassword?: string,
    checkbox?: boolean,
  }

  const initialValues: IValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkbox: false,
  };

  const onFormSubmit = (values: IValues, actions: FormikHelpers<IValues>) : void => {
    actions.setSubmitting(false);
  };

  const { errors, touched, isValid, dirty, handleChange, handleSubmit, handleReset } = useFormik({
    initialValues,
    onSubmit: onFormSubmit,
    validateOnBlur: true,
    validationSchema: signUpValidationSchema,
  });

  return (
    <div className={classes.signUp_container}>
      <img src={image} alt="Sweet pets" />
      <div className={classes.formSignUp__header}>
        <h3>Create an Account</h3>
        <span>Sign up now to get started with an account.</span>
      </div>
      <form
        className={classes.formRegistered}
        onReset={handleReset}
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
      >
        <EmailOrNameInput
          label='Full  Name'
          name='name'
          type='text'
          error={errors?.name}
          touched={touched?.name}
          onChange={handleChange}
        />

        <EmailOrNameInput
          label='Email Address'
          name='email'
          type='email'
          error={errors?.email}
          touched={touched?.email}
          onChange={handleChange}
        />

        <PasswordInput
          label='Password'
          name='password'
          error={errors?.password}
          touched={touched?.password}
          onChange={handleChange}
        />

        <PasswordInput
          label='Confirm Password'
          name='confirmPassword'
          error={errors?.confirmPassword}
          touched={touched?.confirmPassword}
          onChange={handleChange}
        />

        <Checkbox
          label='I have read and agree to the '
          error={errors?.checkbox}
          touched={touched?.checkbox}
          linkLabel={(<a href=''>Terms of Service</a>)}
          onChange={handleChange}
        />

        <button
          className={classes.btn_formRegister}
          disabled={!isValid && !dirty}
          type="submit"
        >
          Get Started
        </button>
      </form>
      <div className={classes.footer_formRegister}>
        <span>Already have an account?</span>
        <Link to="/sign-in">Sign In</Link>
      </div>
    </div>
  );
}

export default SignUpForm;
