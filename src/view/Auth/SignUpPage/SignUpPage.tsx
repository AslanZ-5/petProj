import SignUpForm from 'widgets/FormWidget/SignUpForm';

import classes from './SignUpPage.module.scss';

function SignUpPage() {
  return (
    <div className={classes.signUpPage}>
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
