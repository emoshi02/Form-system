import { useState } from 'react';
import { Header } from '../Header/Header';
import { SubHeader } from '../SubHeader/SubHeader';
import { CreateFormBody } from './CreateFormBody/CreateFormBody';

export const CreateFormPage = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  return (
    <>
      <Header />
      <SubHeader
        sections={['Questions', 'Answers']}
        activeSectionIndex={activeSectionIndex}
        setActiveSectionIndex={(index: number) => setActiveSectionIndex(index)}
      />
      <CreateFormBody activeSectionIndex={activeSectionIndex} />
    </>
  );
};
