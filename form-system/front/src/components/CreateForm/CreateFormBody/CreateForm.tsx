import { FormHeader } from './FormHeader/FormHeader';
import { FormQuestionBlock } from './FormQuestionBlock/FormQuestionBlock';
import './CreateForm.scss';
import { FormDataType } from '../../MainPage/FormItem/FormItem';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const CreateForm = ({ formData }: { formData: FormDataType | null }) => {
  const [formState, setFormState] = useState<FormDataType | null>(formData);

  useEffect(() => {
    if (formData) {
      setFormState(formData);
    }
  }, [formData]);

  const handleChanges = (newState: FormDataType) => {
    if (formState) {
      setFormState((prevState) => ({
        ...prevState,
        ...newState,
      }));
    }
  };

  if (!formData) {
    const newQuestionId = uuid();
    return (
      <form
        onSubmit={(event: { preventDefault: () => void }) =>
          event.preventDefault()
        }
      >
        <img src="/assets/images/form-bg.jpg" className="form-image" />
        <FormHeader id={newQuestionId} onChange={handleChanges} />
        <FormQuestionBlock
          id={newQuestionId}
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
    <form
      onSubmit={(event: { preventDefault: () => void }) =>
        event.preventDefault()
      }
    >
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
