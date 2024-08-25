import classes from './Login.module.scss';
import { LoginForm } from './LoginForm/LoginForm';

export const LoginPage = () => {
  return (
    <section className={classes.loginMain}>
      <div className={classes.loginWrapper}>
        <div className={classes.headerWrapper}>
          <h1 className={classes.heading}>Welcome back</h1>
          <p className={classes.subHeading}>Please enter you Login details.</p>
        </div>
        <LoginForm />
        <span className={classes.loginFooter}>Form System</span>
      </div>
    </section>
  );
};
