import { useContext } from 'react';
import { Header } from '../Header/Header';
import { AnswerForm } from './AnswerForm';
import { AnswerFormDataContext } from './AnswerFormWrapper';

export const AnswerFormPage = () => {
  const formData = useContext(AnswerFormDataContext);

  return (
    <>
      <Header />
      <AnswerForm formData={formData} />
    </>
  );
};
