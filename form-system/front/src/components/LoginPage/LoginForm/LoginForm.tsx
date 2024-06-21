import '../Login.scss';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/main');
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email" className="input-label">
        Email
      </label>
      <input
        type="text"
        placeholder="Enter your email"
        id="email"
        className="login-input"
        required
      />
      <label htmlFor="password" className="input-label">
        Password
      </label>
      <input
        type="password"
        placeholder="Enter your password"
        id="password"
        className="login-input"
        required
      />
      <input type="submit" value="Login" className="login-btn" />
    </form>
  );
};
