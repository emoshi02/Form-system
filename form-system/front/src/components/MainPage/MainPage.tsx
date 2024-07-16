import { useState } from 'react';
import { Header } from '../Header/Header';
import { SubHeader } from '../SubHeader/SubHeader';
import { MainBody } from './MainBody';

export const MainPage = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  return (
    <main className="main-page">
      <Header />
      <SubHeader
        sections={['Recent', 'Received']}
        activeSectionIndex={activeSectionIndex}
        setActiveSectionIndex={(index: number) => setActiveSectionIndex(index)}
      />
      <MainBody activeSectionIndex={activeSectionIndex} />
    </main>
  );
};
