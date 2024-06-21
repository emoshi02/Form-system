import { Header } from '../Header/Header';
import { SubHeader } from '../SubHeader/SubHeader';
import { CreateFormBody } from './CreateFormBody/CreateFormBody';

export const CreateFormPage = () => {
  return (
    <>
      <Header />
      <SubHeader sections={['Questions', 'Answers']} />
      <CreateFormBody />
    </>
  );
};
