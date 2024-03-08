import './Login.scss';
import { LoginForm } from './LoginForm/LoginForm';

export const LoginPage = () => {
  return (
    <section className="login-main">
      <div className="login-wrapper">
        <div className="header-wrapper">
          <h1 className="heading">Welcome back</h1>
          <p className="sub-heading">Please enter you Login details.</p>
        </div>
        <LoginForm />
        <span className="login-footer">Form System</span>
      </div>
    </section>
  );
};
