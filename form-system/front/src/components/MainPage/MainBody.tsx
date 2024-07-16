import './MainPage.scss';
import { useNavigate } from 'react-router-dom';
import './MainPage.scss';


export const MainBody = ({
  activeSectionIndex,
}: {
  activeSectionIndex: number;
}) => {
  const navigate = useNavigate();
  const [forms, setForms] = useState(
    activeSectionIndex === 0 ? RECENT_FORMS : RECEIVED_FORMS,
  );

  useEffect(() => {
    setForms(activeSectionIndex === 0 ? RECENT_FORMS : RECEIVED_FORMS);
  }, [activeSectionIndex]);

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
