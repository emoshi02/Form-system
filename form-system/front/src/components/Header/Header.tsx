import "./Header.scss";

export const Header = () => {
  return (
    <header className="main-page-header">
      <nav className="nav-wrapper">
        <img
          src="https://kstatic.googleusercontent.com/files/9f04faac24aed8bf8fb381029de951128d1d36373f89675265a6654d0c47b74b2d83a26b68b834ce2eea3bfe8001966f76895888138f135a81d099fc207c73bb"
          alt="„Forms“ piktograma"
          className="form-icon"
        />
        <h3 className="header-title">Forms</h3>
      </nav>
      <span className="material-symbols-outlined user-icon">
        account_circle
      </span>
    </header>
  );
};
