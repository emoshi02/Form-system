import classes from './SubHeader.module.scss';

interface SubHeaderProps {
  sections: string[];
  activeSectionIndex: number;
  setActiveSectionIndex: (index: number) => void;
}

export const SubHeader = ({
  sections,
  activeSectionIndex,
  setActiveSectionIndex,
}: SubHeaderProps) => {
  return (
    <nav className={classes.secondaryHeader}>
      {sections.map((section, index) => (
        <a
          className={`${classes.headerNavItem} ${activeSectionIndex === index && classes.active}`}
          id="header-nav-item-first"
          key={index}
          onClick={() => setActiveSectionIndex(index)}
          data-hook="header-nav-item"
        >
          <p className={classes.headerNavItemP}>{section}</p>
        </a>
      ))}
    </nav>
  );
};
