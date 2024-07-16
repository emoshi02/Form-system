import { FormHeader } from './FormHeader/FormHeader';
import { FormQuestionBlock } from './FormQuestionBlock/FormQuestionBlock';
import './CreateForm.scss';

export const CreateForm = () => {
  return (
    <>
      <div className="form-image"></div>
      <FormHeader />
      <FormQuestionBlock />
    </>
  );
};
