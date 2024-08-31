import { FormDataType } from '../MainPage/FormItem/FormItem';
import { AnswerFormBody } from './AnswerFormBody/AnswerFormBody';
import { AnswerFormHeader } from './AnswerFormHeader/AnswerFormHeader';
import classes from './AnswerForm.module.scss';

type AnswerFormProps = {
  formData: FormDataType | null;
};

export const AnswerForm = ({ formData }: AnswerFormProps) => {
  if (!formData) {
    return (
      <section className={classes.main}>
        <img src="/assets/images/form-bg.jpg" className={classes.formImage} />
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
    <section className={classes.main}>
      <img src="/assets/images/form-bg.jpg" className={classes.formImage} />
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
    </section>
  );
};
