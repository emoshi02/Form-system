import './SubHeader.scss';

interface SubHeaderProps {
  sections?: string[];
}

export const SubHeader = ({ sections = [] }: SubHeaderProps) => {
  return (
    <nav className="secondary-header">
      {sections.map((section, index) => (
        <a
          className="header-nav-item active"
          id="header-nav-item-first"
          key={index}
        >
          <p className="header-nav-item-p">{section}</p>
        </a>
      ))}
    </nav>
  );
};
