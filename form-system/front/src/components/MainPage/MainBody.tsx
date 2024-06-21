import './MainPage.scss';
import { useNavigate } from 'react-router-dom';

export const MainBody = () => {
  const navigate = useNavigate();

  const onBtnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate('/createForm');
  };

  return (
    <main className="main-body">
      <section className="create-form">
        <button className="create-form-btn" onClick={onBtnClick}>
          <img
            alt="create form"
            className="create-form-img"
            src="../../assets/images/sign.png"
          />
        </button>
      </section>
    </main>
  );
};
