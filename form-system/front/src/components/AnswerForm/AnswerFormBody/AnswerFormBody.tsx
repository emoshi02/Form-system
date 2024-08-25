import { useState } from 'react';
import { AnswerFormQuestions } from './AnswerFormQuestions/AnswerFormQuestions';
import { AnswerFormFooter } from '../AnswerFormFooter/AnswerFormFooter';
import classes from './AnswerFormBody.module.scss';

type Question = {
  question: string;
  optionType: string;
  image: string | null;
  isRequired: boolean;
  options: string[];
};

type AnswerProps = {
  questionsData: Question[];
};

export const AnswerFormBody = ({ questionsData }: AnswerProps) => {
  const [answerFormState, setAnswerFormState] = useState<(string | string[])[]>(
    [''],
  );

  const updateAnswerFormState = (index: number, value: string | string[]) => {
    const newOptions = [...answerFormState];
    newOptions[index] = Array.isArray(value) ? value : [value];
    setAnswerFormState(newOptions);
  };

  return (
    <form
      className={classes.form}
      onSubmit={(event: { preventDefault: () => void }) =>
        event.preventDefault()
      }
    >
      {questionsData.map(
        (
          { question, optionType, image, isRequired, options }: Question,
          index: number,
        ) => (
          <AnswerFormQuestions
            title={question}
            optionType={optionType}
            image={image}
            isRequired={isRequired}
            options={options}
            key={index}
            onChange={(value: string | string[]) =>
              updateAnswerFormState(index, value)
            }
          />
        ),
      )}
      <AnswerFormFooter />
    </form>
  );
};
