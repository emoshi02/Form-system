import '../Login.scss';

export const LoginForm = () => {
  return (
    <form className="login-form">
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
