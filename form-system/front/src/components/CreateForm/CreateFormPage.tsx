import { useContext, useState } from 'react';
import { Header } from '../Header/Header';
import { SubHeader } from '../SubHeader/SubHeader';
import { CreateFormBody } from './CreateFormBody/CreateFormBody';
import { FormDataContext } from '../UpdateFormWrapper/UpdateFormWrapper';

export const CreateFormPage = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const formData = useContext(FormDataContext);

  return (
    <>
      <Header />
      <SubHeader
        sections={['Questions', 'Answers']}
        activeSectionIndex={activeSectionIndex}
        setActiveSectionIndex={(index: number) => setActiveSectionIndex(index)}
      />
      <CreateFormBody
        activeSectionIndex={activeSectionIndex}
        formData={formData}
      />
    </>
  );
};
