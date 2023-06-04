import SignInForm from 'widgets/FormWidget/SignInForm/SignInForm';

import classes from './SignInPage.module.scss';

function SignInPage() {
  return (
    <div className={classes.signInPage}>
      <SignInForm />
    </div>
  );
}

export default SignInPage;
