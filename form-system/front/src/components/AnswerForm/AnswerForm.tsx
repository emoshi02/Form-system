import { FormDataType } from '../MainPage/FormItem/FormItem';
import { AnswerFormBody } from './AnswerFormBody/AnswerFormBody';
import { AnswerFormHeader } from './AnswerFormHeader/AnswerFormHeader';
import './AnswerForm.scss';
import { AnswerFormFooter } from './AnswerFormFooter/AnswerFormFooter';

type AnswerFormProps = {
  formData: FormDataType | null;
};

export const AnswerForm = ({ formData }: AnswerFormProps) => {
  if (!formData) {
    return (
      <section className="main">
        <img src="/assets/images/form-bg.jpg" className="form-image" />
        <AnswerFormHeader />
        <AnswerFormBody questionsData={[]} />
      </section>
    );
  }

  const {
    title,
    desc,
    user,
    questions,
    optionType,
    image,
    isRequired,
    options,
  } = formData;

  return (
    <section className="main">
      <img src="/assets/images/form-bg.jpg" className="form-image" />
      <AnswerFormHeader title={title} desc={desc} user={user} />
      <AnswerFormBody
        questionsData={
          questions?.map((question, index) => ({
            question,
            optionType: optionType ? optionType[index] : 'radio',
            image: image ? image[index] : null,
            isRequired: isRequired ? isRequired[index] : false,
            options: options ? options[index] : [],
          })) || []
        }
      />
      <AnswerFormFooter />
    </section>
  );
};
