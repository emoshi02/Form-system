import { FormHeader } from './FormHeader/FormHeader';
import { FormQuestionBlock } from './FormQuestionBlock/FormQuestionBlock';
import './CreateForm.scss';
import { FormDataType } from '../../MainPage/FormItem/FormItem';

type CreateFormProps = {
  formData: FormDataType | null;
};

export const CreateForm = ({ formData }: CreateFormProps) => {
  if (!formData) {
    return (
      <>
        <div className="form-image"></div>
        <FormHeader title={undefined} desc={undefined} user={undefined} />
        <FormQuestionBlock />
      </>
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
    <>
      <div className="form-image"></div>
      <FormHeader title={title} desc={desc} user={user} />
      <FormQuestionBlock
        questions={questions}
        optionType={optionType}
        image={image}
        isRequired={isRequired}
        options={options}
      />
    </>
  );
};
