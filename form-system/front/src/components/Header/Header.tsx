import classes from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { UserModal } from './UserModal/UserModal';

export const Header = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !iconRef.current?.contains(event.target as Node)
      ) {
        setOpenModal(false);
      }
    };

    if (openModal) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [openModal]);

  return (
    <>
      <header className={classes.mainPageHeader}>
        <nav
          className={classes.navWrapper}
          onClick={() => navigate('/main')}
          data-hook="nav-wrapper"
        >
          <img
            src="https://kstatic.googleusercontent.com/files/9f04faac24aed8bf8fb381029de951128d1d36373f89675265a6654d0c47b74b2d83a26b68b834ce2eea3bfe8001966f76895888138f135a81d099fc207c73bb"
            alt="„Forms“ piktograma"
            className={classes.formIcon}
          />
          <h3 className={classes.headerTitle}>Forms</h3>
        </nav>
        <span
          className={`${classes.userIcon} material-symbols-outlined`}
          onClick={() => setOpenModal(!openModal)}
          ref={iconRef}
        >
          account_circle
        </span>
      </header>
      {openModal && (
        <div ref={modalRef}>
          <UserModal setOpenModal={(state: boolean) => setOpenModal(state)} />
        </div>
      )}
    </>
  );
};
