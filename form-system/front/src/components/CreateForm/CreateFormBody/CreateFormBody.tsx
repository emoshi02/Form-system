import './CreateFormBody.scss';
import { FormFooter } from './FormFooter/FormFooter';
import { FormHeader } from './FormHeader/FormHeader';
import { FormQuestionBlock } from './FormQuestionBlock/FormQuestionBlock';

export const CreateFormBody = () => {
  return (
    <section className="main">
      <div className="form-image"></div>
      <FormHeader />
      <FormQuestionBlock qst={1} />
      <FormFooter />
    </section>
  );
};
