import { Header } from '../Header/Header';
import { SubHeader } from '../SubHeader/SubHeader';
import { MainBody } from './MainBody';

export const MainPage = () => {
  return (
    <main className="main-page">
      <Header />
      <SubHeader sections={['Recent', 'Received']} />
      <MainBody />
    </main>
  );
};
