import { useEffect, useState } from 'react';
import './CreateFormBody.scss';
import { CreateForm } from './CreateForm';
import { Answers } from '../Answers/Answers';
import { FormDataType } from '../../MainPage/FormItem/FormItem';

export const CreateFormBody = ({
  activeSectionIndex,
  formData,
}: {
  activeSectionIndex: number;
  formData: FormDataType | null;
}) => {
  const [isCreateForm, setIsCreateForm] = useState(activeSectionIndex === 0);

  useEffect(() => {
    setIsCreateForm(activeSectionIndex === 0);
  }, [activeSectionIndex]);

  return (
    <section className="main">
      {isCreateForm ? <CreateForm formData={formData} /> : <Answers />}
    </section>
  );
};
