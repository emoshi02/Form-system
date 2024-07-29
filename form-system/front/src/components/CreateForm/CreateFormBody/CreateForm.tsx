import { FormHeader } from './FormHeader/FormHeader';
import { FormQuestionBlock } from './FormQuestionBlock/FormQuestionBlock';
import './CreateForm.scss';
import { FormDataType } from '../../MainPage/FormItem/FormItem';
import { useEffect, useState } from 'react';

export const CreateForm = ({ formData }: { formData: FormDataType | null }) => {
  const [formState, setFormState] = useState<FormDataType | null>(formData);

  useEffect(() => {
    if (formData) {
      setFormState(formData);
    }
  }, [formData]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleChanges = (newState: FormDataType) => {
    if (formState) {
      setFormState((prevState) => ({
        ...prevState,
        ...newState,
      }));
    }
  };

  if (!formData) {
    return (
      <form onSubmit={handleSubmit}>
        <img src="/assets/images/form-bg.jpg" className="form-image" />
        <FormHeader
          id={0}
          title={undefined}
          desc={undefined}
          user={undefined}
          onChange={handleChanges}
        />
        <FormQuestionBlock
          id={0}
          title={'Untitled Form'}
          onChange={handleChanges}
        />
      </form>
    );
  }

  const {
    id,
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
    <form onSubmit={handleSubmit}>
      <img src="/assets/images/form-bg.jpg" className="form-image" />
      <FormHeader
        id={id}
        title={title}
        desc={desc}
        user={user}
        onChange={handleChanges}
      />
      <FormQuestionBlock
        id={id}
        questions={questions}
        optionType={optionType}
        image={image}
        isRequired={isRequired}
        options={options}
        onChange={handleChanges}
        title={title}
      />
    </form>
  );
};
