import { useEffect, useState } from 'react';
import { FormItem } from './FormItem/FormItem';
import { useNavigate } from 'react-router-dom';
import './MainPage.scss';

const RECENT_FORMS = [
  { id: 0, title: 'AAA' },
  { id: 1, title: 'BBB' },
  { id: 2, title: 'CCC' },
  { id: 3, title: 'DDD' },
  { id: 4, title: 'EEE' },
  { id: 5, title: 'FFF' },
  { id: 6, title: 'GGG' },
  { id: 7, title: 'HHH' },
  { id: 8, title: 'III' },
];

const RECEIVED_FORMS = [
  { id: 0, title: 'AAA' },
  { id: 1, title: 'BBB' },
  { id: 2, title: 'CCC' },
  { id: 8, title: 'III' },
];

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

  const handleDeleteBtnClick = (index: number) => {
    const updatedForms = forms.filter((_, i) => i !== index);
    setForms(updatedForms);
  };

  return (
    <main className="main-body">
      <section className="forms">
        {forms.map((form, index) => (
          <FormItem
            form_id={form.id}
            form_title={form.title}
            onDeleteBtn={() => handleDeleteBtnClick(index)}
            key={form.id}
          />
        ))}
      </section>
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
