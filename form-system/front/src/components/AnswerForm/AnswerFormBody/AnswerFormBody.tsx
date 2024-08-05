import { useState } from 'react';
import { AnswerFormQuestions } from './AnswerFormQuestions/AnswerFormQuestions';

type Question = {
  question: string;
  optionType: string;
  image: string | null;
  isRequired: boolean;
  options: string[];
};

type AnswerProps = {
  questionsData: Question[];
  onSubmit: (event: React.SyntheticEvent) => void;
};

export const AnswerFormBody = ({ questionsData, onSubmit }: AnswerProps) => {
  const [answerFormState, setAnswerFormState] = useState<(string | string[])[]>(
    [''],
  );

  const updateAnswerFormState = (index: number, value: string | string[]) => {
    const newOptions = [...answerFormState];
    newOptions[index] = Array.isArray(value) ? value : [value];
    setAnswerFormState(newOptions);
  };

  return (
    <form onSubmit={onSubmit}>
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
    </form>
  );
};
