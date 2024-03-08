import "./SubHeader.scss";

export const SubHeader = () => {
  return (
    <nav className="secondary-header">
      <a className="header-nav-item active" id="header-nav-item-first">
        <p className="header-nav-item-p">Questions</p>
      </a>
      <a className="header-nav-item" id="header-nav-item-second">
        <p className="header-nav-item-p">Answers</p>
      </a>
    </nav>
  );
};
