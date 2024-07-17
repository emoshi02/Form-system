import { useLocation } from 'react-router-dom';
import { CreateFormPage } from '../CreateForm/CreateFormPage';
import { createContext } from 'react';

export const FormDataContext = createContext(null);

export const UpdateFormWrapper = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <FormDataContext.Provider value={formData}>
      <CreateFormPage />
    </FormDataContext.Provider>
  );
};
