import classes from './UserModal.module.scss';
import { useNavigate } from 'react-router-dom';

type UserModalProps = {
  setOpenModal: (state: boolean) => void;
};

export const UserModal: React.FC<UserModalProps> = ({ setOpenModal }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.userModalWrapper} data-hook="user-modal-wrapper">
      <span className={`material-symbols-outlined ${classes.userModalIcon}`}>
        account_circle
      </span>
      <p className={classes.pText}>Are you sure you want to logout?</p>
      <span className={classes.buttonWrapper}>
        <button
          className={classes.cancelButton}
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </button>
        <button className={classes.actionButton} onClick={() => navigate('/')}>
          Logout
        </button>
      </span>
    </div>
  );
};
