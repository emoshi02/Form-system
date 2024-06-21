import './SubHeader.scss';

interface SubHeaderProps {
  item1: string;
  item2: string;
}

export const SubHeader = ({ item1, item2 }: SubHeaderProps) => {
  return (
    <nav className="secondary-header">
      <a className="header-nav-item active" id="header-nav-item-first">
        <p className="header-nav-item-p">{item1}</p>
      </a>
      <a className="header-nav-item" id="header-nav-item-second">
        <p className="header-nav-item-p">{item2}</p>
      </a>
    </nav>
  );
};
