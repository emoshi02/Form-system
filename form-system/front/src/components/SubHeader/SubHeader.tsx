import './SubHeader.scss';

interface SubHeaderProps {
  sections: string[];
  activeSectionIndex: number;
  setActiveSectionIndex: (index: number) => void;
}

export const SubHeader = ({
  sections = [],
  activeSectionIndex,
  setActiveSectionIndex,
}: SubHeaderProps) => {
  return (
    <nav className="secondary-header">
      {sections.map((section, index) => (
        <a
          className={`header-nav-item ${activeSectionIndex === index && 'active'}`}
          id="header-nav-item-first"
          key={index}
          onClick={() => setActiveSectionIndex(index)}
        >
          <p className="header-nav-item-p">{section}</p>
        </a>
      ))}
    </nav>
  );
};
