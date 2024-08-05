import { useLocation } from 'react-router-dom';
import { createContext } from 'react';
import { AnswerFormPage } from './AnswerFormPage';

export const AnswerFormDataContext = createContext(null);

export const AnswerFormWrapper = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <AnswerFormDataContext.Provider value={formData}>
      <AnswerFormPage />
    </AnswerFormDataContext.Provider>
  );
};
