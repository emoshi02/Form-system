import { useState } from 'react';
import { FormDataType } from '../../MainPage/FormItem/FormItem';
import { AnswerFormQuestions } from './AnswerFormQuestions/AnswerFormQuestions';

type AnswerFormBodyProps = Partial<FormDataType> & {
  onSubmit: (event: React.SyntheticEvent) => void;
};

export const AnswerFormBody = ({
  questions = [''],
  optionType = [''],
  image = [null],
  isRequired = [false],
  options = [['']],
  onSubmit,
}: AnswerFormBodyProps) => {
  const [answerFormState, setAnswerFormState] = useState([['']]);

  const updateAnswerFormState = (index: number, value: string | string[]) => {
    const newOptions = [...answerFormState];
    newOptions[index] = value as string[];
    setAnswerFormState(newOptions);
  };

  return (
    <form onSubmit={onSubmit}>
      {questions.map((title: string, index: number) => (
        <AnswerFormQuestions
          title={title}
          optionType={optionType[index]}
          image={image[index]}
          isRequired={isRequired[index]}
          options={options[index]}
          key={index}
          onChange={(value: string | string[]) =>
            updateAnswerFormState(index, value)
          }
        />
      ))}
    </form>
  );
};
