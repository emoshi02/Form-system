import classes from '../Login.module.scss';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <form
      className={classes.loginForm}
      onSubmit={(event: React.FormEvent) => {
        event.preventDefault();
        navigate('/main');
      }}
    >
      <label htmlFor="email" className={classes.inputLabel}>
        Email
      </label>
      <input
        type="text"
        placeholder="Enter your email"
        id="email"
        className={classes.loginInput}
        required
      />
      <label htmlFor="password" className={classes.inputLabel}>
        Password
      </label>
      <input
        type="password"
        placeholder="Enter your password"
        id="password"
        className={classes.loginInput}
        required
      />
      <input type="submit" value="Login" className={classes.loginButton} />
    </form>
  );
};
