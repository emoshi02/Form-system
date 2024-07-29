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
        <AnswerFormHeader title={undefined} desc={undefined} user={undefined} />
        <AnswerFormBody />
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
        questions={questions}
        optionType={optionType}
        image={image}
        isRequired={isRequired}
        options={options}
      />
      <AnswerFormFooter />
    </section>
  );
};
