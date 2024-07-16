import { useEffect, useState } from 'react';
import './CreateFormBody.scss';
import { CreateForm } from './CreateForm';
import { Answers } from '../Answers/Answers';

export const CreateFormBody = ({
  activeSectionIndex,
}: {
  activeSectionIndex: number;
}) => {
  const [isCreateForm, setIsCreateForm] = useState(activeSectionIndex === 0);

  useEffect(() => {
    setIsCreateForm(activeSectionIndex === 0);
  }, [activeSectionIndex]);

  return (
    <section className="main">
      {isCreateForm ? <CreateForm /> : <Answers />}
    </section>
  );
};
