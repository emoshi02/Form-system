import './UserModal.scss';
import { useNavigate } from 'react-router-dom';

type UserModalProps = {
  setOpenModal: (state: boolean) => void;
};

export const UserModal: React.FC<UserModalProps> = ({ setOpenModal }) => {
  const navigate = useNavigate();

  return (
    <div className="user-modal-wrapper">
      <span className="material-symbols-outlined user-modal-icon">
        account_circle
      </span>
      <p className="p-text">Are you sure you want to logout?</p>
      <span className="btn-wrapper">
        <button className="cancel-btn" onClick={() => setOpenModal(false)}>
          Cancel
        </button>
        <button className="action-btn" onClick={() => navigate('/')}>
          Logout
        </button>
      </span>
    </div>
  );
};
